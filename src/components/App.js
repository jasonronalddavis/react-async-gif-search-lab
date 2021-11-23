import React from 'react'

import NavBar from './NavBar'


const App = () => {
  return (
    <div>
        < NavBar color='black' title="Giphy Search" />
        <GifListContainer/>
    </div>
  )
}

export default App
;