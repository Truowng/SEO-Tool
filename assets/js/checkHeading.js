import { $, $$ } from "./app.js";

function checkHeadingFn(value) {
  for (let i = 1; i < 7; i++) {
    let tags = value.querySelectorAll(`h${i}`).length;
    $(
      `.number-heading-item-h${i}`
    ).innerHTML = `<span>Số lượng thẻ h${i} là:</span> ${tags}`;
  }
}

export { checkHeadingFn };
