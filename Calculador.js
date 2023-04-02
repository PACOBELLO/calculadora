/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

//window.alert("O JavaScript foi carregado");

//Criar variáveis para controlar os elementos HTML da página

let bt1;
let bt2;
let bt3;
let bt4;
let bt5;
let bt6;
let bt7;
let bt8;
let bt9;
let bt0;

let btmult;
let btdiv;
let btsoma;
let btmenos;
let btponto;
let btigual;

let txtauxiliar;
let txtdisplay;
let txtoperador;

//Ligar os elementos HTML com as variáveis do JS

txtdisplay = document.getElementById("display");
//txtdisplay.value = "";

bt1 = document.getElementById("b1");
bt1.addEventListener("click", function(){digito(this);});

bt2 = document.getElementById("b2");
bt2.onclick = function(){
    digito(this);
}

//this está representando o bt3 na function()
bt3 = document.getElementById("b3");
bt3.onclick = function(){
    digito(this);
}

bt4 = document.getElementById("b4");
bt4.onclick = function(){
    digito(bt4);
}

bt5 = document.getElementById("b5");
bt5.onclick = function(){
    digito(bt5);
}



bt6 = document.getElementById("b6");
bt6.addEventListener("click", function(){digito(bt6)});


bt7 = document.getElementById("b7");
bt7.addEventListener("click", function(){digito(this);});

bt8 = document.getElementById("b8");
bt8.addEventListener("click", function(){digito(this);});

bt9 = document.getElementById("b9");
bt9.addEventListener("click", function(){digito(this);});

bt0 = document.getElementById("b0");
bt0.onclick = function(){digito(this);
}

btponto = document.getElementById("bponto");
btponto.addEventListener("click", function(){digito(this);});


function digito(botao){
    if(botao.value === "."){
        if(txtdisplay.value.indexOf(".") === -1){
            txtdisplay.value += botao.value;
        }
        
    }
    else {
        if((txtdisplay.value.indexOf(".") === -1) && (txtdisplay.value === "0")){
            txtdisplay.value = botao.value
        }
        else
            txtdisplay.value += botao.value;
    }
}

txtoperador = document.getElementById("operador");
txtauxiliar = document.getElementById("auxiliar");
btsoma = document.getElementById("bsoma");
btmult = document.getElementById("bmult");
btmenos = document.getElementById("bmenos");
btdiv = document.getElementById("bdiv");

btsoma.addEventListener("click", function(){operador(this);});
btmult.addEventListener("click", function(){operador(this);});
btmenos.addEventListener("click", function(){operador(this);});
btdiv.addEventListener("click", function(){operador(this);});

function operador(botao){
    if (txtoperador.value != ""){
        igual();
       }
    txtoperador.value = botao.value;
    txtauxiliar.value = txtdisplay.value;
    txtdisplay.value = 0;
}

btigual = document.getElementById("bigual");
btigual.addEventListener("click", igual);
function igual(){
let n1 = parseFloat(txtauxiliar.value);
let n2 = parseFloat(txtdisplay.value);
let op = txtoperador.value;
let resultado = 0;

    if (op == "+"){
                resultado = n1 + n2
    
      }
      if (op == "X"){
                resultado = n1 * n2
    
      }
       if (op == "-"){
                resultado = n1 - n2
    
      }
    
         if (op == "/"){
                resultado = n1 / n2
    
      }
      
txtdisplay.value = resultado;
txtauxiliar.value = 0;
txtoperador.value = "";
}