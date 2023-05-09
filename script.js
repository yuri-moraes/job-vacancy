const vagas = []

function listarVagas() {
  if (vagas.length > 0) {
    const vagasEmTexto = vagas.reduce(function (textoFinal, vaga, indice) {
      //1. Nome, (x candidatos)
      textoFinal += indice + ". "
      textoFinal += vaga.nome
      textoFinal += ` (${vaga.candidatos.length} candidatos)\n`
      return textoFinal
    }, '')
    alert(vagasEmTexto)
  } else {
    alert('Não há vagas disponíveis no momento.')
  }
}
  
function novaVaga () {
  const nome = prompt('Informe um nome para a vaga:')
  const descricao = prompt('Informe uma descrição para a vaga:')
  const dataLimite = prompt('Informe uma data limite (dd/mm/aaaa) para a vaga:')

  const confirmacao = confirm(`Deseja criar uma vaga com essas informações?
  Nome: ${nome}
  Descrição: ${descricao}
  Data Limite: ${dataLimite}
  `)

  if (confirmacao) {
    const novaVaga = { nome, descricao, dataLimite, candidatos: [] }
    vagas.push(novaVaga)
    alert(`Vaga Criada.`)
  } else {
    alert('Criação cancelada, voltando ao menu...')
  }
}

function exibirVaga () {
  const indice = parseInt(prompt('Informe o indice da vaga que deseja exibir:'))
  if (indice >= vagas.length || indice < 0 || isNaN(indice)) {
    alert('Valor inválido.')
    return
  }

  const vaga = vagas[indice]

  const candidatosEmTexto = vaga.candidatos.reduce(function (textoFinal, candidato) {
  return textoFinal + '\n - ' + candidato
}, "")

  alert(`
  Vaga nº ${indice}
  Nome: ${vaga.nome}
  Descrição: ${vaga.descricao} 
  Data limite: ${vaga.dataLimite} 
  Quantidade de candidatos: ${vaga.candidatos.length}
  Candidatos inscritos: ${candidatosEmTexto}
  `)
}

function inscreverCandidato() {
  const candidato = prompt('Informe o nome do(a) candiato(a):')
  const indice = parseInt(prompt('Informe o índice da vaga para qual o(a) candidato(a) deseja se inscrever:'))
  const vaga = vagas[indice]

  const confirmacao = confirm(`
  Deseja inscrever o candidato(a) ${candidato} na vaga ${indice} ?
  Nome: ${vaga.nome}
  Descrição: ${vaga.descricao}
  Data limite: ${vaga.dataLimite} 
  `)
  if (confirmacao) {
    vaga.candidatos.push(candidato)
    alert(`Inscrição realizada com sucesso.`)
  } else {
    alert("Inscrição cancelada. Voltando ao menu.")
  }
}

function excluirVaga () {
  const indice = parseInt(prompt('Qual o índidce da vaga que você deseja excluir?'))

  if (indice >= vagas.length || indice < 0 || isNaN(indice)) {
    alert('Valor inválido')
    return
  }
2
  const vaga = vagas[indice]

  const confirmacao = confirm(`
  Tem certeza que deseja excluir a vaga ${indice}?
  Nome: ${vaga.nome}
  Descrição: ${vaga.descricao}
  Data limite: ${vaga.dataLimite} 
  `)

  if (confirmacao) {
     vagas.splice(indice, 1)
     alert('Vaga excluida.')
  } else {
    alert('Processo de cancelamento interrompido.')
  }
}

function exibirMenu() {
  const opcao = prompt(`
  Cadastro de vagas de Emprego
  
  Escolha uma das opções:
  1. Listar vagas disponíveis
  2. Criar uma nova vaga
  3. Visualizar uma vaga
  4. Increver um(a) candidato(a)
  5. Excluir uma vaga.
  6. Sair
  `)

  return opcao
}

function executar() {
  let opcao = ''

  do {
    opcao = exibirMenu()

    switch (opcao) {
      case '1':
        listarVagas()
        break
      case '2':
        novaVaga()
        break
      case '3':
        exibirVaga()
        break
      case '4':
        inscreverCandidato() 
        break
      case '5':
        excluirVaga()
        break 
      case '6':
        alert('Saindo...')
      default:
        alert('Valor inválido!')
    }
  } while (opcao !== '6');

  return executar
}

executar()