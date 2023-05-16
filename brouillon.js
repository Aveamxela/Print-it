const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{ 
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
//Récupération des flèches
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');

//Récupération des bullets points
const containerDots = document.querySelector('.dots');

// Boucle qui va parcourir le tableau 'slides'//
for (let i = 0; i < slides.length ; i++){
	//Ajout balise 'span' à chaque élément//
	const dot = document.createElement ('span');
	//Ajout class 'dot' aux divs//
	dot.className = 'dot';
	//Ajout des balises à 'containerDots'//
	containerDots.appendChild(dot);
}
//Récupération des bullets points créés//
//Sélection de tous les éléments ayant la classe 'dot'//
const dots = document.querySelectorAll('.dot');
//Sélection du premier élement de la NodeList en utilisant l'indice '[O]'//
//Ajout de la classe 'dot_selected' au premier élément de la sélection
dots[0].classList.add('dot_selected');

//Création variable slide actuelle//
let currentSlide = 0;

function UpdateCarouselUI(current){
	//Récupération image et texte//
	const banner = document.querySelector(".banner-img");
	const textBanner = document.querySelector("p");
	//Récupération du nom de fichier de l'img et légende de la slide actuelle
	const currentImage = slides[current].image;
	const currentText = slides[current].tagLine;
	//Change l'img et le txt en fonction de la slide actuelle/
	banner.src = `./assets/images/slideshow/${currentImage}`;
 	textBanner.innerHTML = currentText;
	//boucle qui itère sur chaque élément'item' de la liste 'dots'//
	//pour vérifier s'il est égal à l'indice de la slide actuelle ('current')//
	dots.forEach((item,index) => {
		if (index === current){
			item.classList.add("dot_selected");
		}
		else {
			item.classList.remove("dot_selected");
		}
	})};
	//fonction appellée avec l'argument 'currentSlide'
	//La fonction sera donc appelée avec l'index de la premiere slide (O).
	UpdateCarouselUI(currentSlide);

//Création fonction prochaine slide//
arrowRight.addEventListener("click",() => {
	if (currentSlide < slides.length - 1){
		currentSlide++;
	}
	else {
		currentSlide = 0;
	}
	UpdateCarouselUI(currentSlide);
})
//Création fonction slide précédente//
arrowLeft.addEventListener ("click", () => {
	if (currentSlide <= 0) {
		currentSlide = slides.length - 1;
	}
	else {
		currentSlide--;
	}
	UpdateCarouselUI(currentSlide);
})
