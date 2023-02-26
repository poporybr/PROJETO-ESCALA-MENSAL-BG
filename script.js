
// Função para criar uma div dinamicamente e adicionar o funcionario dentro dessa div, selecionando funcionario, dia e função e caso essa div ja exista ele sera incluido dentro da div existente
function adicionar(){
  const funcionario = document.getElementById('funcionarios').value
  const dia = document.getElementById('diaSelecionado').value
  const funcao = document.getElementById('funcao').value

  const container = document.getElementById('containerTabelaMes')
  const divExistente = document.getElementById(dia)
  if (divExistente !== null){
    const pFinal = document.createElement('p')
    pFinal.textContent = `FUNCIONARIO: ${funcionario.toUpperCase()} / FUNÇÃO: ${funcao.toUpperCase()}`

    divExistente.appendChild(pFinal)
    pFinal.setAttribute('id', funcionario+dia)
  }else{
    const div = document.createElement('div')
    div.setAttribute('id', dia)
    container.appendChild(div)

    const pFinal = document.createElement('p')
    pFinal.textContent = `FUNCIONARIO: ${funcionario.toUpperCase()} / FUNÇÃO: ${funcao.toUpperCase()}`

    const paragrafoDia = document.createElement('p')
    paragrafoDia.textContent = `DIA: ${dia.toUpperCase()}`

    div.appendChild(paragrafoDia)
    div.appendChild(pFinal)
    pFinal.setAttribute('id', funcionario+dia)
  }
}
// Função remover container do card dentro do container do mes, selecionando apenas o dia
function removerDia(){
  const dia = document.getElementById('diaSelecionado').value
  const card = document.getElementById(dia)
  const container = document.getElementById('containerTabelaMes')
  if (card) {
    container.removeChild(card);
  }
}
// Função remover elemento selecionando o funcionario e o dia
function removerFuncionario(){
    const funcionario = document.getElementById('funcionarios').value
    const dia = document.getElementById('diaSelecionado').value
    const paragrafo = document.getElementById(funcionario+dia)
  
    if (paragrafo) {
      paragrafo.remove();
    }
}
  

