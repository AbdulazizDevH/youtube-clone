const searchInput = document.querySelector("input"),
  br = searchInput.parentElement;

  searchInput.addEventListener("focusin", () => {
    br.classList.add("border-search")
  })

  searchInput.addEventListener("focusout", () => {
    br.classList.remove("border-search")
  })

console.log(br);