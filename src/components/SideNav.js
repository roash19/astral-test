import React from 'react';
import { Link } from 'react-router-dom';
import SocialLinks from './SocialLinks';

const SideNav = (props) => {
  return (
    <aside className={props.isMobile ? `sideNav sideNav_mobile` : `sideNav`}>
      <h1 className="sideNav__title text text_white">My personal blog</h1>
      <p className="sideNav__descr text text_grey">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet sodales ipsum. Aenean felis nibh, dignissim eu tortor ut, pulvinar commodo tortor. Pellentesque gravida sapien velit, in pellentesque sapien sagittis nec.
      </p>
      <div className="separate"/>

      <nav className="nav">
        <li className="nav__item">
          <Link className="nav__link text" to="/home">Home</Link>
        </li>
        <li className="nav__item">
          <Link className="nav__link text" to="/about">About</Link>
        </li>
      </nav>

      <div className="separate"/>

      <div className="sideNav__social">
        <SocialLinks/>
      </div>
    </aside>
  );
};

export default SideNav;
