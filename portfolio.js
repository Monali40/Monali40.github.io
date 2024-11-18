//Navbar code


//Services
let servicesBox1 = document.querySelector(".service-box-1");
let servicesBox2 = document.querySelector(".service-box-2");
let servicesBox3 = document.querySelector(".service-box-3");

servicesBox1.addEventListener("mouseover", function() {
    servicesBox1.style.backgroundColor = "palegreen"; // Correct lowercase 'style'
    servicesBox1.style.color = "black"; // Correct lowercase 'style'
});

servicesBox1.addEventListener("mouseout", function() {
    servicesBox1.style.backgroundColor = "black"; // Correct lowercase 'style'
    servicesBox1.style.color = "palegreen"; // Correct lowercase 'style'
});

servicesBox2.addEventListener("mouseover", function() {
    servicesBox2.style.backgroundColor = "palegreen"; // Correct lowercase 'style'
    servicesBox2.style.color = "black"; // Correct lowercase 'style'
});

servicesBox2.addEventListener("mouseout", function() {
    servicesBox2.style.backgroundColor = "black"; // Correct lowercase 'style'
    servicesBox2.style.color = "palegreen"; // Correct lowercase 'style'
});

servicesBox3.addEventListener("mouseover", function() {
    servicesBox3.style.backgroundColor = "palegreen"; // Correct lowercase 'style'
    servicesBox3.style.color = "black"; // Correct lowercase 'style'
});

servicesBox3.addEventListener("mouseout", function() {
    servicesBox3.style.backgroundColor = "black"; // Correct lowercase 'style'
    servicesBox3.style.color = "palegreen"; // Correct lowercase 'style'
});

// let Learn1 = document.querySelector(".learn1");
// let Learn2 = document.querySelector(".learn2");
// let Learn3 = document.querySelector(".learn3");
// Learn1.addEventListener("click",function(){
//     alert("All details coming soon");
// });

// Learn2.addEventListener("click",function(){
//     alert("All details coming soon");
// });

// Learn3.addEventListener("click",function(){
//     alert("All details coming soon");
// })

// other way of doing above 
let Learn = document.querySelectorAll(".learn");

Learn.forEach(function(learn){
learn.addEventListener("click",function(){
    alert("All details coming soon.... ");
});
});

