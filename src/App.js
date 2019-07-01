import React from 'react'
import Header from './Header'
import MemeGenerator from './MemeGenerator'

function App() {
  return(
    <div>
      <Header />
      <h1>Generate Memes</h1>
      <p>Enter top and bottom text for your meme and click the button.</p>
      <p>Your meme will be ready right away!</p>
      <MemeGenerator />
    </div>
  );
}

export default App;