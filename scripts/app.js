// les images doivent toutes êtres stockées dans le même dossier dans une meme liste

var listeOfAllImages = ["assets/Imgs/Carrousel/IMG1.png", "assets/Imgs/Carrousel/IMG2.png", "assets/Imgs/Carrousel/IMG3.png", "assets/Imgs/Carrousel/IMG4.png", "assets/Imgs/Carrousel/IMG5.png", "assets/Imgs/Carrousel/IMG6.png", "assets/Imgs/Carrousel/IMG7.png", "assets/Imgs/Carrousel/IMG8.png",]
var pointeur = 0;
var images = document.querySelector("#contain-img-slider");
let init = images.style.backgroundImage = "url(" + listeOfAllImages[pointeur] + ")"; //init image one


function ChangeImageRight(){
    pointeur++;
    console.log(pointeur);
    images.style.backgroundImage = "url(" + listeOfAllImages[pointeur] + ")"; //change le bg 

    if (pointeur > listeOfAllImages.length-2) { // retourne au début du slide
        pointeur = -1;
        init;
    } else {
    }
}
function ChangeImageLeft(){
    pointeur--;
    console.log(pointeur);
    images.style.backgroundImage = "url(" + listeOfAllImages[pointeur] + ")";

    if (pointeur <= -1) { 
        pointeur = listeOfAllImages.length-1
        images.style.backgroundImage = "url(" + listeOfAllImages[pointeur] + ")";
    } else {
    }
}
