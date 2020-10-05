
export class Home {
  constructor() {

  }

  search() {
    Object.keys(localStorage).forEach(function(key){
      var rest = localStorage.getItem(key);
      //console.log(rest);
    });
  }
 
}
