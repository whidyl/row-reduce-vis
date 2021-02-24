import './App.css';
import { useState } from 'react';
import MatrixViewer from './components/MatrixViewer';
import ThreesViewer from './components/ThreesViewer';



function App() {
  const [matrix, setMatrix] = useState([[1, 2, -1, 1],
                                        [2, -1, 1, 1],
                                        [1, -1, 3, 1]])
  
  const [graphMode, setGraphMode] = useState("vector")

  return (
    <div className="App" style={{display: "flex"}}>
      <MatrixViewer matrix={matrix} setMatrix={setMatrix} isVecGraph={graphMode === "vector"}/>
      <ThreesViewer matrix={matrix} graphMode={graphMode} setGraphMode={setGraphMode}/>
      
      
      {/* <div style={{backgroundColor: "lightyellow", width: "100%", minHeight: "200px"}}>dd</div> */}
    </div>  
  );
}

export default App;
