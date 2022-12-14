const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const senha = document.getElementById("senha");
const senhaConfirmacao = document.getElementById("senhaConfirmacao");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  const usernameValue = username.value;
  const emailValue = email.value;
  const senhaValue = senha.value;
  const senhaConfirmacaoValue = senhaConfirmacao.value;

  if (usernameValue == "") {
    setErrorFor(username, "O nome de usuário é obrigatorio.");
  } else {
    setSuccessFor(username);
  }

  if (emailValue == "") {
    setErrorFor(email, "O email é obrigatório.");
  } else {
    setSuccessFor(email);
  }

  if (senhaValue == "") {
    setErrorFor(senha, "Por favor, insira a senha!");
  } else if (senhaValue.length < 7) {
    setErrorFor(senha, "A senha precisa ter no minimo 7 ccaracteres.");
  } else {
    setSuccessFor(senha);
  }

  if (senhaConfirmacaoValue == "") {
    setErrorFor(senhaConfirmacao, "Por favor, confirme sua senha!");
  } else if (senhaConfirmacaoValue != senhaValue) {
    setErrorFor(senhaConfirmacao, "As senhas não conferem.");
  } else {
    setSuccessFor(senhaConfirmacao);
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;

  const small = formControl.querySelector("small");
  small.innerText = message;

  formControl.className = "form-control-error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control-success";
}
