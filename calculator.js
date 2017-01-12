// JavaScript Document

// Change Display
var edit = 0;
var deci = 0;
var oper = 0;
var rroper = 0;
function d(val) {
		if(val == '') {
				edit = 0;
				deci = 0;
				oper = 0;
				rroper = 0;
				document.getElementById("d").value = 0;
		}else{
				document.getElementById("d").value = val;
		}
}

// Type numbers and operators
function v(val) {
		if(val == '/' || val == '*' || val == '-' || val == '+'){
				if(rroper === 1){
						d("ErRoar too many operators");
				}else{
						document.getElementById("d").value += val;
						rroper = 1;
				}
		}else if(val === '.') {
				if(deci === 1){
						d("ErRoar too many decimals");
				}else{
						document.getElementById("d").value += val;
						deci = 1;
						rroper = 0;
				}
		}else if(edit === 0){
				edit = 1;
				document.getElementById("d").value = val;
		}else{
				document.getElementById("d").value += val;
				rroper = 0;
		}
}

//Functions
var ismem = 0;
var mem = 0;
function m(val){
		if(val =='rc') {
				if(ismem = 0) {
						d("ErRoar you have no value saved");
				}else if(rroper == 1){
						document.getElementById("d").value += mem;
				}else{
						document.getElementById("d").value = mem;
				}
		}else if(val =='-') {
				
		}else{
				
		}
}

// Evaluate the equation
function e() {
		try {
				oper = 0;
				d(eval(document.getElementById("d").value));
		}
		catch(err) {
				d("ErRoar this is not right");
		}
}