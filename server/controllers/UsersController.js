import express from "express";
import BaseController from "../utils/BaseController";
import { usersService } from "../services/UsersService";
export class UsersController extends BaseController {
  constructor() {
    super("api/users");
    this.router
      .get("", this.getAll)
      .get("/:id", this.getById)
      .post("", this.create)
      .put("/:id", this.edit)
      .delete("/:id", this.delete);
  }
  async getAll(req, res, next) {
    try {
      let data = await usersService.find();
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async getById(req, res, next) {
    try {
      let id = req.params.id;
      let data = await usersService.findById(id);
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async create(req, res, next) {
    try {
      let data = await usersService.create(req.body);
      res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async edit(req, res, next) {
    try {
      let id = req.params.id;
      let data = await usersService.edit(id, req.body);
      res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async delete(req, res, next) {
    try {
      let id = req.params.id;
      let data = await usersService.delete(id);
      res.send(data);
    } catch (error) {
      next(error);
    }
  }
}
