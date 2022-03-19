// les images doivent toutes êtres stockées dans le même dossier dans une meme liste

let listeOfAllImages = ["assets/Imgs/Carrousel/IMG1.png", "assets/Imgs/Carrousel/IMG2.png", "assets/Imgs/Carrousel/IMG3.png", "assets/Imgs/Carrousel/IMG4.png", "assets/Imgs/Carrousel/IMG5.png", "assets/Imgs/Carrousel/IMG6.png", "assets/Imgs/Carrousel/IMG7.png", "assets/Imgs/Carrousel/IMG8.png",]
let pointeur = 0; // initialise le pointeur
let images = document.querySelector("#contain-img-slider"); // get l'emplacement du slider
let init = images.style.backgroundImage = "url(" + listeOfAllImages[pointeur] + ")"; //init image une


function ChangeImageRight(){
    pointeur++; // incrémente le pointeur de 1
    images.style.backgroundImage = "url(" + listeOfAllImages[pointeur] + ")"; //change le bg 
    
    if (pointeur == 8) {
        images.style.backgroundImage = "url(" + listeOfAllImages[pointeur=0] + ")";
    } else {

    }

}
function ChangeImageLeft(){
    pointeur--; // décrémente le pointeur de 1
    images.style.backgroundImage = "url(" + listeOfAllImages[pointeur] + ")"; //change le background

    if (pointeur == -1) {
        images.style.backgroundImage = "url(" + listeOfAllImages[pointeur=7] +")";
    } else {

    }

}

