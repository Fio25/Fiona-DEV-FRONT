import React, { useContext } from 'react';

// Création du contexte
const MyContext = React.createContext();
// Composant de niveau supérieur qui fournit la valeur pour le contexte
function ParentComponent() {
  const value = { message: 'Hello from context!' };
  return (
    <MyContext.Provider value={value}>
      <ChildComponent />
    </MyContext.Provider>
  );
}

// Composant enfant qui utilise la valeur du contexte
function ChildComponent() {
  const contextValue = useContext(MyContext);
  return <p>{contextValue.message}</p>;
}

export default ParentComponent;

