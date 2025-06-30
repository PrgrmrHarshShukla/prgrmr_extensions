// test.js

(function () {
  const ele = document.getElementsByTagName('embed');

  if (ele.length > 0) {
    ele[0].style.filter = (ele[0].style.filter || '') + ' invert(100%)';
    console.log("✅ Found <embed> and applied filter:", ele[0]);
  } else {
    console.log("⚠️ No <embed> element found on the page.");
  }
})();
