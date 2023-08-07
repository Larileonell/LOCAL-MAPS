import React from 'react';
import  {ThemeProvider}  from 'styled-components'
import{BrowserRouter,Route, Routes }  from 'react-router-dom';
import HomePage from './pages/home'
function App() {
  
  const theme = {
    primary: "#322153",
    secondary: "#6C63FF",
    background: "#F0F0F5",
    text: "#6C6C80",
    white: "#fff",
  };
  
  
  return (
    <ThemeProvider  theme={theme}>
      <BrowserRouter>
      <Routes>
        <Route   path='/'>
          <HomePage />
        </Route>
        <Route path='/new'>
          renderizando a new        </Route>
      </Routes>
      </BrowserRouter>
      </ThemeProvider>
  );
}

export default App;
