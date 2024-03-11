let navbar = document.querySelector('.navbar')
let menuBtn = document.getElementById('menuBtn')
let cartBtn = document.getElementById("cartBtn")
let cartItem = document.querySelector(".cart-items-container")
let searchForm = document.querySelector('.search-form')
let searchBtn = document.getElementById("searchBtn")

// !Icon Navbar
menuBtn.onclick = () => {
  navbar.classList.toggle('active')
  cartItem.classList.remove('active')
  searchForm.classList.remove('active')
}
cartBtn.onclick = () => {
  cartItem.classList.toggle('active')
  navbar.classList.remove('active')
  searchForm.classList.remove('active')
}
searchBtn.onclick = () => {
  searchForm.classList.toggle('active')
  navbar.classList.remove('active')
  cartItem.classList.remove('active')
}
 window.onscroll = () => {
  navbar.classList.remove('active')
  cartItem.classList.remove('active')
  searchForm.classList.remove('active')
}
 