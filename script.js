const botaoCriar = document.getElementById('botao');
const container = document.getElementById('container')

botaoCriar.addEventListener('click', function () {
  const textarea = document.createElement('div')
  textarea.contentEditable = true
  textarea.classList.add('area-editavel')

  const novoBotao = document.createElement('button')
  novoBotao.textContent = 'Adicionar Checkbox'
  novoBotao.classList.add('botao-checkbox')

  const botaoExcluir = document.createElement('button')
  botaoExcluir.textContent = 'X'
  botaoExcluir.classList.add('botao-excluir')

  botaoExcluir.addEventListener('click', function () {
    if (textarea) {
      textarea.remove()
      novoBotao.remove()
      botaoExcluir.remove()
    }
  })


  novoBotao.addEventListener('click', function () {
    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.id = 'checkbox'

    const label = document.createElement('label')
    label.htmlFor = checkbox.id
    label.textContent = 'Task'


    textarea.appendChild(checkbox)
    textarea.appendChild(label)
    textarea.appendChild(document.createElement('br'))

  })
  container.appendChild(textarea)
  container.appendChild(novoBotao)
  container.appendChild(botaoExcluir)

})

