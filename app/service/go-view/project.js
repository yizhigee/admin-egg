"use strict";

const Service = require("egg").Service;
const getUUid = require("../../utils/uuid");
class ProjectService extends Service {
  // 查询当前用户下所有项目
  async getProject() {
    const app = this.app;
    const uid = "0312";
    const res = await app.mysql.select("project", { where: { uid } });
    return res;
  }
  // 根据id查询项目详情
  async getProjectDetail(id) {
    const app = this.app;
    const res = await app.mysql.select("project", { where: { id } });
    return res;
  }
  // 新增/修改项目
  async addProject(params) {
    const app = this.app;
    let content = params
    if(!params.id){
       content = {
        ...params,
        id: getUUid,
      };
      const res = await app.mysql.insert("project", content);
    }else {
      const res = await app.mysql.update("project", content);
    }
    return res;
  }
}

module.exports = ProjectService;
