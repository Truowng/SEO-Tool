import { $, $$ } from "./app.js";

function checkDuplicateContentFn(value, valueCheck) {
  let result = "";
  let duplicateContentTimes = value
    .toLowerCase()
    .split(valueCheck.toLowerCase()).length;
  if (value.length !== 0) {
    if (valueCheck.length !== 0) {
      result = `${duplicateContentTimes}`;
    } else result = "Vui lòng nhập đầy đủ văn bản và từ khóa.";
  } else result = "Vui lòng nhập đầy đủ văn bản và từ khóa.";
  $(
    ".duplicate-content"
  ).innerHTML = `<span>Số lần lặp lại là:</span> ${result}`;
}

export { checkDuplicateContentFn };
