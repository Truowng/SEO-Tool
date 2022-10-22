import { $, $$ } from "./app.js";

function checkTitleLengthFn(value) {
  let result = "Vui lòng nhập title.";
  if (value > 0) {
    if (value > 60) result = `${value} > 60. Không tốt :(`;
    else result = `${value} < 60. Rất tốt :)`;
  }
  $(".title-length").innerHTML = `<span>Độ dài TITLE là</span>: ${result}`;
}

export { checkTitleLengthFn };
