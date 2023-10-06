"use strict";

const Controller = require("egg").Controller;

class ProjectController extends Controller {
  // 查询当前用户下所有项目
  async getProject() {
    const { ctx } = this;
    const res = await ctx.service.goView.project.getProject();
    ctx.body = {
      code: 200,
      data: res,
    };
  }
  // 根据id查询项目详情
  async getProjectDetail() {
    const { ctx } = this;
    const id = ctx.query.id;
    const res = await ctx.service.goView.project.getProjectDetail(id);
    ctx.body = {
      code: 200,
      data: res,
    };
  }
  // 新增项目
  async addProject() {
    const { ctx } = this;
    const params = ctx.request.body
    const res = await ctx.service.goView.project.addProject(params);
    ctx.body = {
      code: 200,
      data: res,
    };
  }
}

module.exports = ProjectController;
