let getData = new Promise((resolve, reject) => {
  let data = produtcs.length;

  if (data > 0) {
    resolve(produtcs);
  } else if (data === 0) {
    reject({
      error: "error-3058",
      message: "No tenemos información para mostrar",
    });
  } else {
    reject({
      error: "error-3059",
      message: "Ha ocurrido un error inesperado",
    });
  }
});

getData.then(
  function (itmes) {
    let ul = document.createElement("ul");
    itmes.map((item) => {
      let li = document.createElement("li");
      li.innerHTML = `
      <span class="item">
      ${item.id}) ${item.product} | ${item.category} | ${item.brand} | ${item.model}
      </span>`
      ul.appendChild(li);
    });
    document.getElementById("app").appendChild(ul);
  },
  function (error) {
    console.log(error);
  }
);
//reolve.them();
