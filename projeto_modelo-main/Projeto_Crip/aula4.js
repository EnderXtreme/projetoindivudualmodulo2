//Criando a classe calculadora
class Calculadora{
    //instanciar as características
    constructor(num1,num2){
        this.num1=num1
        this.num2=num2
    }
    //criando o método multiplicação
    multiplicar(){
        return parseInt(this.num1)* parseInt(this.num2)
    }
    //criando o método soma
    soma(){
        return parseInt(this.num1)+ parseInt(this.num2)
    }
    //Criando o método da divisão
    dividir(){
        return parseInt(this.num1) / parseInt(this.num2)
    }
    //Criando o método da subtração
    subtrair(){
        return parseInt(this.num1) - parseInt(this.num2)
    }
    
    //criando a requisiçao GET
    get resultadomultiplicar(){
        alert("O valor da multiplicação é: " +this.multiplicar()) 
    }
    //criando a requisiçao GET
    get resultadosoma(){
        alert("O valor da soma é: " +this.soma()) 
    }
    //criando a requisiçao GET
    get resultadodividir(){
        alert("O valor da divisao é: " +this.dividir()) 
    }
    //criando a requisiçao GET
    get resultadosubtrair(){
        alert("O valor da subtração é: " +this.subtrair()) 
}
}
//--------------------------------------------------------------------------------
//coletando os dados usando DOM para subtração
botao=document.querySelector("#subtrair")
botao.onclick = function(){
    valores=new Calculadora(document.form1.n1.value, document.form1.n2.value)
    valores.resultadosubtrair
}
//--------------------------------------------------------------------------------
//coletando os dados usando DOM para multiplicar
botao=document.querySelector("#dividir")
botao.onclick = function(){
    valores=new Calculadora(document.form1.n1.value, document.form1.n2.value)
    valores.resultadodividir
}
//--------------------------------------------------------------------------------
//coletando os dados usando DOM para multiplicar
botao=document.querySelector("#multiplicar")
botao.onclick = function(){
    valores=new Calculadora(document.form1.n1.value, document.form1.n2.value)
    valores.resultadomultiplicar
}

//--------------------------------------------------------------------------------


//coletando os dados usando DOM para somar
botao=document.querySelector("#somar")
botao.onclick = function(){
    valores=new Calculadora(document.form1.n1.value, document.form1.n2.value)
    valores.resultadosoma
}
//--------------------------------------------------------------------------------
