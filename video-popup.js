// 2023-02-20

let is_open = false;

function closeVideoPopup() {
  document.getElementById("video-widget").style.display = "none";
  is_open = false;
}

function openVideoPopup() {
  // Allow for closing the video popup when the widget icon is clicked
  if (is_open) {
    closeVideoPopup();
    is_open = false;
  } else {
    document.getElementById("video-widget").style.display = "flex";
    is_open = true;
  }
}

// Select the head element of the page:
const page_head = document.head;

// Select the body element of the page:
const body_html = document.body;

// This function creates HTML from template HTML passed in to it:
function elementFromHtml(html) {
  const template = document.createElement("template");
  html = html.trim(); // Never return a text node of whitespace as the result
  template.innerHTML = html;
  return template.content.firstChild;
}

const html_fonts = elementFromHtml(`
  <link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Inter"
  />
`);

const html_icons = elementFromHtml(`
  <link
  href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
  rel="stylesheet"
  />
`);

const html_css = elementFromHtml(`
  <link
  rel="stylesheet"
  type="text/css"
  media="screen"
  href="https://cdn.jsdelivr.net/gh/borisvch/repo001@main/video-popup.css"
  />
`);

const html_widget_icon = elementFromHtml(`
<img
id="video-widget-icon"
src="https://s3.amazonaws.com/appforest_uf/f1676674408488x143910637275504350/vouchtube-round-logo.svg"
alt="vouchtube video widget icon"
class="widget-icon-${window.VOUCHTUBE_CONFIG.position}"
onClick="openVideoPopup()"
/>
`);

const html_popup_container = elementFromHtml(`

<div id="video-widget" class="flex-video-popup-container-${window.VOUCHTUBE_CONFIG.position}">
<div class="popup-controls-container">
  <div
    class="material-symbols-outlined close-icon"
    onclick="closeVideoPopup()"
    style="color: #${window.VOUCHTUBE_CONFIG.themecolor}"
  >
    close
  </div>
</div>
<div class="popup-title-container">
  <span class="popup-title" style="color: #${window.VOUCHTUBE_CONFIG.themecolor}">
    See others recommend us...
  </span>
</div>
<div class="vouchtube-video-iframe">
  <iframe
    id="vouchtube-iframe"
    src="https://videowall.vouchtube.com/popup-widget?cid=${window.VOUCHTUBE_CONFIG.cid}&txtcolor=%23${window.VOUCHTUBE_CONFIG.textcolor}&themecolor=%23${window.VOUCHTUBE_CONFIG.themecolor}&position=${window.VOUCHTUBE_CONFIG.position}"
    width="100%"
    height="235"
    frameborder="0"
    align="middle"
    scrolling="no"
  ></iframe>
</div>
</div>

`);

// Append to page head element
page_head.append(html_fonts, html_icons, html_css);

// Append the HTML to the body
body_html.append(html_widget_icon, html_popup_container);

// Open and close the video popup
// const openAndCloseVideoWidget = () => {
//   openVideoPopup();
//   setTimeout(() => {
//     closeVideoPopup();
//   }, 750);
// };

// setTimeout(openAndCloseVideoWidget, 500);
