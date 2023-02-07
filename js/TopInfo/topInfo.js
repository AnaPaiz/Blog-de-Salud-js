import { responsiveDesign } from "../scriptForm.js";
import { top } from "./top.js";
//Principal container - top left

export class TopInfo {
  constructor(title, img, desc, link) {
    this.title = title;
    this.img = img;
    this.desc = desc;
    this.link = link;
  }

  showInfo = () => {
    const info = top.map(
      (data) => new TopInfo(data.title, data.img, data.description, data.link)
    );
    var container = document.querySelector(".top");
    for (let i = 0; i < info.length; i++) {
      var topContainer = document.createElement("div");
      topContainer.classList.add("top-card");
      topContainer.innerHTML = `
    <img src="${info[i].img}""/>
    <h4>${info[i].title}</h4>  
    <p>${info[i].desc}</p>
    <a href="${info[i].link}" target="_blank">Leer más</a>
    `;
      container.append(topContainer);
    }
  };
}

const UI = new responsiveDesign();
UI.funtionBar();
UI.clickOptions();
