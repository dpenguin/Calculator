// JavaScript Document

// Change Display
var edit = 0;
var deci = 0;
function d(val) {
		if(val == '') {
				edit = 0;
				deci = 0;
				document.getElementById("d").value = 0;
		}else{
				document.getElementById("d").value = val;
		}
}

// Type numbers and operators
function v(val) {
		if(val == '.') {
				if(deci === 1){
						d("ErRoar");
				}else{
						document.getElementById("d").value += val;
						deci = 1;
				}
		}else if(edit === 0){
				edit = 1;
				document.getElementById("d").value = val;
		}else{
				document.getElementById("d").value += val;
		}
}

// Evaluate the equation
function e() {
		try {
				d(eval(document.getElementById("d").value));
		}
		catch(err) {
				d("ErRoar");
		}
}