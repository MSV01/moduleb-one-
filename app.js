// var a = {
//   mobiles: {
//     samsung: {
//       a30: {
//         name: "a30",
//         ram: "4gb",
//         rom: "64gb",
//         camera: "50px",
//         price: 2000,
//       },
//       note10: {
//         name: "note10",
//         ram: "6gb",
//         rom: "128gb",
//         camera: "50px",
//         price: 4000,
//       },
//       s10: {
//         name: "s10",
//         ram: "3gb",
//         rom: "128gb",
//         camera: "10px",
//         price: 5000,
//       },
//     },
//     iphone: {
//       iphone4: {
//         name: "iphone4",
//         ram: "4gb",
//         rom: "64gb",
//         camera: "50px",
//         price: 10000,
//       },
//       iphone4s: {
//         name: "iphone4s",
//         ram: "4gb",
//         rom: "64gb",
//         camera: "50px",
//         price: 20000,
//       },
//       iphone5: {
//         name: "iphone5",
//         ram: "4gb",
//         rom: "64gb",
//         camera: "50px",
//         price: 30000,
//       },
//       iphone6: {
//         name: "iphone6",
//         ram: "4gb",
//         rom: "64gb",
//         camera: "50px",
//         price: 30000,
//       },
//     },
//     xiomi: {
//       redminote10: {
//         name: "redminote10",
//         ram: "4gb",
//         rom: "64gb",
//         camera: "50px",
//         price: 10000,
//       },
//       redminote11: {
//         name: "redminote11",
//         ram: "4gb",
//         rom: "64gb",
//         camera: "50px",
//         price: 10000,
//       },
//       redmi10: {
//         name: "redmi10",
//         ram: "4gb",
//         rom: "64gb",
//         camera: "50px",
//         price: 10000,
//       },
//       redmi10pro: {
//         name: "redmi10pro",
//         ram: "4gb",
//         rom: "64gb",
//         camera: "50px",
//         price: 10000,
//       },
//     },
//   },
// };

// var brand = document.getElementById("brand");
// var model = document.getElementById("model");


// var opOne = document.getElementById('opOne');
// opOne.innerHTML = "samsung";

// var opTwo = document.getElementById('opTwo');
// opTwo.innerHTML = "iphone";

// var opTwo = document.getElementById('opThree');
// opTwo.innerHTML = "Xiomi";

// var moOne = document.getElementById('moOne');
// var moTwo = document.getElementById('moTwo');
// var moThree = document.getElementById('moThree');


// if (brand.value == opOne) {
//   moOne.innerHTML = "a30";
//   moTwo.innerHTML = "note10";
//   moThree.innerHTML = "s10";
//   console.log('a')
// }


// function searchVal() {
//   console.log(a['mobiles'][brand.value][model.value]);
// }
var mobiles = {
  samsung: ['a30', 'note10', 's10'],
  iphone: ['iphone', 'iphone4s', 'iphone'],
  xiomi: ['redminote10', 'redminote11', 'redmi10']
}

var main = document.getElementById('main_menu');
var sub = document.getElementById('sub_menu');

main.addEventListener('change', function () {
var selected_option = mobiles[this.value];


while(sub.options.lenght > 0){
sub.options.remove(0);
}

Array.from(selected_option).forEach(function(el){
  let option = new Option(el, el);

  sub.appendChild(option);
})

})




