/*
matrice_qui_contient_tout_ce_qu_il_faut est une matrice qui contient
	un div pour les carre
	leur texte associe qui est dans un div
	un index qui bouge pas pour toujours bien afficher
	un index qui change pour bien tout positionner
*/

/*
	un mouse_pos qui contient la position d'un click a un click donne pour note la modif
	a note que je ne travaille que sur l'axe des y donc je ne prend que celui la
*/
let matrice_qui_contient_tout_ce_qu_il_faut=[]
let mouse_pos;
window.addEventListener("load", event => {
	console.log("loaded");
	main();
});
/*
	fonctionne qui recupere un mouse a un moment donner
*/
const recuperer_pos=event=>
{	
		mouse_pos=event.y;		

}
/*
	fonction qui deplace les carre selon le changelment note grace a la capture du mouse_pos a la mousedown et lors du relachement
	celui a afficher contient entier pour voir celui qui aura une opacite noraml les autres seont a 0.5 int
	nombre a afficher pour la division de cleui a afficher int
	changement nous permet de connaitre la modif c'est un int
	index juste pour ne pas trop ecrire il contient l'index courant 
*/
const deplace_up= event=>
{		
		let celui_a_afficher=0;
		let nombre_afficher=0;
		let changement = (event.y-mouse_pos) /90	;
		mouse_pos=event.y;
		for (var i = matrice_qui_contient_tout_ce_qu_il_faut.length - 1; i >= 0; i--) {
			let index = matrice_qui_contient_tout_ce_qu_il_faut[i][2];
			index += changement;
			matrice_qui_contient_tout_ce_qu_il_faut[i][0].style.left =  ( index * (-index *index  +100 ) * 0.3  ) + "px";
			matrice_qui_contient_tout_ce_qu_il_faut[i][1].style.left = ( index *( -index * index+100) * 0.3+ 50 ) + "px";
			matrice_qui_contient_tout_ce_qu_il_faut[i][0].style.top = ( index * 50  ) + "px";
			matrice_qui_contient_tout_ce_qu_il_faut[i][1].style.top = ( index * 50  ) + "px";
			if(( index * ( - index *  index + 100 ) * 0.3 ) > -2)
					{
						matrice_qui_contient_tout_ce_qu_il_faut[i][1].textContent = "je suis le numero "+(matrice_qui_contient_tout_ce_qu_il_faut[i][3]+1);
						celui_a_afficher += matrice_qui_contient_tout_ce_qu_il_faut[i][3];
						nombre_afficher++;
					}
			else
					matrice_qui_contient_tout_ce_qu_il_faut[i][1].textContent = "";
			matrice_qui_contient_tout_ce_qu_il_faut[i][1].style.opacity =  "0.5";	
			matrice_qui_contient_tout_ce_qu_il_faut[i][0].style.opacity = "0.5";	
			matrice_qui_contient_tout_ce_qu_il_faut[i][0].style.WebkitTransition = "0.5s"	
			matrice_qui_contient_tout_ce_qu_il_faut[i][1].style.WebkitTransition = "0.5s"		
			/*
					WebkitTransition c'est pour faire pus jolie les transition
			*/
	
		}
	

		matrice_qui_contient_tout_ce_qu_il_faut[parseInt(celui_a_afficher/nombre_afficher)][0].style.opacity="1"
		matrice_qui_contient_tout_ce_qu_il_faut[parseInt(celui_a_afficher/nombre_afficher)][1].style.opacity="1"


		}

/*
	ici va etre crreer la matrice selon un algo simple pour affiche les cases la ou il faut
	POsy c'est leur postion en x
	Poqx leur postion en y 
	eleemnt2 est le premier div il contient un petit carre fixe selon taille qui est une string 
	text le deuxieme qui contient du text
	Apres en push le element div index dans un tableau 

*/

const main = event => {
	console.log("MAIN");

	for(let index = 0; index < 10; ++index) {
		let taille = "20px";
		let Posx = - index * index + 100;
		let Posy = index * 50 + 10;
		let element2=document.createElement("div");
		document.body.appendChild(element2); 
		element2.style.backgroundColor = "#FF0000";
		element2.style.width = taille;
		element2.style.height = taille;
		element2.style.position = "absolute";
		element2.style.padding = "0px";
		element2.style.left = (index*Posx*0.3)+"px";
		if((index*Posx*0.3) > 110 && (index * Posx * 0.3 ) < 115)
					element2.style.opacity= "1";
		else		
				element2.style.opacity = "0.5";
		element2.style.top = Posy + "px";
		element2.style.position = taille;
		let text = document.createElement("div");
		document.body.appendChild(text); 
		text.style.width = "120px";
		text.style.height = taille;
		text.style.position = "absolute";
		text.style.left=(index*Posx*0.3+50)+"px";
		if(index*Posx*0.3>-1)
				text.textContent="je suis le numero "+(index+1);

		text.style.top=Posy+"px";
		text.style.position=taille;

		matrice_qui_contient_tout_ce_qu_il_faut.push([element2, text,index,index])

	}
	
	addEventListener("mousedown",recuperer_pos)
	addEventListener("mousemove",deplace_up)	

	
}








