const menu_bar = document.getElementById("bar-menu");
const moveOpt = document.querySelectorAll(".option");
const menu = document.querySelector(".menu");

export class responsiveDesign {

  funtionBar = () => {
    menu_bar.addEventListener("click", () => {
      if (menu_bar.classList.contains("fa-bars")) {
        menu_bar.classList.remove("fa-bars");
        menu_bar.classList.add("fa-xmark");
        menu.classList.remove("remove-menu");
      } else {
        menu_bar.classList.remove("fa-xmark");
        menu_bar.classList.add("fa-bars");
        menu.classList.add("remove-menu");
      }
    });
  };
  clickOptions() {
    moveOpt.forEach((btn) =>
      btn.addEventListener("click", () => {
        menu_bar.classList.remove("fa-xmark");
        menu_bar.classList.add("fa-bars");
        menu.classList.add("remove-menu");
      })
    );
  }
}
