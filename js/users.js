let baseUrl = "http://localhost:8080/users"

////////////////////////////////////
//TESTE MODAL
function carregarModalCadastro() {
    const myModal = new bootstrap.Modal('#modal-cadastro', {});
    myModal.show();
}

function carregarModalAlterar() {
    const myModal = new bootstrap.Modal('#modal-alterar', {});
    myModal.show();
}
///////////////////////////////////////////

function cadastrarOperation() {
    var register = document.getElementById('selectRegister')
    var username = document.getElementById('username')
    var password = document.getElementById('password')
    var active = document.getElementById('is_active')
    var mostrarDados = document.getElementById('dataOperationsOnLoad')

    console.log(`Status dos input's: 
            Name: ${username.value} | Description: ${register.value}. | Active: ${active.value}`)

    axios.post(baseUrl, {
        register: register.value,
        username: username.value,
        password: password.value,
        is_active: active.value
    })
        .then(function (response) {
            console.log(response);

            if (response.status == 200) {
                const myModal = new bootstrap.Modal('#modal-sucesso-cadastro', {});
                myModal.show();
                username.value = ''
                password.value = ''
                mostrarDados.innerHTML += ''
                showOperation()
            }
        })
        .catch(function (error) {
            const myModal = new bootstrap.Modal('#modal-erro-cadastro', {});
            myModal.show();
            console.log(error);
        });
}

function alterarOperation() {
    var id = document.getElementById('idUpdate')
    var name = document.getElementById('nameUpdate')
    var description = document.getElementById('descriptionUpdate')
    var active = document.getElementById('activeUpdate')
    var mostrarDados = document.getElementById('dataOperationsOnLoad')

    var activeStatus = false

    if (active.checked) {
        activeStatus = true
    }

    console.log(`Status dos input's:Id: ${id.value} | Name: ${name.value} 
    | Description: ${description.value} | Active: ${active}.`)

    axios.put(baseUrl, {
        id: id.value,
        name: name.value,
        description: description.value,
        active: activeStatus

    })
        .then(function (response) {
            console.log(response);

            if (response.status == 200) {
                const myModal = new bootstrap.Modal('#modal-sucesso-alterar', {});
                myModal.show();
                name.value = ''
                description.value = ''
                mostrarDados.innerHTML += ''
                showOperation()
            }
        })
        .catch(function (error) {
            const myModal = new bootstrap.Modal('#modal-erro-cadastro', {});
            myModal.show();
            console.log(error);
        });
}

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
              <th scope="col">Cadastro principal</th>
              <th scope="col">Username</th>
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
              <td>${element.register}</td>
              <td>${element.username}</td>
              <td>${element.is_active}</td>
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
    /**/
}

//PEGAR DADOS DA LINHA DA TABELA E MOSTRAR NO FORMULÁRIO
function preencherFormulario(linha) {
    const id = linha.cells[0].textContent;
    const reg = linha.cells[1].textContent;
    const users = linha.cells[2].textContent;
    const active = linha.cells[3].textContent;


    document.getElementById('idUpdate').value = id;

    // Crie uma opção com o nome do condomínio
    document.getElementById('selectRegister2')
    const optionElement = document.createElement("option");
    optionElement.value = reg;
    optionElement.textContent = reg;
    // Adicione a opção ao <select>
    selectRegister2.appendChild(optionElement);

    document.getElementById('username2').value = users;
    /**/
    if (active.value == true) {
        document.getElementById('is_active2').setAttribute = true
    } else {
        document.getElementById('is_active2').setAttribute = false
    }
}
/*
function carregarDadosModal() {
    preencherFormulario()
}*/