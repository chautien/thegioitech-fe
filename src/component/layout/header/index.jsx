import { useState } from 'react';
import { Action } from './action';
import './header.scss';
import { Logo } from './logo';
import { Search } from './search';
import { Navbar } from './navbar';

export const Header = () => {
  return (
    <>
      <header className='header-global-wrap'>
        <section className='container header-wrap'>
          <Logo />
          <Search />
          <Action />
        </section>
      </header>
      <Navbar />
    </>
  );
};
