#include<stdio.h>
#include<stdlib.h>

/* run this program using the console pauser or add your own getch, system("pause") or input loop */
/*
void main(){
	
	char letra;
	int a;
	
	a = 10;
	letra = 'L';
	letra = letra + a%2;
	
	printf("a = %d e letra = %c\n", a ,letra);
	return 0;
}

 void main(){
	
int numero, numero2,result;

printf("Entre com um número inteiro:\n");
scanf("%d", &numero);
fflush(stdin); // Limpeza do buffer do teclado / linux: __fpurge() /  getc() função para pegar caracter //

printf("Entre com um número inteiro:\n");
scanf("%d", &numero2);

result = numero + numero2;

printf("Resultado:%d", result);

}


void main(){
	int a ,b ,c;
	c = a - b;
	
	printf("Entre com dois inteiros:\n");
	scanf("%d %d", &a, &b);
	printf("A diferença entre %d e %d vale %d\n",a,b,c);
}


 void main(){
	
	float altura , peso, imc;
	
	printf("Digite sua altura e seu peso:\n");
	scanf("%f %f", &altura, &peso);
	
	imc = (peso/altura)/altura;
	
	printf("Seu IMC é:%.2f\n",imc);
}
/*
 void main(){
	
	char letra;
	int num;
	
	printf("Escolha uma letra e um numero \n");
	scanf("%c %d", letra.num);
	
	printf("Voce informou a letra %c e o numero %d", letra, num);
	
	} 
	
	
 int main(){
	
	int a,b,c,result;
	
	
	
	printf("Digite um numero inteiro: \n");
	scanf("%d", &a);
	
	printf("Digite outro numero: \n");
	scanf("%d", &b);
	
	c = 2;
	a = b * c;
	b = a%c;
	result = a + b;
	
	printf("Resultado: %d\n", result);
	
	return 0;
	
} 

int main(){
	

	
	for(ind=7;ind>=4;ind--);

   {

      aux=vet[7-ind];

      vet[7-ind]=vet[ind];

      vet[ind]=aux;
	
	return 0;
	
}

void main(){
	int tabuada, contador;
	tabuada = 7;
	contador = 0;
	
	
	while(contador <= 10){
		printf("%d x %d = %d\n",tabuada, contador++, tabuada * contador);
	}
	
}



int main() {
  float number, number1,media;

  printf("Digite a primeira nota: \n");
  scanf(" %f", &number);

  printf("Digite a segunda nota: \n");
  scanf(" %f", &number1);

  media = (number + number1) / 2;
  
  if(media >= 7){
    printf("Você foi aprovado, média: %.1f\n", media);
  }

  else{
    printf("Você foi reprovado,média: %.1f\n",media);
  }
  
  return 0;
}

*/
/*
 void main(){
	
	int i;
	
	printf("Olá sou a Ana posso te ajudar? Digite a opção abaixo:\n 1 - Ativar Veiculo\n 2 - Desativar Veiculo\n 3 - Falar com atendente \n %d");
	scanf(" %d", &i);
	switch(i){
		case 1:
			printf("  Informe se veiculo esta carregado: S/N");
			break;
		case 2:
			printf("  Aguarde Desativando Veiculo");
			break;
		case 3:
			printf("  Em instantes o atendente ira falar com voce");
			
		default:
			printf("  Essa opçao nao existe");
			
	}
	return 0;
}
*/
/*
int main ( ) {

char letra;

printf("Entre com uma letra minuscula:\n");

scanf("%c", &letra);

letra = letra + ( 'A' - 'a' );

printf("Caractere = %c \n", letra);

return 0;

}
*/
/*
int main()
{
    int cont,num,maior;
    maior=0;
    for (cont=1;cont<=15;cont++)
    {
        printf ("Digite um número: ");
        scanf("%d",&num);
        if (num > maior)
        {
            maior=num;
        }
    }
    
    printf ("O maior dos números lidos = %d\n",maior);
    return 0;
}*/
/*
int main(){
	
	float nota1,nota2,nota3,media;
	int cont;
	
	for(cont=1; cont<=40;cont++){
		printf("Digite a primeira nota:\n");
		scanf(" %f",&nota1);
		
		printf("Digite a segunda nota:\n");
		scanf(" %f",&nota2);
		
		printf("Digite a terceira nota:\n");
		scanf(" %f",&nota3);
		
		media = (nota1 + nota2 + nota3) / 3;
		
		if(media>=7){
			printf("Voce foi aprovado sua nota é %.1f\n", media);
			
		}else{
				printf("Voce foi reprovado sua nota é %.1f\n", media);
			}
		
	}
	return 0;
}*/

/*int main(){
	
	int cont,num;
	
	printf("Digite um numero: \n");
	scanf("%d",&num);
	
	for(cont=1;cont<=9;cont++){
		
		printf("%d\n",num);
	}
}*/

/*int main(){
	
	float salario, salarioajust,percent;
	int cont;
	
	printf("Percentual novo:");
	scanf(" %f",&percent);
	
	for(cont=1;cont<=5;cont++){
		
		printf("\nValor do salario %d:\n",cont);
		scanf(" %f",&salario);
		
		salarioajust = salario + (salario*percent/100);
		
		printf("Valor do salario novo: %.1f \n",salarioajust);
	}	
	
}*/

/*int main(){
	int num;
	printf("Digite numero: ");
	scanf("%d",&num);
	 while(num!=0){
	 	printf("Numero lido:%d\n",num);
	 	printf("Digite numero:");
	 	scanf("%d",&num);
	 }
	
}*/


/*
int main(){
	
	int num;
	
	
	
	do
	{
		printf("Digite um numero: \n");
		scanf("%d",&num);
	
		if(num!=0 && num!=9)
		{
		
		if(num%2 ==0)
			printf("O sucessor de %d = %d \n\n",num,num+1);
	
		else
			printf("O antecessor de %d = %d \n\n",num,num-1);
		
		}	
	}
	while(num!=0 && num!=9);
		
}
*/


/*int main(){
	
	float salbruto,salliquido,imposto,totbruto=0,totliquido=0,totimposto=0;
	int cont;
	
	for(cont=1; cont<=15; cont++){
		
		printf("Digite o valor do salario: \n");
		scanf("%f",&salbruto);
		
		if(salbruto > 999){
			imposto = salbruto * 0.10;
			salliquido = salbruto - imposto;
		}
		else if(salbruto > 1999){
			imposto = salbruto * 0.15;
			salliquido = salbruto - imposto;
		}
		else if(salbruto > 9999){
			imposto = salbruto * 0.20;
			salliquido = salbruto - imposto;
		}
		else if(salbruto > 99999){
			imposto = salbruto * 0.25;
			salliquido = salbruto - imposto;
		}else{
			imposto = salbruto * 0.30;
			salliquido = salbruto - imposto;
			
		}
		printf("Valor do salario liquido: %.2f\n",salliquido);
	
		
		totliquido = totliquido + salliquido;
		totbruto = totbruto + salbruto;
		totimposto = totimposto + imposto;
			
	printf("Total Imposto: %.2f\n",totimposto);
	printf("Total Liquido: %.2f\n",totliquido);
	printf("Total Bruto: %.2f\n",totbruto);	
	}
	
	
}*/

/*
int main(){
	
	int cont,menor,num;
	
	
	
	for(cont=1;cont<=5;cont++)
	{
		printf("Digite um numero:\n");
		scanf("%d",&num);
		
		if(cont == 1){
			menor = num;
		}
		
		else{if(num <= menor)
		menor = num;
		}
		
	}
	
	printf("Menor numero e: %d\n",menor);
	
}
*/
/*
int main(){
	
	float salbruto, salliquido,imposto,totbruto=0,totliquido=0,totimposto=0;
	int cont=1;
	
	do{
		printf("Digite seu salario bruto: \n\n");
		scanf("%f",&salbruto);
		
		if(salbruto > 999){
			imposto = salbruto * 0.2;
			salliquido = salbruto - imposto;
		}else if (salbruto > 1999){
					imposto = salbruto * 0.3;
					salliquido = salbruto - imposto;
			}
			else if (salbruto > 9999){
				imposto = salbruto * 0.4;
				salliquido = salbruto - imposto;
			}
			else if (salbruto > 99999){
				imposto = salbruto * 0.5;
				salliquido = salbruto - imposto;
			}else{
				imposto = salbruto * 0.5;
				salliquido = salbruto - imposto;
			}
			
			printf("\nSalario Liquido: %.1f \n\n",salliquido);
			
			totliquido = totliquido + salliquido;
			totimposto = totimposto + imposto;
			
			printf("Total salario liquido: %.1f\n\n",totliquido);
			printf("Total imposto: %.1f\n\n",totimposto);
			
			cont++;
	}
	while(cont<=5);
}*/
/*
int main ()

{      int x;

       char ch;

       float f;

       ch=x= 300;

       printf ("x=%d ch=%d\n", x, ch);

       x=ch=f= 98.8999;

       printf ("f= %.4f ch=%c x=%d \n", f, ch, x);

       return 0;

}*/
/*
int main(){
	int ind=1,cont10=0,contmaior=0,num;
	

	do
	{
		
		printf("numero:\n");
		scanf(" %d",&num);
		
		if(num > 1 && num < 10){
			cont10++;
		}
		else{
			contmaior++;
		}
		
		
		ind++;
	}
	while(ind<=3);
	printf("Valor cont10: %d",cont10);
	printf("Valor contmaior: %d",contmaior);
}
*/
/*
int main(){
	
	float a,b;
	
	printf("Digite Primeiro numero: \n");
	scanf("%f",&a);
	
	printf("Digite Segundo numero: \n");
	scanf("%f",&b);
	

	
	printf("Resultado: %.1f\n",(a + b)/2);
}*/

/* int main() {
    int num,maior,cont;
    maior = 0;
    for (cont= 1; cont <=110; cont=cont+1){
        printf("%d\n",cont);
    }
    
	scanf("%d",&cont);
        if (cont > maior) {
            maior=cont;
        }
    printf("O maior dos números lidos e: \n %d", maior);
    
}*/
/*
int main(){
	int vet[10];
	
	vet[0]=32;
	vet[1]=5;
	vet[2]=48;
	vet[3]=7;
	vet[4]=9;
	vet[5]=45;
	vet[6]=415;
	vet[8]=88;
	vet[9]=114;
	
	
	printf("%s",vet);
	
	printf("%d Posicao 1 do vetor",vet[1]);
	
	scanf("%d:",&num);
	vet[9]=num;
	
	
	scanf("%s ",vet);
	
	for (ind=0;ind<5;ind++){
		scanf("%c",&nome[ind]);
		getch();
		
		ou
		
		scanf("%s",cadeia);
	}	
	
}

int main(){
	int vet[100];
	int cont;
	
	for(cont=0;cont<100;cont++)
		scanf("%d",&vet[cont]);
	for(cont=99;cont>=0;cont--);
		printf("%d", &vet[cont]);
		return 0;
	
	
}

*/

int main(){

    int cont;
  
  printf("Digite um numero:\n");
  scanf("%d",&cont);
  printf("Este numero foi:%d\n",cont);
    return 0;
   
}













































































































