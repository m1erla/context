## Context Structure
---
```sh 

import { createContext, useContext, useEffect, useState } from "react"; 

const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
    
    useEffect(() => {
        localStorage.setItem('theme', theme)
        
    }, [theme])


    const values = {
        theme,
        setTheme,
    };

    return (
      <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext);
```



---
```sh
import { createContext, useState, useContext } from "react";

const UserContext = createContext();

export const UserProvider = ({children}) =>  {
    const [user, setUser] = useState(null)
    const values = {
      user,
      setUser,
    };

   return <UserContext.Provider value={values}>{children}</UserContext.Provider>

}

export const useUser = () => useContext(UserContext);


```
## Sample Components
---
```sh
import React, { useState } from 'react'
import {useUser} from '../context/UserContext'
function Profile() {

    const { user, setUser } = useUser();

    const [loading, setLoading] = useState(false);

 
    const handleLogin = () => {
         setLoading(true);
         setTimeout(() => {
            setUser({id: 1, username: 'mierla', bio: 'lorem ipsum'});
            setLoading(false);
         }, 1000);
    };

    const handleLogout = () => {
        setUser(null)
    }
  return (
    <div>
      {!user && (
        <button onClick={handleLogin}>
          {loading  ? 'loading...' : "Login" }
        </button>
      )

      }

     <br />

     <code>{JSON.stringify(user)}</code>
     <br />

     {user && <button onClick={handleLogout}>Logout</button>}
    </div>
  )
}

export default Profile

```
