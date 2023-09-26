'use strict';

const Service = require('egg').Service;


class ProjectService extends Service {
	// 查看项目
	async getProject() {
		const app = this.app;
		const res = await app.mysql.select('project');
		console.log('res', res);
		return res;
	}
}

module.exports = ProjectService
