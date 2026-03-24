document.addEventListener("DOMContentLoaded", () => {
    let miCarusel = new Carousel("caruselPrincipal");
    miCarusel.init();
});

class Carousel {
    constructor(carouselId, tickTimeInSeconds = 3) {
        this.carouselHolder = document.getElementById(carouselId);
        this.track = this.carouselHolder.querySelector(".track");
        this.slides = [...this.track.querySelectorAll(".slide")];
        this.minLimit = 0;
        this.maxLimit = this.slides.length - 1;
        this.currentIndex = 0;
        this.tickTime = tickTimeInSeconds * 1000;
        this.tickerId = null;
        this.direction = 1;
    }

    init() {
        this.generateNavigationUI();
        this.tick();
    }

    tick() {
        this.tickerId = setTimeout(() => {
            this.moveNext();
            this.tick();
        }, this.tickTime);
    }

    moveNext() {
        let tmpNewIndex = this.currentIndex + this.direction;
        if (tmpNewIndex > this.maxLimit) {
            this.direction = -1;
            tmpNewIndex = this.maxLimit - 1;
        } else if (tmpNewIndex < this.minLimit) {
            this.direction = 1;
            tmpNewIndex = this.minLimit + 1;
        }
        this.moveTo(tmpNewIndex);
    }

    moveTo(newIndex) {
        this.currentIndex = newIndex;
        this.track.style.left = `${-100 * this.currentIndex}vw`;
    }

    generateNavigationUI() {
        const btnLeft = document.createElement("button");
        const btnRight = document.createElement("button");

        btnLeft.classList.add("carousel-btn", "btnleft");
        btnLeft.innerHTML = "&lt;";
        btnRight.classList.add("carousel-btn", "btnright");
        btnRight.innerHTML = "&gt;";

        btnLeft.onclick = () => {
            this.direction = -1;
            this.moveNext();
        };

        btnRight.onclick = () => {
            this.direction = 1;
            this.moveNext();
        };

        this.carouselHolder.appendChild(btnLeft);
        this.carouselHolder.appendChild(btnRight);
    }
}