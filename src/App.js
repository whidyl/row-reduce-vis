import './App.css';
import Tex2SVG from 'react-hook-mathjax'

function App() {
  return (
    <div className="App">
      <Tex2SVG display="inline" latex="
      \Huge

      \left[\begin{array}{ccc|c}
      1&2&3&0 \\
      4&5&6&0 \\
      7&8&8&0
      \end{array}\right]
      
      "/>
    </div>  
  );
}

export default App;
