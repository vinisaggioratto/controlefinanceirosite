const url1 = "http://localhost:8080/users";


//VERIFICA SE O ELEMENTO EXISTE NA PÁGINA, SE EXISTIR, CHAMA A getAPI CORRESPONDENTE
if (document.getElementById("selectRegister")) {
    getRegister(url1);
}
/*
function showOperation() {

    let mostrarDados = document.getElementById('dataOperationsOnLoad')
    axios.get(baseUrl, {

      }).then(response => {
        response.data.forEach(element => {
          console.log(element)
          
          let tab =
          `
          <thead>
          <tr>
              <th scope="col">Id</th>
              <th scope="col">Nome</th>
              <th scope="col">Descrição</th>
              <th scope="col">Ativo</th>
              <th scope="col"></th>
          </tr>
      </thead>
      `;
  
      for (let element of response.data) {
          tab +=
              `
          <tr onclick="preencherFormulario(this)">
              <td scope="row">${element.id}</td>
              <td>${element.name}</td>
              <td>${element.description}</td>
              <td>${element.active}</td>
              <td align="center"><button type="button" class="btn btn-success botoesConfig buttonEditar" 
              onclick="carregarModalAlterar()">Editar</button></td>
          </tr>
          `;
        }
      document.getElementById("bodytabela").innerHTML = tab;
        });
      })
        .catch(function (error) {
          //alert('Não funcionou a função.')
          mostrarDados.innerHTML += `<br>Não funcionou`
          console.error(error);
        })
        .finally(function () {
          // sempre será executado
        });

}*/

function getRegister(url) {
    let mostrarDados = document.getElementById('dataOperationsOnLoad')
    axios.get(baseUrl, {

      }).then(response => {
        response.data.forEach(element => {
          console.log(element)
          
 
      for (let element of response.data) {
        let registerName = element.register;

        // Selecione o elemento <select> pelo ID
        const selectCondominio = document.getElementById("selectRegister");

        // Crie uma opção com o nome do condomínio
        const optionElement = document.createElement("option");
        optionElement.value = registerName;
        optionElement.textContent = registerName;

        // Adicione a opção ao <select>
        selectCondominio.appendChild(optionElement);

        console.log(registerName);

        }
      document.getElementById("bodytabela").innerHTML = tab;
        });
      })
        .catch(function (error) {
          //alert('Não funcionou a função.')
          mostrarDados.innerHTML += `<br>Não funcionou`
          console.error(error);
        })
        .finally(function () {
          // sempre será executado
        });
/**/
}


//FUNÇÕES
/*
function getRegister(url) {
    const response = fetch(url, { method: "GET" });
    response.then(function (result) {
        return result.json();
    }).then(function (data) {

        for (let condomino of data) {
            let condominoNome = condomino.nome;

            // Selecione o elemento <select> pelo ID
            const selectCondominio = document.getElementById("select-condomino");

            // Crie uma opção com o nome do condomínio
            const optionElement = document.createElement("option");
            optionElement.value = condominoNome;
            optionElement.textContent = condominoNome;

            // Adicione a opção ao <select>
            selectCondominio.appendChild(optionElement);

            console.log(condominoNome);
        }
    });
}
*/




