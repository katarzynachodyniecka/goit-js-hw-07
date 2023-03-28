import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");
let isVisible = false;
let instance;
function createGallery() {
  for (let i = 0; i < 9; i++) {
    const item = document.createElement("div");
    item.classList.add("gallery__item");
    const gallery = `<a class="gallery__link" href="${galleryItems[i].original}">
<img
  class="gallery__image"
  src="${galleryItems[i].preview}"
  data-source="${galleryItems[i].original}"
  alt="${galleryItems[i].description}"
/>
</a>`;
    item.innerHTML += gallery;
    galleryEl.appendChild(item);
  }
}

createGallery();
galleryEl.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") return;
  instance = basicLightbox.create(
    `
  <img src="${e.target.dataset.source}"/>
  `
  );
  instance.show();
  isVisible = true;
});
window.addEventListener("keyup", (e) => {
  if (!isVisible) return;
  if (e.key === "Escape") {
    instance.close();
    isVisible = false;
  }
});
