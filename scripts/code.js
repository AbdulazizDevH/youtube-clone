const searchInput = document.querySelector("input"),
  br = searchInput.parentElement;

searchInput.addEventListener("focusin", () => {
  br.classList.toggle("border-search");
});

searchInput.addEventListener("focusout", () => {
  br.classList.remove("border-search");
});

const sidebarBtn = document.querySelectorAll(".sidebar-button");
const sidebar = document.querySelector(".sidebar");
const sidebarMini = document.querySelector(".sidebar-mini");
const sidebarBack = document.querySelector(".sidebar__background");

sidebarBtn.forEach((element) => {
  element.addEventListener("click", () => {
    hideSidebar(window.innerWidth < 1313);
  });
});

window.addEventListener("click", (e) => {
  if (e.target.classList.contains("sidebar__background")) {
    hideSidebar(window.innerWidth < 1313);  
  }
})

window.addEventListener("resize", (e) => {
  sidebar.classList.remove(window.innerWidth > 1313 ? "left" : "sidebar-mini");
  if (window.innerWidth > 1313) sidebarBack.classList.add("none");
});

function hideSidebar(windowInnerWidth) {
  sidebar.classList.toggle(windowInnerWidth ? "left" : "sidebar-mini");
  if (windowInnerWidth) sidebarBack.classList.toggle("none");
}