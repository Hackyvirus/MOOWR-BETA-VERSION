let capDuties = [];

function safeParseFloat(value) {
  let parsed = parseFloat(value);
  return isNaN(parsed) ? 0 : parsed;
}

// Function to toggle the intended period input visibility based on Disposal selection
function setupDisposalListeners() {
  document.querySelectorAll('select[id$="ms"]').forEach((select, index) => {
    select.addEventListener("change", () => {
      calculateRow(index + 1);
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

function calculateRow(rowIndex) {
  console.log(`Calculating for row ${rowIndex}`);
  let rowLetter = String.fromCharCode(97 + (rowIndex - 1)); // 'a' for 1st row, 'b' for 2nd, etc.

  let bcdRateElement = document.querySelector(`#percentage-select${rowIndex}`);
  let cifValueElement = document.querySelector(`#ta${rowLetter}a`);
  let aidcRateElement = document.querySelector(`#taidc${rowLetter}b`);
  let igstAmountElement = document.querySelector(`#tigst${rowLetter}d`);

  if (
    !bcdRateElement ||
    !cifValueElement ||
    !aidcRateElement ||
    !igstAmountElement
  ) {
    console.error("Some elements not found for row " + rowIndex);
    return;
  }

  let bcdRate = safeParseFloat(bcdRateElement?.value || 0);
  let cifValue = safeParseFloat(cifValueElement?.value || 0);
  let aidcRate = safeParseFloat(aidcRateElement?.value || 0);
  let igstAmount = safeParseFloat(igstAmountElement?.value || 0);
Cc
  let duty =
    cifValue * (bcdRate / 100) +
    cifValue * (bcdRate / 100) * (10 / 100) +
    cifValue * (aidcRate / 100) +
    igstAmount;

  capDuties[rowIndex - 1] = duty;

  console.log(`Duty for row ${rowIndex}:`, duty);
  console.log("capDuties", capDuties);

  calculateNPV();
  calculateIGST();
}

let rateOfInterest = 9;

function calculateNPV() {
  let npvValues = [];

  capDuties.forEach((duty, index) => {
    let rowLetter = String.fromCharCode(97 + index);

    let intendedPeriodElement = document.querySelector(`#${rowLetter}ip`);

    if (!intendedPeriodElement) {
      console.error(`Element #${rowLetter}ip not found`);
      return;
    }

    let intendedPeriod = safeParseFloat(intendedPeriodElement?.value || 0);
    let npvForDuty = 0;
    for (let i = 1; i <= intendedPeriod; i++) {
      npvForDuty += duty / Math.pow(1 + rateOfInterest / 100, i);
    }
    npvValues.push(npvForDuty * -1);
  });

  let totalNPV = npvValues.reduce((total, npv) => total + npv, 0);
  console.log("Total NPV:", totalNPV);
}

function calculateIGST() {
  let igstAmounts = [];

  capDuties.forEach((customDuty, index) => {
    let rowLetter = String.fromCharCode(97 + index);

    let igstRateElement = document.querySelector(`#tigst${rowLetter}d`);

    if (!igstRateElement) {
      console.error(`Element #tigst${rowLetter}d not found`);
      return;
    }

    let igstRate = safeParseFloat(igstRateElement?.value || 0);
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
}

document.addEventListener("DOMContentLoaded", setupDisposalListeners);

// raw materialcalcialtion
let rawMaterialDuties = [];

// Utility function to safely parse floats
function safeParseFloat(value) {
  let parsed = parseFloat(value);
  return isNaN(parsed) ? 0 : parsed;
}

// Function to calculate total duty for a row
function calculateRawMaterialRow(rowIndex) {
  console.log(`Calculating for raw material row ${rowIndex}`);
  let rowLetter2 = String.fromCharCode(92 + (rowIndex - 1));
  console.log("rowLetter2", rowLetter2);
  let bcdRateElement =
    document.querySelector(`#percentage-select${rowIndex}`).value == "others"
      ? document.querySelector(`#userInputrate${rowIndex}`).value
      : document.querySelector(`#percentage-select${rowIndex}`).value;
  let assessableValueElement = document.querySelector(`#ta${rowLetter2}a2`);
  let aidcRateElement = document.querySelector(`#taidc${rowLetter2}b2`);
  let addRateElement = document.querySelector(`#tdd${rowLetter2}c2`);
  let igstRateElement = document.querySelector(`#tigst${rowLetter2}d2`);
  console.log(
    bcdRateElement.value,
    assessableValueElement,
    aidcRateElement,
    addRateElement,
    igstRateElement
  );

  let lifeCycle = document.getElementById("first-left-input3").value;
  let ExpectedAnnualGrowth =
    document.getElementById("first-right-input3").value;
  let rateOfInterest = document.getElementById("second-left-input3").value;
  let timeGap = document.getElementById("second-right-input3").value;
  let annualValueofRoDTEP = document.getElementById("third-left-input3").value;
  let GrossAnnualValue = document.getElementById("third-right-input3").value;
  let conversionOfRaw = document.getElementById("fourth-right-input3").value;

  console.log(
    bcdRateElement,
    assessableValueElement,
    aidcRateElement,
    addRateElement,
    igstRateElement
  );
  if (
    !bcdRateElement ||
    !assessableValueElement ||
    !aidcRateElement ||
    !addRateElement ||
    !igstRateElement
  ) {
    console.error("Some elements not found for raw material row " + rowIndex);
    return;
  }

  let bcdRate = safeParseFloat(bcdRateElement.value || 0);
  let assessableValue = safeParseFloat(assessableValueElement.value || 0);
  let aidcRate = safeParseFloat(aidcRateElement.value || 0);
  let addRate = safeParseFloat(addRateElement.value || 0);
  let igstRate = safeParseFloat(igstRateElement.value || 0);

  let duty =
    assessableValue * (bcdRate / 100) +
    assessableValue * (bcdRate / 100) * (addRate / 100) +
    assessableValue * (aidcRate / 100) +
    igstRate;
  let totalNVP =
    (duty /
      Math.pow(
        1 + safeParseFloat(rateOfInterest) / 100,
        safeParseFloat(grossIntendedPeriod)
      )) *
    -1;
  console.log("totalNVP", totalNVP);
  // second value
  console.log("totalNVP", totalNVP.toFixed());

  rawMaterialDuties[rowIndex - 1] = duty;

  console.log(`Duty for raw material row ${rowIndex}:`, duty);
  console.log("rawMaterialDuties", rawMaterialDuties);

  calculateTotalDuty();
}

// Function to calculate and display the total duty
function calculateTotalDuty() {
  let totalDuty = rawMaterialDuties.reduce(
    (total, duty) => parseFloat(total) + parseFloat(duty),
    0
  );
  console.log("Total Duty for Raw Materials:", totalDuty);
}

// Function to set up event listeners for IGST rate changes
function setupRawMaterialListeners() {
  document.querySelectorAll('input[id^="tigst"]').forEach((input, index) => {
    input.addEventListener("input", () => {
      calculateRawMaterialRow(index + 1);
    });
  });
}

// Initial setup
document.addEventListener("DOMContentLoaded", setupRawMaterialListeners);
