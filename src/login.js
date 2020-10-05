import { Router } from 'aurelia-router';

export class Login {
  static inject() {
    return [Router];
  }
  constructor(Router) {
    this.email = "";
    this.password = "";
    this.router = Router;
  }

  login() {
    var user = localStorage.getItem(this.email);
    var obj = JSON.parse(user);
    if (obj.password == this.password) {
      sessionStorage.setItem("name", obj.name);
      sessionStorage.setItem("email", this.email);
      this.router.navigate("#/");
    }
  }
}
