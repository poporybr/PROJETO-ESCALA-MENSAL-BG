//Variaveis para o contador de dias trabalhados
var diasTrabalhandoBreno = 0
var diasTrabalhandoEduardo = 0
var diasTrabalhandoLarissa = 0
var diasTrabalhandoMarcella = 0
var diasTrabalhandoPaulo = 0

//Print em tela dos dias trabalhados
document.getElementById('trabBreno').innerHTML = diasTrabalhandoBreno;
document.getElementById('trabEduardo').innerHTML = diasTrabalhandoEduardo;
document.getElementById('trabLarissa').innerHTML = diasTrabalhandoLarissa;
document.getElementById('trabMarcella').innerHTML = diasTrabalhandoMarcella;
document.getElementById('trabPaulo').innerHTML = diasTrabalhandoPaulo

// Função para criar uma div dinamicamente e adicionar o funcionario dentro dessa div, selecionando funcionario, dia e função e caso essa div ja exista ele sera incluido dentro da div existente
function adicionar(){
  const loja = document.getElementById('lojaSelected')
  const funcionario = document.getElementById('funcionarios').value
  const dia = document.getElementById('diaSelecionado').value
  const funcao = document.getElementById('funcao').value

  //Tratamento de erro, para caso o usuario nao preencha todos os input.
  if(funcionario == 'default' || dia == 'default' || funcao == 'default' || loja == 'default'){
    alert('Todas as caixas devem estar preenchidas para a criação das tabelas!')
    return
  }

  // Verifica se o funcionário trabalhou nos últimos 6 dias
  // Se sim, impossibilita ele de trabalhar novamente e alerta um erro
  // const ultimosDias = document.querySelectorAll('.diaAdicionado')
  // let contadorDiasFunc = 0

  // Seleciona apenas os últimos 6 dias
  // const ultimosSeisDias = Array.prototype.slice.call(ultimosDias, -6)
  // if (ultimosSeisDias.length > 0) {
  //   const ultimaDiv = ultimosDias[ultimosDias.length - 1]
  //   const funcao = ultimaDiv.querySelector('.pFinal').value
  //   console.log(funcao.value)
  //   if (funcao === 'folga') {
  //     contadorDiasFunc = 0
  //   }
  // }  

  // for (let i = 0; i < ultimosSeisDias.length; i++) {
  //   const divDia = ultimosSeisDias[i]
  //   const funcionarioS = divDia.querySelector(`#${funcionario+divDia.id}`)
  //   if (funcionarioS !== null) {
  //     contadorDiasFunc++
  //     if (contadorDiasFunc === 6) {
  //       const funcao = document.getElementById('funcao').value
  //       if (funcao !== 'folga') {
  //         alert(`O funcionário ${funcionario.toUpperCase()} trabalhou nos últimos 6 dias, então só é possível atribuir a função 'FOLGA'.`)
  //         return
  //       }
  //     }
  //   }
  // }
  
  //switch para verificar qual funcionario esta sendo adicionado e somar +1 dia no contador
  switch(funcionario){
    case 'breno':
      if(funcao !== 'folga') diasTrabalhandoBreno ++
      document.getElementById('trabBreno').innerHTML = diasTrabalhandoBreno;
      break
    case 'eduardo':
      if(funcao !== 'folga') diasTrabalhandoEduardo ++
      document.getElementById('trabEduardo').innerHTML = diasTrabalhandoEduardo;
      break
    case 'larissa':
      if(funcao !== 'folga') diasTrabalhandoLarissa ++
      document.getElementById('trabLarissa').innerHTML = diasTrabalhandoLarissa;
      break
    case 'marcella':
      if(funcao !== 'folga') diasTrabalhandoMarcella ++
      document.getElementById('trabMarcella').innerHTML = diasTrabalhandoMarcella;
      break
    case 'paulo':
      if(funcao !== 'folga') diasTrabalhandoPaulo ++
      document.getElementById('trabPaulo').innerHTML = diasTrabalhandoPaulo
      break
    default:
      break
  }

  //Variaveis para adicionar uma div de dia
  const container = document.getElementById('containerTabelaMes')
  const divExistente = document.getElementById(dia)
  
  //se a div ja exitir o funcionario é somente adicionado
  if (divExistente !== null){
    const pFinal = document.createElement('p') //cria o paragrafo que vai receber os parametros
    pFinal.textContent = `${funcionario.toUpperCase()} / ${funcao.toUpperCase()}` //adiciona texto ao paragrafo criado

    divExistente.appendChild(pFinal) //append do paragrafo dentro da div
    pFinal.setAttribute('id', funcionario+dia) //set id
    pFinal.classList.add('pFinal') //set class

  //senao cria a div
  }else{
    const div = document.createElement('div') //cria o elemento dv
    div.setAttribute('id', dia) //set o id
    div.classList.add('diaAdicionado') //set class
    container.appendChild(div) //append no container

    const pFinal = document.createElement('p') //cria o paragrafo
    pFinal.classList.add('pFinal') //set class
    pFinal.textContent = `${funcionario.toUpperCase()} / ${funcao.toUpperCase()}` //adiciona txt ao paragrafo

    const paragrafoDia = document.createElement('p')
    paragrafoDia.textContent = `DIA: ${dia.toUpperCase()}`

    div.appendChild(paragrafoDia)
    div.appendChild(pFinal)
    pFinal.setAttribute('id', funcionario+dia)
  }
}

// Função remover container do card dentro do container do mes, selecionando apenas o dia
function removerDia() {
  const dia = document.getElementById('diaSelecionado').value;
  const card = document.getElementById(dia);
  const container = document.getElementById('containerTabelaMes');
  const funcao = document.getElementById('funcao').value;
  
  //Parar a função caso on inputs necessarios nao teham sido preenchidos
  if(dia == 'default'){
    alert('A opção dia precisa estar preenchida e existir para ser removida.')
    return
  }
  // Array com os nomes dos funcionários
  const funcionarios = ['breno', 'eduardo', 'larissa', 'marcella', 'paulo'];

  // Loop para iterar sobre todos os funcionários
  for (let i = 0; i < funcionarios.length; i++) {
    const nome = funcionarios[i];

    // Verifica se o funcionário está presente no dia selecionado
    if (funcao !== 'folga' && card.querySelector('#'+nome+dia) !== null) {

      // Subtrai 1 do contador correspondente
      switch (nome) {
        case 'breno':
          diasTrabalhandoBreno --;
          document.getElementById('trabBreno').innerHTML = diasTrabalhandoBreno;
          break;
        case 'eduardo':
          diasTrabalhandoEduardo --;
          document.getElementById('trabEduardo').innerHTML = diasTrabalhandoEduardo;
          break;
        case 'larissa':
          diasTrabalhandoLarissa --;
          document.getElementById('trabLarissa').innerHTML = diasTrabalhandoLarissa;
          break;
        case 'marcella':
          diasTrabalhandoMarcella --;
          document.getElementById('trabMarcella').innerHTML = diasTrabalhandoMarcella;
          break;
        case 'paulo':
          diasTrabalhandoPaulo --;
          document.getElementById('trabPaulo').innerHTML = diasTrabalhandoPaulo;
          break;
        default:
          break;
      }
    }
  }
  
  if(card){
    container.removeChild(card)
  }
}

// Função remover elemento selecionando o funcionario e o dia
function removerFuncionario() {
  const funcionario = document.getElementById('funcionarios').value
  const dia = document.getElementById('diaSelecionado').value
  if(dia == 'default' || funcionario == 'default'){
    alert('As opções "Funcionario" e "Dia", precisam estar preenchidas e existir para que sejam removidas.')
  }
  const paragrafo = document.getElementById(funcionario + dia)
  const funcao = document.getElementById('funcao').value
  if (paragrafo) {
    paragrafo.remove();
    switch(funcionario){
      case 'breno':
      if(funcao !== 'folga') diasTrabalhandoBreno --
      document.getElementById('trabBreno').innerHTML = diasTrabalhandoBreno;
      break
    case 'eduardo':
      if(funcao !== 'folga') diasTrabalhandoEduardo --
      document.getElementById('trabEduardo').innerHTML = diasTrabalhandoEduardo;
      break
    case 'larissa':
      if(funcao !== 'folga') diasTrabalhandoLarissa --
      document.getElementById('trabLarissa').innerHTML = diasTrabalhandoLarissa;
      break
    case 'marcella':
      if(funcao !== 'folga') diasTrabalhandoMarcella --
      document.getElementById('trabMarcella').innerHTML = diasTrabalhandoMarcella;
      break
    case 'paulo':
      if(funcao !== 'folga') diasTrabalhandoPaulo --
      document.getElementById('trabPaulo').innerHTML = diasTrabalhandoPaulo
      break
    default:
      break
    }
  }
}

//Função para copiar a ultima Div criada dinamicamente e criar uma div identica após ela mudando apenas o dia para o dia selecionado pelo usuario
function copiarUltimaDiv() {
  const ultimoDia = document.querySelector('#containerTabelaMes .diaAdicionado:last-child');

  if (ultimoDia !== null) {
    const dia = document.getElementById('diaSelecionado').value;
    if (document.getElementById(dia) !== null) {
      alert(`O dia ${dia} já foi adicionado. Por favor, selecione um dia diferente.`);
      return;
    }
    const novoDia = ultimoDia.cloneNode(true);
    novoDia.setAttribute('id', dia);
    novoDia.querySelector('p:first-child').textContent = `DIA: ${dia.toUpperCase()}`;
    const paragrafos = novoDia.querySelectorAll('.pFinal');
    paragrafos.forEach((p) => {
      const idOriginal = p.getAttribute('id');
      p.setAttribute('id', idOriginal.replace(/\d+$/, dia));
    });
    const container = document.getElementById('containerTabelaMes');
    const divExistente = document.getElementById(dia);
    if (divExistente !== null) {
      divExistente.parentNode.replaceChild(novoDia, divExistente);
    } else {
      container.appendChild(novoDia);
    }

    // Array com os nomes dos funcionários
    const funcionarios = ['breno', 'eduardo', 'larissa', 'marcella', 'paulo'];

    // Loop para iterar sobre todos os funcionários
    for (let i = 0; i < funcionarios.length; i++) {
      const nome = funcionarios[i];
      const cardAtual = document.getElementById(nome + dia);
      
      // Verifica se o funcionário está presente no card clonado
      if (cardAtual !== null) {

        // Incrementa o contador de dias trabalhados do funcionário
        switch (nome) {
          case 'breno':
            diasTrabalhandoBreno ++;
            document.getElementById('trabBreno').innerHTML = diasTrabalhandoBreno;
            break;
          case 'eduardo':
            diasTrabalhandoEduardo ++;
            document.getElementById('trabEduardo').innerHTML = diasTrabalhandoEduardo;
            break;
          case 'larissa':
            diasTrabalhandoLarissa ++;
            document.getElementById('trabLarissa').innerHTML = diasTrabalhandoLarissa;
            break;
          case 'marcella':
            diasTrabalhandoMarcella ++;
            document.getElementById('trabMarcella').innerHTML = diasTrabalhandoMarcella;
            break;
          case 'paulo':
            diasTrabalhandoPaulo ++;
            document.getElementById('trabPaulo').innerHTML = diasTrabalhandoPaulo;
            break;
          default:
            break;
        }
      }
    }
  }
}

//Função para ao clicar no botao baixar um pdf com a escala completa 
document.getElementById("download-pdf-btn").addEventListener("click", function() {
  const loja = document.getElementById('lojaSelected').value
  const doc = new jsPDF();
  const diasTrabalhando = `BREN0: ${diasTrabalhandoBreno}, EDUARDO: ${diasTrabalhandoEduardo}, LARISSA: ${diasTrabalhandoLarissa}, MARCELA: ${diasTrabalhandoMarcella}, PAULO: ${diasTrabalhandoPaulo}`;
  const conteudo = document.getElementById("containerTabelaMes");
  
  // adiciona o título e configura a fonte
  doc.setFontSize(16);
  doc.text(`ESCALA MENSAL LOJA ${loja}`, 105, 20, {align: "center"});

  doc.setFontSize(14);
  doc.fromHTML(diasTrabalhando, 20, 40, {align: "center"});
  
  // configura a fonte para o tamanho do conteúdo
  doc.setFontSize(12);
  doc.fromHTML(conteudo, 20, 50, {align: "center"});
  doc.save("escala.pdf")
});
