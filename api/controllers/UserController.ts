import * as bcrypt from 'bcrypt';
import * as bluebird from 'bluebird';
import * as express from 'express';
import * as jwt from 'jsonwebtoken';
import * as _ from 'lodash';
import * as models from 'models';
import * as env from '../env';

export class UserController {
    private router: express.Router;

    constructor(router: express.Router) {
        this.router = express.Router();

        this.router.get('/:token', async function (req, res, next) {
            try {
                const userId = (jwt.verify(req.params.token, env.JWT_SECRET) as any).user;
                const user = await models.User.findById(userId);
                res.json(user);
            } catch (err) {
                next(err);
            }
        });

        this.router.post('', async function (req, res, next) {
            try {
                const body: models.IUser = req.body;

                if (!body.email) {
                    throw new Error('Email is required');
                } else if (!body.password) {
                    throw new Error('Password is required');
                }

                const passwordHash = await bluebird.promisify<string, any, string | number>(bcrypt.hash)(body.password, 10);
                const userToCreate = _.extend(body, { password: passwordHash });

                try {
                    const user = await models.User.create(body);
                    handleLoginSuccess(user, res);
                } catch (err) {
                    res.status(400);
                    res.json({
                        message: 'User already exists with this email',
                    });
                }
            } catch (err) {
                next(err);
            }
        });
        this.router.post('/login', async function (req, res, next) {
            try {
                const user = await models.User.findOne({ email: req.body.email }).select('password salt');
                if (!user) {
                    return handleLoginFailure(res);
                }

                const correct = await bluebird.promisify<boolean, string, string>(bcrypt.compare)(req.body.password, user.password);
                if (!correct) {
                    return handleLoginFailure(res);
                }

                handleLoginSuccess(user, res);
            } catch (err) {
                next(err);

            }
        });

        router.use('/users', this.router);
    }
}

function handleLoginSuccess(user: models.IUserDocument, res: express.Response) {
    const token = jwt.sign(
        {
            user: String(user._id),
        },
        process.env.JWT_SECRET,
        {
            expiresIn: '1d',
        },
    );
    res.json({ token });
}

function handleLoginFailure(res: express.Response) {
    res.status(401);
    throw new Error('Incorrect email or password');
}
