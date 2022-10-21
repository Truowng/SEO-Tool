function checkDuplicateContentFn(value, valueCheck) {
  const duplicateContent = document.querySelector(".duplicate-content");
  if (value.length !== 0 && valueCheck.length !== 0) {
    console.log("hello");
    let duplicateContentTimes =
      value.toLowerCase().split(valueCheck.toLowerCase()).length - 1;
    duplicateContent.innerHTML = `<span>Số lần lặp từ là:</span> ${duplicateContentTimes}`;
    console.log(duplicateContentTimes);
  } else if (value.length === 0 && valueCheck.length !== 0) {
    duplicateContent.innerHTML = `<span>Số lần lặp từ là:</span> Vui lòng nhập đoạn văn.`;
  } else if (value.length !== 0 && valueCheck.length === 0) {
    duplicateContent.innerHTML = `<span>Số lần lặp từ là:</span> Vui lòng nhập từ khóa.`;
  } else {
    duplicateContent.innerHTML = `<span>Số lần lặp từ là:</span> Vui lòng nhập đoạn văn và từ khóa.`;
  }
}

export { checkDuplicateContentFn };
