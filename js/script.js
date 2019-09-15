//Get selection
document.querySelector(".bikes").addEventListener("click", function(e) {
  let selected = e.target.closest(".bike__btn");

  if (selected) {
    let selection = selected.parentNode;
    let name = selection.querySelector(".bike__name").innerHTML;
    let type = selection.querySelector("p").innerHTML;
    let image = selection.querySelector(".bike__img")["src"];
    selected_obj = {
      selection: name,
      selection_type: type,
      selection_image: image
    };
    // console.log(selected_obj);
    replaceItem(selected_obj);
  }
});

function replaceItem(selected_obj) {
  const html = `
    <div class="popup__selected bike">
    <img src="${selected_obj.selection_image}" alt="house 6" class="bike__img" />
    <svg class="bike__like">
      <use xlink:href="img/sprite.svg#icon-heart-full"></use>
    </svg>
    <h5 class="bike__name">${selected_obj.selection}</h5>
    <div class="bike__type">
      <svg>
        <use xlink:href="img/sprite.svg#icon-expand"></use>
      </svg>
      <p>${selected_obj.selection_type}</p>
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
