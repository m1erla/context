import './App.css';
import {ThemeProvider} from './context/ThemeContext';
import Container from './components/Container';
import { UserProvider } from './context/UserContext';
import { Button, ExampleComponent } from 'yummys';
import "yummys/dist/index.css"
function App() {
  return (
    <ThemeProvider>
  <Button text="Hello"/>
  <ExampleComponent text="Test"/>
     <UserProvider >
     <Container />
   
     </UserProvider>
     
    </ThemeProvider>
    
  );
}

export default App;
