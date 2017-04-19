// // Use AJAX | Promises to load all 3 JSON files
// // Iterate over all JSON files and match the human with their appropriate pet(s)
// // ES6-ify it all!
// $(document).ready(function(){


//   var outputContainer = $("#output");

//   var writeToDOM = function (humanArray) {
//     var domString = "";
//     for (var i = 0; i < humanArray.length; i++) {
//       domString += `<div class="human row">`;
//       domString += `<div class="col-sm-4">`;
//       domString += `<img src="${humanArray[i].image}">`;
//       domString += `<p>${humanArray[i].name}</p>`;
//       domString += `</div>`;
//       domString += `<div class="col-sm-8 overflow-row">`;
//       for (var j = 0; j < humanArray[i].matches.length; j++){
//         domString += `<div class="animal">`;
//         domString += `<img src="${humanArray[i].matches[j].image}">`;
//         domString += `<p>${humanArray[i].matches[j].name}</p>`;
//         domString += `<p>${humanArray[i].matches[j].description}</p>`;
//         domString += `</div>`;
//       }
//       domString += `</div>`;
//       domString += `</div>`;
//     }
//     outputContainer.append(domString);
//   };

//   var loadHumans = function(){
//     return new Promise(function(resolve, reject) {
//       $.ajax("./database/humans.json")
//       .done(function(data1){
//         resolve(data1.humans);
//         }).fail(function(error1){
//           reject(error1);
//         });
//       });
//   };

//    var loadCats = function(){
//     return new Promise(function(resolve, reject) {
//       $.ajax("./database/cats.json")
//       .done(function(data2){
//         resolve(data2.cats);
//         }).fail(function(error2){
//           reject(error2);
//         });
//       });
//   };

//    var loadDinos = function(){
//     return new Promise(function(resolve, reject) {
//       $.ajax("./database/dinos.json")
//       .done(function(data3){
//         resolve(data3.dinos);
//         }).fail(function(error3){
//           reject(error3);
//         });
//       });
//   };

//     var loadDogs = function(){
//     return new Promise(function(resolve, reject) {
//       $.ajax("./database/dogs.json")
//       .done(function(data4){
//         resolve(data4.dinos);
//         }).fail(function(error4){
//           reject(error4);
//         });
//       });
//   };

//   var myHumans = []; //create empty array to store info in
//   var myAnimals = [];

//   var checkForTypeMatch = function(human, pet){ //if the animals type is contained within human's interested in, return true
//     var interestedInArray = human["interested-in"];

//     var isMatchNumber = interestedInArray.indexOf(pet.type); //if returns -1, false
//     if (isMatchNumber === -1){ // if not in array
//       return false;
//     } else {
//       return true;
//     }
//   };

//   var checkForKidFriendly = function(human, pet) {
//     var hasKids = human["has-kids"];
//     var isKidFriendly = pet["kid-friendly"];
//     var isMatched = true;
//     if (hasKids && !isKidFriendly) { //if animal is not kid friendly, return false
//       isMatched = false; //if they have kids and is not kid friendly, return false
//     }
//     return isMatched; //everything else, return true
//   };

//   loadHumans().then(function(humans){
//     humans.forEach(function(human){
//       human.matches = []; //adds new key value pair. matches is an emply array, matches will be pushed in there
//       myHumans.push(human);
//     });

//     Promise.all([loadCats(), loadDinos(), loadDogs()]) //function that returns the promise
//           .then(function(result){
//             result.forEach(function(xhrResult){ //have to go into each array and grab animal out
//               xhrResult.forEach(function(animal){ //each time it goes through each loadCat, loadDinos, loadDogs
//                 myAnimals.push(animal);
//               });
//             });
//             // console.log(myAnimals); //shows one giant array with all the animals
//             for (var i = 0; i < myHumans.length; i++){
//               for (var j = 0; j < myAnimals.length; j++){
//                 if (checkForTypeMatch(myHumans[i], myAnimals[j]) && checkForKidFriendly(myHumans[i], myAnimals[j])) {
//                   myHumans[i].matches.push(myAnimals[j]);
//                 }
//               }
//             }
//             writeToDOM(myHumans);
//           });
//   });







// });


// Use AJAX | Promises to load all 3 JSON files
// Iterate over all JSON files and match the human with their appropriate pet(s)
// ES6-ify it all!
$(document).ready(function(){

  var outputContainer = $("#output");

var writeToDOM = function (humanArray) {
  var domString = "";
  for (var i = 0; i < humanArray.length; i++) {
    domString += `<div class="human row">`;
    domString += `<div class="col-sm-4">`;
    domString += `<img src="${humanArray[i].image}">`;
    domString += `<p>${humanArray[i].name}</p>`;
    domString += `</div>`;
    domString += `<div class="col-sm-8 overflow-row">`;
    for (var j = 0; j < humanArray[i].matches.length; j++){
      domString += `<div class="animal">`;
      domString += `<img src="${humanArray[i].matches[j].image}">`;
      domString += `<p>${humanArray[i].matches[j].name}</p>`;
      domString += `<p>${humanArray[i].matches[j].description}</p>`;
      domString += `</div>`;
    }
    domString += `</div>`;
    domString += `</div>`;
  }
  outputContainer.append(domString);
}

  var loadHumans = function(){
    return new Promise(function(resolve, reject) {
      $.ajax("./database/humans.json")
      .done(function(data1){
        resolve(data1.humans);
        }).fail(function(error1){
          reject(error1);
        });
      });
  };

   var loadCats = function(){
    return new Promise(function(resolve, reject) {
      $.ajax("./database/cats.json")
      .done(function(data2){
        resolve(data2.cats);
        }).fail(function(error2){
          reject(error2);
        });
      });
  };

   var loadDinos = function(){
    return new Promise(function(resolve, reject) {
      $.ajax("./database/dinos.json")
      .done(function(data3){
        resolve(data3.dinos);
        }).fail(function(error3){
          reject(error3);
        });
      });
  };

    var loadDogs = function(){
    return new Promise(function(resolve, reject) {
      $.ajax("./database/dogs.json")
      .done(function(data4){
        resolve(data4.dogs);
        }).fail(function(error4){
          reject(error4);
        });
      });
  };

  var myHumans = []; //create empty array to store info in
  var myAnimals = [];

  var checkForTypeMatch = function(human, pet){ //if the animals type is contained within human's interested in, return true
    var interestedInArray = human["interested-in"];

    var isMatchNumber = interestedInArray.indexOf(pet.type); //if returns -1, false
    if (isMatchNumber === -1){ // if not in array
      return false;
    } else {
      return true;
    }
  };

  var checkForKidFriendly = function(human,pet){
      var hasKids = human["has-kids"];
      var isKidFriendly = pet["kid-friendly"];
      var isMatched = true;
      if(hasKids && !isKidFriendly){
          isMatched = false;
      }
      return isMatched;
  };

  loadHumans().then(function(humans){
    humans.forEach(function(human){
      human.matches = []; //adds new key value pair. matches is an emply array, matches will be pushed in there
      myHumans.push(human);
    });

    Promise.all([loadDogs(), loadCats(), loadDinos()]) //function that returns the promise
          .then(function(result){
            result.forEach(function(xhrResult){ //have to go into each array and grab animal out
              xhrResult.forEach(function(animal){ //each time it goes through each loadCat, loadDinos, loadDogs
                myAnimals.push(animal);
              });
            });
            // console.log(myAnimals); //shows one giant array with all the animals
            for (var i = 0; i < myHumans.length; i++){
              for (var j = 0; j < myAnimals.length; j++){
                if (checkForTypeMatch(myHumans[i], myAnimals[j]) && checkForKidFriendly(myHumans[i], myAnimals[j])) {
                  myHumans[i].matches.push(myAnimals[j]);
                }
              }
            }
            console.log(myHumans);
            writeToDOM(myHumans);
          }).catch(function(errors){
              console.log(errors);
          });
        });
});











