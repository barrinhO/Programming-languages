alert("Digite em letras minúsculas!");

function pesquisar() {
  let section = document.getElementById("resultados-pesquisa");
  let campoPesquisa = document.getElementById("campo-pesquisa").value;

  if (!campoPesquisa) {
    section.innerHTML =
      '<strong><p class="nenhum-resultado">O campo de pesquisa está vazio</p><strong/>';
    return;
  }

  let title = "";
  let resultados = "";
  let tags = "";

  for (let dado of dados) {
    title = dado.title.toLowerCase();
    if (title.includes(campoPesquisa)) {
      // cria um novo elemento
      resultados += `
        <div class="item-resultado">
            <h2>
                <p>${dado.title}<p/>
            </h2>
                <p class="descrição-meta">${dado.description}</p>
                <a target="_blank" href="${dado.link}">Mais informações</a>
        </div>
        `;
    }
  }

  if (!resultados) {
    resultados =
      '<strong><p class="nenhum-resultado">Nada encontrado</p><strong/>';
  }

  section.innerHTML = resultados;
}
