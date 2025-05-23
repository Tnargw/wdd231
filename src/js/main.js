import { getParkData, getInfoLinks, getVisitorCenterData } from "./parkService.mjs";
import setHeaderFooter from "./setHeaderFooter.mjs";
import { mediaCardTemplate } from "./templates.mjs";

async function init() {
  const parkData = await getParkData();
  const links = getInfoLinks(parkData.images);
  const visitorCenterData = await getVisitorCenterData();
  setHeaderFooter(parkData);
  setParkIntro(parkData);
  setParkInfoLinks(links);

  console.log(visitorCenterData)
}

init();



function setParkIntro(data) {
  const infoElement = document.querySelector(".intro");
  infoElement.innerHTML = `<h1>${parkData.fullName}</h1>
  <p>${parkData.description}</p>`;
}

function setParkInfoLinks(data) {
  const infoElement = document.querySelector(".info");
  // we have multiple links to build...so we map to transform the array of objects into an array of HTML strings.
  const html = data.map(mediaCardTemplate);
  // join the array of strings into one string and insert it into the section
  infoElement.insertAdjacentHTML("afterbegin", html.join(""));
}




