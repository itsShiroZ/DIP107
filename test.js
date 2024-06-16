const initSlider =() => {
    const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button"); 
    const imageList = document.querySelector(".slider-wrapper .image-list");
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;
    const slideScrollbar = document.querySelector(".container .slider-scrollbar");
    const scrollbarThumb = document.querySelector(".scrollbarThumb");

    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id ==="prev-slide" ? -1 : 1;
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({left: scrollAmount, behavior : "smooth"});
        });
    });

    const handleSlideButtons = () => {
        slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "block";
        slideButtons[1].style.display = imageList.scrollLeft <= maxScrollLeft ? "none" : "block";
    }

    const updateScrollThumbPostion = () => {
        const scrollPosition = imageList.scrollLeft;
        const thumbPosition = (scrollPosition / maxScrollLeft) * (slideScrollbar.clientWidth - scrollbarThumb.offsetWidth);
        scrollbarThumb.style.left = `${thumbPosition}px`;
    }

    imageList.addEventListener("scroll", () => {
        handleSlideButtons();
        updateScrollThumbPostion();
    });
}

window.addEventListener("load", initSlider);