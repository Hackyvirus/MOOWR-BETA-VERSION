let first = false;
let second = false;
let selectElements = [
  "percentage-select1",
  "percentage-select2",
  "percentage-select3",
  "percentage-select4",
  "percentage-select5",
  "percentage-select6",
  "percentage-select7",
  "percentage-select8",
  "percentage-select9",
  "percentage-select10",
  "percentage-select11",
];
let userInputes = [
  "userInputrate1",
  "userInputrate2",
  "userInputrate3",
  "userInputrate4",
  "userInputrate5",
  "userInputrate6",
  "userInputrate7",
  "userInputrate8",
  "userInputrate9",
  "userInputrate10",
];

selectElements = selectElements.map((id) => document.getElementById(id));

const otherInput = document.getElementById("other-percentage");
// userInputes.forEach((user, index) => {
//   document.getElementById(user).addEventListener("change", (e) => {
//     document.getElementById(user).value;
//   });
// });

selectElements.forEach((e, index) => {
  e.addEventListener("change", () => {
    console.log("index", index);
    console.log("++", document.querySelector(`#percentage-select${index + 1}`));
    if (e.value == "others") {
      console.log(`userInputrate${index + 1}`);
      document.getElementById(`userInputrate${index + 1}`).style.display =
        "block";
    } else {
      document.getElementById(`userInputrate${index + 1}`).style.display =
        "none";
    }
    if (
      document.querySelector(`#percentage-select${index + 1}`).value ===
      "others"
    ) {
      console.log(`#userInputrate${index + 1}`, "=====");
      document
        .getElementById(`userInputrate${index + 1}`)
        .addEventListener("change", (e) => {
          document.getElementById(`userInputrate${index + 1}`).value;
          console.log(
            "999",
            document.getElementById(`userInputrate${index + 1}`).value
          );
        });
    }
    bcdRateElement =
      document.querySelector(`#percentage-select${index + 1}`).value == "others"
        ? document.querySelector(`#userInputrate${index + 1}`).value
        : document.querySelector(`#percentage-select${index + 1}`).value;
    console.log(bcdRateElement, "bcdRateElement");
    //  userInputes[]
    console.log(index);

    if (e.value === "others") {
      otherInput.style.display = "inline";
    } else {
      otherInput.style.display = "none";
    }
  });
});

function setupDisposalListeners() {
  document.querySelectorAll('select[id$="ms"]').forEach((select, index) => {
    select.addEventListener("change", () => {
      console.log(select.value);
      // calculateRow(index + 1);
      let rowLetter = String.fromCharCode(97 + index); // 'a' for 1st row, 'b' for 2nd, etc.
      let intendedPeriodElement = document.querySelector(`#${rowLetter}ip`);

      if (select.value === "Sale in DTA") {
        intendedPeriodElement.style.display = "block"; // Show the input
      } else {
        intendedPeriodElement.style.display = "none"; // Hide the input
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", setupDisposalListeners);
function resetAllSections() {
  document.getElementById("cap-que").style.display = "none";
  document.getElementById("capital-goods-next").style.display = "none";
  document.getElementById("cap-table").style.display = "none";
  document.getElementById("capital-goods-next2").style.display = "none";
  document.getElementById("raw-table").style.display = "none";
  document.getElementById("raw-materials-next2").style.display = "none";
  document.getElementById("common-que").style.display = "none";
  document.getElementById("raw-que").style.display = "none";
  document.getElementById("raw-materials-next").style.display = "none";
  document.querySelector(".calculate-conatiner").style.display = "none";
  document.getElementById("download-report").style.display = "none";
  document.querySelector(".preview-container").style.display = "none";
}

document.getElementById("left-btn").addEventListener("click", () => {
  document.getElementById("left-btn").style.background = "#2b55d3";
  document.getElementById("cap-que").style.display = "block";
  document.getElementById("capital-goods-next").style.display = "block";
  first = true;
});

document.getElementById("right-btn").addEventListener("click", () => {
  document.getElementById("right-btn").style.background = "#2b55d3";
  document.getElementById("cap-table").style.display = "block";
  document.getElementById("capital-goods-next2").style.display = "block";
  second = true;
});

document.getElementById("capital-goods-next").addEventListener("click", () => {
  document.getElementById("raw-que").style.display = "block";
  document.getElementById("raw-materials-next").style.display = "block";
});

document.getElementById("capital-goods-next2").addEventListener("click", () => {
  document.getElementById("raw-table").style.display = "block";
  document.getElementById("raw-materials-next2").style.display = "block";
});

document.getElementById("raw-materials-next").addEventListener("click", () => {
  document.getElementById("common-que").style.display = "block";
  document.querySelector(".calculate-conatiner").style.display = "flex";
});

document.getElementById("raw-materials-next2").addEventListener("click", () => {
  document.getElementById("common-que").style.display = "block";
  document.querySelector(".calculate-conatiner").style.display = "flex";
});

function displayNone() {
  if (document.getElementById("fourth-left-input").value == "Sale in DTA") {
    document.querySelector(".fourth-left").style.display = "flex";
  } else {
    document.querySelector(".fourth-left").style.display = "none";
  }
}
function firstCal() {
  // console.log("firstCal");
  let grossCIF = document.getElementById("first-left-input").value;
  let grossBCD = document.getElementById("first-right-input").value;
  let grossAIDC = document.getElementById("second-left-input").value;
  let grossADD = document.getElementById("second-right-input").value;
  let grossIGST = document.getElementById("third-left-input").value;
  let grossIntendedPeriod = document.getElementById("third-right-input").value;
  let grossDisposal = document.getElementById("fourth-left-input").value;
  let GrossSWS = parseFloat((grossBCD * 10) / 100);

  let grossCIF2 = document.getElementById("first-left-input2").value;
  let grossBCD2 = document.getElementById("first-right-input2").value;
  let grossAIDC2 = document.getElementById("second-left-input2").value;
  let grossADD2 = document.getElementById("second-right-input2").value;
  let grossIGST2 = document.getElementById("third-left-input2").value;
  let GrossSWS2 = parseFloat((grossBCD2 * 10) / 100);
  let lifeCycle = document.getElementById("first-left-input3").value;
  let ExpectedAnnualGrowth =
    document.getElementById("first-right-input3").value;
  let rateOfInterest = document.getElementById("second-left-input3").value;
  let timeGap = document.getElementById("second-right-input3").value;
  let annualValueofRoDTEP = document.getElementById("third-left-input3").value;
  let GrossAnnualValue = document.getElementById("third-right-input3").value;
  let conversionOfRaw = document.getElementById("fourth-right-input3").value;

  function safeParseFloat(value) {
    return isNaN(parseFloat(value)) ? 0 : parseFloat(value);
  }

  let totalDuty =
    safeParseFloat(GrossSWS) +
    safeParseFloat(grossBCD) +
    safeParseFloat(grossADD) +
    safeParseFloat(grossAIDC);
  console.log("totalDuty", totalDuty.toFixed());

  let totalNVP;
  if (grossDisposal === "Sale in DTA") {
    totalNVP =
      (totalDuty /
        Math.pow(
          1 + safeParseFloat(rateOfInterest) / 100,
          safeParseFloat(grossIntendedPeriod)
        )) *
      -1;
    console.log("totalNVP", totalNVP);
    // second value
    console.log("totalNVP", totalNVP.toFixed());
  }

  let totalSavings =
    safeParseFloat(grossIGST) *
    (safeParseFloat(rateOfInterest) / 100) *
    (safeParseFloat(timeGap) / 365);
  // third value
  console.log("savings", totalSavings.toFixed());

  let RawTotalDuty =
    safeParseFloat(grossBCD2) +
    safeParseFloat(GrossSWS2) +
    safeParseFloat(grossAIDC2) +
    safeParseFloat(grossADD2);

  console.log("RawTotalDuty", RawTotalDuty);
  let RawTotalBenifit =
    RawTotalDuty *
    (safeParseFloat(rateOfInterest) / 100) *
    (safeParseFloat(conversionOfRaw) / 365);
  // console.log("RawTotalBenifit", RawTotalBenifit);

  let D = 0;
  conversionOfRaw = 60;
  let totalBenifit = 0;
  let lastNPV = 0;
  let npv;

  for (let i = 0; i < parseFloat(lifeCycle); i++) {
    // console.log(rateOfInterest, "RATE_OF_INTEREST");
    // console.log("conversionOfRaw", conversionOfRaw);
    // console.log("grossIntendedPeriod", grossIntendedPeriod);
    totalBenifit =
      RawTotalDuty *
      (parseFloat(conversionOfRaw) / 365) *
      (parseFloat(rateOfInterest) / 100);
    if (D == 0) {
      D = 1.09;
    } else {
      D = D * 1.09;
    }
    // console.log("totalBenifit", totalBenifit, "D", D);
    npv = totalBenifit / D;
    lastNPV += npv;
    // console.log("npv", npv);
    // console.log("D", D);
    RawTotalDuty = RawTotalDuty * 1.05;
    // console.log("RawTotalDuty", RawTotalDuty);
    // console.log("totalBenifit", totalBenifit);
    // console.log("lastNPV", lastNPV);
  }
  //fourth value
  // console.log("totalBenifit", lastNPV.toFixed());

  //   let IGSTBanifit =
  //   grossIGST2 *
  //   (safeParseFloat(rateOfInterest) / 100) *
  //   (safeParseFloat(timeGap) / 365);
  // console.log("IGSTBanifit", IGSTBanifit);
  // console.log("grossIGST2", grossIGST2);

  let Digst = 0;
  conversionOfRaw = 60;
  let totalBenifitigst = 0;
  let lastNPVigst = 0;
  let npvigst;

  for (let i = 0; i < parseFloat(lifeCycle); i++) {
    // console.log(rateOfInterest, "RATE_OF_INTEREST");
    // console.log("conversionOfRaw", conversionOfRaw);
    // console.log("grossIntendedPeriod", grossIntendedPeriod);
    totalBenifitigst =
      grossIGST2 *
      (parseFloat(timeGap) / 365) *
      (parseFloat(rateOfInterest) / 100);
    if (Digst == 0) {
      Digst = 1.09;
    } else {
      Digst = Digst * 1.09;
    }
    // console.log("totalBenifitigst", totalBenifitigst, "D", Digst);
    npvigst = totalBenifitigst / Digst;
    lastNPVigst += npvigst;
    console.log("npv", npvigst);
    console.log("D", Digst);
    grossIGST2 = grossIGST2 * 1.05;
    // console.log("RawTotalDuty", grossIGST2);
    // console.log("totalBenifitigst", totalBenifitigst);
    // console.log("lastNPV", lastNPVigst);
  }
  //fifth value
  console.log("RawTotalBenifitIGST", lastNPVigst.toFixed());

  // let IGSTBanifit =
  // grossIGST2 *
  // (safeParseFloat(rateOfInterest) / 100) *
  // (safeParseFloat(timeGap) / 365);
  // console.log("IGSTBanifit", IGSTBanifit);
  // console.log("grossIGST2", grossIGST2);

  let Drodtep = 0;
  conversionOfRaw = 60;
  let totalBenifitrodtep = 0;
  let lastNPVrodtep = 0;
  let npvrodtep;

  for (let i = 0; i < parseFloat(lifeCycle); i++) {
    // console.log(rateOfInterest, "RATE_OF_INTEREST");
    // console.log("conversionOfRaw", conversionOfRaw);
    // console.log("annualValueofRoDTEP", annualValueofRoDTEP);
    // console.log("grossIntendedPeriod", lifeCycle);

    if (Drodtep == 0) {
      Drodtep = 1.09;
    } else {
      Drodtep = Drodtep * 1.09;
    }
    totalBenifitrodtep = annualValueofRoDTEP / Drodtep;
    // console.log("totalBenifitrodtep", totalBenifitrodtep, "D", Drodtep);
    // npvrodtep = totalBenifitrodtep / Drodtep;
    lastNPVrodtep += totalBenifitrodtep;
    // console.log("npvrodtep", npvrodtep);
    // console.log("Drodtep", Drodtep);
    annualValueofRoDTEP = annualValueofRoDTEP * 1.05;
    // console.log("annualValueofRoDTEP", annualValueofRoDTEP);
    // console.log("totalBenifitrodtep", totalBenifitrodtep);
    console.log("lastNPVrodtep", lastNPVrodtep);
  }
  //sx value
  console.log("lastNPVrodtep", lastNPVrodtep.toFixed());

  let Dair = 0;
  let totalBenifitair = 0;
  let lastNPVrair = 0;
  let npvair;

  for (let i = 0; i < parseFloat(lifeCycle); i++) {
    console.log(rateOfInterest, "RATE_OF_INTEREST");
    console.log("GrossAnnualValue", GrossAnnualValue);
    console.log("grossIntendedPeriod", lifeCycle);

    if (Dair == 0) {
      Dair = 1.09;
    } else {
      Dair = Dair * 1.09;
    }
    totalBenifitair = GrossAnnualValue / Dair;
    console.log("totalBenifitair", totalBenifitair, "D", Dair);
    npvair = totalBenifitair / Dair;
    lastNPVrair += totalBenifitair;
    console.log("npvair", npvair);
    console.log("Dair", Dair);
    GrossAnnualValue = GrossAnnualValue * 1.05;
    console.log("GrossAnnualValue", GrossAnnualValue);
    console.log("totalBenifitair", totalBenifitair);
    console.log("lastNPVrair", lastNPVrair);
  }
  let totalBenifitRoDTEP = lastNPVrodtep + lastNPVrair;
  console.log("lastNPVrodtep", "lastNPVrair", lastNPVrodtep, lastNPVrair);
  console.log("totalBenifitRoDTEP", parseFloat(totalBenifitRoDTEP).toFixed());

  updatePDFAndDownload(
    "Sep 2024",
    totalDuty.toFixed(2),
    totalNVP.toFixed(2),
    totalSavings.toFixed(2),
    lastNPV.toFixed(2),
    lastNPVigst.toFixed(2),
    parseFloat(totalBenifitRoDTEP).toFixed(2),
    (
      totalDuty +
      totalNVP +
      totalSavings +
      lastNPV +
      lastNPVigst +
      parseFloat(totalBenifitRoDTEP)
    ).toFixed(2)
  );
}

function secondCal() {
  console.log("secondCal");

  let rateOfInterest = document.getElementById("second-left-input3").value;
  let assessableValues = [
    document.getElementById("taaa").value,
    document.getElementById("taba").value,
    document.getElementById("taca").value,
    document.getElementById("tada").value,
    document.getElementById("taea").value,
  ];

  let aidcRates = [
    document.getElementById("taidcab").value,
    document.getElementById("taidcbb").value,
    document.getElementById("taidccb").value,
    document.getElementById("taidcdb").value,
    document.getElementById("taidceb").value,
  ];

  let addRates = [
    document.getElementById("tddac").value,
    document.getElementById("tddbc").value,
    document.getElementById("tddcc").value,
    document.getElementById("tdddc").value,
    document.getElementById("tddec").value,
  ];

  let igstRates = [
    document.getElementById("tigstad").value,
    document.getElementById("tigstbd").value,
    document.getElementById("tigstcd").value,
    document.getElementById("tigstdd").value,
    document.getElementById("tigsted").value,
  ];

  let intendedPeriods = [
    document.getElementById("aip").value,
    document.getElementById("bip").value,
    document.getElementById("cip").value,
    document.getElementById("dip").value,
    document.getElementById("eip").value,
  ];

  let machineScenarios = [
    document.getElementById("ams").value,
    document.getElementById("bms").value,
    document.getElementById("cms").value,
    document.getElementById("dms").value,
    document.getElementById("ems").value,
  ];

  let assessableValues2 = [
    document.getElementById("taaa2").value,
    document.getElementById("taba2").value,
    document.getElementById("taca2").value,
    document.getElementById("tada2").value,
    document.getElementById("taea2").value,
  ];

  let aidcRates2 = [
    document.getElementById("taidcab2").value,
    document.getElementById("taidcbb2").value,
    document.getElementById("taidccb2").value,
    document.getElementById("taidcdb2").value,
    document.getElementById("taidceb2").value,
  ];

  let addRates2 = [
    document.getElementById("tddac2").value,
    document.getElementById("tddbc2").value,
    document.getElementById("tddcc2").value,
    document.getElementById("tdddc2").value,
    document.getElementById("tddec2").value,
  ];

  let igstRates2 = [
    document.getElementById("tigstad2").value,
    document.getElementById("tigstbd2").value,
    document.getElementById("tigstcd2").value,
    document.getElementById("tigstdd2").value,
    document.getElementById("tigsted2").value,
  ];

  let userInputrate = document.getElementById("userInputrate").value;
  let userInputrate2 = document.getElementById("userInputrate2").value;
  let userInputrate3 = document.getElementById("userInputrate3").value;
  let userInputrate4 = document.getElementById("userInputrate4").value;
  let userInputrate5 = document.getElementById("userInputrate5").value;
  let userInputrate6 = document.getElementById("userInputrate6").value;
  let userInputrate7 = document.getElementById("userInputrate7").value;
  let userInputrate8 = document.getElementById("userInputrate8").value;
  let userInputrate9 = document.getElementById("userInputrate9").value;
  let userInputrate10 = document.getElementById("userInputrate10").value;
  function safeParseFloat(value) {
    return isNaN(parseFloat(value)) ? 0 : parseFloat(value);
  }

  const percentages = [2.5, 5, 7.5, 10, 15, 20, 25];
  let capDuties = [];

  for (let i = 0; i < percentages.length; i++) {
    let firstValue = safeParseFloat(assessableValues[i]);
    let secondValue = safeParseFloat(aidcRates[i]);
    let fourthValue = safeParseFloat(igstRates[i]);
    console.log("assessableValues", assessableValues);
    console.log("igstRates", igstRates);
    console.log("aidcRates", aidcRates);
    console.log(
      "firstValue: " + firstValue + ", secondValue: " + secondValue,
      "fourthValue: " + fourthValue
    );

    let duty =
      firstValue * (percentages[i] / 100) +
      firstValue * (percentages[i] / 100) * (10 / 100) +
      firstValue * (secondValue / 100) +
      firstValue * (fourthValue / 100);

    if (isNaN(duty)) {
      duty = 0;
    }
    console.log("duty", duty);
    capDuties.push(duty);
    console.log("capDuties", capDuties);
  }

  let totalCapDuty = capDuties.reduce((total, duty) => total + duty, 0);
  console.log("totalCapDuty", totalCapDuty);

  const intendedPeriod = 10;
  let npvValues = [];
  capDuties.forEach((duty) => {
    let npvForDuty = 0;
    for (let i = 1; i <= intendedPeriod; i++) {
      npvForDuty +=
        safeParseFloat(duty) /
        Math.pow(1 + safeParseFloat(rateOfInterest) / 100, i);
    }
    npvValues.push(npvForDuty * -1);
  });
  let totalNPV = npvValues.reduce((total, npv) => total + npv, 0);
  console.log("Total NPV:", totalNPV);

  let igstAmounts = [];
  capDuties.forEach((customDuty, index) => {
    let igstRate = safeParseFloat(igstRates[index]);
    let igstAmount = customDuty * (igstRate / 100);
    if (isNaN(igstAmount)) {
      igstAmount = 0;
    }
    igstAmounts.push(igstAmount);
  });
  let totalIGSTAmount = igstAmounts.reduce(
    (total, igstAmount) => total + igstAmount,
    0
  );
  console.log("Total IGST Amount:", totalIGSTAmount);

  const percentages2 = [
    2.5,
    5,
    7.5,
    10,
    15,
    20,
    25,
    safeParseFloat(userInputrate2),
  ];
  let capDuties2 = [];
  for (let i = 0; i < percentages2.length; i++) {
    let firstValue2 = safeParseFloat(assessableValues2[i]);
    let secondValue2 = safeParseFloat(aidcRates2[i]);
    let fourthValue2 = safeParseFloat(igstRates2[i]);
    let duty2 =
      firstValue2 * (percentages2[i] / 100) +
      firstValue2 * (percentages2[i] / 100) * (10 / 100) +
      firstValue2 * secondValue2 +
      firstValue2 * fourthValue2;
    if (isNaN(duty2)) {
      duty2 = 0;
    }
    capDuties2.push(duty2);
  }
  let totalCapDuty2 = capDuties2.reduce((total, duty) => total + duty, 0);
  console.log("totalCapDuty2", totalCapDuty2);

  const turnaroundDays = 35;
  let npvCustomDuties = [];
  let npvRawMaterial = [];
  capDuties2.forEach((customDuty) => {
    let totalNPVForCustomDuty = 0;
    for (let year = 1; year <= 10; year++) {
      let npvForYear =
        customDuty / Math.pow(1 + safeParseFloat(rateOfInterest) / 100, year);
      totalNPVForCustomDuty += npvForYear;
    }
    npvCustomDuties.push(totalNPVForCustomDuty);
  });
  let totalNPVCustomDuties = npvCustomDuties.reduce(
    (total, npv) => total + npv,
    0
  );
  let benefitOnRawMaterialDuty =
    totalCapDuty2 *
    (safeParseFloat(rateOfInterest) / 100) *
    (turnaroundDays / 365);
  let totalNPVForRawMaterial = 0;
  for (let year = 1; year <= 10; year++) {
    let npvForYear =
      benefitOnRawMaterialDuty /
      Math.pow(1 + safeParseFloat(rateOfInterest) / 100, year);
    totalNPVForRawMaterial += npvForYear;
  }
  console.log("Total NPV of Raw Material Duty:", totalNPVForRawMaterial);

  let igstAmounts2 = [];
  let npvIGSTBenefits = [];
  capDuties2.forEach((customDuty, index) => {
    let igstRate = safeParseFloat(igstRates2[index]);
    let igstAmount = customDuty * (igstRate / 100);
    igstAmounts2.push(igstAmount);
  });
  igstAmounts2.forEach((igstAmount) => {
    let benefitOnIGSTAmount =
      igstAmount *
      (safeParseFloat(rateOfInterest) / 100) *
      (turnaroundDays / 365);
    let totalNPVForIGST = 0;
    for (let year = 1; year <= 10; year++) {
      let npvForYear =
        benefitOnIGSTAmount /
        Math.pow(1 + safeParseFloat(rateOfInterest) / 100, year);
      totalNPVForIGST += npvForYear;
    }
    if (isNaN(totalNPVForIGST)) {
      totalNPVForIGST = 0;
    }
    npvIGSTBenefits.push(totalNPVForIGST);
  });
  let totalNPVIGST = npvIGSTBenefits.reduce((total, npv) => total + npv, 0);
  console.log("Total NPV of IGST Benefits:", totalNPVIGST);

  // let rodptBenefit =
  // //   safeParseFloat(GrossRODTEP) * (safeParseFloat(Rateofdrawback) / 100);
  // let npvRodptBenefit = 0;
  // for (let year = 1; year <= 10; year++) {
  //   let npvForYear =
  //     (rodptBenefit /
  //       Math.pow(1 + safeParseFloat(rateOfInterest) / 100, year)) *
  //     -1;
  //   npvRodptBenefit += npvForYear;
  // }
  // console.log("Total NPV of RoDTP Benefit over 10 years:", npvRodptBenefit);
  // updatePDFAndDownload(
  //   "Sep 2024",
  //   totalCapDuty.toFixed(2),
  //   totalNPV.toFixed(2),
  //   totalIGSTAmount.toFixed(2),
  //   totalNPVForRawMaterial.toFixed(2),
  //   totalNPVIGST.toFixed(2),
  //   npvRodptBenefit.toFixed(2),
  //   (
  //     totalCapDuty +
  //     totalNPV +
  //     totalIGSTAmount +
  //     totalNPVForRawMaterial +
  //     totalNPVIGST +
  //     npvRodptBenefit
  //   ).toFixed(2)
  // );
}

document
  .getElementById("download-report")
  .addEventListener("click", function () {
    document.getElementById("custom-feedback-modal").style.display = "block";
  });

document.getElementById("skip").addEventListener("click", function () {
  document.getElementById("custom-feedback-modal").style.display = "none";
});

window.addEventListener("click", function (event) {
  if (event.target == document.getElementById("custom-feedback-modal")) {
    document.getElementById("custom-feedback-modal").style.display = "none";
  }
});

document
  .getElementById("feedback-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("user-email").value;
    const feedback = document.getElementById("user-feedback").value;
    const newsletterOptIn =
      document.getElementById("newsletter-opt-in").checked;

    document.getElementById("custom-feedback-modal").style.display = "none";

    alert("Thank you for your feedback! Your download will start shortly.");
  });
window.onload = function () {
  const form = document.getElementById("feedback-form");
  const inputs = document.querySelectorAll("input");
  inputs.forEach(function (input) {
    input.value = "";
  });

  const textareas = document.querySelectorAll("textarea");
  textareas.forEach(function (textarea) {
    textarea.value = "";
  });
  form.reset();
};

boxone = [
  "taaa",
  "taidcab",
  "tddac",
  "tigstad",
  "ams",
  "aip",
  "taba",
  "taidcbb",
  "tddbc",
  "tigstbd",
  "bms",
  "bip",
  "taca",
  "taidccb",
  "tddcc",
  "tigstcd",
  "cms",
  "cip",
  "tada",
  "taidcdb",
  "tdddc",
  "tigstdd",
  "dms",
  "dip",
  "taea",
  "taidceb",
  "tddec",
  "tigsted",
  "ems",
  "eip",
];

let box2 = [
  "taaa2",
  "taidcab2",
  "tddac2",
  "tigstad2",
  "taba2",
  "taidcbb2",
  "tddbc2",
  "tigstbd2",
  "taca2",
  "taidccb2",
  "tddcc2",
  "tigstcd2",
  "tada2",
  "taidcdb2",
  "tdddc2",
  "tigstdd2",
  "taea2",
  "taidceb2",
  "tddec2",
  "tigsted2",
];

document.getElementById("calculate").addEventListener("click", () => {
  console.log("calculate");
  document.getElementById("download-report").style.display = "flex";
  document.querySelector(".preview-container").style.display = "block";
  if (first == true && second == false) {
    firstCal();
  } else if (first == false && second == true) {
    secondCal();
  }
});

async function updatePDFAndDownload(
  value0,
  value1,
  value2,
  value3,
  value4,
  value5,
  value6,
  value7
) {
  const url = "http://127.0.0.1:5500/test.pdf";

  const existingPdfBytes = await fetch(url).then((res) => res.arrayBuffer());

  // Load the PDF
  const pdfDoc = await PDFLib.PDFDocument.load(existingPdfBytes);

  // Get the first and second pages
  const zero = pdfDoc.getPages()[0]; // 0-based index for the first page
  const firstPage = pdfDoc.getPages()[1]; // 0-based index for the second page

  // Add text to the first page
  zero.drawText(value0.toString(), {
    x: 60,
    y: 590,
    size: 24,
    color: PDFLib.rgb(1, 0, 0),
  });

  // Add text to the second page
  firstPage.drawText(value1.toString(), {
    x: 440,
    y: 674,
    size: 12,
    color: PDFLib.rgb(0, 0, 0),
  });
  firstPage.drawText(value2.toString(), {
    x: 440,
    y: 655,
    size: 12,
    color: PDFLib.rgb(0, 0, 0),
  });
  firstPage.drawText(value3.toString(), {
    x: 440,
    y: 635,
    size: 12,
    color: PDFLib.rgb(0, 0, 0),
  });
  firstPage.drawText(value4.toString(), {
    x: 440,
    y: 600,
    size: 12,
    color: PDFLib.rgb(0, 0, 0),
  });
  firstPage.drawText(value5.toString(), {
    x: 440,
    y: 582,
    size: 12,
    color: PDFLib.rgb(0, 0, 0),
  });
  firstPage.drawText(value6.toString(), {
    x: 440,
    y: 563,
    size: 12,
    color: PDFLib.rgb(0, 0, 0),
  });
  firstPage.drawText(value7.toString(), {
    x: 440,
    y: 544,
    size: 12,
    color: PDFLib.rgb(0, 0, 0),
  });

  // Serialize the PDFDocument to bytes
  const pdfBytes = await pdfDoc.save();

  // Create a download link
  const link = document.createElement("a");
  link.href = URL.createObjectURL(
    new Blob([pdfBytes], { type: "application/pdf" })
  );
  link.download = "Optitx's Report.pdf";
  link.click();
}
