import { $, $$ } from "./app.js";

function checkATagFn(value) {
  $(".number-a-tag").innerHTML = `<span>Số lượng thẻ a là:</span> ${
    value.querySelectorAll("a").length
  }`;
}

function checkInternalLinkFn(value) {
  let internalLinkCounter = 0;
  let internalLinkValues = value.querySelectorAll("a");
  console.log(internalLinkValues);
  internalLinkValues.forEach((internalLinkValue) => {
    if (internalLinkValue.getAttribute("href").includes("fhmvietnam.com")) {
      ++internalLinkCounter;
    }
  });

  $(
    ".number-a-internal-link"
  ).innerHTML = `<span>Số lượng internal link là:</span> ${internalLinkCounter}`;
}

function checkExternalLinkFn(value) {
  let externalLinkCounter = 0;
  let externalLinkValues = value.querySelectorAll("a");
  externalLinkValues.forEach((externalLinkValue) => {
    if (
      externalLinkValue.getAttribute("href").includes("fhmvietnam.com") ===
      false
    ) {
      ++externalLinkCounter;
    }
  });

  $(
    ".number-a-external-link"
  ).innerHTML = `<span>Số lượng external link là:</span> ${externalLinkCounter}`;
}

export { checkATagFn, checkInternalLinkFn, checkExternalLinkFn };
