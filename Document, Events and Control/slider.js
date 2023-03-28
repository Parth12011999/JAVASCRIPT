
let flag = 0; //taking variable for counter

function Controller(x) {
    flag = flag + x; // slide number + X(x can be -1 or +1 depend upon button you pressed)
    slideShow(flag); //slide function
    slideNum(flag); // numerbers change function
    slideIndicator(flag) // indicator function
}

function slideNum(num){
    let slides = document.getElementsByClassName('slide'); //Array Store

    let k = num + 1; // for making counter

    document.getElementById('number').innerHTML = k + "/" + slides.length //write in document
    // console.log( k + "/" + slides.length);
}

function slideIndicator(num) {
    let indicators = document.getElementsByClassName('indicator'); //array store
    // console.log(indicators);

    for (const j of indicators) {
        j.classList.remove('active'); //first remove active class from each indicator
    }

    indicators[num].classList.add('active'); //add active class as per slide number
}

function slideShow(num) {
    let slides = document.getElementsByClassName('slide'); //array store

    if (num == slides.length) {  //condition for not letting counter more than slides length
        flag = 0;
        num = 0;
    }

    if (num < 0) {  //condtion for not letting counter less than 0
        flag = slides.length-1;
        num = slides.length-1
    }

    for (let y of slides)
    {
        y.style.display  = "none"; //making all slides display none
    }

    slides[num].style.display = "block";  //making display block according to slide number

}

slideShow(flag);
slideNum(flag);
slideIndicator(flag);
