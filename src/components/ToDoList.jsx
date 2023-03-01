import React from 'react';
import './ToDoList.css';

export default function ToDoList() {
  return (
    <div>
      <div>
        <h1 className="titulo">Lista de Tarefas</h1>
        <form>
          <input type="text" placeholder='adicione uma tarefa' />
          <button type='submit' className="add">add</button>
        </form>
      </div>
      <div className="listaDeTarefas">
        <div className="item">
          <span>tarefa 01</span>
          <button className='delet'>delete</button>
        </div>
        <div className="item completo">
          <span>tarefa 01</span>
          <button className='delet'>delete</button>
        </div>
        <div>
          <button className="deleteAll">DELETE ALL</button>
        </div>
      </div>
    </div>
  )
}
