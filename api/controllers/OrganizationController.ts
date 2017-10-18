import * as express from 'express';
import * as models from 'models';

export class OrganizationController {
    private router: express.Router;

    constructor(router: express.Router) {
        this.router = express.Router();

        this.router.get('/:id', async function (req, res, next) {
            try {
                const organization = await models.Organization.findById(req.params.id);
                res.json(organization);
            } catch (err) {
                next(err);
            }
        });

        this.router.get('', async function (req, res, next) {
            try {
                const organizations = await models.Organization.find();
                res.json(organizations);
            } catch (err) {
                next(err);
            }
        });

        this.router.post('', async function (req, res, next) {
            try {
                const organization: models.IOrganizationDocument = req.body;
                let saved = null;
                if (organization._id) {
                    saved = await models.Organization.findByIdAndUpdate({ _id: organization._id }, organization);
                } else {
                    saved = await models.Organization.create(organization);
                }
                res.json(saved);
            } catch (err) {
                next(err);
            }
        });

        this.router.delete('/:id', async function (req, res, next) {
            try {
                await models.Organization.remove({ _id: req.params.id });
                res.json(201);
            } catch (err) {
                next(err);
            }
        });

        router.use('/organizations', this.router);
    }
}

