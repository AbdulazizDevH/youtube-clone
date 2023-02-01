"use strict";

const filterItems = document.querySelector(".video-content__category");

const filterText = [
  "Все",
  "Сейчас в эфире",
  "Музыка",
  "Видеоигры",
  "Футбол",
  "Мультфильмы",
  "Недавно опубликованные",
  "Новое для вас",
  
];

filterText.forEach((text) => {
  filterItems.innerHTML += `
    <a href="#" class="video-content__category-link">${text}</a>
  `;
});
