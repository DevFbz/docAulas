import psycopg2
from psycopg2 import Error

def conecta():
    try:
        conn = psycopg2.connect(
            user = "postgres",
            password="7474",
            host="localhost",
            port="5432",
            database="escola")

        print("Conectado com sucesso")

        return conn



    except Error as e:
        print(f"Ocorreu um erro ao tentar conectar no banco{e}")

def encerra_conexao(conn):
    if conn:
        conn.close()
    print('Conexao Encerrada!')

conecta()