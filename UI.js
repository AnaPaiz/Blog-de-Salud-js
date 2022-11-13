import { TopInfo } from "./js/TopInfo/topInfo.js";

const container = document.querySelector(".container");

const onLoadHome = () => {
  const showInformation = new TopInfo();
  showInformation.showInfo();
};
/*Cambiar pestañas */
const clickOpc = document.querySelectorAll(".changeOptions");
clickOpc.forEach((tab) => {
  tab.addEventListener("click", function () {
    let sectId = this.id;
    const section = document.querySelectorAll('.section');
    const element = document.querySelector("."+ sectId);
    
    section.forEach(
        btn =>{
            if(btn.classList.contains("showPage")){
                btn.classList.remove("showPage");
                btn.classList.add("hiddenPage")
            }
        }
    )
        element.classList.remove("hiddenPage");
        element.classList.add("showPage");
  });
});

const sendMessage = (e) =>{
                            
  alert("Este es un mensaje para comprobar si funciona la función")
}

/*Cambiar páginas*/
window.onload = onLoadHome;
