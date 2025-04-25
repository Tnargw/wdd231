import { getParkData } from "./parkService.mjs";

const parkData = getParkData();

// Template for the park info
function parkInfoTemplate(info) {
  return `<a href="/" class="location_title">${info.name}</a>
    <p class="location_states">
      <span>${info.designation}</span>
      <span>${info.states}</span>
    </p>`;
}

// Update the disclaimer with the link and park name
document.querySelector(".disclaimer > a").href = parkData.url;
document.querySelector(".disclaimer > a").innerHTML = parkData.fullName;

// Set the page title to the park name
document.title = parkData.fullName;

// Set the image with the first one
const img = document.querySelector(".location > img");
img.src = parkData.images[0].url;
img.alt = parkData.fullName;

// Put the park data into "location_content"
document.querySelector(".location_content").innerHTML = parkInfoTemplate(parkData);
