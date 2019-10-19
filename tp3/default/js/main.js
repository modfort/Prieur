
window.addEventListener("load", event => {
	console.log("loaded");
	main();
});

  function sleep(ms)
{
	let callback,prom=new Promise(resolve=>callback =resolve)
	setTimeout(callback,ms)
    return prom;
}


async function  forech(tab){
	let callback,promise=new Promise(resolve=>callabck =resolve)
	setTimeout(callabck,500);
	return promise;
}
 async function main () {
	
	console.log("MAIN");
	/*for (let i =5 ;i >= 0; i--) {
		console.log("salut\n")
		await sleep(1000)
		console.log("salut\n")
	}*/
	tab=[]
	let i,gender;
	for ( i = 0;i<500;i++) {
	+faker.fake("{{name.lastName}},{{name.firstName}} {{name.suffix}},{{name.jobTitle}},{{internet.email}},{{internet.password}} ,{{phone.phoneNumber}},{{address.country}}")
		tab[i]=new Personne()	
	}
		
		majeur.forEach(x=>{ 
					

		 				console.log(x)})
	
	
		//tab.reduce((acc,value)=> if(value.get_age())>18)
	//	tab.filter()
	
}

class Personne {
	constructor(/*gender,name,job,email,password,phone,country*/)
	{	
		if ( Math.random()>0.5 ) 
			this.gender="men"
		else
			this.gender="women"
		this.name=faker.fake("{{name.lastName}} , {{name.firstName}} ,{{name.suffix}}");
		this.job=faker.name.jobTitle();
		this.country=faker.address.country();
		this.age=Math.random()*100;

	}
  affiche(){
  	console.log(this.gender+" "+ this.age+" "+this.job)
  }
   get_age()
  {
  	return this.age
  }
	
}