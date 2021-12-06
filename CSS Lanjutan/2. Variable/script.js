const button = document.querySelector("button");
const html = document.querySelector("html");

// ketika tombol di clik
button.addEventListener("click", function () {
  // cek color mode, lalu ubah
  if (html.dataset.colorMode === "light") {
    html.dataset.colorMode = "dark";
    this.textContent = "light Mode";
  } else {
    html.dataset.colorMode = "light";
    this.textContent = "dark mode";
  }
});

// control
const padding = documnet.querySelector("#padding");
padding.addEventListener("mousemove", function () {
  document.documentElement.style.setProperty("--box-padding", this.value + "px");
});
