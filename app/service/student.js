'use strict';

const Service = require('egg').Service;

class StudentService extends Service {
	// 添加
	async addStu(param) {
    try {
    const app = this.app;
    const res = await app.mysql.insert('student', param)
    return res
    } catch (error) {
      console.log('error', error);
			return null;
    }
    }
	async delStu(id) {
    try {
       const app = this.app;
       console.log('id',id);
       const param = {
        where: {
          id:id
        }
       }
       console.log('param',param);
    const res = await app.mysql.delete('student', param)
    } catch (error) {
      console.log('error', error);
			return null;
    }
  }
	async editStu(param) {
    try {
      const app = this.app;
      console.log('params',param);
     
      const res = await app.mysql.update('student', stuData,option)
    } catch (error) {
      console.log('error', error);
			return null;
    }
  }
	// 查询
	async getStu() {
		try {
			const app = this.app;
			const res = await app.mysql.select('student');
			return res;
		} catch (error) {
			console.log('error', error);
			return null;
		}
	}
}

module.exports = StudentService;
