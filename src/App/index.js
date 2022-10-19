import React from "react";
/*import './App.css';*/
import { TodoProvider  } from "../TodoContext";
import { AppUI } from "./AppUI";

/*const defaultItem = [
  { text: 'Cortar cebolla', completed: false },
  { text: 'Tomar el curso de intro a React', completed: true },
  { text: 'Llorar con la llorona', completed: false },
];*/

function App() {

  //const [todos, saveTodos] = React.useState(defaultItem);
  //const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);

  
  /*console.log('Render (antes del use effect)');

  React.useEffect(() => {
    // ejecuta el código antes de reenderizar
    console.log('use effect');
  }, [totalTodos]); // con este segundo parámetro [] vamos a ejecutarlo sólo una vez, si ahora ponemos [totalTodos] se ejecuta según esa condición

  console.log('Render (después del use effect)');*/

  return (
    <TodoProvider>
      <AppUI /> 
    </TodoProvider>
    /*<AppUI 
      // Propiedades de los distintos componentes se enviarán al componente AppUI
      loading={loading}
      error={error}
      totalTodos = {totalTodos}
      completedTodos = {completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />*/
  );
}

export default App;
