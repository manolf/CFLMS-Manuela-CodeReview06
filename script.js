var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var travelArray = [];
//typescript-error with "Location" --> "Lugar"
var Lugar = /** @class */ (function () {
    function Lugar(name, address, zipcode, city, image) {
        this.city = city;
        this.zipcode = zipcode;
        this.address = address;
        this.image = image;
        this.name = name;
        travelArray.push(this);
    }
    Lugar.prototype.display = function () {
        return " \n\n        <div class=\"col-xl-3 col-lg-6 col-xs-12 col-md-6 mr-2 ml-2 mt-2 mb-2 bg-secondary\">\n        <div class=\"card\" style=\"width: 18rem;\">\n        <div class=\"card-body\">\n            <h5 class=\"card-title text-center\">" + this.name + "</h5>\n            <p class=\"card-text text-center\">" + this.address + " <br> " + this.zipcode + " " + this.city + " </p>\n              <img src=\"" + this.image + "\" class=\"card-img-top\" class=\"foto\" alt=\"" + this.name + "\">\n          </div></div></div>\n        ";
        // return `${this.name} <br>  ${this.address} <br> ${this.zipcode} ${this.city}  
        // <br> <img class ="foto" src="${this.image}" alt="${this.name}">` ;
    };
    return Lugar;
}());
var Restaurant = /** @class */ (function (_super) {
    __extends(Restaurant, _super);
    function Restaurant(a, b, c, d, e, type, web) {
        var _this = _super.call(this, a, b, c, d, e) || this;
        _this.type = type;
        _this.web = web;
        return _this;
    }
    Restaurant.prototype.displayRestaurant = function () {
        return " \n\n        <div class=\"col-xl-3 col-lg-6 col-xs-12 col-md-6 mr-2 ml-2 mt-2 mb-2 bg-primary\">\n        <div class=\"card\" style=\"width: 18rem;\">\n        <div class=\"card-body\">\n            <h5 class=\"card-title text-center\">" + this.name + "</h5>\n            <p class=\"card-text text-center\">" + this.address + " <br> " + this.zipcode + " " + this.city + "\n            <!-- <br>  " + this.type + " <br> " + this.web + " -->\n            </p>\n            \n              <img src=\"" + this.image + "\" class=\"card-img-top\" class=\"foto\" alt=\"" + this.name + "\">\n              <ul class=\"list-group list-group-flush\">\n            <li class=\"list-group-item text-center\"> " + this.type + "</li>\n            <li class=\"list-group-item text-center\"> " + this.web + "</li>\n          </ul>\n           \n              \n          </div></div></div>\n        ";
        //  return `${super.display()} <br>  ${this.type} <br> ${this.web} ` 
    };
    return Restaurant;
}(Lugar));
var Events = /** @class */ (function (_super) {
    __extends(Events, _super);
    function Events(a, b, c, d, e, date, time) {
        var _this = _super.call(this, a, b, c, d, e) || this;
        _this.date = date;
        _this.time = time;
        return _this;
    }
    Events.prototype.displayEvent = function () {
        return "\n        <div class=\"col-xl-3 col-lg-6 col-xs-12 col-md-6 mr-2 ml-2 mt-2 mb-2 bg-warning \">\n        <div class=\"card\" style=\"width: 18rem;\">\n        <div class=\"card-body\">\n            <h5 class=\"card-title text-center\">" + this.name + "</h5>\n            <p class=\"card-text text-center\">" + this.address + " <br> " + this.zipcode + " " + this.city + "\n            <!--<br>  " + this.date + " <br> " + this.time + " -->\n            </p>\n              <img src=\"" + this.image + "\" class=\"card-img-top text-center\" class=\"foto\" alt=\"" + this.name + "\">\n              <ul class=\"list-group list-group-flush\">\n              <li class=\"list-group-item text-center\"> " + this.date + "</li>\n              <li class=\"list-group-item text-center\"> " + this.time + "</li>\n            </ul>\n\n              \n          </div></div></div>\n        ";
        //  return `${super.display()} <br>  ${this.date} <br> ${this.time} ` 
    };
    return Events;
}(Lugar));
var lugar1 = new Lugar("Brandenburger Tor", "Pariser Platz 5", 10117, "Berlin", "img/berlin.jpg");
var travel2 = new Restaurant("Glonojad", "Plac Matejiki 2", 31157, "Krakow", "img/krakau.jpg", "Vegetarian", "www.glonojad.com");
var travel3 = new Events("Krampuslauf", "Kirchenstraße 1", 9560, "St.Nikolai", "img/perchtenlauf.jpg", "5.12.2020", "20:00");
var travel4 = new Lugar("DomRep", "Bavaro Beach", 23000, "Punta Cana", "img/domrep.jpg");
var travel5 = new Restaurant("That's Amore", "Messenhausergasse 13", 1030, "Vienna", "img/pizza.jpg", "Italian", "www.thatsamore.at");
var travel6 = new Events("Joan Jett @ Count Basie Center", "99 Monmouth Street", 07701, "New Jersey", "img/jett.jpg", "10.9.2020", "20:00");
// document.getElementById("travel1").innerHTML = lugar1.display();
// document.getElementById("travel4").innerHTML = travel4.display();
// document.getElementById("travel2").innerHTML = travel2.displayRestaurant();
// document.getElementById("travel5").innerHTML = travel5.displayRestaurant();
// document.getElementById("travel3").innerHTML = travel3.displayEvent();
// document.getElementById("travel6").innerHTML = travel6.displayEvent();
var output = document.getElementById("travel");
//output.innerHTML += (travel4.display());
//console.log( instanceof travel5);
// console.table(travelArray);
// console.log("CHECK OB INSTANCE:");
// console.log(lugar1.constructor.name)
// console.log(travel2.constructor.name)
// console.log(lugar1.constructor.name);
// console.log("CHECK 1");
//console.log(travelArray[1].constructor);
for (var i = 0; i < travelArray.length; i++) {
    //START Output Schleife
    console.log("ganz zum anfang und 6mal");
    output.innerHTML += "\n";
    switch (travelArray[i].constructor.name) {
        case "Lugar":
            //console.log("START");
            output.innerHTML += travelArray[i].display();
            break;
        case "Restaurant":
            output.innerHTML += travelArray[i].displayRestaurant();
            console.log("show2 function");
            break;
        case "Events":
            output.innerHTML += travelArray[i].displayEvent();
            console.log("show3 function");
            break;
        default:
            console.log("nix von alledem", +travelArray[i].constructor.name);
    }
    //  console.log(travelArray[i].constructor.name)
    //console.log(travelArray[i].name + "type:" + travelArray[i].type + "date" + travelArray[i].date);
    //console.log(travelArray[i]).display();
}
// for (let i=0; i < travelArray.length; i++){
//     console.log("hurra");
// console.log(travelArray[i]);
// }
