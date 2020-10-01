
export class App {

  configureRouter(config, router) {
    config.title = 'Aurelia';
    config.map([
      { route: '', name: 'home', moduleId: PLATFORM.moduleName('home'), nav: true, title: 'Home' },
      { route: 'signup', name: 'signup', moduleId: PLATFORM.moduleName('signup'), nav: true, title: 'Signup' },
      { route: 'login', name: 'login', moduleId: PLATFORM.moduleName('login'), nav: true, title: 'Login' },
      { route: 'cart', name:'cart', moduleId: PLATFORM.moduleName('cart'), nav: true, title: 'Your cart'}
    ]);
    this.router = router;
  }
  

}
