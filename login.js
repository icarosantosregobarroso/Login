const usuarioTeste = {
    username: "test123",
    password: "12345"
};


function autenticar(event) {
    event.preventDefault(); 

    const usuarioInput = document.querySelector('input[type="email"]').value;
    const senhaInput = document.querySelector('input[type="password"]').value;

    if (usuarioInput === usuarioTeste.username && senhaInput === usuarioTeste.password) {
        alert("Login bem-sucedido!");
        
    } else {
        alert("Usuário ou senha incorretos.");
    }
}


document.querySelector('form').addEventListener('submit', autenticar);
