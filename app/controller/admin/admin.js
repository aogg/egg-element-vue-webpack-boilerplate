const Controller = require('egg').Controller;

class AdminController extends Controller {
  async index() {
    await this.ctx.render('admin/admin.js');
  }

}

module.exports = AdminController;