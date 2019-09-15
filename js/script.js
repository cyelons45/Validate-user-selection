//Get selection
document.querySelector(".bikes").addEventListener("click", function(e) {
  let selected = e.target.closest(".bike__btn");

  if (selected) {
    let selection = selected.parentNode;
    let name = selection.querySelector(".bike__name").innerHTML;
    let val = selection.querySelector(".bike__price-value").innerHTML;
    let image = selection.querySelector(".bike__img")["src"];
    selected_obj = {
      selection: name,
      selection_type: val,
      selection_image: image
    };
    // console.log(selected_obj);
    document.querySelector(
      ".popup__yourselection"
    ).innerHTML = `Thank you for selecting ${selected_obj.selection}!`;
    replaceItem(selected_obj);
  }
});

function replaceItem(selected_obj) {
  const html = `

  <div class="bike">
  <img src="${selected_obj.selection_image}" alt="house 6" class="bike__img" />
  <svg class="bike__like">
    <use xlink:href="img/sprite.svg#icon-heart-full"></use>
  </svg>
  <h5 class="bike__name">${selected_obj.selection}</h5>
  <div class="bike__type">
    <div class="bike__type-name">Type :</div>
    <p class="bike__type-item">Bike</p>
  </div>

  <div class="bike__price">
    <div class="bike__price-name">Price:</div>
    <p class="bike__price-value">${selected_obj.selection_type}</p>
  </div>
</div>

    `;
  document
    .querySelector(".popup__attachment")
    .insertAdjacentHTML("afterbegin", html);
}

document.querySelector(".popup__close").addEventListener("click", function() {
  document.querySelector(".popup__attachment").innerHTML = "";
});

document.querySelector(".nav__icon-link").addEventListener("click", function() {
  // console.log("hey");
  document.getElementById("menu_btn").classList.toggle("ion-navicon-round");
  document.querySelector(".nav").classList.toggle("nav__active");
});
