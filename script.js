// Varivel para somar dias trabalhados no mês
var diasTrabalhandoBreno = 0
var diasTrabalhandoEduardo = 0
var diasTrabalhandoLarissa = 0
var diasTrabalhandoMarcella = 0
var diasTrabalhandoPaulo = 0

// Variavel para controle de escala 6x1
var trabBreno = 0;
var trabEduardo = 0;
var trabLarissa = 0;
var trabMarcella = 0;
var trabPaulo = 0;

//Print em tela dos dias trabalhados
document.getElementById('trabBreno').innerHTML = diasTrabalhandoBreno;
document.getElementById('trabEduardo').innerHTML = diasTrabalhandoEduardo;
document.getElementById('trabLarissa').innerHTML = diasTrabalhandoLarissa;
document.getElementById('trabMarcella').innerHTML = diasTrabalhandoMarcella;
document.getElementById('trabPaulo').innerHTML = diasTrabalhandoPaulo

// Função para criar uma div dinamicamente e adicionar o funcionario dentro dessa div, selecionando funcionario, dia e função e caso essa div ja exista ele sera incluido dentro da div existente
function adicionar() {
  const loja = document.getElementById('lojaSelected')
  const funcionario = document.getElementById('funcionarios').value
  const dia = document.getElementById('diaSelecionado').value
  const funcao = document.getElementById('funcao').value

  // Retorne erro caso exista algum input vazio
  if (funcionario == 'default' || dia == 'default' || funcao == 'default' || loja == 'default') {
    alert('Todas as caixas devem estar preenchidas para a criação das tabelas!')
    return
  }

  //  Retorne erro caso o funcionario não seja gerente
  if (funcionario == 'rose' && funcao !== 'gerente') {
    alert(`${funcionario.toUpperCase()} só pode ser selecionado na função: "GERENTE"`)
    return
  }

  // Retorne erro quando o funcionario selecionado como gerente nao seja o gerente
  if (funcionario !== 'rose' && funcao == 'gerente') {
    alert(`Apenas "ROSE" pode ser selecionada como "${funcao.toUpperCase()}"`)
    return
  }

  // Verifica se o funcionário trabalhou nos últimos 6 dias, somando a variavel global da linha 9/13
  // Se sim, impossibilita ele de trabalhar novamente e alerta um erro
  switch(funcionario){
    case 'breno':
      if(trabBreno == 6 && funcao !== 'folga'){
        return alert(`O Funcionario "${funcionario.toUpperCase()}" ja trabalhou 6 dias e precisa que a função seja "FOLGA"`)
      }else if(funcao === "folga"){
        trabBreno = 0;
      }else{
        trabBreno++
      }
      break;
    case 'eduardo':
      if(trabEduardo == 6 && funcao !== 'folga'){
        return alert(`O Funcionario "${funcionario.toUpperCase()}" ja trabalhou 6 dias e precisa que a função seja "FOLGA"`)
      }else if(funcao === "folga"){
        trabEduardo = 0;
      }else{
        trabEduardo++
      }
      break;
    case 'larissa':
      if(trabLarissa == 6 && funcao !== 'folga'){
        return alert(`O Funcionario "${funcionario.toUpperCase()}" ja trabalhou 6 dias e precisa que a função seja "FOLGA"`)
      }else if(funcao === "folga"){
        trabLarissa = 0;
      }else{
        trabLarissa++
      }
      break;
    case 'marcella':
      if(trabMarcella == 6 && funcao !== 'folga'){
        return alert(`O Funcionario "${funcionario.toUpperCase()}" ja trabalhou 6 dias e precisa que a função seja "FOLGA"`)
      }else if(funcao === "folga"){
        trabMarcella = 0;
      }else{
        trabMarcella++
      }
      break;
    case 'paulo':
      if(trabPaulo == 6 && funcao !== 'folga'){
        return alert(`O Funcionario "${funcionario.toUpperCase()}" ja trabalhou 6 dias e precisa que a função seja "FOLGA"`)
      }else if(funcao === "folga"){
        trabPaulo = 0;
      }else{
        trabPaulo++
      }
      break;
  }


  const container = document.getElementById('containerTabelaMes')
  const divExistente = document.getElementById(dia)

  // Caso o dia selecionado pelo usuario ja exista na tabela.
  if (divExistente !== null) {

    // Verifica se o funcionario ja esta presente no dia, se sim retorna erro.
    const elementosFuncionario = divExistente.querySelectorAll(`[id^=${funcionario}]`);
    if (elementosFuncionario.length > 0) {
      alert(`O funcionário ${funcionario.toUpperCase()} já está presente neste dia!`);
      return;
    }

    // Cria um paragrafo para ser inserido dentro do dia & append ja definindo o id como (funcionario+dia) e class como 'pFinal'
    const pFinal = document.createElement('p')
    pFinal.textContent = `${funcionario.toUpperCase()} / ${funcao.toUpperCase()}`
    divExistente.appendChild(pFinal)
    pFinal.setAttribute('id', funcionario + dia)
    pFinal.classList.add('pFinal')

  // Switch para verificar o funcionario adicionado e somar um na variavel de diasTrabalhado na linha 1/6 
    switch (funcionario) {
      case 'breno':
        if (funcao !== 'folga') diasTrabalhandoBreno++
        document.getElementById('trabBreno').innerHTML = diasTrabalhandoBreno;
        break
      case 'eduardo':
        if (funcao !== 'folga') diasTrabalhandoEduardo++
        document.getElementById('trabEduardo').innerHTML = diasTrabalhandoEduardo;
        break
      case 'larissa':
        if (funcao !== 'folga') diasTrabalhandoLarissa++
        document.getElementById('trabLarissa').innerHTML = diasTrabalhandoLarissa;
        break
      case 'marcella':
        if (funcao !== 'folga') diasTrabalhandoMarcella++
        document.getElementById('trabMarcella').innerHTML = diasTrabalhandoMarcella;
        break
      case 'paulo':
        if (funcao !== 'folga') diasTrabalhandoPaulo++
        document.getElementById('trabPaulo').innerHTML = diasTrabalhandoPaulo
        break
      default:
        break
    }

  } else {
    // Cria um novo elemento de div e seta id e class e append em container onde será exibido na pagina 
    const div = document.createElement('div')
    div.setAttribute('id', dia)
    div.classList.add('diaAdicionado')
    container.appendChild(div)

    // cria o elemento de paragrafo para ser inserido dentro da div criada
    const pFinal = document.createElement('p')
    pFinal.classList.add('pFinal')
    pFinal.textContent = `${funcionario.toUpperCase()} / ${funcao.toUpperCase()}`

    const checkDomingo = document.getElementById('checkDomingo');
    const checkFeriado = document.getElementById('checkFeriado');
    const paragrafoDia = document.createElement('p')

    // verificador de chebox selected caso domingo e feriado ou ambos
    if (checkDomingo.checked && checkFeriado.checked) {
      paragrafoDia.textContent = `DIA: ${dia.toUpperCase()}  "DOMINGO & FERIADO"`
    } else if (checkDomingo.checked) {
      paragrafoDia.textContent = `DIA: ${dia.toUpperCase()}  "DOMINGO"`
    } else if (checkFeriado.checked) {
      paragrafoDia.textContent = `DIA: ${dia.toUpperCase()}  "FERIADO"`
    } else {
      paragrafoDia.textContent = `DIA: ${dia.toUpperCase()}`
    }

    // Insere o paragrafo do dia e final dentro da div
    div.appendChild(paragrafoDia)
    div.appendChild(pFinal)
    pFinal.setAttribute('id', funcionario + dia)

    // Switch para verificar o funcionario adicionado e somar um na variavel de diasTrabalhado na linha 1/6 
    switch (funcionario) {
      case 'breno':
        if (funcao !== 'folga') diasTrabalhandoBreno++
        document.getElementById('trabBreno').innerHTML = diasTrabalhandoBreno;
        break
      case 'eduardo':
        if (funcao !== 'folga') diasTrabalhandoEduardo++
        document.getElementById('trabEduardo').innerHTML = diasTrabalhandoEduardo;
        break
      case 'larissa':
        if (funcao !== 'folga') diasTrabalhandoLarissa++
        document.getElementById('trabLarissa').innerHTML = diasTrabalhandoLarissa;
        break
      case 'marcella':
        if (funcao !== 'folga') diasTrabalhandoMarcella++
        document.getElementById('trabMarcella').innerHTML = diasTrabalhandoMarcella;
        break
      case 'paulo':
        if (funcao !== 'folga') diasTrabalhandoPaulo++
        document.getElementById('trabPaulo').innerHTML = diasTrabalhandoPaulo
        break
      default:
        break
    }
  }
}

// Função para remover uma div criada com o usuario selecionando o dia 
function removerDia() {
  const dia = document.getElementById('diaSelecionado').value;
  const card = document.getElementById(dia);
  const container = document.getElementById('containerTabelaMes');
  const funcao = document.getElementById('funcao').value;

  // Caso o input dia nao esteja preenchido retorne erro
  if (dia == 'default') {
    alert('A opção dia precisa estar preenchida e existir para ser removida.')
    return
  }
  
  // Array com os nomes dos funcionários
  const funcionarios = ['breno', 'eduardo', 'larissa', 'marcella', 'paulo'];

  // Loop para iterar sobre todos os funcionários
  for (let i = 0; i < funcionarios.length; i++) {
    const nome = funcionarios[i];

    // Verifica se o funcionário está presente no dia selecionado
    if (funcao !== 'folga' && card.querySelector('#' + nome + dia) !== null) {

      // Switch para verificar o funcionario removido e subtrair um na variavel de diasTrabalhado na linha 1/6 
      switch (nome) {
        case 'breno':
          diasTrabalhandoBreno--;
          document.getElementById('trabBreno').innerHTML = diasTrabalhandoBreno;
          break;
        case 'eduardo':
          diasTrabalhandoEduardo--;
          document.getElementById('trabEduardo').innerHTML = diasTrabalhandoEduardo;
          break;
        case 'larissa':
          diasTrabalhandoLarissa--;
          document.getElementById('trabLarissa').innerHTML = diasTrabalhandoLarissa;
          break;
        case 'marcella':
          diasTrabalhandoMarcella--;
          document.getElementById('trabMarcella').innerHTML = diasTrabalhandoMarcella;
          break;
        case 'paulo':
          diasTrabalhandoPaulo--;
          document.getElementById('trabPaulo').innerHTML = diasTrabalhandoPaulo;
          break;
        default:
          break;
      }
    }
  }

  // caso o dia selecionado exista remova
  if (card) {
    container.removeChild(card)
  }
}

// Função para remover apenas um funcionario dentro de uma div criado mantendo a div presente
function removerFuncionario() {
  const funcionario = document.getElementById('funcionarios').value
  const dia = document.getElementById('diaSelecionado').value

  // Caso os inputs dia e funcionario não sejam selecionados retorne erro
  if (dia == 'default' || funcionario == 'default') {
    alert('As opções "Funcionario" e "Dia", precisam estar preenchidas e existir para que sejam removidas.')
  }

  // pega o funcionario e adiciona em paragrafo e a funcao escolhida pela usuario
  const paragrafo = document.getElementById(funcionario + dia)
  const funcao = document.getElementById('funcao').value

  // Caso o funcionario exista ele sera removido
  if (paragrafo) {
    paragrafo.remove();

    // Switch para verificar o funcionario removido e subtrair um na variavel de diasTrabalhado na linha 1/6 
    switch (funcionario) {
      case 'breno':
        if (funcao !== 'folga') diasTrabalhandoBreno--
        document.getElementById('trabBreno').innerHTML = diasTrabalhandoBreno;
        break
      case 'eduardo':
        if (funcao !== 'folga') diasTrabalhandoEduardo--
        document.getElementById('trabEduardo').innerHTML = diasTrabalhandoEduardo;
        break
      case 'larissa':
        if (funcao !== 'folga') diasTrabalhandoLarissa--
        document.getElementById('trabLarissa').innerHTML = diasTrabalhandoLarissa;
        break
      case 'marcella':
        if (funcao !== 'folga') diasTrabalhandoMarcella--
        document.getElementById('trabMarcella').innerHTML = diasTrabalhandoMarcella;
        break
      case 'paulo':
        if (funcao !== 'folga') diasTrabalhandoPaulo--
        document.getElementById('trabPaulo').innerHTML = diasTrabalhandoPaulo
        break
      default:
        break
    }
  }
}

//Função para copiar a ultima div criada e criar uma div identica mudando apenas o dia para o dia selecionado pelo usuario
function copiarUltimaDiv() {
  // seleciona o utimo dia
  const ultimoDia = document.querySelector('#containerTabelaMes .diaAdicionado:last-child');

  if (ultimoDia !== null) {
    const dia = document.getElementById('diaSelecionado').value;

    // Caso o dia selecionado ja tenha sido criado retorne erro
    if (document.getElementById(dia) !== null) {
      alert(`O dia ${dia} já foi adicionado. Por favor, selecione um dia diferente.`);
      return;
    }

    // seta id para o novoDia que sera criado
    const novoDia = ultimoDia.cloneNode(true);
    novoDia.setAttribute('id', dia);

    // Checar caso domingo e feriado estejam selecionados
    const checkDomingo = document.getElementById('checkDomingo');
    const checkFeriado = document.getElementById('checkFeriado');
    if (checkDomingo.checked && checkFeriado.checked) {
      novoDia.querySelector('p:first-child').textContent = `DIA: ${dia.toUpperCase()} / "DOMINGO/FERIADO"`;
    } else if (checkDomingo.checked) {
      novoDia.querySelector('p:first-child').textContent = `DIA: ${dia.toUpperCase()} / "DOMINGO"`;
    } else {
      novoDia.querySelector('p:first-child').textContent = `DIA: ${dia.toUpperCase()}`;
    }

    // Seleciona todos os paragrafos do dia copiado e itera sobre cada paragrafo mudando o id para o dia selecionado pelo usuario
    const paragrafos = novoDia.querySelectorAll('.pFinal');
    paragrafos.forEach((p) => {
      const idOriginal = p.getAttribute('id');
      p.setAttribute('id', idOriginal.replace(/\d+$/, dia));
    });

    // Append novoDia no container
    const container = document.getElementById('containerTabelaMes');
    container.appendChild(novoDia);

    // Array com os nomes dos funcionários
    const funcionarios = ['breno', 'eduardo', 'larissa', 'marcella', 'paulo'];

    // Loop para iterar sobre todos os funcionários
    for (let i = 0; i < funcionarios.length; i++) {
      const nome = funcionarios[i];
      const cardAtual = document.getElementById(nome + dia);

      if (cardAtual) {
        // Switch para verificar o funcionario adicionado e adicionar um na variavel de diasTrabalhado na linha 1/6 
        switch (nome) {
          case 'breno':
            diasTrabalhandoBreno++;
            document.getElementById('trabBreno').innerHTML = diasTrabalhandoBreno;
            break;
          case 'eduardo':
            diasTrabalhandoEduardo++;
            document.getElementById('trabEduardo').innerHTML = diasTrabalhandoEduardo;
            break;
          case 'larissa':
            diasTrabalhandoLarissa++;
            document.getElementById('trabLarissa').innerHTML = diasTrabalhandoLarissa;
            break;
          case 'marcella':
            diasTrabalhandoMarcella++;
            document.getElementById('trabMarcella').innerHTML = diasTrabalhandoMarcella;
            break;
          case 'paulo':
            diasTrabalhandoPaulo++;
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
function gerarPdf() {

  // Cria uma classe do frameWork
  const doc = new jsPDF();

  // Adiciona os dias trabalhados no PDF
  const diasTrabalhando = `BREN0: ${diasTrabalhandoBreno}, EDUARDO: ${diasTrabalhandoEduardo}, LARISSA: ${diasTrabalhandoLarissa}, MARCELA: ${diasTrabalhandoMarcella}, PAULO: ${diasTrabalhandoPaulo}`;

  // Seleciona o conteudo a ser exibido no PDF
  const conteudo = document.getElementById("containerTabelaMes");

  // adiciona o título e configura a fonte
  doc.setFontSize(16);
  doc.text(`ESCALA MENSAL LOJA 48`, 105, 20, { align: "center" });

  doc.setFontSize(14);
  doc.fromHTML(diasTrabalhando, 20, 40, { align: "center" });

  // configura a fonte para o tamanho do conteúdo
  doc.setFontSize(12);
  doc.fromHTML(conteudo, 20, 50, { align: "center" });

  // Ao salvar o documento nome de saida
  doc.save("escala.pdf")
};
