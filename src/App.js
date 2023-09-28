import './App.css';
import {ThemeProvider} from './context/ThemeContext';
import Container from './components/Container';
import { UserProvider } from './context/UserContext';
import { Button, Text, Title } from 'yummys';
import "yummys/dist/index.css"
function App() {
  return (
    <ThemeProvider>
  <Button text="Hello"/>
  <Text text="New Version"/>
  <Title text="Say Hello To v1.1.0"/>
     <UserProvider >
     <Container />
   
     </UserProvider>
     
    </ThemeProvider>
    
  );
}

export default App;
