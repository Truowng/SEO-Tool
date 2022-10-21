function checkDuplicateContentFn(value, valueCheck) {
  const duplicateContent = document.querySelector(".duplicate-content");
  let duplicateContentTimes =
    value.toLowerCase().split(valueCheck.toLowerCase()).length - 1;
  duplicateContent.innerHTML = `<span>Số lần lặp từ là:</span> ${duplicateContentTimes}`;
  console.log(duplicateContentTimes);
}

export { checkDuplicateContentFn };
