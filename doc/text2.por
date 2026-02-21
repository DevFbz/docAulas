programa
{
	
	funcao inicio()
	{
		inteiro a,b,soma,multi
		var texto msg
		
		
		escreva("Escreva o primeiro número: ")
		leia(a)

		escreva("Escreva o segundo número: ")
		leia(b)

		escreva("Quer somar? 0 = Não / 1 = Sim: ")
		leia(msg)

		se msg = "sim" entao {	
			soma = a + b
			escreva("Resultado: ", soma)
			
			}
		
		
		senao{
			escreva("Escreva o primeiro número: ")
		leia(a)

		escreva("Escreva o segundo número: ")
		leia(b)
		
			multi = a * b
			escreva("Resultado: ", multi)
			}
	
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 64; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */