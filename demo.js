let quotes = ['I had been told that the training procedure with cats was difficult. It’s not. Mine had me trained in two days.',
                'Cats are intended to teach us that not everything in nature has purpose.',
                'The cat is above all things, a dramatist.',
                'I used to love dogs until I discovered cats.']

let images = ['./images/img-1.jpg', './images/img-2.jpg', './images/img-3.jpg', './images/img-4.jpg'];

function displayText(){
    let h1 = document.querySelector('h1');
    let index = Math.floor(Math.random() * quotes.length);
    h1.innerHTML = quotes[index];
    console.log(index);
}

function displayImage(){
    let img = document.querySelector('.img-animal');
    let index = Math.floor(Math.random() * quotes.length);
    img.src = images[index];
}


function change (callback, callback_2){
    callback();
    callback_2();
}

let btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    change(displayImage, displayText);
})