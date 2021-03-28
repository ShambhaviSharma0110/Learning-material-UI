import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button href='#'
         variant = "contained" 
         color='secondary'
         size= 'large'
         //disabled
         style={{
           fontSize:24
         }}
         >
          Hellu
        </Button>
        <img src={logo} className="App-logo" alt="logo" />
      
      </header>
    </div>
  );
}

export default App;
