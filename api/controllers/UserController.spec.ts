import * as express from "express";
import { } from "jasmine";
import { UserController } from "./UserController";

describe("UserController", () => {

    const router = express.Router();
    const userController = new UserController(router);

    it("should work", () => {

    });
});
