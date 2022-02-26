// replace a class 
if (outerWidth < 1560) {
    console.log(outerWidth, "largeur")
    console.log(document.querySelector(' section > div.image-entry').className="img-entry-second"); 
} else {
    console.log("no !")
}

if (outerHeight < 820 & outerWidth < 520) {
    document.querySelector('.contain-button-link-menu').innerHTML = "";
} else {
    console.log("no");
}
