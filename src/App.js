
import React, { useState } from 'react'
import Navbar from './component/Navbar';
import NewsBoard from './component/NewsBoard';
import FooterBar from './component/FooterBar';

 const App = () => {
  const [category, setCategory] = useState("general");
  return (
    <div>
     <Navbar setCategory={setCategory}/>
     <NewsBoard category={category}/>
     <FooterBar />
      
    </div>
  )
}

export default App;