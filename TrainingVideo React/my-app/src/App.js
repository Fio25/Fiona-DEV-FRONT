import { useState } from 'react';
import './App.css'

function App() {

// State (état, données)
const [compteur, setCompteur] = useState(1)

// Comportements
const handleClick = () => {
    alert("salut")
}

// Affichage (render)
return (
    <div>
        <h1>{compteur}</h1>
        <button onClick={handleClick}>Incrémenter</button>
    </div>
);
}
export default App;
