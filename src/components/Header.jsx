import {useTheme} from '../context/ThemeContext';
function Header() {
   
    const {theme, setTheme} = useTheme();


  return (
    <div>Active theme : {theme}
    <br />
     <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}> Change theme</button>
  
    </div>
  )
}

export default Header