const backToTopButton = document.querySelector("#back-to-top");

backToTopButton.addEventListener("click", function () {
  window.scrollTo(0, 0);
});
window.addEventListener("scroll", function () {
  if (window.scrollY > window.innerHeight) {
    backToTopButton.classList.remove("hidden");
  } else {
    backToTopButton.classList.add("hidden");
  }
});
const cityImage = document.querySelector("#edinburgh .city-image");
const thumbnails = document.querySelectorAll("#edinburgh .thumbnail");
thumbnails.forEach(function (thumbnail) {
  thumbnail.addEventListener("click", function () {
    cityImage.src = thumbnail.src;
    if (thumbnail.id === "coffee-picture") {
      cityImage.style.objectPosition = "center 75%";
    } else {
      cityImage.style.objectPosition = "center 56%";
    }
    thumbnails.forEach(function (image) {
      image.classList.remove("active");
    });

    thumbnail.classList.add("active");
  });
});
const budapestImage = document.querySelector("#budapest .city-image");
const budapestThumbnails = document.querySelectorAll("#budapest .thumbnail");
budapestThumbnails.forEach(function (thumbnail) {
  thumbnail.addEventListener("click", function () {
    budapestImage.src = thumbnail.src;
    if (thumbnail.id === "buda") {
      budapestImage.style.objectPosition = "center 44%";
    } else if (thumbnail.id === "library") {
      budapestImage.style.objectPosition = "center 60%";
    } else {
      budapestImage.style.objectPosition = "center 56%";
    }
    budapestThumbnails.forEach(function (image) {
      image.classList.remove("active");
    });
    thumbnail.classList.add("active");
  });
});
const fezImage = document.querySelector("#fez .city-image");
const fezThumbnails = document.querySelectorAll("#fez .thumbnail");
fezThumbnails.forEach(function (thumbnail) {
  thumbnail.addEventListener("click", function () {
    fezImage.src = thumbnail.src;
    if (thumbnail.id === "cats") {
      fezImage.style.objectPosition = "center 65%";
    } else {
      fezImage.style.objectPosition = "center 56%";
    }
    fezThumbnails.forEach(function (image) {
      image.classList.remove("active");
    });
    thumbnail.classList.add("active");
  });
});
const nyImage = document.querySelector("#new-york .city-image");
const nyThumbnails = document.querySelectorAll("#new-york .thumbnail");
nyThumbnails.forEach(function (thumbnail) {
  thumbnail.addEventListener("click", function () {
    nyImage.src = thumbnail.src;
    nyThumbnails.forEach(function (image) {
      image.classList.remove("active");
    });
    thumbnail.classList.add("active");
  });
});
