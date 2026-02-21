programa
{
	
	funcao inicio()
	{
		inteiro x , y, soma, div,mult


		escreva("Escreva um número inteiro: ")
		leia(x)

		escreva("Escreva outro número inteiro: ")
		leia(y)


		
		se(y > 0){
		soma = x + y
		escreva("Soma: ", soma ," \n")
		div = x / y
		escreva("Divisão: ", div ," \n")
		mult = x * y
		escreva("Multiplicação: ",mult ," \n")

				
		}

		senao
		{
			se( x == y){
				escreva("")
				}
			
				
			escreva("O número " , y , " é menor ou igual a 0")

		
			}
			
	

		


		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 382; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */