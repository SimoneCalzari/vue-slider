
const { createApp } = Vue;

createApp({
    data() {
        return {
            slides: [
                {
                    image: 'img/01.webp',
                    title: "Marvel's Spiderman Miles Morale",
                    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                }, {
                    image: 'img/02.webp',
                    title: 'Ratchet & Clank: Rift Apart',
                    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                }, {
                    image: 'img/03.webp',
                    title: 'Fortnite',
                    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                }, {
                    image: 'img/04.webp',
                    title: 'Stray',
                    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                }, {
                    image: 'img/05.webp',
                    title: "Marvel's Avengers",
                    text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
                }
                ],
            currentItem: 0,
            checkAutoPlay: false,
            playFnVar: undefined,
        }
    },
    methods: {
        // FN VAI INDIETRO NELLE THUMB
        prev() {
            this.currentItem--;
            if (this.currentItem < 0) {
                this.currentItem = this.slides.length - 1;
            }
        },
        // FN VAI AVANTI NELLE THUMB
        next() {
            this.currentItem++;
            if (this.currentItem > this.slides.length - 1 ) {
                this.currentItem = 0;
            }
        },
        // FN IMMAGINE ATTIVA GRANDE
        activateMainImg(index) {
            this.currentItem = index;
        },
        // FN IMMAGINE ATTIVA TRA LE THUMBS
        showActiveThumb(index) {
            if (this.currentItem === index) {
                return 'active';
            }
            return '';
        },
        // LOGICA AUTOPLAY
        autoPlay() {
            if (this.checkAutoPlay === false) {
                this.playFnVar = setInterval(this.next, 3000);
                this.checkAutoPlay = true;
                return;
            } 
            clearInterval(this.playFnVar);
            this.checkAutoPlay = false;
        },
    },
    // PRIMO AUTOPLAY 
    mounted() {
        this.autoPlay();
    }
}).mount('#app');