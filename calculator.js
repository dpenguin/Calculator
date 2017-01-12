// JavaScript Document

// Change Display
var edit = 0;
var deci = 0;
var oper = 0;
var rroper = 0;
var er = 0;
function d(val) {
		if(val == '') {
				edit = 0;
				deci = 0;
				oper = 0;
				rroper = 0;
				er = 0;
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
						er = 1;
				}else{
						document.getElementById("d").value += val;
						rroper = 1;
				}
		}else if(val === '.') {
				if(deci === 1){
						d("ErRoar too many decimals");
						er=1;
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
		if(val == 'rc') {
				if(ismem === 0) {
						d("ErRoar you have no value saved");
						er = 1;
				}else if(rroper === 1){
						d(document.getElementById("d").value += mem);
				}else{
						d(document.getElementById("d").value = mem);
				}
		}else if(val === '-') {
				if(oper =>1){
						d("ErRoar you cannot save an expression");
				}else if(er == 1){
						d("ErRoar you cannot save an error message");
				}else{
						mem = (-1)*(Number(document.getElementById("d").value));
				}
		}else{
				if(oper =>1){
						d("ErRoar you cannot save an expression");
				}else if(er === 1){
						d("ErRoar you cannot save an error message");
				}else{
						mem = Number(document.getElementById("d").value);
				}
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