import express from "express";
import BaseController from "../utils/BaseController";
import { postsService } from "../services/PostsService";
export class PostsController extends BaseController {
  constructor() {
    super("api/posts");
    this.router
      .get("", this.getAll)
      .get("/:id", this.getById)
      .post("", this.create)
      .put("/:id", this.edit)
      .delete("/:id", this.delete);
  }

  //get post by
  //get post by tags
  async getAll(req, res, next) {
    try {
      let data = await postsService.find();
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async getById(req, res, next) {
    try {
      let id = req.params.id;
      let data = await postsService.findById(id);
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async create(req, res, next) {
    try {
      let data = await postsService.create(req.body);
      res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async edit(req, res, next) {
    try {
      let id = req.params.id;
      let data = await postsService.edit(id, req.body);
      res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async delete(req, res, next) {
    try {
      let id = req.params.id;
      let data = await postsService.delete(id);
      res.send(data);
    } catch (error) {
      next(error);
    }
  }
}
