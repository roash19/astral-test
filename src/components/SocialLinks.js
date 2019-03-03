import React from 'react';

const SocialLinks = () => {
  return (
    <ul className="socialLinks">
      <li className="socialLinks__item">
        <a className="socialLinks__link socialLinks__link_facebook" href="https://ru-ru.facebook.com/"/>
      </li>
      <li className="socialLinks__item">
        <a className="socialLinks__link socialLinks__link_instagram" href="https://www.instagram.com/"/>
      </li>
      <li className="socialLinks__item">
        <a className="socialLinks__link socialLinks__link_git" href="https://github.com/"/>
      </li>
      <li className="socialLinks__item">
        <a className="socialLinks__link socialLinks__link_twitter" href="https://twitter.com/?lang=ru"/>
      </li>
    </ul>
  );
};

export default SocialLinks;
