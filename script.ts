let travelArray = [];

//typescript-error with "Location" --> "Lugar"
class Lugar { // ①
  city;
  zipcode;
  address;
  image;
  name;
  cat;

  constructor(name, address, zipcode, city, image) {
    this.city = city;
    this.zipcode = zipcode;
    this.address = address;
    this.image = image;
    this.name = name;

    travelArray.push(this);

  }

  display() {


    return ` 

        <div class="col-xl-3 col-lg-3 col-md-6 col-xs-12 mt-1 mb-1">
        <div class="card bg-secondary" style="width: 16rem;">
        <div class="card-body">
            <h5 class="card-title text-center">${this.name}</h5>
            <p class="card-text text-center">${this.address} <br> ${this.zipcode} ${this.city} </p>
              <img src="${this.image}" class="card-img-top d-none d-sm-block" alt="${this.name}">
          </div></div></div>
        `
  }

}

class Restaurant extends Lugar {
  type;
  web;


  constructor(a, b, c, d, e, type, web) {
    super(a, b, c, d, e);
    this.type = type;
    this.web = web;

  }

  displayRestaurant() {

    return ` 

        <div class="col-xl-3 col-lg-3 col-md-6 col-xs-12 mt-1 mb-1">
        <div class="card bg-secondary" style="width: 16rem;">
        <div class="card-body">
            <h5 class="card-title text-center">${this.name}</h5>
            <p class="card-text text-center">${this.address} <br> ${this.zipcode} ${this.city}
            <!-- <br>  ${this.type} <br> ${this.web} -->
            </p>
            
              <img src="${this.image}" class="card-img-top d-none d-sm-block" alt="${this.name}">
              <ul class="list-group list-group-flush">
            <li class="list-group-item text-center bg-secondary"> ${this.type}</li>
            <li class="list-group-item text-center bg-secondary"> ${this.web}</li>
          </ul>
           
              
          </div></div></div>
        ` 

  }

}

class Events extends Lugar {
  date;
  time;
  price;


  constructor(a, b, c, d, e, date, time, price) {
    super(a, b, c, d, e);
    this.date = date;
    this.time = time;
    this.price = price;

  }

  displayEvent() {


    return `
        <div class="col-xl-3 col-lg-3 col-md-6 col-xs-12 mt-1 mb-1 ">
        <div class="card bg-secondary" style="width: 16rem;">
        <div class="card-body ">
            <h5 class="card-title text-center">${this.name}</h5>
            <p class="card-text text-center">${this.address} <br> ${this.zipcode} ${this.city}
            <br>  ${this.date}, ${this.time}
            </p>
              <img src="${this.image}" class="card-img-top text-center d-none d-sm-block" alt="${this.name}">
              <p class="card-text"> </p>

              <ul class="list-group list-group-flush">
              <li class="list-group-item text-center bg-secondary"> ${this.price}</li>
            </ul>

              
          </div></div></div>
        ` 

  }

}

//building some instances
let lugar1 = new Lugar("Brandenburger Tor", "Pariser Platz 5", 10117, "Berlin", "img/berlin.jpg");
let travel2 = new Restaurant("Glonojad", "Plac Matejiki 2", 31157, "Krakow", "img/krakau.jpg", "Vegetarian", "www.glonojad.com");
let travel3 = new Events("Krampuslauf", "Kirchenstraße 1", 9560, "St.Nikolai", "img/perchtenlauf.jpg", "5.12.2020", "20:00", "15 €");
let travel4 = new Lugar("Table Mountain", "South Africa", 7103, "Capetown", "img/tablemountain.jpg");
let travel5 = new Restaurant("Bierbaron", "Heinrichstraße 56", 8010, "Graz", "img/bierbaron.jpg", "Beersuporting food", "www.diebausatzlokale.at");
let travel6 = new Events("Joan Jett @ Count Basie Center", "99 Monmouth Street", 07701, "New Jersey", "img/jett.jpg", "10.9.2020", "20:00", "110 $");
let travel7 = new Lugar("Bavaro Beach", "Dominican Republic", 23000, "Punta Cana", "img/domrep.jpg");
let travel8 = new Restaurant("That's Amore", "Messenhausergasse 13", 1030, "Vienna", "img/pizza.jpg", "Italian", "www.thatsamore.at");
let travel9 = new Events("Kontrast @ WUK", "Währinger Straße 59", 1030, "Wien", "img/kontrust.jpg", "2.11.2020", "21:00", "45 €");


let output = document.getElementById("travel");


//building the output 
for (let i = 0; i < travelArray.length; i++) {


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
function compareValues(key, order = 'asc') {
  return function innerSort(a, b) {
    if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
      // property doesn't exist on either object
      return 0;
    }

    const varA = (typeof a[key] === 'string')
      ? a[key].toUpperCase() : a[key];
    const varB = (typeof b[key] === 'string')
      ? b[key].toUpperCase() : b[key];

    let comparison = 0;
    if (varA > varB) {
      comparison = 1;
    } else if (varA < varB) {
      comparison = -1;
    }
    return (
      (order === 'desc') ? (comparison * -1) : comparison
    );
  };
}

console.log("ordered by datestamp");
let arrayAsc = travelArray.sort(compareValues('dateStamp'));
console.table(arrayAsc);
//sorting by dateStamp


//sorting by dateStamp descending
console.log("ordered by datestamp descending");
let arrayDesc =travelArray.sort(compareValues('dateStamp','desc'));
console.table(arrayDesc);

  //local storage of the object array
  // localStorage.setItem("TravelArray",travelArray);
    //to call this item (for new js-file)
  // document.getElementById("#").innerHTML = localStorage.getItem("TravelArray");

  //serialize it to String for Local Storage
let arrayAsc_serialized = JSON.stringify(arrayAsc);
localStorage.setItem("arrayAsc", arrayAsc_serialized);
  
let arrayDesc_serialized = JSON.stringify(arrayDesc);
localStorage.setItem("arrayDesc", arrayDesc_serialized);

console.table(localStorage);





  