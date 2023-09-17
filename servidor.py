import socket

# Configuração do servidor
host = '127.0.0.1'
port = 12345

# Cria um socket TCP
server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

# Vincula o socket ao endereço e à porta
server_socket.bind((host, port))

# Aguarda por conexões de clientes
server_socket.listen(5)
print(f"Servidor conectado em {host}:{port}")

while True:
    # Aceita a conexão do cliente
    client_socket, addr = server_socket.accept()
    print(f"Conexão recebida de {addr}")

    # Envia uma mensagem de boas-vindas para o cliente
    message = "Bem-vindo ao servidor!"
    client_socket.send(message.encode())

    # Recebe dados do cliente
    data = client_socket.recv(1024).decode()
    print(f"Cliente diz: {data}")

    # Fecha a conexão com o cliente
    client_socket.close()


