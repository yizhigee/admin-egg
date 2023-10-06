"use strict";

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = (app) => {
  const { router, controller } = app;
  router.get("/", controller.home.index);
  // 学生
  router.post("/addStu", controller.student.addStu);
  router.delete("/delStu", controller.student.delStu);
  router.get("/editStu", controller.student.editStu);
  router.get("/getStu", controller.student.getStu);
  // 分类
  router.get("/blog/category", controller.blog.category.getCategory);
  router.post("/blog/addCategory", controller.blog.category.addCategory);

  // 查询当前用户下所有项目
  router.get("/project/list", controller.goView.project.getProject);
  // 根据id查询项目详情
  router.get("/project/detail", controller.goView.project.getProjectDetail);
  // 新增项目
  router.post("/add/project", controller.goView.project.addProject);
};
