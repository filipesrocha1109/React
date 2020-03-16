import React from  'react'
import IconButton from '../template/iconButton'


export default props =>{

    const renderRows = () =>{
        const list = props.list || []

        return list.map(todo=>(
            <tr key={todo._id}>
                <td className={todo.done ? 'markAsDone' : ''}>{todo.description}</td>
                <td>
                    <IconButton style='success' icon='check' hide={todo.done} onClick={()=>props.handleMarkAsDone(todo)} title='Finalizar tarefa' />
                    <IconButton style='warning' icon='undo' hide={!todo.done} onClick={()=>props.handleMarkAsPending(todo)} title='Reabrir tarefa' />
                    <IconButton style='danger' icon='trash-o' hide={!todo.done} onClick={()=>props.handleRemove(todo)} title='Apagar tarefa' />
                </td>
            </tr>
        ))
    }

    return(
      <table className='table'>
          <thead>
              <tr>
                  <th>Descrição</th>
                  <th className='tableActions'>Ações</th>
              </tr>
          </thead>
          <tbody>
              {renderRows()}
          </tbody>
      </table>
    )
}
