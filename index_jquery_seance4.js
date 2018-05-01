var leftposition=0;


// commence les exercices de la séance 4
$(document).ready(function(){ // ces codes sont obligatoires
// au début, le mask est caché
$(".mask").hide();
// Q1: Sur la page d'accueil de votre site de réservation, augmentez la taille de police du prix quand la souris passe dessus (et revenez à la taille normale quand la souris n'est plus dessus):
// différence entre mouseover/ mouseout et mouseenter/ mouseleave https://api.jquery.com/mouseover/
$(".price")
  .mouseenter(function() {
    $( this ).css('font-size','150%');
  })
  .mouseleave(function() {
    $( this ).css('font-size','100%');
  });
 
// Q3: déclenchez l'apparition progressive (en 500 millisecondes) du masque de la question précédente lors d'un clic sur n'importe quelle photo de la page.
$(".natureStone").on("click", function(){
$(".mask").show(500);
});
// Q4: un clic sur la croix permette de faire disparaître le masque (ainsi que la croix). Vue que le croix est enfant du mask(c.f. html), on choisit seulement le mask à cacher.
$(".croix").on("click", function(){
$(".mask").hide();
});

$(".natureStone").on("click", function(){
	$(".natureStone").css('display','block');
	$(".natureStone").css('margin','auto');
	$(".natureStone").css('width','100%');
});
// Q5: La photo en taille réelle doit disparaître en même temps que le masque et la croix quand on clique sur la croix.
$(".croix").on("click", function(){
$(".mask, .natureStone").hide();
});

// seance 6: creer un slide
$(".slide_img").on("click",function(){
	leftposition= leftposition-700; 
	$(".slide_imgs").animate({
        left:leftposition+"px"


	});
});


}); // ces codes sont à la fin
