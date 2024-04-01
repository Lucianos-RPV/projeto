/* contato.html inicio*/
function btnEnviar() {
    var nome = document.getElementById('specificSizeInputName').value;
    var username = document.getElementById('specificSizeInputGroupUsername').value;
    var selectElement = document.getElementById('specificSizeSelect');
    var textarea = document.getElementById('floatingTextarea2').value;

    if(nome.trim() === "" || username.trim() === "" || textarea.trim() === "" || selectElement.selectedIndex === 0) {
        window.alert("Todos os campos devem ser preenchidos.");
    } else {
        window.alert(`Olá ${nome}. Sua mensagem foi enviada com sucesso.`);
    }
}
/* contato.html fim*/


/* Redirecionamentos inicio*/
function redirecionarCadastro() {
    window.location.href = "../painelJogadorRegistro.html";
}
function redirecionarNovidades() {
    window.location.href = "../novidades.html";
}
function redirecionarPersonagens() {
    window.location.href = "../personagens.html";
}
function redirecionarSobre() {
    window.location.href = "../sobre.html";
}
function redirecionarlogin() {
    window.location.href = "../paineljogador.html";
}
function redirecionarRegistro() {
    window.location.href = "../painelJogadorRegistro.html";
}
/* index.html fim*/