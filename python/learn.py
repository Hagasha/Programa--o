username = input("Enter username: ")
username = username.strip() 

if len(username) > 12:
    print("Username must be a maximum of 12 characters long")
elif not username.find(" ") == -1:
    print("Username cannot contain spaces")
elif not username.isalpha():
    print("Username can only contain alphabets")
else:
    print("Your username is: ", username)