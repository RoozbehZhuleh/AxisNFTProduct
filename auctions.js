const itemTitle = document.querySelector(".item--right__title__text");
const itemImage = document.querySelector(".hero__image");
const likesNumber = document.querySelector(".likes--number");
const countdown = document.querySelector(".countdown-timer");
const bidEth = document.querySelector(".bid-eth");

document.querySelector(".auctions__item--1").addEventListener("click", function(){

    itemTitle.innerHTML = document.querySelector(".auctions--1__title--text").innerHTML;

    itemImage.setAttribute("src", "./assets/axies-images/03_Live Auctions/card-item8.jpg");

    likesNumber.innerHTML = document.querySelector(".auctions--1--likes").innerHTML;

    countdown.innerHTML = document.querySelector(".timer1").innerHTML;

    bidEth.innerHTML = document.querySelector(".item--1--eth").innerHTML;
});



document.querySelector(".auctions__item--2").addEventListener("click", function(){

    itemTitle.innerHTML = document.querySelector(".auctions--2__title--text").innerHTML;

    itemImage.setAttribute("src", "./assets/axies-images/03_Live Auctions/image-box-21.jpg");

    likesNumber.innerHTML = document.querySelector(".auctions--2--likes").innerHTML;

    countdown.innerHTML = document.querySelector(".timer2").innerHTML;

    bidEth.innerHTML = document.querySelector(".item--2--eth").innerHTML;
});


document.querySelector(".auctions__item--3").addEventListener("click", function(){

});




