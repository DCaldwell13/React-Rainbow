//import './App.css';
import { useState } from 'react';
import ColorBlock from './ColorBlock';
import ColorForm from './ColorForm';

function App(){
    let [colors, setColors] = useState (['violet', 'blue', 'lightblue', 'green', 'greenyellow', 'yellow', 'orange', 'red'])
    let colorMap = colors.map((color, i) => <ColorBlock color={color} key={i} />)
    let addColor = (newColor) => {
        setColors([...colors, newColor])
    }

    return (
        <div className="App">
            {colorMap}
            <ColorForm addColor={addColor} />
        </div>
    )

    return (
        <div className="App">
           {colorMap((color, i) =>
           <ColorBlock key={i} color={color} />
           )}
        </div>
    )
}



export default App;
