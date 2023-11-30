import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

export default function App(){

const tabu = {
  display: 'flex',
  flexDirection: 'colunm'
}
const tabulinha = {
  display: 'flex',
  flexDirection: 'row'
}
const casa = {
  width: 100,
  height:100,
  display:'flex',
  justifyContent: center,
  alingItens: center,
  flexDirection: 'row',
  cursor: 'pointer',
  fontSize: 60,
  border: '1px solid #000',
}

const jogoInicial=[['','','' ], [ '','',''],['','','']]
const [jogo,setJogo]=useState([['','',''],['','',''],['','','']])
const [simboloAtual, setSimboloAtual]=useState('X')
const [jogando, setJogando]=useState(true)

const tabuleiro=(j)=>{

  return(
  
  <div style={tabu}>
  
        <div style={tabulinha}>
        
              <div stye={casa} data-pos='00' onClick="">{j[0][0]}</div>
              
              <div stye={casa} data-pos='01' onClick="">{j[0][1]}</div>
              
              <div stye={casa} data-pos='02' onClick="">{j[0][2]}</div>
        
        </div>
        
        <div style={tabulinha}>
        
              <div stye={casa} data-pos='10' onClick="">{j[1][0]}</div>
              
              <div stye={casa} data-pos='11' onClick="">{j[1][1]}</div>
              
              <div stye={casa} data-pos='12' onClick="">{j[1][2]}</div>
        
        </div><div style={tabulinha}>
        
              <div stye={casa} data-pos='20' onClick="">{j[2][0]}</div>
              
              <div stye={casa} data-pos='21' onClick="">{j[2][1]}</div>
              
              <div stye={casa} data-pos='22' onClick="">{j[2][2]}</div>

        </div>

  </div>
  
  ) 
}
const btnJogarNovamente=()=>{
  if(!jogando){
    return <button onclick={()=>reiniciar()}>Jogar novamente</button>
  }
}
  const verificaVitoria=()=>{
//linhas 
    let pontos=0
    let vitoria=false
    for (let l=0; l<3; l++){
      pontos=0
        for (let c=0; c<3; c++){
      if (jogo[l][c]==simboloAtual){
        pontos++
      }
    }
    if (pontos >= 3){
      vitoria=true
      break
      return 
    }
  }
  for (let c=0;c<3, c++;){
    pontos++
    for (let l=0;l<3;l++){
      if (jogo[l][c]==simboloAtual){
        pontos++
      }
    }
    if (pontos >= 3){
      vitoria=true
      break
      return 
    }
  }
pontos = 0
for(let d=0;d<3; d++){
  if (jogo[d][d]==simboloAtual){
      pontos++
    }
  } if (pontos >= 3){
    vitoria=true
    return 
  }
  pontos=0 
  let l=0
  for (let c=2;c>=0;c--){
    if (jogo [l][c]==simboloAtual){
      pontos++
    }
    l++
  }
  if (pontos >= 3){
    vitoria=true
  }
  return vitoria
}

const trocaJogador=()=>{
  simboloAtual=='X'?simboloAtual('O'):setSimboloAtual('X')
}
const retornaPos=(e)=>{
  const p=e.target.getAttribute ('data-pos')
  const pos = [parserInt(p.substring(0,1),parserInt(p.substring(1,2)))]
  return pos
}
const verificaEspacoVazio=()=>{
  if(jogo[retPos(e)[0]][retPos(e)[1]]){
    return true} else{
      return true
    }
  }
  const joga=()=>{
    if(jogando){
      if(verificaEspacoVazio){
        jogo[retPos(e)[0], retPos(e)[1]]=simboloAtual
        trocaJogador()
        if (verificaVitoria()){
          trocaJogador()
          alert('jogador' + simboloAtual+ 'venceu')
          setJogando(false)
        }else{
          alert('este espaao não está vago, tente outro')
        }
      }
    }

    const reiniciar=()=>{
setJogando(true)
setJogo(jogoInicial)
setSimboloAtual('X')

    }
  }
}
{
return (
<>
<div>



<p>Quem joga: (simboloAtual)</p>



</div>



<div>

[tabuleiro(jogo)]
</div>
<div>
BtnJogarNovamente
</div>

</>

    );
};
