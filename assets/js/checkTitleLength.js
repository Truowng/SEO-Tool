function checkTitleLengthFn(value) {
  const titleLength = document.querySelector(".title-length");
  if (value < 60 && value > 0) {
    titleLength.innerHTML = `<span>Độ dài TITLE là</span>: ${value} < 60. Rất tốt :)`;
  } else if (value > 60) {
    titleLength.innerHTML = `<span>Độ dài TITLE là</span>: ${value} > 60. Không tốt :(`;
  } else if (value == 0) {
    titleLength.innerHTML = `<span>Độ dài TITLE là</span>: Vui lòng nhập title.`;
  }
}

export { checkTitleLengthFn };
