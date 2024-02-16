var menuIdeal = {
    ADMINISTRADOR:
        `
    <nav class="navbar navbar-expand-lg" style="background-color: #e3f2fd;">
        <div class="container-fluid">
            <a class="navbar-brand" href="telaprincipal.html">Controle Financeiro</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="telaprincipal.html">Home</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Cadastros
                        </a>
                        <ul class="dropdown-menu">
                            <li>
                                <a class="dropdown-item" href="#"> Pessoa &raquo; </a>
                                <ul class="submenu dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Cadastros</a></li>
                                    <li><a class="dropdown-item" href="users.html">Usuários</a></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Entradas
                        </a>
                        <ul class="dropdown-menu">
                            <li>
                                <a class="dropdown-item" href="#"> Entradas &raquo; </a>
                                <ul class="submenu dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Cadastrar</a></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Saídas
                        </a>
                        <ul class="dropdown-menu">
                            <li>
                                <a class="dropdown-item" href="#"> Saídas &raquo; </a>
                                <ul class="submenu dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Cadastrar</a></li>
                                    <li><a class="dropdown-item" href="#">Parcelas</a></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="telaprincipal.html">Ajuda</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
`
};
/*
var menuIdeal = {
    ADMINISTRADOR: 
`
    <!--<nav class="navbar navbar-expand-lg navbar-dark bg-dark" id="menu">-->
    <nav class="navbar navbar-expand-lg" style="background-color: #e3f2fd;" id="menu">
        <div class="container-fluid" id="menu-config">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav"
                aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="main_nav">

                <ul class="navbar-nav">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown"> Cadastros </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="apartamento.html"> Apartamento </a></li>
                            <li><a class="dropdown-item" href="#"> Endereço &raquo; </a>
                                <ul class="submenu dropdown-menu">
                                    <li><a class="dropdown-item" href="cidade.html">Cidade</a></li>
                                    <li><a class="dropdown-item" href="estados.html">Estado</a></li>
                                    <li><a class="dropdown-item" href="pais.html">País</a></li>
                                </ul>
                            </li>
                            <li><a class="dropdown-item" href="usuarios.html"> Usuário </a></li>
                            <li><a class="dropdown-item" href="fornecedores.html"> Fornecedores </a>
                            <li><a class="dropdown-item" href="#"> Pessoas &raquo; </a>
                                <ul class="submenu dropdown-menu">
                                    <li><a class="dropdown-item" href="condomino.html"> Condômino </a></li>
                                    <li><a class="dropdown-item" href="dependentes.html"> Dependentes </a></li>
                                    <li><a class="dropdown-item" href="sindico.html"> Síndico </a></li>
                                    <li><a class="dropdown-item" href="tipodependente.html"> Tipo de dependente </a></li>
                                </ul>
                            </li>
                            <li><a class="dropdown-item" href="veiculos.html"> Veículos </a>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown"> Financeiro </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="entradafinanceiro.html"> Entradas </a></li>
                            <li><a class="dropdown-item" href="saidafinanceiro.html"> Saídas </a></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown"> Manutenções </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="manutencao.html"> Manutenções </a></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown"> Síndico </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="licencas.html"> Licenças </a></li>
                            <li><a class="dropdown-item" href="avisos.html"> Avisos </a></li>
                            <li><a class="dropdown-item" href="ocorrencias.html"> Ocorrências </a></li>
                            <li><a class="dropdown-item" href="vincularcondominoapto.html"> Vincular condômino/apto </a></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown"> Estoque </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="entradaestoque.html"> Entrada </a></li>
                            <li><a class="dropdown-item" href="saidaestoque.html"> Saída </a></li>
                            <li><a class="dropdown-item" href="itens.html"> Itens </a></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown"> <!--MENU RELATÓRIOS-->
                        <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown"> Relatórios </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#"> Cadastros &raquo; </a>
                                <ul class="submenu dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Endereço &raquo; </a>
                                        <ul class="submenu dropdown-menu">
                                            <li><a class="dropdown-item" href="relatorio.html"
                                                onclick="loadCidades()">Cidade</a></li>
                                            <li><a class="dropdown-item" href="relatorio.html"
                                                onclick="loadEstados()">Estado</a></li>
                                            <li><a class="dropdown-item" href="relatorio.html" 
                                                onclick="loadPais()">País</a></li>
                                        </ul>
                                    </li>
                                    <li><a class="dropdown-item" href="relatorio.html"
                                        onclick="loadApto()"> Apartamentos </a></li>
                                    <li><a class="dropdown-item" href="relatorio.html"
                                        onclick="loadUsuarios()"> Usuários </a></li>
                                    <li><a class="dropdown-item" href="relatorio.html"
                                        onclick="loadFornecedores()"> Fornecedores </a></li>
                                    <li><a class="dropdown-item" href="#">Pessoas &raquo; </a>
                                        <ul class="submenu dropdown-menu">
                                            <li><a class="dropdown-item" href="relatorio.html"
                                                onclick="loadCondomino()">Condôminos</a></li>
                                            <li><a class="dropdown-item" href="relatorio.html"
                                                onclick="loadDependentes()">Dependentes</a></li>
                                            <li><a class="dropdown-item" href="relatorio.html"
                                                onclick="loadSindicos()">Síndicos</a></li>
                                            <li><a class="dropdown-item" href="relatorio.html"
                                                onclick="loadTipoDep()">Tipo de dependentes</a></li>
                                        </ul>
                                    </li>
                                    <li><a class="dropdown-item" href="#"
                                        onclick="loadVeiculos()"> Veículos </a></li>
                                </ul>
                            </li>
                            <li><a class="dropdown-item" href="#"> Financeiro &raquo; </a>
                                <ul class="submenu dropdown-menu">
                                    <li><a class="dropdown-item" href="relatorio.html"
                                        onclick="loadEntradasFinanceiras()"> Entradas </a></li>
                                    <li><a class="dropdown-item" href="relatorio.html"
                                        onclick="loadSaidasFinanceiras()"> Saídas </a></li>
                                </ul>
                            </li>
                            <li><a class="dropdown-item" href="#"> Manutenções &raquo; </a>
                                <ul class="submenu dropdown-menu">
                                    <li><a class="dropdown-item" href="relatorio.html"
                                        onclick="loadManutencoes()"> Manutenções </a></li>
                                </ul>
                            </li>
                            <li><a class="dropdown-item" href="#"> Síndico &raquo; </a>
                                <ul class="submenu dropdown-menu">
                                    <li><a class="dropdown-item" href="relatorio.html"
                                        onclick="loadLicencas()"> Licenças </a></li>
                                    <li><a class="dropdown-item" href="relatorio.html"
                                        onclick="loadAvisos()"> Avisos </a></li>
                                    <li><a class="dropdown-item" href="relatorio.html"
                                        onclick="loadOcorrencias()"> Ocorrências </a></li>
                                    <li><a class="dropdown-item" href="relatorio.html"
                                        onclick="loadCondApto()"> Condômino/Apartamento </a></li>
                                </ul>
                            </li>
                            <li><a class="dropdown-item" href="#"> Estoque &raquo; </a>
                                <ul class="submenu dropdown-menu">
                                    <li><a class="dropdown-item" href="relatorio.html"
                                        onclick="loadEntradaEstoque()"> Entrada </a></li>
                                    <li><a class="dropdown-item" href="relatorio.html"
                                        onclick="loadSaidaEstoque()"> Saída </a></li>
                                    <li><a class="dropdown-item" href="relatorio.html"
                                        onclick="loadItemEstoque()"> Itens </a></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown"> Ajuda </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="versaosistema.html"> Versão do sistema </a></li>
                            <li><a class="dropdown-item" href="documentacao.html"> Documentação </a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div> 
    </nav>
`
};
*/