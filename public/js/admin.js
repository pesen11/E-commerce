const deleteButtons = document.querySelectorAll(".deleteButton");

const deleteProduct = function (e) {
  // console.log(e.target);

  const prodId = e.target.parentNode
    .querySelector("[name=productId]")
    .getAttribute("value");

  const csrf = e.target.parentNode
    .querySelector("[name=_csrf]")
    .getAttribute("value");

  const productElement = e.target.closest("article");

  console.log(prodId, csrf);

  fetch("/admin/product/" + prodId, {
    method: "Delete",
    headers: {
      "csrf-token": csrf,
    },
  })
    .then((result) => {
      return result.json();
    })
    .then((data) => {
      console.log(data);
      productElement.remove();
    })
    .catch((err) => console.log(err));
};

deleteButtons.forEach((deleteButton) => {
  deleteButton.addEventListener("click", deleteProduct);
});
