using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace aula3.Models
{
    public class Calculadora
    {
        public void Somar(int x, int y)
        {
            Console.WriteLine($"Soma: {x + y}");
        }

        public void Subtrair(int x, int y)
        {
            Console.WriteLine($"Soma: {x - y}");
        }

        public void Multiplicar(int x, int y)
        {
            Console.WriteLine($"Soma: {x * y}");
        }

        public void Dividir(int x, int y)
        {
            Console.WriteLine($"Soma: {x / y}");
        }

        public void Potencia(int x, int y)
        {
            double resultado = Math.Pow(x, y);
            Console.WriteLine($"Potencia:{resultado}");
        }
        
        public void Seno(double angulo)
        {
            double anguloRad = angulo * (Math.PI / 180);
            double seno = Math.Sin(anguloRad);
            Console.WriteLine($"Seno do angulo {angulo}º: {seno}");
        }
        
    }
}