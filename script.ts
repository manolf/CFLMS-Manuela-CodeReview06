let travelArray = [];

//typescript-error with "Location" --> "Lugar"
class Lugar { // ①
    city; 
    zipcode; 
    address;
    image;
    name;
    cat;

 constructor(name,address,zipcode,city,image) { 
        this.city = city;
        this.zipcode = zipcode;
        this.address = address;
        this.image=image;
        this.name = name;


       travelArray.push(this);
    
    } 

    display() { 


        return ` 

        <div class="col-xl-3 col-lg-6 col-xs-12 col-md-6 mr-2 ml-2 mt-2 mb-2 bg-secondary">
        <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title text-center">${this.name}</h5>
            <p class="card-text text-center">${this.address} <br> ${this.zipcode} ${this.city} </p>
              <img src="${this.image}" class="card-img-top" class="foto" alt="${this.name}">
          </div></div></div>
        `

        // return `${this.name} <br>  ${this.address} <br> ${this.zipcode} ${this.city}  
        // <br> <img class ="foto" src="${this.image}" alt="${this.name}">` ;
    }  
}

class Restaurant extends Lugar{
    type;
    web;


    constructor(a, b, c, d,e,type,web) { 
        super(a,b,c,d,e);
        this.type = type;
        this.web = web;  

    } 

    displayRestaurant(){

        return ` 

        <div class="col-xl-3 col-lg-6 col-xs-12 col-md-6 mr-2 ml-2 mt-2 mb-2 bg-primary">
        <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title text-center">${this.name}</h5>
            <p class="card-text text-center">${this.address} <br> ${this.zipcode} ${this.city}
            <!-- <br>  ${this.type} <br> ${this.web} -->
            </p>
            
              <img src="${this.image}" class="card-img-top" class="foto" alt="${this.name}">
              <ul class="list-group list-group-flush">
            <li class="list-group-item text-center"> ${this.type}</li>
            <li class="list-group-item text-center"> ${this.web}</li>
          </ul>
           
              
          </div></div></div>
        `

      //  return `${super.display()} <br>  ${this.type} <br> ${this.web} ` 

    }

}

class Events extends Lugar{
    date;
    time;


    constructor(a, b, c, d,e,date,time) { 
        super(a,b,c,d,e);
        this.date = date;
        this.time = time;  

    } 

    displayEvent(){
        
        
        return `
        <div class="col-xl-3 col-lg-6 col-xs-12 col-md-6 mr-2 ml-2 mt-2 mb-2 bg-warning ">
        <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title text-center">${this.name}</h5>
            <p class="card-text text-center">${this.address} <br> ${this.zipcode} ${this.city}
            <!--<br>  ${this.date} <br> ${this.time} -->
            </p>
              <img src="${this.image}" class="card-img-top text-center" class="foto" alt="${this.name}">
              <ul class="list-group list-group-flush">
              <li class="list-group-item text-center"> ${this.date}</li>
              <li class="list-group-item text-center"> ${this.time}</li>
            </ul>

              
          </div></div></div>
        `

      //  return `${super.display()} <br>  ${this.date} <br> ${this.time} ` 

    }

}




let lugar1 = new Lugar("Brandenburger Tor","Pariser Platz 5",10117,"Berlin", "img/berlin.jpg" );
let travel2 = new Restaurant("Glonojad","Plac Matejiki 2",31157,"Krakow", "img/krakau.jpg", "Vegetarian","www.glonojad.com");
let travel3 = new Events("Krampuslauf","Kirchenstraße 1",9560,"St.Nikolai", "img/perchtenlauf.jpg", "5.12.2020","20:00");
let travel4 = new Lugar("DomRep","Bavaro Beach",23000,"Punta Cana", "img/domrep.jpg" );
let travel5 = new Restaurant("That's Amore","Messenhausergasse 13",1030,"Vienna", "img/pizza.jpg", "Italian","www.thatsamore.at");
let travel6 = new Events("Joan Jett @ Count Basie Center", "99 Monmouth Street",07701,"New Jersey", "img/jett.jpg", "10.9.2020","20:00");


// document.getElementById("travel1").innerHTML = lugar1.display();
// document.getElementById("travel4").innerHTML = travel4.display();
// document.getElementById("travel2").innerHTML = travel2.displayRestaurant();
// document.getElementById("travel5").innerHTML = travel5.displayRestaurant();
// document.getElementById("travel3").innerHTML = travel3.displayEvent();
// document.getElementById("travel6").innerHTML = travel6.displayEvent();

let output = document.getElementById("travel");
//output.innerHTML += (travel4.display());


//console.log( instanceof travel5);
// console.table(travelArray);
// console.log("CHECK OB INSTANCE:");
// console.log(lugar1.constructor.name)
// console.log(travel2.constructor.name)
// console.log(lugar1.constructor.name);
// console.log("CHECK 1");
//console.log(travelArray[1].constructor);




for( let i=0; i<travelArray.length; i++){
//START Output Schleife
console.log("ganz zum anfang und 6mal");

output.innerHTML +=  `
`

    switch (travelArray[i].constructor.name){
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
            console.log("nix von alledem": + travelArray[i].constructor.name);
    }


  //  console.log(travelArray[i].constructor.name)
//console.log(travelArray[i].name + "type:" + travelArray[i].type + "date" + travelArray[i].date);
//console.log(travelArray[i]).display();



 
}



// for (let i=0; i < travelArray.length; i++){
//     console.log("hurra");
// console.log(travelArray[i]);
// }