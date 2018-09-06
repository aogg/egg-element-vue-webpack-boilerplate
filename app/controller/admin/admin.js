const Controller = require('egg').Controller;

class AdminController extends Controller {
  async index() {
    // render会报错
    // app/web/framework/element_admin/views/layout/mixin/ResizeHandler.js
    // 就算修好document也会报一个其他的错误：
    // [admin/admin.js] server render bundle error, try client render, the server render error TypeError: Cannot read property 'name' of undefined
    // await this.ctx.render('admin/admin.js');
    await this.ctx.renderClient('admin/admin.js');
  }

}

module.exports = AdminController;