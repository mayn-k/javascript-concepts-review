// function doctorize(firstName){
//     return `Dr. ${firstName}`;
// }



// const inchToCM = (inches) => inches * 2.54;

// function add(a, b = 3) {
//     const total = a + b;
//     return total;
// }


// const sum = (a,b=3) => a + b;


// (function(){
//     console.log('Running the Anon function');
//     return `You are cool`;
// })();

const button = document.querySelector(".clickMe");
button.addEventListener("click",function (){
    console.log("Clicked!");});

// setTimeout(function (){
//     console.log("Heya!");
// },2000);

setInterval(function (){
    console.log("Heya!");
},1000);