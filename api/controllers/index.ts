import * as express from "express";

import { UserController } from "./UserController";

export function init(router: express.Router) {
    return [
        new UserController(router),
    ];
}
