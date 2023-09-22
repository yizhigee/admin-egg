"use strict";

const Service = require("egg").Service;

class CategoryService extends Service {
  // 查询博客类别
  async getCategory() {
    try {
      const app = this.app;
      const res = await app.mysql.select("blog_category");
      return res;
    } catch (error) {
      return null;
    }
  }
  // 添加博客类别
  async addCategory(params) {
    try {
      const app = this.app;
      params = {
        ...params,
        created_by: "小刘",
        create_time: new Date(),
        updated_by: "小刘",
        update_time: new Date(),
      };
      const res = await app.mysql.insert("blog_category", params);
      return res;
    } catch (error) {
      return null;
    }
  }
}

module.exports = CategoryService;
