import React from 'react';
import { useLocalStorage } from './useLocalStorage';

const TodoContext = React.createContext();

function TodoProvider(props) {

    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error
      } = useLocalStorage('TODOS_V1', []);
    
      //const [name, saveName] = useLocalStorage('NOMBREIMPORTANTE', 'Alejandro');
    
      // Creamos nuestro estado
      const [searchValue, setSearchValue] = React.useState('');
      const [openModal, setOpenModal] = React.useState(false);
    
      //const completedTodos = Item.filter(todo => todo.completed == true);
      const completedTodos = todos.filter(todo => !!todo.completed).length; // doble afirmación falsa es verdadero
      const totalTodos = todos.length;
    
      let searchedTodos = [];
    
      if (!searchValue.length >= 1) {
        searchedTodos = todos;
      } else {
        searchedTodos = todos.filter(todo => {
          const todoText = todo.text.toLowerCase();
          const searchText = searchValue.toLowerCase();
          return todoText.includes(searchText); // criterio de evaluación
        });
    
      }

      const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({
          completed: false,
          text,
        });
        saveTodos(newTodos);
      };
    
      // Función para marcar completado un Todo, la que cumple con la condición
      const completeTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text); // condición
    
        const newTodos = [...todos];
        newTodos[todoIndex].completed = true;
        saveTodos(newTodos); // causaremos un re-render de nuestros componentes
    
        // Es otra forma de definirlo:
        /*newTodos[todoIndex] = {
          text: newTodos[todoIndex].text,
          completed: true
        };*/
      };
    
      const deleteTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text); // condición
        const newTodos = [...todos];
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
      };
    

    return (
        <TodoContext.Provider value={{
          loading,
          error,
          totalTodos,
          completedTodos,
          searchValue,
          setSearchValue,
          searchedTodos,
          addTodo,
          completeTodo,
          deleteTodo,
          openModal,
          setOpenModal
        }}>
            {props.children}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider };