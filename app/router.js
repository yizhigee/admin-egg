'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  // 学生
  router.post('/addStu', controller.student.addStu);
  router.delete('/delStu', controller.student.delStu);
  router.get('/editStu', controller.student.editStu);
  router.get('/getStu', controller.student.getStu);
  // 分类
  router.get('/blog/category',controller.blog.category.getCategory)
};
