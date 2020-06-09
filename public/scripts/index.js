const buttonSearch = document.querySelector("#page-home main a")
const buttonLogin = document.querySelector("#page-home header .cadlogin .login")
const modalSearch = document.querySelector("#modal")
const closeSearch = document.querySelector("#modal .header a")
const modalLogin = document.querySelector("#modalLogin")
const closeLogin = document.querySelector("#modalLogin .header a")

buttonSearch.addEventListener("click", () => {
  modalSearch.classList.remove("hide")
})

closeSearch.addEventListener("click", () => {
  modalSearch.classList.add("hide")
})

buttonLogin.addEventListener("click", () => {
  modalLogin.classList.remove("hide")
})

closeLogin.addEventListener("click", () => {
  modalLogin.classList.add("hide")
})

