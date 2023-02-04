"use strict";

const filterItems = document.querySelector(".video-content__category-wrap");

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

const API_KEY = "AIzaSyAVKmNnnaGYyfFlhjjVXk2YET6gV4DUsLM";
const getUrl = "https://www.googleapis.com/youtube/v3/search?";
const videoContainer = document.querySelector(".video-content__list");

function getVideos(value) {
  fetch(
    getUrl +
      new URLSearchParams({
        key: API_KEY,
        part: "snippet",
        maxResults: 15,
        q: value || "Freecodecamp",
        type: "video",
      })
  )
    .then((res) => res.json())
    .then((data) => {
      videoContainer.innerHTML = "";
      data.items.forEach((item) => {
        videoContainer.innerHTML += `
          <div class="video-content__list">
            <div class="video-item">
              <div class="video-item__pic">
                <img src=${item.snippet.thumbnails.high.url} alt="">
              </div>
              <div class="video-item__text-group">
                
                <img class="video-item__icon" src="./assets/channel-icon.jpeg" alt="">
                <div class="video-item__text">
                  <div class="video-item__title">
                    <h4>2023 yilda qaysi iPhone'ni sotib olish kerak?</h4>
                    <span>0</span>
                  </div>
                  <p class="video-item__channel-name">Temur Khatamov</p>
                  <span class="video-item__info">12 тыс. просмотров . 15 часов назад</span>  
                </div>              
              
              </div>
            </div>
          </div>
        `;
      });
    });
}

getVideos();

const searchVideos = document.querySelector("input");

searchVideos.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    getVideos(e.target.value);
  }
});
