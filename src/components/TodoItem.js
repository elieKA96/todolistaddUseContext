import Button from "./Button";

export default function TodoItem({
    todo,
    deleteTodo,
    toggleTodo,
    editTodo,
    selectTodo,
  }) {
    return (
      <li
        onClick={selectTodo}
        className={`mb-10 d-flex flex-row justify-content-center align-items-center p-10 ${
          todo.selected ? 'selected' : ''
        }  `}
      >
        <span className="flex-fill">
          {todo.content} {todo.done && '✅'}
        </span>
        <Button onClick={(e) => {
            e.stopPropagation();
            toggleTodo();
          }}
          className="mr-15"
          text="Valider"/>
        <Button onClick={(e) => {
            e.stopPropagation();
            editTodo();
          }}
          className="mr-15"
          text="Modifier"/>
        <Button  onClick={(e) => {
            e.stopPropagation();
            deleteTodo();
          }}
          className="btn-primary"
          text="Supprimer"/>
        
      </li>
    );
  }

// pattern alternatif // fonction intermediare
/**<button onClick={()=> deleteTodo(todo.id)} className="btn btn-primary-reverse mr-15">Supprimer</button>
 * 
 */

//${todo.selected ? "selected": ""}