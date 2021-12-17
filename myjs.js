let newArr = [
  {
    name: "Stir Fried Rice Noodles",
    hotel: "From Thai Pavilion",
    pic: "./imgs/rc.svg",
    rupee: "&#8377 995",
    shape: "./imgs/Shape.svg",
    button: "ADD",
  },
  {
    name: "Stir Fried Rice Noodles",
    hotel: "From Thai Pavilion",
    pic: "./imgs/rc.svg",
    rupee: "&#8377 995",
    shape: "./imgs/Shape.svg",
    button: "ADD",
  },
  {
    name: "Stir Fried Rice Noodles",
    hotel: "From Thai Pavilion",
    pic: "./imgs/rc.svg",
    rupee: "&#8377 995",
    shape: "./imgs/Shape.svg",
    button: "ADD",
  },
  {
    name: "Stir Fried Rice Noodles",
    hotel: "From Thai Pavilion",
    pic: "./imgs/rc.svg",
    rupee: "&#8377 995",
    shape: "./imgs/Shape.svg",
    button: "ADD",
  },
  {
    name: "Stir Fried Rice Noodles",
    hotel: "From Thai Pavilion",
    pic: "./imgs/rc.svg",
    rupee: "&#8377 995",
    shape: "./imgs/Shape.svg",
    button: "ADD",
  },
  {
    name: "Stir Fried Rice Noodles",
    hotel: "From Thai Pavilion",
    pic: "./imgs/rc.svg",
    rupee: "&#8377 995",
    shape: "./imgs/Shape.svg",
    button: "ADD",
  },
  {
    name: "Stir Fried Rice Noodles",
    hotel: "From Thai Pavilion",
    pic: "./imgs/rc.svg",
    rupee: "&#8377 995",
    shape: "./imgs/Shape.svg",
    button: "ADD",
  },
  {
    name: "Stir Fried Rice Noodles",
    hotel: "From Thai Pavilion",
    pic: "./imgs/rc.svg",
    rupee: "&#8377 995",
    shape: "./imgs/Shape.svg",
    button: "ADD",
  },
  {
    name: "Stir Fried Rice Noodles",
    hotel: "From Thai Pavilion",
    pic: "./imgs/rc.svg",
    rupee: "&#8377 995",
    shape: "./imgs/Shape.svg",
    button: "ADD",
  },
  {
    name: "Stir Fried Rice Noodles",
    hotel: "From Thai Pavilion",
    pic: "./imgs/rc.svg",
    rupee: "&#8377 995",
    shape: "./imgs/Shape.svg",
    button: "ADD",
  },
  {
    name: "Stir Fried Rice Noodles",
    hotel: "From Thai Pavilion",
    pic: "./imgs/rc.svg",
    rupee: "&#8377 995",
    shape: "./imgs/Shape.svg",
    button: "ADD",
  },
  {
    name: "Stir Fried Rice Noodles",
    hotel: "From Thai Pavilion",
    pic: "./imgs/rc.svg",
    rupee: "&#8377 995",
    shape: "./imgs/Shape.svg",
    button: "ADD",
  }
];
newArr.forEach((dishes) => {
  newFn(dishes);
});

function newFn(dishes) {
  let item = document.querySelector(".container");

  item.innerHTML += `
<div class="card">
<div class="im">
    <img src=${dishes.pic}>
</div>
<div class="gp">
<h4>${dishes.name}</h4>
<div class="text2"> ${dishes.hotel} </div>
</div>
<div class="card2">
    <p class="rs">${dishes.rupee}</p>
    <div class="shape"> 
         <img src=${dishes.shape}>
    </div>
</div>
<button class="btn">${dishes.button}</button>   
</div>
   `;
}
