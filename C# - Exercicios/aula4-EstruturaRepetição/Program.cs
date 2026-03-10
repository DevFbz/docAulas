// See https://aka.ms/new-console-template for more information
// int num = 5;

// for (int i=0; i <= 10; i++)
// {
//     Console.WriteLine("Tabuada")
//     Console.WriteLine($"{num} x {i} = {num * i}");
// }

// int auxiliar = 0;
// int contador = 0;

// while (contador <= 10)
// {
//     Console.WriteLine($"{contador+1}º Execução: {num} x {contador} = {num * contador}");
//     contador++;

// }
// int soma=0,numero = 0;

// do
// {
//     Console.WriteLine("Digite um número:\n");
//     numero = Convert.ToInt32(Console.ReadLine());
//     soma += numero;

// } while (numero != 0);

// Console.WriteLine($"Total soma dos números: {soma}");

string opcao;
bool exibirMenu = true;
while (exibirMenu)
{
    // Console.Clear();
    Console.WriteLine("Digite a sua opção");
    Console.WriteLine("1 - Cadastrar Clinte");
    Console.WriteLine("2 - Buscar Cliente");
    Console.WriteLine("3 - Apagar Cliente");
    Console.WriteLine("4 - Encerrar");

    opcao = Console.ReadLine();



    switch (opcao)
{
    case "1":
        Console.WriteLine("Cadastro de Cliente");
       
        break;
    case "2":
        Console.WriteLine("Busca de Cliente");
        
        break;
    case "3":
        Console.WriteLine("Apagar Cliente");
        break;
    case "4":
        Console.WriteLine("Encerrar");
        exibirMenu = false;
            // Environment.Exit(0);
        break;

    default:
        Console.WriteLine("Opção Incorreta");
        break;
}

}

