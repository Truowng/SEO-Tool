import { checkTitleLengthFn } from "./checkTitleLength.js";
import { checkDuplicateContentFn } from "./checkDuplicateContent.js";

export const submitBtn = document.querySelector(".submit-btn");

submitBtn.addEventListener("click", getValue);

function getValue() {
  let inputValue = document.querySelector(".input-box").value;
  let inputParagraphValue = document.querySelector(".input-area").value;
  let inputCheckDuplicateContentValue =
    document.querySelector(".input-check-box").value;
  checkTitleLengthFn(inputValue.trim().length);
  checkDuplicateContentFn(inputParagraphValue, inputCheckDuplicateContentValue);
}
