

// let colorpickers = document.getElementsByClassName("colorpicker");
// let colorsSelected = document.getElementsByClassName("colorSelected");

// let arrayColor = Array.from(colorpickers);
// let arrayColor1 = Array.from(colorsSelected);


// if (arrayColor.length === arrayColor1.length) {
//         arrayColor.map((elementoDentroDelArray, i) => {
//             elementoDentroDelArray.addEventListener("click", () => {
//             elementoDentroDelArray.querySelector("input[type='color']").click();
//     });
//         elementoDentroDelArray.addEventListener("input", (event) => {
//             const colorSelector = event.target.value;
//             arrayColor1[i].style.backgroundColor = colorSelector;

//             localStorage.setItem(`color-${i}`, colorSelector);
//         });
//     });
// } else {
//     console.log("La cantidad de colores seleccionados no coincide.");
// }



// const arrayColor1 = document.querySelectorAll(".colorSelected");

// Array.from(document.getElementsByClassName("colorpicker")).forEach((elementoDentroDelArray, i) => {
//   const { value: colorSelector } = 
//   elementoDentroDelArray.querySelector("input[type='color']");
//   elementoDentroDelArray.addEventListener("click", () => 
//   elementoDentroDelArray.querySelector("input[type='color']").click());
//   elementoDentroDelArray.addEventListener("input", () => {
//     arrayColor1[i].style.backgroundColor = colorSelector;
//     localStorage.setItem(`color-${i}`, colorSelector);
//   });
// });

// if (document.getElementsByClassName("colorpicker").length !== arrayColor1.length) {
//   console.log("La cantidad de colores seleccionados no coincide.");
// }





// const arrayColor1 = document.querySelectorAll(".colorSelected");
// const arrayColorpickers = document.getElementsByClassName("colorpicker");

// if (arrayColorpickers.length !== arrayColor1.length) {
//   console.log("La cantidad de colores seleccionados no coincide.");
// } else {
//   Array.from(arrayColorpickers).forEach((elementoDentroDelArray, i) => {
//     const { value: colorSelector } = elementoDentroDelArray.querySelector("input[type='color']");
//     elementoDentroDelArray.addEventListener("click", () => elementoDentroDelArray.querySelector("input[type='color']").click());
//     elementoDentroDelArray.addEventListener("input", () => {
//       arrayColor1[i].style.backgroundColor = colorSelector;
//       localStorage.setItem(`color-${i}`, colorSelector);
//     });
//   });
// }


// const arrayColor1 = document.querySelectorAll(".colorSelected");
// const arrayColorpickers = document.getElementsByClassName("colorpicker");

// if (arrayColorpickers.length !== arrayColor1.length) {
//   console.log("La cantidad de colores seleccionados no coincide.");
// } else {
//   Array.from(arrayColorpickers).forEach((elementoDentroDelArray, i) => {
//     const { value: colorSelector } = elementoDentroDelArray.querySelector("input[type='color']");
//     elementoDentroDelArray.addEventListener("click", () => elementoDentroDelArray.querySelector("input[type='color']").click());
//     elementoDentroDelArray.addEventListener("input", () => {
//       arrayColor1[i].style.backgroundColor = colorSelector;
//       localStorage.setItem(`color-${i}`, colorSelector);
//     });
//   });
// }


// const storedColors = JSON.parse(localStorage.getItem("color"));


// if (storedColors && storedColors.length === arrayColor1.length) {
//   arrayColor1.forEach((colorElement, i) => {
//     colorElement.style.backgroundColor = storedColors[i];
//   });
// } else {
//   console.log("No se encontraron colores almacenados o la cantidad de colores no coincide.");
// }



