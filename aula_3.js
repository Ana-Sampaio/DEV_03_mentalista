/*Conteúdo da Aula + DESAFIOS 1 e 2*/
var numeroSecreto = parseInt(Math.random() * 11);
var tentativa = 0;

function Chutar(){

	var chute = parseInt(document.getElementById("valor").value);
	var resultado = document.getElementById("resultado");

	if(numeroSecreto == chute){
		resultado.innerHTML = "Acertou miserável.";
	}else if(chute < 0  || chute > 10){
		resultado.innerHTML = "Por favor, digite um número de 0 a 10."
	}else{
		resultado.innerHTML = "ERRRROU (na voz do Faustão)."
	}	

	var rodada = document.getElementById("tentativa");

	if (chute > numeroSecreto && tentativa < 3){
		rodada.innerHTML = "O número secreto é menor que " + chute + ". Tente outra vez.";
		tentativa++;
	}else if(chute < numeroSecreto && tentativa < 3){
		rodada.innerHTML = "O número secreto é maior que " + chute + ". Tente outra vez.";
		tentativa++;		
	}else if (tentativa == 3){
		rodada.innerHTML = "Acabaram-se as chances. O número secreto era " + numeroSecreto;
	}else{
		rodada.innerHTML = "";
	}
	
}	

/*DESAFIO 3*/
/*
1 - = : atribuição;
2 - == : comparação levando em consideração apenas valores;
3 - === : comparação levando em consideração também o tipo de variável;
*/
