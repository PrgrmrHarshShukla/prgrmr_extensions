console.log("CONTENT SCRIPT LOADED");

function toggleDark() {
  const ele = document.getElementsByTagName('embed');
  if (ele.length === 0) return;

  let filter = ele[0].style.filter || "";

  if (filter.includes("invert(100%)")) {
    // Remove it
    ele[0].style.filter = filter.replace(/invert\(100%\)/g, "").trim();
    console.log("🌙 Dark mode OFF:", ele[0]);
  } else {
    // Add it
    ele[0].style.filter = filter + " invert(100%)";
    console.log("🌞 Dark mode ON:", ele[0]);
  }
}

function toggleGoogleDoc() {
  // console.log('Inside Doc listener!!!\n');
  
  if(!document.title.includes('- Google Docs')) return;

  const classOfElementsToToggle = ['kix-appview-editor', 'docs-material companion-enabled', 'docs-ruler-mask', 'left-sidebar-container-content'];
  const idsOfElementsToToggle = ['docs-chrome', 'kix-horizontal-ruler-container']

  for(let i = 0; i < classOfElementsToToggle.length; i++) {
    const ele = document.getElementsByClassName(classOfElementsToToggle[i]);
    if (ele.length === 0) continue;

    let filter = ele[0].style.filter || "";

    if (filter.includes("invert(100%)")) {
      // Remove it
      ele[0].style.filter = filter.replace(/invert\(100%\)/g, "").trim();
      console.log("🌙 Dark mode OFF:", ele[0]);
    } else {
      // Add it
      ele[0].style.filter = filter + " invert(100%)";
      console.log("🌞 Dark mode ON:", ele[0]);
    }
  }
  // for(let i = 0; i < idsOfElementsToToggle.length; i++) {
  //   const ele = document.getElementById(idsOfElementsToToggle[i]);
  //   if (ele.length === 0) continue;

  //   let filter = ele[0].style.filter || "";

  //   if (filter.includes("invert(100%)")) {
  //     // Remove it
  //     ele[0].style.filter = filter.replace(/invert\(100%\)/g, "").trim();
  //     console.log("🌙 Dark mode OFF:", ele[0]);
  //   } else {
  //     // Add it
  //     ele[0].style.filter = filter + " invert(100%)";
  //     console.log("🌞 Dark mode ON:", ele[0]);
  //   }
  // }
}

function toggleGoogleSheet() {
  // console.log('Inside Sheet listener!!!\n');
  if(!document.title.includes('- Google Sheets')) return;

  const classOfElementsToToggle = ['docs-material companion-enabled'];
  const idsOfElementsToToggle = ['docs-editor']

  for(let i = 0; i < classOfElementsToToggle.length; i++) {
    const ele = document.getElementsByClassName(classOfElementsToToggle[i]);
    if (ele.length === 0) continue;

    let filter = ele[0].style.filter || "";

    if (filter.includes("invert(100%)")) {
      // Remove it
      ele[0].style.filter = filter.replace(/invert\(100%\)/g, "").trim();
      console.log("🌙 Dark mode OFF:", ele[0]);
    } else {
      // Add it
      ele[0].style.filter = filter + " invert(100%)";
      console.log("🌞 Dark mode ON:", ele[0]);
    }
  }

  for(let i = 0; i < idsOfElementsToToggle.length; i++) {
    const ele = document.getElementById(idsOfElementsToToggle[i]);
    if (!ele) continue;

    let filter = ele.style.filter || "";

    if (filter.includes("invert(100%)")) {
      // Remove it
      ele.style.filter = filter.replace(/invert\(100%\)/g, "").trim();
      console.log("🌙 Dark mode OFF:", ele);
    } else {
      // Add it
      ele.style.filter = filter + " invert(100%)";
      console.log("🌞 Dark mode ON:", ele);
    }
  }

}

function toggleTestWebsite() {
  // console.log('Inside Test Website listener!!!\n');
  const isTrickySSC = window.location.hostname.includes('trickyssc.com') || window.location.hostname.includes('www.trickyssc.com');

  if (!isTrickySSC) return;

  const classOfElementsToToggle = ['main', 'topbar'];
  const idsOfElementsToToggle = ['cwPlayer']

  for(let i = 0; i < classOfElementsToToggle.length; i++) {
    const ele = document.getElementsByClassName(classOfElementsToToggle[i]);
    if (ele.length === 0) continue;

    let filter = ele[0].style.filter || "";

    if (filter.includes("invert(100%)")) {
      // Remove it
      ele[0].style.filter = filter.replace(/invert\(100%\)/g, "").trim();
      console.log("🌙 Dark mode OFF:", ele[0]);
    } else {
      // Add it
      ele[0].style.filter = filter + " invert(100%)";
      console.log("🌞 Dark mode ON:", ele[0]);
    }
  }

  for(let i = 0; i < idsOfElementsToToggle.length; i++) {
    const ele = document.getElementById(idsOfElementsToToggle[i]);
    if (!ele) continue;

    let filter = ele.style.filter || "";

    if (filter.includes("invert(100%)")) {
      // Remove it
      ele.style.filter = filter.replace(/invert\(100%\)/g, "").trim();
      console.log("🌙 Dark mode OFF:", ele);
    } else {
      // Add it
      ele.style.filter = filter + " invert(100%)";
      console.log("🌞 Dark mode ON:", ele);
    }
  }


}

function toggleMasterFunction() {
  // console.log("Master function called!!!");


  // const element = document.querySelector("main") ||
  //                 document.querySelector("body") ||
  //                 document.querySelector("html");

  // if (!element) return;

  // // if (element.style.filter === "invert(1)") {
  // //   element.style.filter = "";
  // // } else {
  // //   element.style.filter = "invert(1)";
  // // }

  // // element.style.filter = "invert(100%)";
  // element.style.color = "white";
  // element.style.background = "black";

  const existing = document.getElementById("master-dark-overlay");

  if (existing) {
    existing.remove();
    return;
  }

  const overlay = document.createElement("div");
  overlay.id = "master-dark-overlay";

  Object.assign(overlay.style, {
    position: "fixed",
    inset: "0",
    width: "100vw",
    height: "100vh",
    backgroundColor: "white",
    mixBlendMode: "difference",
    pointerEvents: "none",
    zIndex: "2147483647"
  });

  document.documentElement.appendChild(overlay);
}

toggleDark();
toggleGoogleDoc();
toggleGoogleSheet();
toggleTestWebsite();
// toggleMasterFunction();


chrome.runtime.onMessage.addListener((request) => {
  console.log("Received message:", request);

  if (request.action === "master") {
    toggleMasterFunction();
  }
  else if (request.action === "applyDark") {
    toggleDark();
    toggleGoogleDoc();
    toggleGoogleSheet();
  }
});
