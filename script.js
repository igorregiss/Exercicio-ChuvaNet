function exibir() {
  verMais = document.getElementById('resumo__id')
  verMais.style.minHeight = '400px'
  verMais.style.overflowY = 'visible'
  btnV = document.getElementById('btn-resExp')
  btnV.style.visibility = 'hidden'
}
function criarTopico() {
  bt_topic = document.getElementById('criar-topico')
  bt_topic.style.display = 'contents'
  painel = document.getElementById('discurssao-painel')
  painel.style.display = 'none'
}
function editarTopico() {
  bt_topic = document.getElementById('criar-topico')
  bt_topic.style.display = 'contents'
  painel = document.getElementById('discurssao-painel-send')
  painel.style.display = 'none'
}
function criarNovoTopico() {
  painelSend = document.getElementById('discurssao-painel-send')
  painelSend.style.display = 'none'
  form = document.querySelector('#form-adiciona')
  form.reset()
  bt_topic = document.getElementById('criar-topico')
  bt_topic.style.display = 'contents'
}
function exibirResposta() {
  resp = document.getElementById('content-resp')
  resp.style.display = 'block'
}
function exibirResposta1() {
  resp = document.getElementById('content-resp-1')
  resp.style.display = 'block'
}
function enviarMsg() {
  topic = document.getElementById('criar-topico')
  topic.style.display = 'none'
  send = document.getElementById('discurssao-painel-send')
  send.style.display = 'block'
}
function like() {
  like = document.getElementById('like')
  like.innerHTML = '2 Like'
  like.style.color = 'blue'
}
function like2() {
  like = document.getElementById('like2')
  like.innerHTML = '2 Like'
  like.style.color = 'blue'
}