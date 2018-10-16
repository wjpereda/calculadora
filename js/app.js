var calculadora= {
  punto:0,
  num1:0,
  num2:0,
  resul:0,
  digitos:0,
  operacion:"",

  calcular(){
    switch (this.operacion) {
      case "sumar":
        this.resul=parseInt(this.num1)+parseInt(this.num2);
        break;
      case "restar":
          this.resul=parseInt(this.num1)-parseInt(this.num2);
          break;
      case "dividir":
          this.resul=parseInt(this.num1)-parseInt(this.num2);
          break;
      case "multiplicar":
          this.resul=parseInt(this.num1)-parseInt(this.num2);
          break;
    }
    this.num1=this.resul;
  }
}

document.getElementById("1").addEventListener("click",function(){
  if(calculadora.digitos<8){
    calculadora.digitos++;
    num=document.getElementById("display").innerHTML+"1";
    document.getElementById("display").innerHTML=num*1;
  }
})

document.getElementById("2").addEventListener("click",function(){
  if(calculadora.digitos<8){
    calculadora.digitos++;
    num=document.getElementById("display").innerHTML+"2";
    document.getElementById("display").innerHTML=num*1;
  }
})

document.getElementById("3").addEventListener("click",function(){
  if(calculadora.digitos<8){
    calculadora.digitos++;
    num=document.getElementById("display").innerHTML+"3";
    document.getElementById("display").innerHTML=num*1;
  }
})

document.getElementById("4").addEventListener("click",function(){
  if(calculadora.digitos<8){
    calculadora.digitos++;
    num=document.getElementById("display").innerHTML+"4";
    document.getElementById("display").innerHTML=num*1;
  }
})

document.getElementById("5").addEventListener("click",function(){
  if(calculadora.digitos<8){
    calculadora.digitos++;
    num=document.getElementById("display").innerHTML+"5";
    document.getElementById("display").innerHTML=num*1;
  }
})

document.getElementById("6").addEventListener("click",function(){
  if(calculadora.digitos<8){
    calculadora.digitos++;
    num=document.getElementById("display").innerHTML+"6";
    document.getElementById("display").innerHTML=num*1;
  }
})

document.getElementById("7").addEventListener("click",function(){
  if(calculadora.digitos<8){
    calculadora.digitos++;
    num=document.getElementById("display").innerHTML+"7";
    document.getElementById("display").innerHTML=num*1;
  }
})

document.getElementById("8").addEventListener("click",function(){
  if(calculadora.digitos<8){
    calculadora.digitos++;
    num=document.getElementById("display").innerHTML+"8";
    document.getElementById("display").innerHTML=num*1;
  }
})

document.getElementById("9").addEventListener("click",function(){
  if(calculadora.digitos<8){
    calculadora.digitos++;
    num=document.getElementById("display").innerHTML+"9";
    document.getElementById("display").innerHTML=num*1;
  }
})

document.getElementById("0").addEventListener("click",function(){
  if(document.getElementById("display").innerHTML!="0"){
    if(calculadora.digitos<8){
      calculadora.digitos++;
      document.getElementById("display").innerHTML+="0";
    }
  }
})

document.getElementById("on").addEventListener("click",function(){
  calculadora.digitos=0;
  calculadora.punto=0;
  document.getElementById("display").innerHTML=0;
})

document.getElementById("punto").addEventListener("click",function(){
  if(calculadora.punto==0){
    calculadora.punto=1;
    if(document.getElementById("display").innerHTML=="0")
      calculadora.digitos++;
    document.getElementById("display").innerHTML+=".";
  }
})

document.getElementById("mas").addEventListener("click",function(){
  calculadora.num1=document.getElementById("display").innerHTML;
  calculadora.digitos=0;
  calculadora.punto=0;
  calculadora.operacion="sumar";
  document.getElementById("display").innerHTML=0;
})

document.getElementById("menos").addEventListener("click",function(){
  calculadora.num1=document.getElementById("display").innerHTML;
  calculadora.digitos=0;
  calculadora.punto=0;
  calculadora.operacion="restar";
  document.getElementById("display").innerHTML=0;
})

document.getElementById("dividido").addEventListener("click",function(){
  calculadora.num1=document.getElementById("display").innerHTML;
  calculadora.digitos=0;
  calculadora.punto=0;
  calculadora.operacion="dividir";
  document.getElementById("display").innerHTML=0;
})

document.getElementById("por").addEventListener("click",function(){
  calculadora.num1=document.getElementById("display").innerHTML;
  calculadora.digitos=0;
  calculadora.punto=0;
  calculadora.operacion="multiplicar";
  document.getElementById("display").innerHTML=0;
})

document.getElementById("igual").addEventListener("click",function(){
  calculadora.num2=document.getElementById("display").innerHTML;
  calculadora.calcular();
  document.getElementById("display").innerHTML=calculadora.resul;
})

document.getElementById("sign").addEventListener("click",function(){
  num=document.getElementById("display").innerHTML*-1;
  document.getElementById("display").innerHTML=num;
})
