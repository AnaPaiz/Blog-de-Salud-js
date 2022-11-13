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
    var container = document.querySelector(".info__top");
    for (let i = 0; i < info.length; i++) {
      var topContainer = document.createElement("div");
      topContainer.classList.add("info__top-card");
      topContainer.innerHTML = `
    <img src="${info[i].img}" id="info__top-img"/>
    <h3 id="info__top-title">${info[i].title}</h3>  
    <p id="info__top-des">${info[i].desc}</p>
    <a href="${info[i].link}" target="_blank" id="info__top-link">Leer más</a>
    `;
      container.append(topContainer);
    }
    container.style.height = `calc(100vh * ${info.length})`;
  };
}