const burgerButton = document.getElementById("burgerButton");
const headerNavListMobile = document.querySelector(".header__nav_list-mobile");

burgerButton.addEventListener("click", () => {
  if (!headerNavListMobile.classList.contains("showHeaderMenu")) {
    headerNavListMobile.classList.add("showHeaderMenu");
    headerNavListMobile.classList.remove("hideHeaderMenu");
  } else {
    headerNavListMobile.classList.remove("showHeaderMenu");
    headerNavListMobile.classList.add("hideHeaderMenu");
  }
});
