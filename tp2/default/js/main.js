window.addEventListener("load", event => {
	console.log("loaded");
	main();
});

const cercle = (p1,p2 ,p3 )=>
{	
		let x1=((p3.x)*(p3.x)-(p2.x)*(p2.x) 
			+(p3.y)*(p3.y)-(p2.y)*(p2.y))
			/(2*(p3.y-p2.y))
		
		let x2=((p2.x)*(p2.x)-(p1.x)*(p1.x) 
			+(p2.y)*(p2.y)-(p1.y)*(p1.y))/
		(2*(p2.y-p1.y))
		
		let x3=((p3.x-p2.x)
			/(p3.y-p2.y))-((p2.x-p1.x)/(p2.y-p1.y))
		
		
		let xc=-(x1-x2)/x3
		let y1=((p2.x-p1.x)/(p2.y-p1.y))*xc +x2;
		let r=Math.sqrt((p1.x-xc)*(p1.x-xc)+(p1.y-y1)*(p1.y-y1))
		return [xc,y1,r];
}	

const main = event => {
	
		console.log("MAIN");
		let p1=new Point(200,150);
		let p2=new Point(350,60);
		let p3=new Point(1470,63);
		let canvas=document.createElement("canvas");
		document.body.appendChild(canvas); 
		let dessin = canvas.getContext("2d");
	    dessin.fillStyle = 'rgb(250, 23, 20)'
		let tableau=cercle(p1,p2,p3)
		console.log(tableau)
	  	dessin.beginPath();
 	    dessin.lineWidth="2";
		dessin.arc(tableau[0],tableau[1],tableau[2],0,2 * Math.PI)
		dessin.arc(p1.x,p1.y,100,0,2 * Math.PI)
	    dessin.stroke();

}


class Point {
	constructor(x,y)
	{
		this.x=x;
		this.y=y;
	}
}