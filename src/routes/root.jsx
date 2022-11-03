import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Root = () => {
  return (
    <>
      <h1>Root Page</h1>
      <div id="container">
        <div id="side-bar">
          <nav>
            <ul>
              <li><Link to={`/`}>Home</Link></li>
              <li><Link to={`about`}>About</Link></li>
              <li><Link to={`blog`}>Blog</Link></li>
              <li><Link to={`contact`}>Contact</Link></li>
              <li><Link to={`stuff`}>Stuff</Link></li>
              <li><Link to={`asdf`}>Broken Link</Link></li>
            </ul>
          </nav>
        </div>
        <div id="content">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export { Root };
