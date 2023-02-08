let dateArrival = document.getElementById("date");
let dateDeparture = document.getElementById("date2");
let numberNights = document.getElementById("numberNightsTotal");

//_________
let price = "0";
const roomOne = document.getElementById("type_1");
const roomTwo = document.getElementById("type_2");
const roomThree = document.getElementById("type_3");
const roomFour = document.getElementById("type_4");
let totalPrice = document.getElementById("price");
const changes = document.querySelectorAll(".changes");
const changesC = document.getElementById("chambreCover");
const btnImpo2 = document.getElementById("btnImp2");

//Prix temps normal

const priceA = 68;
const priceB = 77;
const priceC = 85;
const priceD = 92;

// Prix et dates d'augmentation

const priceAPlus = 79;
const priceBPlus = 88;
const priceCPlus = 95;
const priceDPlus = 110;
const datePOne = Date.parse("2022-12-24");
const datePTwo = Date.parse("2022-12-26");

//Dates de fermeture

const dateClosedOne = Date.parse("2023-02-26");
const dateClosedTwo = Date.parse("2023-03-05");

//Dates et Formats de dates où Hotel complet

const completeA = Date.parse("2023-05-27");
// const completeB = Date.parse("2023-06-10");
// const completeC = Date.parse("2023-06-17");

const completeAA = new Date("2023-05-27");
// const completeBB = new Date("2023-06-10");
// const completeCC = new Date("2023-06-17");

//Dates et Formats de dates où certaines chambres ne sont plus disponnibles

// const onlyDOne = Date.parse("2023-08-12");
// const onlyDTwo = Date.parse("2023-08-20");

// const onlyDoneA = new Date("2023-08-12");
// const onlyDoneB = new Date("2023-08-20");

//________________

let nightsPHP = document.getElementById("nightsHidden");
let pricePHP = document.getElementById("priceHidden");

//_________
let today = new Date().toISOString().split("T")[0];

dateArrival.setAttribute("min", today);
dateArrival.setAttribute("value", today);
dateDeparture.setAttribute("min", dateArrival.value);
dateDeparture.setAttribute("value", dateArrival.value);

let dateOne = new Date(document.getElementById("date").value)
  .toISOString()
  .split("T")[0];
let dateTwo = new Date(document.getElementById("date2").value)
  .toISOString()
  .split("T")[0];
let diffNights =
  (Date.parse(dateTwo) - Date.parse(dateOne)) / (1000 * 3600 * 24);

//____________ Périodes plus chères

let diffNightsPlus = (Date.parse(dateTwo) - datePTwo) / (1000 * 3600 * 24);
let diffNightsMoins = (datePOne - Date.parse(dateOne)) / (1000 * 3600 * 24);
let diffNightsInter = (datePTwo - datePOne) / (1000 * 3600 * 24);
let diffNightsMid = (datePTwo - Date.parse(dateOne)) / (1000 * 3600 * 24);
let diffNightsInterMoins =
  (Date.parse(dateTwo) - datePOne) / (1000 * 3600 * 24);

//____________

dateArrival.addEventListener("change", () => {
  dateDeparture.value = dateArrival.value;
  dateDeparture.setAttribute("value", dateArrival.value);
  dateDeparture.setAttribute("min", dateArrival.value);

  dateOne = new Date(document.getElementById("date").value)
    .toISOString()
    .split("T")[0];
  dateTwo = new Date(document.getElementById("date2").value)
    .toISOString()
    .split("T")[0];

  diffNights = (Date.parse(dateTwo) - Date.parse(dateOne)) / (1000 * 3600 * 24);
  diffNightsPlus = (Date.parse(dateTwo) - datePTwo) / (1000 * 3600 * 24);
  diffNightsMoins = (datePOne - Date.parse(dateOne)) / (1000 * 3600 * 24);
  diffNightsInter = (datePTwo - datePOne) / (1000 * 3600 * 24);
  diffNightsMid = (datePTwo - Date.parse(dateOne)) / (1000 * 3600 * 24);
  diffNightsInterMoins = (Date.parse(dateTwo) - datePOne) / (1000 * 3600 * 24);
  if (diffNights > 0) {
    numberNights.textContent = diffNights;
    tarifS();
  } else if (diffNights <= 0) {
    numberNights.textContent = 0;
    price = 0;
    totalPrice.textContent = price;
  }
});

dateDeparture.addEventListener("change", () => {
  dateTwo = new Date(document.getElementById("date2").value)
    .toISOString()
    .split("T")[0];
  diffNights = (Date.parse(dateTwo) - Date.parse(dateOne)) / (1000 * 3600 * 24);
  diffNightsPlus = (Date.parse(dateTwo) - datePTwo) / (1000 * 3600 * 24);
  diffNightsMoins = (datePOne - Date.parse(dateOne)) / (1000 * 3600 * 24);
  diffNightsInter = (datePTwo - datePOne) / (1000 * 3600 * 24);
  diffNightsMid = (datePTwo - Date.parse(dateOne)) / (1000 * 3600 * 24);
  diffNightsInterMoins = (Date.parse(dateTwo) - datePOne) / (1000 * 3600 * 24);
  if (diffNights > 0) {
    numberNights.textContent = diffNights;
    tarifS();
  } else if (diffNights <= 0) {
    numberNights.textContent = 0;
    price = 0;
    totalPrice.textContent = price;
  }
});

changesC.addEventListener("click", () => {
  if (diffNights > 0) {
    numberNights.textContent = diffNights;
    tarifS();
  } else if (diffNights <= 0) {
    numberNights.textContent = 0;
    price = 0;
    totalPrice.textContent = price;
  }
});

//Fonction de recalcul du tarif

const tarifS = () => {
  if (
    Date.parse(dateTwo) > datePTwo &&
    Date.parse(dateOne) <= datePTwo &&
    Date.parse(dateOne) >= datePOne
  ) {
    if (roomOne.checked) {
      price = (diffNightsPlus * priceA + diffNightsMid * priceAPlus).toFixed(2);
    } else if (roomTwo.checked) {
      price = (diffNightsPlus * priceB + diffNightsMid * priceBPlus).toFixed(2);
    } else if (roomThree.checked) {
      price = (diffNightsPlus * priceC + diffNightsMid * priceCPlus).toFixed(2);
    } else if (roomFour.checked) {
      price = (diffNightsPlus * priceD + diffNightsMid * priceDPlus).toFixed(2);
    }

    totalPrice.textContent = price;
  } else if (
    Date.parse(dateTwo) <= datePTwo &&
    Date.parse(dateTwo) >= datePOne &&
    Date.parse(dateOne) < datePOne
  ) {
    if (roomOne.checked) {
      price = (
        diffNightsInterMoins * priceAPlus +
        diffNightsMoins * priceA
      ).toFixed(2);
    } else if (roomTwo.checked) {
      price = (
        diffNightsInterMoins * priceBPlus +
        diffNightsMoins * priceB
      ).toFixed(2);
    } else if (roomThree.checked) {
      price = (
        diffNightsInterMoins * priceCPlus +
        diffNightsMoins * priceC
      ).toFixed(2);
    } else if (roomFour.checked) {
      price = (
        diffNightsInterMoins * priceDPlus +
        diffNightsMoins * priceD
      ).toFixed(2);
    }

    totalPrice.textContent = price;
  } else if (Date.parse(dateTwo) > datePTwo && Date.parse(dateOne) < datePOne) {
    if (roomOne.checked) {
      price = (
        diffNightsPlus * priceA +
        diffNightsInter * priceAPlus +
        diffNightsMoins * priceA
      ).toFixed(2);
    } else if (roomTwo.checked) {
      price = (
        diffNightsPlus * priceB +
        diffNightsInter * priceBPlus +
        diffNightsMoins * priceB
      ).toFixed(2);
    } else if (roomThree.checked) {
      price = (
        diffNightsPlus * priceC +
        diffNightsInter * priceCPlus +
        diffNightsMoins * priceC
      ).toFixed(2);
    } else if (roomFour.checked) {
      price = (
        diffNightsPlus * priceD +
        diffNightsInter * priceDPlus +
        diffNightsMoins * priceD
      ).toFixed(2);
    }
    totalPrice.textContent = price;
  } else if (
    Date.parse(dateTwo) <= datePTwo &&
    Date.parse(dateTwo) >= datePOne &&
    Date.parse(dateOne) <= datePTwo &&
    Date.parse(dateOne) >= datePOne
  ) {
    if (roomOne.checked) {
      price = (diffNights * priceAPlus).toFixed(2);
    } else if (roomTwo.checked) {
      price = (diffNights * priceBPlus).toFixed(2);
    } else if (roomThree.checked) {
      price = (diffNights * priceCPlus).toFixed(2);
    } else if (roomFour.checked) {
      price = (diffNights * priceDPlus).toFixed(2);
    }

    totalPrice.textContent = price;
  } else {
    if (roomOne.checked) {
      price = (diffNights * priceA).toFixed(2);
    } else if (roomTwo.checked) {
      price = (diffNights * priceB).toFixed(2);
    } else if (roomThree.checked) {
      price = (diffNights * priceC).toFixed(2);
    } else if (roomFour.checked) {
      price = (diffNights * priceD).toFixed(2);
    }

    totalPrice.textContent = price;
  }

  phpGet();
};

//Inputs invisibles pour PHP

const phpGet = () => {
  pricePHP.value = totalPrice.textContent;
  nightsPHP.value = numberNights.textContent;
};

//Validation selon nuits complètes ou de fermetures!

btnImpo2.addEventListener("click", (e) => {
  if (
    Date.parse(dateOne) <= dateClosedTwo &&
    Date.parse(dateOne) >= dateClosedOne
  ) {
    e.preventDefault();
    alert(
      "L'établissement est fermé du 25 Février au 5 Mars, veuillez modifier vos dates"
    );
  } else if (
    Date.parse(dateTwo) <= dateClosedTwo &&
    Date.parse(dateTwo) >= dateClosedOne
  ) {
    e.preventDefault();
    alert(
      "L'établissement est fermé du 25 Février au 5 Mars, veuillez modifier vos dates"
    );
  } else if (Date.parse(dateOne) === Date.parse(dateTwo)) {
    e.preventDefault();
    alert("Vos dates sont eronnées, elles doivent être différentes!");
  } else if (
    Date.parse(dateTwo) > dateClosedTwo &&
    Date.parse(dateOne) < dateClosedOne
  ) {
    e.preventDefault();
    alert(
      "L'établissement est fermé du 25 Février au 5 Mars, veuillez modifier vos dates"
    );
  } else if (
    (Date.parse(dateOne) <= completeA && Date.parse(dateOne) >= completeA) ||
    (Date.parse(dateTwo) <= completeA && Date.parse(dateTwo) >= completeA) ||
    (Date.parse(dateTwo) > completeA && Date.parse(dateOne) < completeA)
  ) {
    e.preventDefault();
    alert(
      "L'établissement est complet à cette date : " +
        completeAA.toLocaleDateString("fr")
    );
    // } else if (
    //   (Date.parse(dateOne) <= completeB && Date.parse(dateOne) >= completeB) ||
    //   (Date.parse(dateTwo) <= completeB && Date.parse(dateTwo) >= completeB) ||
    //   (Date.parse(dateTwo) > completeB && Date.parse(dateOne) < completeB)
    // ) {
    //   e.preventDefault();
    //   alert(
    //     "L'établissement est complet à cette date : " +
    //       completeBB.toLocaleDateString("fr")
    //   );
    // } else if (
    //   (Date.parse(dateOne) <= completeC && Date.parse(dateOne) >= completeC) ||
    //   (Date.parse(dateTwo) <= completeC && Date.parse(dateTwo) >= completeC) ||
    //   (Date.parse(dateTwo) > completeC && Date.parse(dateOne) < completeC)
    // ) {
    //   e.preventDefault();
    //   alert(
    //     "L'établissement est complet à cette date : " +
    //       completeCC.toLocaleDateString("fr")
    //   );
    // } else if (
    //   (Date.parse(dateOne) <= onlyDTwo &&
    //     Date.parse(dateOne) >= onlyDOne &&
    //     !roomOne.checked) ||
    //   (Date.parse(dateTwo) <= onlyDTwo &&
    //     Date.parse(dateTwo) >= onlyDOne &&
    //     !roomOne.checked) ||
    //   (Date.parse(dateTwo) > onlyDTwo &&
    //     Date.parse(dateOne) < onlyDOne &&
    //     !roomOne.checked)
    // ) {
    //   e.preventDefault();
    //   alert(
    //     "L'établissement ne possède plus que des chambres standard du " +
    //       onlyDoneA.toLocaleDateString("fr") +
    //       " au " +
    //       onlyDoneB.toLocaleDateString("fr")
    //   );
  }
});
