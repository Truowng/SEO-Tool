import { checkTitleLengthFn } from "./checkTitleLength.js";
import { checkDuplicateContentFn } from "./checkDuplicateContent.js";
import { checkHeadingFn } from "./checkHeading.js";
import {
  checkATagFn,
  checkInternalLinkFn,
  checkExternalLinkFn,
} from "./checkATag.js";

export const $ = document.querySelector.bind(document);
export const $$ = document.querySelectorAll.bind(document);
export const submitBtn = document.querySelector(".submit-btn");

submitBtn.addEventListener("click", getValue);

function getValue() {
  let parser = new DOMParser();
  let inputValue = $(".input-box").value;
  let inputParagraphValue = parser.parseFromString(
    $(".input-area").value,
    "text/html"
  );
  let stringInputParagraphValue = $(".input-area").value;
  let inputCheckDuplicateContentValue = $(".input-check-box").value;
  checkTitleLengthFn(inputValue.trim().length);
  checkDuplicateContentFn(
    stringInputParagraphValue,
    inputCheckDuplicateContentValue
  );
  checkATagFn(inputParagraphValue);
  checkInternalLinkFn(inputParagraphValue);
  checkExternalLinkFn(inputParagraphValue);
  checkHeadingFn(inputParagraphValue);
}
