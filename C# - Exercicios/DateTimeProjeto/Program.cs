// See https://aka.ms/new-console-template for more information

using System;
class Program
{
    static void Main()
    {
        // DateTime dateTime = DateTime.Now.AddDays(5);
        // Console.WriteLine("A data e hora são: " + dateTime.ToString("dd/MM/yyyy HH:mm"));
        // Console.WriteLine("Hello, World!");

        int num = Convert.ToInt32("5");
        int num2 = int.Parse("3");
        Console.WriteLine(num);
        Console.WriteLine(num2);

        int inteiro = 6;
        string a = inteiro.ToString();
        Console.WriteLine(a);
    }
}