// tslint:disable-next-line:no-var-requires
require('dotenv').config();

import * as bluebird from 'bluebird';
import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as express from 'express';
import * as mongoose from 'mongoose';
import * as morgan from 'morgan';
import * as path from 'path';
import * as controllers from './controllers';
import { TokenMiddleware } from './middleware/token-middleware';

(mongoose.Promise as any) = bluebird;
mongoose.connect('mongodb://localhost/coyou', {
    promiseLibrary: bluebird,
    useMongoClient: true,
}, (err) => {
    if (err) {
        console.error(err);
    }
});

const app = express();

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(TokenMiddleware);

app.use(morgan('dev'));

const apiRouter = express.Router();

app.use(express.static(path.join(__dirname, '../../coyou-app/dist')));
app.use('/api', apiRouter);
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../coyou-app/dist/index.html'));
});
controllers.init(apiRouter);

app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
    if (!res.statusCode || res.statusCode === 200) {
        res.status(500);
    }
    res.json({
        message: err.message
    });
});

app.listen(8000);
