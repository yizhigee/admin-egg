'use strict';

const Controller = require('egg').Controller;

class CategoryController extends Controller {
	async getCategory() {
		const { ctx } = this;
		const res = await ctx.service.blog.category.getCategory();
		ctx.body = {
			code: 200,
			data: res,
		};
	}
}

module.exports = CategoryController
