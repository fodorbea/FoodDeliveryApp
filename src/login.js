import { Router } from 'aurelia-router';

export class Login {
  constructor(Router) {
    this.email = "";
    this.password = "";
    this.router = Router;
  }

  login() {
    var user = {  email: this.email, password: this.password };
    var json = JSON.stringify(user);
    localStorage.setItem("email", this.email);
   // alert(json);
  }
}
