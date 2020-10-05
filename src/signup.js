import { Router } from 'aurelia-router';
import { Dish } from './dish';

export class SignUp {
  static inject(){
    return [Router];
}
  constructor(Router) {
    this.name = "";
    this.email = "";
    this.password = "";
    this.isOwner = false;
    this.restaurantName = "";
    this.restaurantId = "";
    this.selectedLocation = "";
    this.menuList = [];
    this.newItem = '';
    this.price = '';
    this.router = Router;
    
  }

  addToMenu() {
    this.menuList.push(new Dish(this.newItem, this.price));

  }

  removeItem(item) {
    this.menuList.splice(this.menuList.indexOf(item), 1);

  }

  signup() {
    var user;
    if (this.isOwner == true) {
      user = { name: this.name, password: this.password, restaurantId: this.restaurantId };
      var restaurant = { restaurantName: this.restaurantName, location: this.location, menuList: this.menuList };
      localStorage.setItem(this.email, JSON.stringify(user));
      localStorage.setItem(this.restaurantId, JSON.stringify(restaurant));
      alert("You have succesfully signed up. The Restaurant page was set up. Return to home page.")
      this.router.navigate("#/");

    }
    else {
      user = { name: this.name, password: this.password };
      localStorage.setItem(this.email, JSON.stringify(user));
      alert("You have succesfully signed up. Return to home page to log in.")
      this.router.navigate("#/");
    }
  }
}
