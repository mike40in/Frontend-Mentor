// // Hamburger menu
// const hamburger = document.querySelector(".hamburger");
// const header = document.querySelector(".header");

// hamburger.addEventListener("click", () => {

//     hamburger.classList.toggle("hamburger--active");
//     header.classList.toggle("header--opened");

// } );

// // Carousel

// // FAQ Accordion
// const questions = Array.from(document.querySelectorAll(".questions__item"));

// questions.forEach( node => {

//     const label =  node.querySelector(".questions__label");
//     const maxHeight = getComputedStyle(node).height;
//     const transition = getComputedStyle(node).transition;

//     node.style.maxHeight = getComputedStyle(label).height;

//     label.addEventListener("click", () => {

//         node.classList.toggle("questions__item--active");

//         if(node.classList.contains("questions__item--active")) {
//             node.style.maxHeight = maxHeight;
//         } else {
//             node.style.maxHeight = getComputedStyle(label).height;
//         }

//     });

// } );


// Hamburger menu
const hamburgerIcon = document.querySelector(".hamburger");
const navigation = document.querySelector(".navigation");

hamburgerIcon.addEventListener("click", () => {
    hamburgerIcon.classList.toggle("hamburger--active");
    navigation.classList.toggle("navigation--opened");
});