import {Dish} from './dish'

export class Menu {
  constructor() {
    this.message = 'Menu';
    //this.dish = new Dish('Rice', '10');
    this.menuList = [];
    this.menuList.push(new Dish('Curry Rice', 10));
    this.menuList.push(new Dish('Shrimp Pasta', 25));
    this.newItem = '';
    this.price = '';
  }

  addToMenu() {
    this.menuList.push(new Dish(this.newItem, this.price));
  }

  removeItem(item) {
    this.menuList.splice(this.menuList.indexOf(item), 1);

  }
}
