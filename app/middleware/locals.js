module.exports = (options) => {
  return async function locale(ctx, next) {
    ctx.locals.locale = ctx.query.locale || 'cn';

    // 模板变量
    ctx.locals.layoutOptions = options.layoutOptions;

    await next();
  };
};