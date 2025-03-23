        document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".grid-img");
    const lightbox = document.createElement("div");
    lightbox.classList.add("lightbox");
    document.body.appendChild(lightbox);

    const img = document.createElement("img");
    lightbox.appendChild(img);

    const closeButton = document.createElement("button");
    closeButton.innerHTML = "&times;";
    closeButton.classList.add("lightbox-close");
    lightbox.appendChild(closeButton);

    const prevButton = document.createElement("button");
    prevButton.innerHTML = "&#10094;"; // Flèche gauche (Précédent)
    prevButton.classList.add("lightbox-prev");
    lightbox.appendChild(prevButton);

    const nextButton = document.createElement("button");
    nextButton.innerHTML = "&#10095;"; // Flèche droite (Suivant)
    nextButton.classList.add("lightbox-next");
    lightbox.appendChild(nextButton);

    let currentIndex = 0;

    function showImage(index) {
        if (index < 0) index = images.length - 1;
        if (index >= images.length) index = 0;
        currentIndex = index;
        img.src = images[currentIndex].src;
        lightbox.classList.add("active");
    }

    images.forEach((image, index) => {
        image.addEventListener("click", function () {
            showImage(index);
        });
    });

    closeButton.addEventListener("click", function () {
        lightbox.classList.remove("active");
    });

    prevButton.addEventListener("click", function () {
        showImage(currentIndex - 1);
    });

    nextButton.addEventListener("click", function () {
        showImage(currentIndex + 1);
    });

    lightbox.addEventListener("click", function (event) {
        if (event.target !== img && event.target !== prevButton && event.target !== nextButton) {
            lightbox.classList.remove("active");
        }
    });

    img.addEventListener("click", function (event) {
    const clickX = event.clientX - img.getBoundingClientRect().left;
    const imgWidth = img.clientWidth;

    if (clickX < imgWidth / 2) {
        showImage(currentIndex - 1); // Côté gauche → Image précédente
    } else {
        showImage(currentIndex + 1); // Côté droit → Image suivante
    }
});

});