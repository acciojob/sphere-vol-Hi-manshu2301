function volume_sphere() {
    //Write your code here
	document.getElementById("MyForm").addEventListener("submit",function(event){
		event.preDefault();
		let radius = document.getElementById("radius").value;
		radius = Number(radius);
		if(isNaN(radius) || radius<0){
			alert("Invalid input");
			return;
		}
		let volume = 4/3 * Math.PI*radius*radius*radius;
		volume = volume.toFixed(4)
		document.getElementById("volume").value = volume;
	})
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
