'use strict';

const Service = require('egg').Service;

class CategoryService extends Service {
	// 查询博客类别
	async getCategory() {
		try {
			const app = this.app;
			const res = await app.mysql.select('blog_category');
			console.log('res',res);
			return res;
		} catch (error) {
			console.log('error', error);
			return null;
		}
	}
}

module.exports = CategoryService;
