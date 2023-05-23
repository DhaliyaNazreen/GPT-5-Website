import React, { useState } from 'react';
//import {RIMenu3Line , RICloseLin} from 'react-icons/ri';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';
import './Navbar.css';

const Menu = () => (
  <>
    <p className='nav__text'><a href="#Home">Home</a></p>   
    <p className='nav__text'><a href="#wgpt3">WhatGPT3</a></p>
    <p className='nav__text'><a href="possibility">Open AI</a></p>
    <p className='nav__text'><a href="#features">Case Studies</a></p>
    <p className='nav__text'><a href="#blog">Library</a></p>
  </>
)

const Navbar = () => {
  const [togglemenu, setToggleMenu] = useState(false);
  return (
    <div className='gpt3__navbar'>

      <div className='gpt3__navbar__links'>

        <div className='gpt3__navbar__logo'>
          <img src={logo} alt="logo" />
        </div>
        <div className='gpt3__navbar__links__container'>

          <Menu />
        </div>
      </div>
      <div className='gpt3__navbar__sign'>
        <p>Sign In</p>
        <button type='button'>Sign Up</button>
      </div>
      <div className='gpt3__navbar__menu'>
        {togglemenu
          ? <RiCloseLine color="fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="fff" size={27} onClick={() => setToggleMenu(true)} />
        }
        {togglemenu && (
          <div className='gpt3__navbar-menu_container scale-up-center'>
            <div className='gpt3__navbar-menu_container__links'>

              <Menu />
              </div>
              <div className='gpt3__navbar-menu_container__links__sign'>
                <p className='sign__in'>Sign In</p>
                <button type='button' className='gpt3__navbar-menu_container__link__button'>Sign Up</button>
              </div>
            </div>
          
        )}
      </div>
    </div>
  )
}

export default Navbar