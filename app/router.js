'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  // console.log(controller.test);
  router.resources('user', "/api/user", controller.user);
  router.get('/', controller.home.index);
  router.get('/about', controller.home.index);
  router.get('/list', controller.home.list);
  router.get('/indexs', controller.home.indexs);
  router.get('/main', controller.home.main);
  router.get('/test/:id', controller.test.test);
  // router.get('/list', controller.test.renderlist);
  // router.post('/api/user/add', controller.user.add);
  // router.get('/api/user/getUserlist', controller.user.getUserlist);
  router.get('/server', controller.home.server);
  router.get('/client', controller.home.client);

};
