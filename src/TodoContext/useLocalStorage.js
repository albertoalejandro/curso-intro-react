import React from 'react';

// Creamos nuestro propio React Hook
function useLocalStorage(itemName, initialValue) {

    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
    const [item, setItem] = React.useState(initialValue);
  
    React.useEffect(() => {
      setTimeout(() => {
        try {
  
          // Hacemos uso de: localStorage
          const localStorageItem = localStorage.getItem(itemName);
          let parsedItem;

          if (!localStorageItem) {
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parsedItem = initialValue;
          } else {
            parsedItem = JSON.parse(localStorageItem);
          }
  
          setItem(parsedItem); // actualizamos nuestro estado, para devolvernos el valor que estaba guardado en nuestro localStorage
          setLoading(false);
  
        } catch (error) {
          setError(error);
        }
  
      }, 1000);
    });
  
    // No se va a ejecutar por defecto, por eso no la metemos dentro de useEffect
    const saveItem = (newItem) => {
      try {
        const stringiedItem = JSON.stringify(newItem);
        localStorage.setItem(itemName, stringiedItem);
        setItem(newItem);
      } catch (error) {
        setError(error);
      }
    };
  
    return {
      item,
      saveItem,
      loading,
      error
    };
  }

  export { useLocalStorage };