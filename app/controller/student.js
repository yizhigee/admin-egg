'use strict';

const Controller = require('egg').Controller;

class StudentController extends Controller {
	async addStu() {
		const { ctx,context } = this;
		const param = ctx.request.body;
		const res = await ctx.service.student.addStu(param);
		ctx.body = {
			code: 200,
			data: '添加成功',
		};
	}
	async delStu() {
		const { ctx } = this;
		const param = ctx.request.body;
		console.log('params',param);
		// const res = await ctx.service.student.delStu(param);
		ctx.body = {
			code: 200,
			data: '删除成功',
		};
	}
	async editStu() {
		const { ctx } = this;
		const param = ctx.request.body;
		const res = await ctx.service.student.editStu(param);
		ctx.body = '编辑学生';
	}
	async getStu() {
		const { ctx } = this;
		const res = await ctx.service.student.getStu();
		ctx.body = {
			code: 200,
			data: res,
		};
	}
}

module.exports = StudentController
