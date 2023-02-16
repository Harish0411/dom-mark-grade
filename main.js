let form = document.querySelector("form");
form.addEventListener("submit", function(element){
     element.preventDefault();
	 let a = Number(document.querySelector("#mark1").value);
	 let b = Number(document.querySelector("#mark2").value);
	 let c = Number(document.querySelector("#mark3").value);
	 let d = Number(document.querySelector("#mark4").value);
	 let e = Number(document.querySelector("#mark5").value);
	 
	 let total = document.querySelector("#total");
	 let average = document.querySelector("#avg");
	 let grade = document.querySelector("#grade");
	 
	 totalValue = a+b+c+d+e;
	 
	 total.value = totalValue;
	 
	 average.value = totalValue/5;
	 
	 let avg = average.value;
	 
	 if(avg >= 95 && avg <= 100){
      grade.value = "A+";
	}
	else if(avg >=80 && avg<95){
		 grade.value = "A";
	}
	else if(avg >=60 && avg<80){
		grade.value = "B";
	}
	else if(avg>=40 && avg<60){
		grade.value = "C";
	}
	else{
		grade.value = "D";
	}
	 
	 

})