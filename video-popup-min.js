let is_open = !1;
function closeVideoPopup() {
  (document.getElementById("video-widget").style.display = "none"),
    (is_open = !1);
}
function openVideoPopup() {
  is_open
    ? (closeVideoPopup(), (is_open = !1))
    : ((document.getElementById("video-widget").style.display = "flex"),
      (is_open = !0));
}
const page_head = document.head,
  body_html = document.body;
function elementFromHtml(e) {
  let o = document.createElement("template");
  return (e = e.trim()), (o.innerHTML = e), o.content.firstChild;
}
const html_fonts = elementFromHtml(`
  <link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Inter"
  />
`),
  html_icons = elementFromHtml(`
  <link
  href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
  rel="stylesheet"
  />
`),
  html_css = elementFromHtml(`
  <link
  rel="stylesheet"
  type="text/css"
  media="screen"
  href="https://s3.amazonaws.com/appforest_uf/f1676929227562x969640062837375600/video-popup.css"
  />
`),
  html_widget_icon = elementFromHtml(`
<img
id="video-widget-icon"
src="https://s3.amazonaws.com/appforest_uf/f1676674408488x143910637275504350/vouchtube-round-logo.svg"
alt="vouchtube video widget icon"
class="widget-icon-${window.VOUCHTUBE_CONFIG.position}"
onClick="openVideoPopup()"
/>
`),
  html_popup_container = elementFromHtml(`

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
page_head.append(html_fonts, html_icons, html_css),
  body_html.append(html_widget_icon, html_popup_container);
