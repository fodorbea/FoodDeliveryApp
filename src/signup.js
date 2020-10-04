import { Router } from 'aurelia-router';
export class SignUp {
  constructor(Router) {
    this.name = "";
    this.email = "";
    this.password = "";
    this.isOwner = "";
    this.router = Router;
    
  }

  signup() {
    var user = { name: this.name, email: this.email, password: this.password, isOwner: this.isOwner };
    var json = JSON.stringify(user);
    // alert(json);
    if (this.isOwner == true) {
      //go to restaurant dashboard
    }
    else {
      alert("You have succesfully signed up. Return to home page to log in.")
     // this.router.navigate("#/home");
    }
  }
}
