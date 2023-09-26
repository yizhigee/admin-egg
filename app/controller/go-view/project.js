"use strict";

const Controller = require("egg").Controller;

class ProjectController extends Controller {
  // 查询项目列表
  async getProject() {
    const { ctx } = this;
    const res = await ctx.service.goView.project.getProject();
    ctx.body = {
      code: 200,
      data: res,
    };
  }
}

module.exports = ProjectController;
