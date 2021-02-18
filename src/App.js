import './App.css';
import { useState } from 'react';
import MatrixViewer from './components/MatrixViewer';
import ThreesViewer from './components/ThreesViewer';


function App() {
  const [matrix, setMatrix] = useState([["1", "2", "3", "0"],
                                        ["4", "5", "6", "0"],
                                        ["7", "8", "9", "0"]])

  return (
    <div className="App">
      <MatrixViewer matrix={matrix} setMatrix={setMatrix}/>
      <ThreesViewer matrix={matrix}/>
      <div style={{backgroundColor: "lightyellow", width: "100%", minHeight: "200px"}}>dd</div>
    </div>  
  );
}

export default App;
