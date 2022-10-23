import { $, $$ } from "./app.js";

export function checkImageFn(value) {
  let images = Object.values(value.querySelectorAll("img"));
  let imageItems = images.map((image, index) => {
    return `
        <li class="image-list-item">
        <ul>
                Image Infomation
              <li class="image-stt">${index + 1}.</li>
              <li class="image-src">Src: ${image.getAttribute("src")}</li>
              <li class="image-alt">Alt: ${
                image.getAttribute("alt") ? "Yes" : "No"
              }</li>
              <li class="image-spec">Spec: ${
                image.style.width == "" ? "NaN" : image.style.width
              }*${image.style.height == "" ? "NaN" : image.style.height}</li>
            </ul>
          </li>`;
  });
  $(".image-list").innerHTML = imageItems.join("");
}
