import React from 'react';
import About from './components/About';
import Home from './components/Home';
import NavigationBar from './components/NavigationBar';

function App()
{
  return(
    <>
      <NavigationBar />
      <Home />
      <About />
    </>
  );
}

export default App;
