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
        return " \n\n        <div class=\"col-xl-3 col-lg-3 col-md-6 col-xs-12 mt-1 mb-1\">\n        <div class=\"card bg-secondary\" style=\"width: 16rem;\">\n        <div class=\"card-body\">\n            <h5 class=\"card-title text-center\">" + this.name + "</h5>\n            <p class=\"card-text text-center\">" + this.address + " <br> " + this.zipcode + " " + this.city + " </p>\n              <img src=\"" + this.image + "\" class=\"card-img-top d-none d-sm-block\" alt=\"" + this.name + "\">\n          </div></div></div>\n        ";
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
        return " \n\n        <div class=\"col-xl-3 col-lg-3 col-md-6 col-xs-12 mt-1 mb-1\">\n        <div class=\"card bg-secondary\" style=\"width: 16rem;\">\n        <div class=\"card-body\">\n            <h5 class=\"card-title text-center\">" + this.name + "</h5>\n            <p class=\"card-text text-center\">" + this.address + " <br> " + this.zipcode + " " + this.city + "\n            <!-- <br>  " + this.type + " <br> " + this.web + " -->\n            </p>\n            \n              <img src=\"" + this.image + "\" class=\"card-img-top d-none d-sm-block\" alt=\"" + this.name + "\">\n              <ul class=\"list-group list-group-flush\">\n            <li class=\"list-group-item text-center bg-secondary\"> " + this.type + "</li>\n            <li class=\"list-group-item text-center bg-secondary\"> " + this.web + "</li>\n          </ul>\n           \n              \n          </div></div></div>\n        ";
    };
    return Restaurant;
}(Lugar));
var Events = /** @class */ (function (_super) {
    __extends(Events, _super);
    function Events(a, b, c, d, e, date, time, price) {
        var _this = _super.call(this, a, b, c, d, e) || this;
        _this.date = date;
        _this.time = time;
        _this.price = price;
        return _this;
    }
    Events.prototype.displayEvent = function () {
        return "\n        <div class=\"col-xl-3 col-lg-3 col-md-6 col-xs-12 mt-1 mb-1 \">\n        <div class=\"card bg-secondary\" style=\"width: 16rem;\">\n        <div class=\"card-body \">\n            <h5 class=\"card-title text-center\">" + this.name + "</h5>\n            <p class=\"card-text text-center\">" + this.address + " <br> " + this.zipcode + " " + this.city + "\n            <br>  " + this.date + ", " + this.time + "\n            </p>\n              <img src=\"" + this.image + "\" class=\"card-img-top text-center d-none d-sm-block\" alt=\"" + this.name + "\">\n              <p class=\"card-text\"> </p>\n\n              <ul class=\"list-group list-group-flush\">\n              <li class=\"list-group-item text-center bg-secondary\"> " + this.price + "</li>\n            </ul>\n\n              \n          </div></div></div>\n        ";
    };
    return Events;
}(Lugar));
//building some instances
var lugar1 = new Lugar("Brandenburger Tor", "Pariser Platz 5", 10117, "Berlin", "img/berlin.jpg");
var travel2 = new Restaurant("Glonojad", "Plac Matejiki 2", 31157, "Krakow", "img/krakau.jpg", "Vegetarian", "www.glonojad.com");
var travel3 = new Events("Krampuslauf", "Kirchenstraße 1", 9560, "St.Nikolai", "img/perchtenlauf.jpg", "5.12.2020", "20:00", "15 €");
var travel4 = new Lugar("Table Mountain", "South Africa", 7103, "Capetown", "img/tablemountain.jpg");
var travel5 = new Restaurant("Bierbaron", "Heinrichstraße 56", 8010, "Graz", "img/bierbaron.jpg", "Beersuporting food", "www.diebausatzlokale.at");
var travel6 = new Events("Joan Jett @ Count Basie Center", "99 Monmouth Street", 07701, "New Jersey", "img/jett.jpg", "10.9.2020", "20:00", "110 $");
var travel7 = new Lugar("Bavaro Beach", "Dominican Republic", 23000, "Punta Cana", "img/domrep.jpg");
var travel8 = new Restaurant("That's Amore", "Messenhausergasse 13", 1030, "Vienna", "img/pizza.jpg", "Italian", "www.thatsamore.at");
var travel9 = new Events("Kontrast @ WUK", "Währinger Straße 59", 1030, "Wien", "img/kontrust.jpg", "2.11.2020", "21:00", "45 €");
var output = document.getElementById("travel");
//building the output 
for (var i = 0; i < travelArray.length; i++) {
    switch (travelArray[i].constructor.name) {
        case "Lugar":
            output.innerHTML += travelArray[i].display();
            break;
        case "Restaurant":
            output.innerHTML += travelArray[i].displayRestaurant();
            break;
        case "Events":
            output.innerHTML += travelArray[i].displayEvent();
            break;
        default:
    }
}
//adding dateStamps to the objects
travelArray[0]["dateStamp"] = new Date("Mar 11 2012 10:00:00 AM");
travelArray[1]["dateStamp"] = new Date("Mar 11 2012 12:00:00 AM");
travelArray[2]["dateStamp"] = new Date("Mar 11 2019 10:00:00 AM");
travelArray[3]["dateStamp"] = new Date("Dec 11 2019 07:00:07 AM");
travelArray[4]["dateStamp"] = new Date("Aug 11 2019 07:00:07 PM");
travelArray[5]["dateStamp"] = new Date("May 11 2019 03:30:21 PM");
travelArray[6]["dateStamp"] = new Date("Sep 14 2017 06:30:11 PM");
travelArray[7]["dateStamp"] = new Date("Jul 14 2015 04:22:11 PM");
travelArray[8]["dateStamp"] = new Date("Jan 14 2013 08:22:11 PM");
//dynamic sorting function 
function compareValues(key, order) {
    if (order === void 0) { order = 'asc'; }
    return function innerSort(a, b) {
        if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
            // property doesn't exist on either object
            return 0;
        }
        var varA = (typeof a[key] === 'string')
            ? a[key].toUpperCase() : a[key];
        var varB = (typeof b[key] === 'string')
            ? b[key].toUpperCase() : b[key];
        var comparison = 0;
        if (varA > varB) {
            comparison = 1;
        }
        else if (varA < varB) {
            comparison = -1;
        }
        return ((order === 'desc') ? (comparison * -1) : comparison);
    };
}
console.log("ordered by datestamp");
var arrayAsc = travelArray.sort(compareValues('dateStamp'));
console.table(arrayAsc);
//sorting by dateStamp
//sorting by dateStamp descending
console.log("ordered by datestamp descending");
var arrayDesc = travelArray.sort(compareValues('dateStamp', 'desc'));
console.table(arrayDesc);
//local storage of the object array
// localStorage.setItem("TravelArray",travelArray);
//to call this item (for new js-file)
// document.getElementById("#").innerHTML = localStorage.getItem("TravelArray");
//serialize it to String for Local Storage
var arrayAsc_serialized = JSON.stringify(arrayAsc);
localStorage.setItem("arrayAsc", arrayAsc_serialized);
var arrayDesc_serialized = JSON.stringify(arrayDesc);
localStorage.setItem("arrayDesc", arrayDesc_serialized);
console.table(localStorage);
