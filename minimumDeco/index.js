

const input = document.getElementById('input');
const input2 = document.getElementById('input2');
const log0 = document.getElementById('values0');
const log = document.getElementById('values');
const log2 = document.getElementById('values2');
var button = document.getElementById('clear');
let gas = "";
let time = "";
let hypoxic = false;
let nonStandard = false;


	input.addEventListener('input', updateValue);
	function updateValue(e) {
	    gas = e.target.value;
	    if(gas > "29" && gas < "33"){
	    	gas = `Nitrox ${gas}`;
	    	nonStandard = false;
	    	hypoxic = false;
	    }
	    else if((gas >"21" && gas < "30")||(gas>"32")){
	    	gas = "Standard gases and air only";
	    	nonStandard = true;
	    }
	    else if(gas == "21"){
	    	gas = `You dive Air`;
	    }
	    else if(gas < "21"){
	    	gas = `Your mix is hypoxic!`;
	    	hypoxic = true;
	    }


	}

	input2.addEventListener('input', updateValue2);
	function updateValue2(f) {
	    time = `Dive time ${f.target.value}`;

	}

button.addEventListener('click', () => {
	if(hypoxic || nonStandard){
		log0.textContent = gas;
	}
	else{
		log0.textContent = `Diving calculated for ${gas} and ${time} min`;
		//log.textContent = gas;
		//log2.textContent = time;
	}

});





//usuwanie podpowiedzi z okna wyboru
//Wpisujemy pierwsze litery witryny, którą chcemy usunąć z przeglądarki. 
//Następnie za pomocą klawiszy strzałek podświetlamy pozycję do usunięcia.
//W przypadku macOS jest to kombinacja Shift + fn + Delete.