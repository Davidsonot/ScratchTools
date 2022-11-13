
if (window.location.href.includes("https://scratch.mit.edu/projects/")) {
  if (
    document.scratchtoolsTimer !== undefined &&
    document.scratchtoolsTimer !== null
  ) {
    var bar = document.createElement("div");
    bar.className = "timer scratchtools";
    bar.style.margin = "0";
    bar.style.marginTop = "7px";
    bar.style.marginLeft = "5px";
    document.querySelectorAll("div").forEach(function (el) {
      if (el.className.includes("controls_controls-container_")) {
        if (document.querySelector("div.timer.scratchtools") === null) {
          el.appendChild(bar);
          bar.textContent = "0 secs";
        }
      }
    });
  }
  ScratchTools.Scratch.vm.runtime.on("PROJECT_RUN_START", function () {
    if (document.querySelector("div.timer.scratchtools") === null) {
      var bar = document.createElement("div");
      bar.className = "timer scratchtools";
      bar.style.margin = "0";
      bar.style.marginTop = "7px";
      bar.style.marginLeft = "5px";
      document.querySelectorAll("div").forEach(function (el) {
        if (el.className.includes("controls_controls-container_")) {
          if (document.querySelector("div.timer.scratchtools") === null) {
            el.appendChild(bar);
            bar.textContent = "0 secs";
          }
        }
      });
    }
    document.scratchtoolsTimer = ScratchTools.Scratch.vm.runtime.currentMSecs;
  });
  ScratchTools.Scratch.vm.runtime.on("PROJECT_RUN_STOP", function () {
    document.scratchtoolsTimer = null;
    if (document.querySelector("div.timer.scratchtools") !== null) {
      document.querySelector("div.timer.scratchtools").remove();
    }
  });
  setInterval(getCurrentM, 50);
  function getCurrentM() {
    if (document.querySelector("div.timer.scratchtools") !== null) {
      if (document.scratchtoolsTimer !== undefined) {
        document.querySelector("div.timer.scratchtools").textContent = `${
          (ScratchTools.Scratch.vm.runtime.currentMSecs -
            document.scratchtoolsTimer) /
          1000
        } secs`;
      }
    }
  }
}function old() {
  var style = document.createElement("style");
  style.innerHTML = `
.oldtimey-mode_oldtimey-mode_3HvZw {
    position: absolute;
    width: 100%;
    height: 100%;
    background: transparent url(https://llk.github.io/scratch-gui/hotfix/totally-normal-2022/static/assets/2a95de3c6ac63c073266a3c914f5bae5.png) center center;
    background-size: 100% 100%;
    z-index: 500;
    pointer-events: none;
    background-filter: sepia(100%);
    -webkit-filter: sepia(100%);
}
* {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
div {
    display: block;
}
body {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
}
body {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
}
body {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
}
body {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
}
`;
  document.body.prepend(style);
  var div = document.createElement("div");
  div.className = "oldtimey-mode_oldtimey-mode_3HvZw";
  div.innerHTML = `<audio src="https://llk.github.io/scratch-gui/hotfix/totally-normal-2022/static/assets/8eb680be2b49c196972d47449c09c05c.mp3" autoplay="" loop=""></audio>`;
  document.body.prepend(div);
  document.querySelector("div#app").className =
    document.querySelector("div#app").className + " grayscaled";
  var style = document.createElement("style");
  style.innerHTML = `
    .grayscaled {
  -webkit-filter: grayscale(100%);
  -moz-filter: grayscale(100%);
  -ms-filter: grayscale(100%);
  filter: grayscale(100%);
}
`;
  document.querySelector("div#app").style.height = "100vh";
  document.body.prepend(style);
  document.querySelector(
    "#app > div > div.gui_menu-bar-position_3U1T0.menu-bar_menu-bar_JcuHF.box_box_2jjDp > div.menu-bar_main-menu_3wjWH > div.menu-bar_file-group_1_CHX > div:nth-child(1) > img"
  ).src =
    "https://llk.github.io/scratch-gui/hotfix/totally-normal-2022/static/assets/25cd56f3ff25cce57ab8e7fcac1cec97.svg";
}

function ninety() {
  var div = document.createElement("div");
  div.className = "nineties-mode_nineties-mode_3atEu";
  document.body.prepend(div);
  var style = document.createElement("style");
  style.innerHTML = `
body {
    filter: hue-rotate(40deg);
    height: 100vh;
}
.nineties-mode_nineties-mode_3atEu {
    position: absolute;
    width: 100%;
    height: 100%;
    background: transparent url(https://llk.github.io/scratch-gui/hotfix/totally-normal-2022/static/assets/481f24625c6709dd567d0b57bb597373.svg);
    z-index: 50;
    opacity: .2;
    pointer-events: none;
}
* {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
div {
    display: block;
}
`;
  document.body.appendChild(style);
  document.querySelector(
    "#app > div > div.gui_menu-bar-position_3U1T0.menu-bar_menu-bar_JcuHF.box_box_2jjDp > div.menu-bar_main-menu_3wjWH > div.menu-bar_file-group_1_CHX > div:nth-child(1) > img"
  ).src =
    "https://llk.github.io/scratch-gui/hotfix/totally-normal-2022/static/assets/2e4f01467d2e307fe2bfca65747c0331.svg";
}

function prehistoric() {
  var div = document.createElement("div");
  div.className = "prehistoric-mode_prehistoric-mode_30xo9";
  div.innerHTML = `<div class="prehistoric-mode_prehistoric-background_2xL8Y" style="background-position: 2826.94px 2269px;"></div><img class="prehistoric-mode_torch_2mPjO" src="https://llk.github.io/scratch-gui/hotfix/totally-normal-2022/static/assets/35a6aff5f4d65837fc6a3fa4cdc278b4.gif" style="left: 791.941px; top: 49px;">`;
  document.body.prepend(div);
  var style = document.createElement("style");
  style.innerHTML = `
.prehistoric-mode_torch_2mPjO {
    position: absolute;
    pointer-events: none;
    opacity: 80%;
    z-index: 50;
    left: --positionX;
    top: --positionY;
}
* {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
body {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
}
body {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
}
body {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
}
body {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
}
.prehistoric-mode_prehistoric-background_2xL8Y {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 90%;
    z-index: 50;
    pointer-events: none;
    background: transparent url(https://llk.github.io/scratch-gui/hotfix/totally-normal-2022/static/assets/83b0e69764aa20c3e41a391c60aed83d.png) center center;
    -webkit-animation: prehistoric-mode_jitter_1b-1L 2.5s linear infinite;
    animation: prehistoric-mode_jitter_1b-1L 2.5s linear infinite;
}
`;
  document.body.appendChild(style);
  document.querySelector(
    "img.menu-bar_scratch-logo_2uReV.menu-bar_clickable_1g3uo"
  ).src =
    "https://llk.github.io/scratch-gui/hotfix/totally-normal-2022/static/assets/0051f19c3035bdaca5117f973f571af0.svg";
  var img = document.querySelector("img.prehistoric-mode_torch_2mPjO");
  const onMouseMove = (e) => {
    img.style.left = e.pageX - 30 + "px";
    img.style.top = e.pageY - 230 + "px";
  };
  document.addEventListener("mousemove", onMouseMove);
}

function reset() {
  document.querySelector("div#app").className = document
    .querySelector("div#app")
    .className.replaceAll("grayscaled", "");
  document.querySelector(
    "#app > div > div.gui_menu-bar-position_3U1T0.menu-bar_menu-bar_JcuHF.box_box_2jjDp > div.menu-bar_main-menu_3wjWH > div.menu-bar_file-group_1_CHX > div:nth-child(1) > img"
  ).src =
    "https://scratch.mit.edu/static/assets/1e9652bec24bcaacf5285be19746a750.svg";
  var style = document.createElement("style");
  style.innerHTML = `
body {
    filter: hue-rotate(0deg);
    height: 100vh;
}
`;
  document.body.appendChild(style);
  if (
    document.querySelector("div.oldtimey-mode_oldtimey-mode_3HvZw") !== null
  ) {
    document.querySelector("div.oldtimey-mode_oldtimey-mode_3HvZw").remove();
  }
  if (
    document.querySelector("div.prehistoric-mode_prehistoric-mode_30xo9") !==
    null
  ) {
    document
      .querySelector("div.prehistoric-mode_prehistoric-mode_30xo9")
      .remove();
  }
  if (
    document.querySelector("div.nineties-mode_nineties-mode_3atEu") !== null
  ) {
    document.querySelector("div.nineties-mode_nineties-mode_3atEu").remove();
  }
}
waitforready();

ScratchTools.setDisable("april-fools", function () {
  reset();
  document.querySelector(".stmodes").remove();
});

function waitforready() {
  if (document.querySelector("div.menu-bar_main-menu_3wjWH") === null) {
    setTimeout(waitforready, 100);
  } else {
    if (document.querySelector("div.stmodes") === null) {
      var april = document
        .querySelector(
          "#app > div > div.gui_menu-bar-position_3U1T0.menu-bar_menu-bar_JcuHF.box_box_2jjDp > div.menu-bar_main-menu_3wjWH > div.menu-bar_file-group_1_CHX > div:nth-child(3)"
        )
        .cloneNode(true);
      april.className =
        "menu-bar_menu-bar-item_oLDa- menu-bar_hoverable_c6WFB stmodes";
      april.firstChild.firstChild.textContent = "Mode";
      april.onclick = function () {
        var div = document.createElement("div");
        div.className = "ReactModalPortal";
        div.innerHTML = `<div class="ReactModal__Overlay ReactModal__Overlay--after-open modal_modal-overlay_1Lcbx"><div class="ReactModal__Content ReactModal__Content--after-open modal_modal-content_1h3ll prompt_modal-content_1BfWj" tabindex="-1" role="dialog" aria-label="New Variable"><div class="box_box_2jjDp" dir="ltr" style="flex-direction: column; flex-grow: 1;"><div class="modal_header_1h7ps"><div class="modal_header-item_2zQTd modal_header-item-title_tLOU5">Change Mode</div><div class="modal_header-item_2zQTd modal_header-item-close_2XDeL"></div></div><div class="prompt_body_18Z-I box_box_2jjDp"><div class="prompt_label_tWjYZ box_box_2jjDp">Mode:</div><div class="box_box_2jjDp"><select class="modeSelectScratchTools">
<option value="default">Default</option>
<option value="ninety">Ninety</option>
<option value="old">Old Timey</option>
<option value="prehistoric">Prehistoric</option>
</select></div><div class="prompt_button-row_3Wc5Z box_box_2jjDp"><button class="prompt_ok-button_3QFdD"><span>OK</span></button></div></div></div></div></div>`;
        document.body.appendChild(div);
        document.querySelector("button.prompt_ok-button_3QFdD").onclick =
          function () {
            var select = document.querySelector(
              "select.modeSelectScratchTools"
            ).value;
            console.log(select);
            div.remove();
            if (select === "default") {
              reset();
            }
            if (select === "ninety") {
              reset();
              ninety();
            }
            if (select === "old") {
              reset();
              old();
            }
            if (select === "prehistoric") {
              reset();
              prehistoric();
            }
          };
      };
    }

    document
      .querySelector(
        "#app > div > div.gui_menu-bar-position_3U1T0.menu-bar_menu-bar_JcuHF.box_box_2jjDp > div.menu-bar_main-menu_3wjWH"
      )
      .appendChild(april);
  }
}if (window.location.href.startsWith("https://scratch.mit.edu/projects/")) {
  const waitForShareDate = new MutationObserver(checkTrending);
  waitForShareDate.observe(document.querySelector("body"), {
    attributes: true,
    childList: true,
    subtree: true,
  });
  async function checkTrending() {
    if (document.querySelector("div.share-date") !== null) {
      waitForShareDate.disconnect();
      var response = await fetch(
        "https://api.scratch.mit.edu/explore/projects?limit=40&offset=0&language=en&mode=trending&q=*"
      );
      var data = await response.json();
      data.forEach(function (el, i) {
        if (
          el.id.toString() ===
          window.location.href
            .replace("https://scratch.mit.edu/projects/", "")
            .replaceAll("/", "")
        ) {
          if (document.querySelector(".scratchtoolsTrendingInfo") === null) {
            var span = document.createElement("span");
            span.textContent = ` • #${i + 1} on Trending`;
            span.className = "scratchtoolsTrendingInfo";
            document.querySelector("div.share-date").appendChild(span);
            ScratchTools.setDisable("check-if-trending", function () {
              document.querySelector(".scratchtoolsTrendingInfo").remove();
            });
          }
        }
      });
    }
  }
  checkTrending();
}if (
  window.location.href.startsWith("https://scratch.mit.edu/projects/") &&
  window.location.href.includes("/editor")
) {
  if (document.blockLog === undefined) {
    document.blockLog = "ok";
    document.addEventListener("keydown", function (event) {
      keydown(event);

      function keydown(e) {
        if (e.keyCode == 76 && e.shiftKey && e.ctrlKey) {
          if (displayBlockLog) {
            if (document.querySelector("#mydiv") === null) {
              addProjectLog();
            } else {
              document.querySelector("#mydiv").remove();
            }
            if (e.preventDefault) {
              e.preventDefault();
            } else {
              return false;
            }
          }
        }
      }
    });
  }
  function addProjectLog() {
    var div = document.createElement("div");
    div.innerHTML = `
<div id="mydivheader">Block Log<div aria-label="Close" class="close-button_close-button_lOp2G close-button_large_2oadS closescratchtools" role="button" tabindex="0"><img class="close-button_close-icon_HBCuO" src="/static/assets/cb666b99d3528f91b52f985dfb102afa.svg"></div></div>
<div class="content">
<span style="opacity: 0.5;"><i>Empty</i></span>
</div>
`;
    div.querySelector(".closescratchtools").onclick = function () {
      div.remove();
    };
    div.id = "mydiv";
    document.body.appendChild(div);
    var style = document.createElement("style");
    style.innerHTML = `
.closescratchtools {
float: right;
position: absolute;
top: 0.5rem;
right: 0.5rem;
}
.content {
padding: 3.5%;
}
#mydiv {
position: absolute;
z-index: 9999;
background-color: #f1f1f1;
border: 1px solid #d3d3d3;
text-align: left;
left: 50%;
top: 50%;
height: 50%;
width: 20%;
overflow: scroll;
border-radius: 10px;
box-shadow: 0px 0px 8px #8c8c8c;
}
#mydivheader {
font-weight: bold;
padding: 0.8rem;
cursor: move;
z-index: 10000;
background-color: #ff9f00;
color: #fff;
}
.scratchtoolsBorder {
border-bottom: 2px dotted gray;
}
`;
    document.body.appendChild(style);
    dragElement(document.getElementById("mydiv"));

    function dragElement(elmnt) {
      var pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;
      if (document.getElementById(elmnt.id + "header")) {
        document.getElementById(elmnt.id + "header").onmousedown =
          dragMouseDown;
      } else {
        elmnt.onmousedown = dragMouseDown;
      }

      function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
      }

      function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        elmnt.style.top = elmnt.offsetTop - pos2 + "px";
        elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
      }

      function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
      }
    }
  }

  function logEvents() {
    var div = document.querySelector("#mydiv");
    if (div !== null) {
      while (div.querySelector(".content").firstChild) {
        div.querySelector(".content").firstChild.remove();
      }
      ScratchTools.Scratch.blockly
        .getMainWorkspace()
        .undoStack_.forEach(function (el) {
          var p = document.createElement("span");
          p.textContent = el.type.toUpperCase();
          p.className = "scratchtoolsBorder";
          div.querySelector(".content").prepend(p);
          p.style.display = "block";
          p.style.marginBottom = "2%";
        });
      if (
        ScratchTools.Scratch.blockly.getMainWorkspace().undoStack_.length === 0
      ) {
        var span = document.createElement("span");
        span.innerHTML = "<i>Empty</i>";
        div.querySelector(".content").appendChild(span);
        span.style.opacity = "0.5";
      }
    }
  }

  setInterval(logEvents, 250);
}
var displayBlockLog = true;

ScratchTools.setDisable("block-log", function () {
  document.querySelector("#mydiv").remove();
  displayBlockLog = false;
});
