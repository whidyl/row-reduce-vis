import './App.css';
import { useState } from 'react';
import MatrixViewer from './components/MatrixViewer';
import ThreesViewer from './components/ThreesViewer';



function App() {
  const [matrix, setMatrix] = useState([[1, 2, 3, 0],
                                        [4, 5, 6, 0],
                                        [7, 8, 9, 0]])
  
  const [graphMode, setGraphMode] = useState("vector")

  return (
    <div className="App" style={{display: "flex"}}>
      <MatrixViewer matrix={matrix} setMatrix={setMatrix}/>
      <ThreesViewer matrix={matrix} graphMode={graphMode} setGraphMode={setGraphMode}/>
      
      
      {/* <div style={{backgroundColor: "lightyellow", width: "100%", minHeight: "200px"}}>dd</div> */}
    </div>  
  );
}

export default App;
