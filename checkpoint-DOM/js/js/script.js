let plus = document.querySelectorAll(".btnplus");
let btnMoins = document.querySelectorAll(".btnminus");
let totale = Number(document.querySelector("#total")).innerHTML;

let btnDelet = document.querySelectorAll(".close");
let btnLike = document.querySelectorAll(".Like");
let subtotal = document.querySelectorAll(".subtotal");
let quantity = document.querySelectorAll(".qty");
let price = document.querySelectorAll(".price");
for (let i = 0; i < plus.length; i++) {
  // this the increment funtion//

  plus[i].addEventListener("click", function () {
    plus[i].nextElementSibling.innerHTML++;
    subtotal[i].innerHTML = quantity[i].innerHTML * price[i].innerHTML;

    document.querySelector("#total").innerHTML =
      Number(document.querySelector("#total").innerHTML) +
      Number(subtotal[i].innerHTML) / quantity[i].innerHTML;
  });

  //this is the decrement function//
  btnMoins[i].addEventListener("click", function () {
    if (btnMoins[i].previousElementSibling.innerHTML > 0) {
      btnMoins[i].previousElementSibling.innerHTML--;
      subtotal[i].innerHTML =
        Number(quantity[i].innerHTML) * Number(price[i].innerHTML);
      document.querySelector("#total").innerHTML =
        Number(document.querySelector("#total").innerHTML) -
        Number(price[i].innerHTML);
    }
  });

  //this is the delete funtion//
  btnDelet[i].addEventListener("click", function () {
    btnDelet[i].parentElement.parentElement.remove();
    document.querySelector("#total").innerHTML =
      Number(document.querySelector("#total").innerHTML) -
      Number(subtotal[i].innerHTML);
  });
  //this is the Like funtion//
  btnLike[i].addEventListener("click", function () {
    if (btnLike[i].style.fill == "red") {
      btnLike[i].style.fill = "black";
    } else {
      btnLike[i].style.fill = "red";
    }
  });
}
