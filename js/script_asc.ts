//get object out of the local storage
// deserialize it back from String to Object

//let arrayAsc_deserialized = JSON.parse(localStorage.getItem("arrAsc"));
document.getElementById("output_asc").innerHTML = "TEST TS File"
console.log("output");
// console.log(arrayAsc_deserialized); //NULL
// console.table(JSON.parse(window.localStorage.getItem("arrAsc"))); //NULL
// console.log(window.localStorage.getItem("arrAsc")); //NULL
// console.log(localStorage.arrAsc); //Undefined
// document.write(window.localStorage.arrAsc);

//direkt in Konsole gehts natürlich
console.log("finally :-)");
console.table(localStorage.getItem("arrayAsc"));
console.log("weiter :-)");
let travelArray2 = localStorage.getItem("arrayAsc");

console.log(travelArray2[0]);


//document.getElementById("output_asc").innerHTML += localStorage.getItem("arrayAsc");

//output2 = document.getElementById("output_asc");
//output2.innerHTML = "HELLO";

// for (let i = 0; i < travelArray2.length; i++) {

// output2.innerHTML +=  `
// <div class="col-xl-3 col-lg-3 col-md-6 col-xs-12 mt-1 mb-1 ">
// <div class="card bg-secondary" style="width: 16rem;">
// <div class="card-body ">
//     <h5 class="card-title text-center">${travelArray2[i].name}</h5>
//     <p class="card-text text-center">${travelArray2[i].address} <br> ${travelArray2[i].zipcode} ${travelArray2[i].city}
//     <!-- <br>  ${travelArray2[i].date}, ${travelArray2[i].time} -->
//     </p>
//       <img src="${travelArray2[i].image}" class="card-img-top text-center d-none d-sm-block" alt="${travelArray2[i].name}">
//       <p class="card-text"> date: ${travelArray2[i].dateStamp} </p>

//       <ul class="list-group list-group-flush">
//       <li class="list-group-item text-center bg-secondary"> ${this.price}</li>
//     </ul>


//   </div></div></div>
// ` ;
// }

//let travelArrayAsc = localStorage.getItem("arrayAsc");


//document.getElementById("output_asc").innerHTML;
//let output2 = document.getElementById("output_asc");

// output2.innerHTML += "bahhhhhhh";
// document.getElementById("output2").innerHTML = localStorage.getItem("TravelArray");

// //dynamic sorting function 
// function compareValues(key, order = 'asc') {
//     return function innerSort(a, b) {
//       if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
//         // property doesn't exist on either object
//         return 0;
//       }

//       const varA = (typeof a[key] === 'string')
//         ? a[key].toUpperCase() : a[key];
//       const varB = (typeof b[key] === 'string')
//         ? b[key].toUpperCase() : b[key];

//       let comparison = 0;
//       if (varA > varB) {
//         comparison = 1;
//       } else if (varA < varB) {
//         comparison = -1;
//       }
//       return (
//         (order === 'desc') ? (comparison * -1) : comparison
//       );
//     };
//   }


// output2.innerHTML = "HUHU";

// //sorting by dateStamp
// console.log("ordered by datestamp descending");
// console.table(travelArray.sort(compareValues('dateStamp', 'desc')));



//   for (let i = 0; i < travelArray.length; i++) {
//     //START Output Schleife
//     console.log("ganz zum anfang und 6mal");

//     output2.innerHTML += ` 
//   `

//     switch (travelArray[i].constructor.name) {
//       case "Lugar":
//         output2.innerHTML += travelArray[i].display();
//         break;
//       case "Restaurant":
//         output2.innerHTML += travelArray[i].displayRestaurant();

//         //console.log("show2 function");
//         break;
//       case "Events":
//         output2.innerHTML += travelArray[i].displayEvent();
//         //console.log("show3 function");
//         break;
//       default:
//       //  console.log("nix von alledem" + travelArray[i].constructor.name);
//     }

// }



// //sorting by dateStamp
// console.log("ordered by datestamp");
// console.table(travelArray.sort(compareValues('dateStamp')));

// let output2 = document.getElementById("output_asc");

// // document.getElementById("travel1").innerHTML = lugar1.display();
// // document.getElementById("travel4").innerHTML = travel4.display();
// // document.getElementById("travel2").innerHTML = travel2.displayRestaurant();
// // document.getElementById("travel5").innerHTML = travel5.displayRestaurant();
// // document.getElementById("travel3").innerHTML = travel3.displayEvent();
// // document.getElementById("travel6").innerHTML = travel6.displayEvent();

// //output.innerHTML += (travel4.display());


// //console.log( instanceof travel5);
// // console.table(travelArray);
// // console.log("CHECK OB INSTANCE:");
// // console.log(lugar1.constructor.name)
// // console.log(travel2.constructor.name)
// // console.log(lugar1.constructor.name);
// // console.log("CHECK 1");
// //console.log(travelArray[1].constructor);


//   //  console.log(travelArray[i].constructor.name)
//   //console.log(travelArray[i].name + "type:" + travelArray[i].type + "date" + travelArray[i].date);
//   //console.log(travelArray[i]).display();

//   displayEvent() {


//     return `
//         <div class="col-xl-3 col-lg-3 col-md-6 col-xs-12 mt-1 mb-1 ">
//         <div class="card bg-secondary" style="width: 16rem;">
//         <div class="card-body ">
//             <h5 class="card-title text-center">${this.name}</h5>
//             <p class="card-text text-center">${this.address} <br> ${this.zipcode} ${this.city}
//             <br>  ${this.date}, ${this.time}
//             </p>
//               <img src="${this.image}" class="card-img-top text-center d-none d-sm-block" alt="${this.name}">
//               <p class="card-text"> </p>

//               <ul class="list-group list-group-flush">
//               <li class="list-group-item text-center bg-secondary"> ${this.price}</li>
//             </ul>


//           </div></div></div>
//         ` 


