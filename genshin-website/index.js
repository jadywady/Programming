
//reference
//www.youtube.com. (n.d.). Simple Parallax Scrolling Effect with CSS & Vanilla Javascript. [online] Available at: https://www.youtube.com/watch?v=TawH-AqHTXc&t=146s [Accessed 25 Jan. 2024].

/**
 * the background layers will move at different speeds depending on the users' scroll to create a 3d illusion with parallax
 *
 * @type {scroll} 
 * @listens adjust-layer-speed 
 */
window.addEventListener('scroll', function(){
    let background = document.getElementById("background")
    let middleground = document.getElementById("middleground")
    let frontground = document.getElementById("frontground")

    var value = window.scrollY;
    background.style.top = value * 1 + 'px';
    middleground.style.top = value * 0.75 + 'px';
    frontground.style.top = value * 0.5 + 'px';

})



/* #------------------------------parralax---------------------------------------- */

/**
 * replace description, title and color of title into element anemo's information
 */
function anemoInfo(){
  document.getElementById("element-title").innerHTML = "Anemo";
  document.getElementById("element-description").innerHTML = "Anemo represents wind. Its associated Archon is Barbatos, whose domain is Mondstadt."
  document.getElementById("element-title").style.color = "Teal";
}
/**
 * replace description, title and color of title into element geo's information
 */
function geoInfo(){
  document.getElementById("element-title").innerHTML = "Geo";
  document.getElementById("element-description").innerHTML = "Geo represents earth. Its associated Archon is Morax, whose domain is Liyue."
  document.getElementById("element-title").style.color = "Orange";
}
/**
 * replace description, title and color of title into element electro's information
 */
function electroInfo(){
  document.getElementById("element-title").innerHTML = "Electro"
  document.getElementById("element-description").innerHTML = "Electro represents thunder. Its associated Archon is Beelzebul, whose domain is Inazuma."
  document.getElementById("element-title").style.color = "Purple";
}
/**
 * replace description, title and color of title into element dendro's information
 */
function dendroInfo(){
  document.getElementById("element-title").innerHTML = "Dendro"
  document.getElementById("element-description").innerHTML = "Dendro represents life and the element of plants. Its associated Archon is Buer, whose domain is Sumeru."
  document.getElementById("element-title").style.color = "Green";
}
/**
 * replace description, title and color of title into element hydro's information
 */
function hydroInfo(){
  document.getElementById("element-title").innerHTML = "Hydro"
  document.getElementById("element-description").innerHTML = "Hydro represents water. Its associated Archon was Focalors, whose domain was Fontaine."
  document.getElementById("element-title").style.color = "Blue";
}
/**
 * replace description, title and color of title into element pyro's information
 */
function pyroInfo(){
  document.getElementById("element-title").innerHTML = "Pyro"
  document.getElementById("element-description").innerHTML = "Pyro represents fire. Its associated Archon is Murata, whose domain is Natlan. It is not released yet."
  document.getElementById("element-title").style.color = "Red";
}
/**
 * replace description, title and color of title into element cryo's information
 */
function cryoInfo(){
  document.getElementById("element-title").innerHTML = "Cryo"
  document.getElementById("element-description").innerHTML = "Cryo represents ice. Its associated Archon is the Tsaritsa, whose domain is Snezhnaya. It is not released yet."
  document.getElementById("element-title").style.color = "Aqua";
}

/* #------------------------------element-info---------------------------------------- */



//credits for kind stranger on stackoverflow :)
var vid = document.getElementById("archon-video");
var videoStarted = false;

window.addEventListener('scroll', function() {
  if (isScrolledIntoView(vid) && !videoStarted) {
    videoStarted = true;
    vid.play();
  }
});

/**
 * checks if the video is in the user view
 * @param {HTMLElement} element 
 * @returns {boolean}
 */
function isScrolledIntoView(element) {
    var top = element.getBoundingClientRect().top;
    var bottom = element.getBoundingClientRect().bottom;

    var isVisible = (top >= 0) && (bottom <= window.innerHeight + (window.innerHeight/2));
    return isVisible;
}

/* #------------------------------play video when in view---------------------------------------- */




/**
 * replace description and title with Venti's information and load venti's introduction video
 */
function ventiIntro(){
  document.getElementById("archon-description-details").innerHTML = "Venti is a playable Anemo character in Genshin Impact. He is a free-spirited, wine-loving bard of Mondstadt, belying his identity as Barbatos, the Anemo Archon.";
  document.getElementById("archon-description-title").innerHTML = "Venti"
  document.getElementById("archon-video-source").src = "images/archons/venti.mp4";
  vid = document.getElementById("archon-video")
  vid.load();
}
/**
 * replace description and title with Zhongli's information and load venti's introduction video
 */
function zhongliIntro(){
  document.getElementById("archon-description-details").innerHTML = "Zhongli is a playable Geo character in Genshin Impact. A consultant of the Wangsheng Funeral Parlor, he is later revealed to be the Geo Archon, Morax, who has decided to experience the world from the perspective of a mortal.";
  document.getElementById("archon-description-title").innerHTML = "Zhongli"
  document.getElementById("archon-video-source").src = "images/archons/zhongli.mp4";
  vid = document.getElementById("archon-video")
  vid.load();
}
/**
 * replace description and title with Raiden's information and load venti's introduction video
 */
function raidenIntro(){
  document.getElementById("archon-description-details").innerHTML = "The Raiden Shogun (Japanese: 雷らい電でん将しょう軍ぐん Raiden Shougun) is a playable Electro character in Genshin Impact. The Raiden Shogun is comprised of two beings in one body: Ei, the current Electro Archon of Inazuma; and the Shogun, the puppet created by Ei to act as the ruler of Inazuma in her stead.";
  document.getElementById("archon-description-title").innerHTML = "Raiden Shogun"
  document.getElementById("archon-video-source").src = "images/archons/raiden.mp4";
  vid = document.getElementById("archon-video")
  vid.load();
}
/**
 * replace description and title with Nahida's information and load venti's introduction video
 */
function nahidaIntro(){
  document.getElementById("archon-description-details").innerHTML = "Nahida is a playable Dendro character in Genshin Impact. As Lesser Lord Kusanali, she strives to have a stronger presence in Sumeru now that she has been freed from her extensive confinement in the Sanctuary of Surasthana.";
  document.getElementById("archon-description-title").innerHTML = "Nahida";
  document.getElementById("archon-video-source").src = "images/archons/nahida.mp4";
  vid = document.getElementById("archon-video");
  vid.load();
}
/**
 * replace description and title with Furina's information and load venti's introduction video
 */
function furinaIntro(){
  document.getElementById("archon-description-details").innerHTML = "Furina de Fontaine is a playable Hydro character in Genshin Impact who can alternate between Pneuma and Ousia alignments. Introduced as the flamboyant and overconfident Hydro Archon, Furina's theatrics are eventually revealed to be a public persona, which she later discards in favor of living a much humbler life.";
  document.getElementById("archon-description-title").innerHTML = "Furina"
  document.getElementById("archon-video-source").src = "images/archons/furina.mp4";
  vid = document.getElementById("archon-video")
  vid.load();
}


/* #------------------------------archon intros---------------------------------------- */


// reference
// www.w3schools.com. (n.d.). JSON HTML. [online] Available at: https://www.w3schools.com/js/js_json_html.asp.

/**
 *  outputs all characters in game from the corresponding region picked by the user in the drop down menu
 * 
 * @param {string} region - the region picked in the drop down menu
 */
function chosenRegion(region){
  let tempTable =  `<tr>
  <th>${"CHARACTER NAMES"}</th>
  <th>${"ELEMENT"}</th>
  <th>${"REGION"}</th>
  </tr>`
  regionPicked = region
  
  /**
   * access the data in genshin.json file
   * @typedef {object} allCharacters 
   * @property {string} name - the name of the character
   * @property {string} element - the element of the character
   * @property {string} region - which region the character is from
   */
  fetch('genshin.json')
  .then(res => res.json())
  .then((data) => {
    
    var table = document.getElementById('table')
    const allCharacters = data;
    
    for (var i = 0; i< allCharacters.length; i++){
      if (allCharacters[i].region == regionPicked){
        var row = `<tr>
        <td>${allCharacters[i].name}</td>
        <td>${allCharacters[i].element}</td>
        <td>${allCharacters[i].region}</td>
        </tr>`
        tempTable += row

      }
      else if (regionPicked == "All_characters"){
        var row = `<tr>
        <td>${allCharacters[i].name}</td>
        <td>${allCharacters[i].element}</td>
        <td>${allCharacters[i].region}</td>
        </tr>`
        tempTable += row
      }
    }
    table.innerHTML = tempTable
  }).catch(err => console.error(err));
}

/* #------------------------------table---------------------------------------- */

// reference for map:
// leafletjs.com. (n.d.). Non-geographical maps - Leaflet - a JavaScript library for interactive maps. [online] Available at: https://leafletjs.com/examples/crs-simple/crs-simple.html [Accessed 25 Jan. 2024].


document.addEventListener("DOMContentLoaded", function(event) { 
/**
 * changes the marker image into logo of the corresponding region and correct size and anchor
 * @typedef {object} regionIcon
 * @property {string} iconUrl - image of logo
 * @property {Array} iconSize - size of the marker
 * @property {Array} iconAnchor - size of anchor
 */
  var inazumaIcon = L.icon({
    iconUrl: 'images/reigons/logo/Emblem_Inazuma_White.png',
    iconSize:     [75, 75],
    iconAnchor:   [20, 20],
  });
  var mondstadtIcon = L.icon({
    iconUrl: 'images/reigons/logo/Emblem_Mondstadt_White.png',
    iconSize:     [75, 75],
    iconAnchor:   [20, 20],
  });
  var liyueIcon = L.icon({
    iconUrl: 'images/reigons/logo/Emblem_Liyue_White.png',
    iconSize:     [75, 75],
    iconAnchor:   [20, 20],
  });
  var sumeruIcon = L.icon({
    iconUrl: 'images/reigons/logo/Emblem_Sumeru_White.png',
    iconSize:     [75, 75],
    iconAnchor:   [20, 20],
  });
  var fontaineIcon = L.icon({
    iconUrl: 'images/reigons/logo/Emblem_Inazuma_White.png',
    iconSize:     [75, 75],
    iconAnchor:   [20, 20],
  });
  
  
  var map = L.map('map', {
        crs: L.CRS.Simple,
        maxBounds: [[0,0],[0,1000],[1000,1000],[1000,0]],
        maxBoundsViscosity: 1.0
    });
    var bounds = [[0,0], [1000,1000]];
    var image = L.imageOverlay('images/Teyvat_Map.webp', bounds).addTo(map);
    map.fitBounds(bounds);
  
  /**
   * adds an marker to the map with a popup when clicked
   * @constructor
   * @param {array} 
   * @param {object} regionIcon
   */
    L.marker([500, 530], {icon: liyueIcon}).addTo(map).bindPopup('This is Liyue');
    L.marker([200, 800], {icon: inazumaIcon}).addTo(map).bindPopup('This is Inazuma');
    L.marker([700, 625], {icon: mondstadtIcon}).addTo(map).bindPopup('This is Mondstadt');
    L.marker([450, 300], {icon: sumeruIcon}).addTo(map).bindPopup('This is Sumeru');
    L.marker([800, 300], {icon: fontaineIcon}).addTo(map).bindPopup('This is Fontaine');
});



/* #------------------------------map---------------------------------------- */