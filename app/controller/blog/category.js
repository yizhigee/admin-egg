'use strict';

const Controller = require('egg').Controller;

class CategoryController extends Controller {
	// 查询博客分类
	async getCategory() {
		const { ctx } = this;
		const res = await ctx.service.blog.category.getCategory();
		ctx.body = {
			code: 200,
			data: res,
		};
	}
	// 添加博客分类
	async addCategory() {
		const { ctx } = this;
		const params = ctx.request.body;
		const res = await ctx.service.blog.category.addCategory(params);
		ctx.body = {
			code: 200,
			data: '添加成功',
		};
	}
}

module.exports = CategoryController
