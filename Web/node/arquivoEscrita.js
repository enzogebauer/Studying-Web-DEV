const fs = require('fs')
const produto = {
  nome:"Celular",
  preco: 1249.99,
  desconto:0.15
}
fs.writeFile(__dirname + '/arquivoGerado.json',JSON.stringify(produto),err=>{
  console.log(err || 'Arquivo Salvo com sucesso!')// se o valor de erro for nulo, quer dizer q deu certo
})