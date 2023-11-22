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

return (
  
j

    );
};
