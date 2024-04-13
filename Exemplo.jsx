import './App.css'

function App() {
  const name = 'Sol';     
  const styleName = {
    color: 'Orange',
    fontSize: '100px',
  }  

let dataNascimento = new Date(2005, 11, 16);
let dataAtual = new Date();
let idade = dataAtual.getFullYear() - dataNascimento.getFullYear();

if (dataNascimento.getMonth() > dataAtual.getMonth()) {
  idade--;
} else if (dataNascimento.getMonth() === dataAtual.getMonth() && dataNascimento.getDate() > dataAtual.getDate()) {
  idade--;
}
  let recado;
  if(idade >= 18){
    recado = `Anuncio permitido para ${name}`
  }
  if(idade <18 ){
    recado = `Anuncio não permitido para ${name}`
  }
  
 return (
    <>
    <h1 style={styleName}>🔅{name}🔅</h1>
    <h3>Idade de {name} é: {idade}</h3>
    <h4>{recado}</h4>
    <p>Porto Alegre, {dataAtual.getFullYear}</p>
    </>
  )
}

export default App
