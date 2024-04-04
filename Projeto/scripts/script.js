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
function redirecionarHome() {
    window.location.href = "./index.html";
}
/* index.html fim*/


/*registro inicio*/

function registro(){
    var nome = document.getElementById('exampleInputName1').value
    var email = document.getElementById('exampleInputEmail1').value
    var senha = document.getElementById('exampleInputPassword1').value
    if(nome.trim() === "" || email.trim() === "" || senha.trim() === ""){
        window.alert("Todos os campos devem ser preenchidos.");
    } else {
        redirecionarlogin();
        window.alert(`Olá ${nome}. Seu registro foi concluído com sucesso.`);
        localStorage.setItem("nome", nome);
        localStorage.setItem("email", email);
        localStorage.setItem("senha", senha);
    }
}

function login(){
    var email = document.getElementById('exampleInputEmail').value
    var senha = document.getElementById('exampleInputPassword').value
    var emailLocal = localStorage.getItem("email");
    var SenhaLocal = localStorage.getItem("senha");
    console.log(emailLocal, SenhaLocal);

    if(email.trim() === "" || senha.trim() === ""){
        window.alert("Todos os campos devem ser preenchidos.");
    }else if(email === emailLocal && senha === SenhaLocal){
        redirecionarHome();
    }else{
        window.alert("Dados inválidos. Tente novamente.");      
    }
}


/*registro final*/