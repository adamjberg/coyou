import * as express from 'express';

import { UserController } from './UserController';
import { OrganizationController } from './OrganizationController';

export function init(router: express.Router) {
    return [
        new UserController(router),
        new OrganizationController(router)
    ];
}
