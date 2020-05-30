import express from "express";
import BaseController from "../utils/BaseController";
import { inspireService } from "../services/InspiresService";

export class InspiresController extends BaseController {
    constructor() {
        super("api/inspires");
        this.router
            .get("", this.getRandom)
            .post("", this.create)
            .delete("/:id", this.delete);
    }
    async getRandom(req, res, next) {
        try {
            let data = await inspireService.find(req.query);
            let ran = await inspireService.getRan()
            return data[ran]
        } catch (error) {
            next(error);
        }
    }
    async create(req, res, next) {
        try {
            res.send(req.body);
        } catch (error) {
            next(error);
        }
    }
    async delete(req, res, next) {
        let id = res.params.id
        try {
            let data = await inspireService.delete(id)
            res.send(data)
        } catch (error) {
            next(error);
        }
    }
}
