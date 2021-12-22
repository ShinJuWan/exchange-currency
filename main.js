let currencyRatio = {
  USD: {
    KRW: 1184.36,
    USD: 1,
    VND: 22972.5,
    unit: "달러",
  },
  KRW: {
    KRW: 1,
    USD: 0.00084,
    VND: 19.4,
    unit: "원",
  },
  VND: {
    KRW: 0.052,
    USD: 0.000044,
    VND: 1,
    unit: "동",
  },
};

let fromCurrency = "USD";
let toCurrency = "USD";

document.querySelectorAll("#from-currency-list a").forEach((menu) =>
  menu.addEventListener("click", function () {
    document.getElementById("from-button").textContent = this.textContent;
    fromCurrency = this.textContent;
  })
);

document.querySelectorAll("#to-currency-list a").forEach((menu) =>
  menu.addEventListener("click", function () {
    document.getElementById("to-button").textContent = this.textContent;
    toCurrency = this.textContent;
  })
);
