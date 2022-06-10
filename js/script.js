let saturate = document.getElementById("saturate");
let contrast = document.getElementById("contrast");
let brightness = document.getElementById("brightness");
let sepia = document.getElementById("sepia");
let grayscale = document.getElementById("grayscale");
let blurFilter = document.getElementById("blur");
let hueRotate = document.getElementById("hue-rotate");

let btnDownload = document.getElementById("btn-download");
let btnReset = document.getElementById("btn-reset");

let boxImg = document.querySelector(".box-img");
let img = document.getElementById("img");
let uploade = document.getElementById("uploade");
uploade.accept = "image/*";

// G E T     I M A G E
window.addEventListener("load", function () {
  btnDownload.style.display = "none";
  btnReset.style.display = "none";
  boxImg.style.display = "none";
});

uploade.onchange = function () {
  resetValue();
  btnDownload.style.display = "block";
  btnReset.style.display = "block";
  boxImg.style.display = "block";
  let file = new FileReader();
  file.readAsDataURL(uploade.files[0]);
  file.addEventListener("load", function () {
    img.src = file.result;
  });
};

// S E T     F I L T E R S
let filters = document.querySelectorAll("ul li input");
filters.forEach((filter) =>
  filter.addEventListener("input", function () {
    img.style.filter = `
        saturate(${saturate.value}%)
        contrast(${contrast.value}%)
        brightness(${brightness.value}%)
        sepia(${sepia.value}%)
        grayscale(${grayscale.value})
        blur(${blurFilter.value}px)
        hue-rotate(${hueRotate.value}deg)
        `;
  })
);

// R E S E T     V A L U E
function resetValue() {
  img.style.filter = "none";
  saturate.value = "100";
  contrast.value = "100";
  brightness.value = "100";
  sepia.value = "0";
  grayscale.value = "0";
  blurFilter.value = "0";
  hueRotate.value = "0";
}

btnReset.addEventListener("click", resetValue);

// D O W N L O A D
btnDownload.addEventListener("click", function () {
  btnDownload.href = img.src;
});
