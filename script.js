const button = document.getElementById("btn");

button.addEventListener('click',function (){

	async function display(){
		
		let promise = new Promise(function (resolve){
			setTimeout(function(){resolve(document.getElementById("text").value);},document.getElementById("delay").value);
		});
		const outputDiv = document.getElementById("output");
		outputDiv.innerHTML = await promise;
	}
	display();
	
	

	
});