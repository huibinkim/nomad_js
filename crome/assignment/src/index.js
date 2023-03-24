// <⚠️ DONT DELETE THIS ⚠️>
// import "style.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/
const title = document.querySelector("h2");

window.onresize = function () {
  const widthSize = window.innerWidth;
  title.style.color = "#ffffff";
  if (widthSize <= 700) {
    document.body.style.backgroundColor = colors[0];
  } else if (widthSize > 700 && widthSize <= 900) {
    document.body.style.backgroundColor = colors[1];
  } else if (widthSize > 900 && widthSize <= 1200) {
    document.body.style.backgroundColor = colors[2];
  }
};
const superEventHandler = function () {
  function onMouseOver() {
    title.innerText = "the mouse is here";
    title.style.color = colors[0];
  }
  function onMouseLeave() {
    title.innerText = "the mouse is gone";
    title.style.color = colors[1];
  }
  function onResize() {
    title.innerText = "window size is changed";
    title.style.color = colors[2];
  }
  function onMouseRight() {
    title.innerText = "mouse click right";
    title.style.color = colors[3];
  }
  title.addEventListener("mouseover", onMouseOver);
  title.addEventListener("mouseleave", onMouseLeave);
  window.addEventListener("resize", onResize);
  window.addEventListener("contextmenu", onMouseRight);
};
superEventHandler();
