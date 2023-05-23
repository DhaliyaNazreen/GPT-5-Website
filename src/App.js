import React from 'react';
import { Brand, Feature, Navbar,CTA } from './components';
import { Footer,Possibility, WhatGPT3,Features,Blog, Header} from './container';
import './App.css';
import './index.css';

const App = () => {
  return (
    <div className='App'>
     <div className='gradient__bg'>
        <Navbar/>
        <Header/>
     </div>
     <Brand/>
      <WhatGPT3/>
      <Feature/>
      <Features/>
      <Possibility/>
      <CTA/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default App