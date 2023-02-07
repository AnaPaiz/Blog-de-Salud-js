import { TopInfo } from "./js/TopInfo/topInfo.js";

const container = document.querySelector(".container");

const onLoadHome = () => {
  const showInformation = new TopInfo();
  showInformation.showInfo();
};
/*Cambiar pestañas */
const clickOpc = document.querySelectorAll(".option");
clickOpc.forEach((tab) => {
  tab.addEventListener("click", function () {
    let sectId = this.id;
    const section = document.querySelectorAll('.section');
    const element = document.querySelector("."+ sectId);
    const btnColor = document.querySelectorAll(".btnColor");
    const active = document.getElementById(sectId);
   /*Para hacer cambio de color de boton */
    btnColor.forEach(btn =>{
      if(btn.classList.contains("active")){
        btn.classList.remove("active");
      }
    })
    active.classList.add("active");
    /*Para hacer cambio de contenido */
    section.forEach(
        btn =>{
            if(!btn.classList.contains("hidden")){
                btn.classList.add("hidden");
            }
          })   
        element.classList.remove("hidden");
  });
});

const form = document.getElementById('myForm');
form.addEventListener("submit", function(e) {
  e.preventDefault();
  const txtName = e.target.nameText.value;
  const textLastName = e.target.lastNameText.value;
  const txtEmail= e.target.emailText.value;
  const txtAffair = e.target.affairText.value;
  const txtMessage = document.getElementById("messageText").value;
  
  if(!txtName || !textLastName || !txtEmail || !txtAffair || !txtMessage){
    showMessage("Hay un error con los campos, por favor revise", "error");
  } else{
    showMessage("Envío de datos exitoso", "success");
  }
});

const showMessage = (message, type)=>{
  const msgContainer = document.querySelector(".us__message");
  const addInfo = document.createElement("div");
  addInfo.innerHTML=`<p>${message}</p>`;
  msgContainer.classList.add(`${type}`);
  msgContainer.append(addInfo);
  setTimeout(()=>{
    msgContainer.remove();
  }, 3000)
}

/*Cambiar páginas*/
window.onload = onLoadHome;
 /**/ 
