import socket

# Configuração do cliente
host = '127.0.0.1'
port = 12345

# Cria um socket TCP
client_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

# Conecta-se ao servidor
client_socket.connect((host, port))

# Recebe a mensagem de boas-vindas do servidor
message = client_socket.recv(1024).decode()
print(f"Servidor diz: {message}")

# Envia uma mensagem para o servidor
message_to_server = "Olá, servidor!"
client_socket.send(message_to_server.encode())

# Fecha a conexão com o servidor
client_socket.close()
