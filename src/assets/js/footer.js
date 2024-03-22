const footerButtons = document.querySelectorAll(".footer__button");
const footerRowItems = document.querySelectorAll(".footer__row_item");

for (let footerButton of footerButtons) {
  const footerButtonName = footerButton.dataset.button;
  footerButton.addEventListener("click", () => {
    for (let footerRowItem of footerRowItems) {
      const footerRowItemName = footerRowItem.dataset.name;
      if (footerButtonName === footerRowItemName) {
        footerRowItem.classList.toggle("showFooterLinks");
      }
    }
  });
}
