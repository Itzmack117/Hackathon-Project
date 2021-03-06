import express from "express";
import BaseController from "../utils/BaseController";
import { postsService } from "../services/PostsService";
export class PostsController extends BaseController {
  constructor() {
    super("api/posts");
    this.router
      .get("/newposts", this.getNewPosts)
      .get("/popularposts", this.getPopularPosts)
      .get("", this.getAll)
      .get("/:id", this.getById)
      .post("", this.create)
      .put("/post/:id/comment", this.editComments)
      .put("/:id", this.edit)
      .delete("/:id", this.delete);
  }

  async getAll(req, res, next) {
    try {
      let data = await postsService.find(req.query);
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

  async getNewPosts(req, res, next) {
    try {
      let newPosts = await postsService.getNewposts();
      return res.send(newPosts);
    } catch (error) {
      next(error);
    }
  }

  async getPopularPosts(req, res, next) {
    try {
      let popularPosts = await postsService.getPopularPosts();
      return res.send(popularPosts);
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
  async editComments(req, res, next) {
    console.log(req);
    try {
      let id = req.params.id;
      let data = await postsService.editComments(id, req.body);
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
