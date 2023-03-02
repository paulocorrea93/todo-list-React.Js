import React, { useState, useEffect } from 'react';
import './ToDoList.css';
import Icon from '../img/main-icon.png';

export default function ToDoList() {

  // local storage

  const listaStorage = localStorage.getItem('Lista');

  // lógica

  const [lista, setLista] = useState(listaStorage ? JSON.parse(listaStorage) : [] );
  const [novoItem, setNovoItem] = useState("");

  useEffect(()=>{
    localStorage.setItem('Lista', JSON.stringify(lista))
  },[lista])

  function adicionaItem(form) {
    form.preventDefault();
    if (!novoItem) {
      return
    }
    setLista([...lista, { text: novoItem, isCompleted: false }]);
    setNovoItem("");
    document.getElementById('input-entrada').focus();
  }

  function clicou(index) {
    const listaAux = [...lista]
    listaAux[index].isCompleted = !listaAux[index].isCompleted;
    setLista(listaAux);
  }

  function deleta(index){
    const listaAux = [...lista]
    listaAux.splice(index, 1)
    setLista(listaAux)
  }

  function deleteA(){
    setLista([])
  }

  // design

  return (
    <div>
      <div>
        <h1 className="titulo">Lista de Tarefas</h1>
        <form onSubmit={adicionaItem}>
          <input type="text" placeholder='adicione uma tarefa' value={novoItem} onChange={(e) => { setNovoItem(e.target.value) }}
            id="input-entrada" />
          <button type='submit' className="add">add</button>
        </form>
      </div>

      <div className="listaDeTarefas">
        {
          lista.length < 1 ? 
          <div className="imagem-principal"> 
          <img src={Icon} />
          </div> :
            lista.map((item, index) => (
              <div key={index} className={item.isCompleted ? "item completo" : "item"}>
              <span onClick={() => clicou(index)}>{item.text}</span>
              <button className='delet' onClick={() => deleta(index)}>delete</button>
            </div>
            ))
        }

        <div>
          {
            lista.length > 0 &&  <button className="deleteAll" onClick={deleteA}>DELETE ALL</button>
          }
        </div>

      </div>

    </div>
  )
}
