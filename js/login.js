
/**/
function validarLogin() {

  const baseUrl = "http://localhost:8080/login"
  let login = document.getElementById('username')
  let password = document.getElementById('password')
  let resultado = document.getElementById('resultado')

  let user = login.value
  let pass = password.value

  resultado.innerHTML = ''

  axios.post(baseUrl, {
    username: user,
    password: pass
  })
    .then(function (response) {
      console.log(response);

      if (response.data==true) {
        //alert('Funcionou a função.')
        resultado.innerHTML += `Login realizado com sucesso.<br>`
        const myModal = new bootstrap.Modal('#modal-login', {});
        myModal.show();
      } else {
        alert('Usuário/senha inválidos.')
        resultado.innerHTML += `Login não realizado.<br>`
      }
    })
    .catch(function (error) {
      console.error(error);
      alert('Não funcionou a função.')
      resultado.innerHTML += `Login não realizado.<br>`
    });
}

function carregartelaprincipal(){
  window.location.replace("telaprincipal.html");
}
/**/



