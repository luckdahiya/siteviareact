import React from 'react';
import Exploremenu from './Explore Menu/Exploremenu';

import About from './About/About';
import Dishes from './Dishes/Dishes';
import Map from './Map/Map';
import Footer from './Footer/Footer'
function App() {
  return (
    <>
        <About></About>
        <Exploremenu></Exploremenu>
        <Dishes></Dishes>
        <Map></Map>
        <Footer></Footer>
       
    </>
  );
}

export default App;