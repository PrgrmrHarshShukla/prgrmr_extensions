
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


toggleDark();

chrome.runtime.onMessage.addListener((request) => {
  toggleDark();
});
