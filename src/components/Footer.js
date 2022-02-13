import React from 'react';
import linkedinIcon from '../images/linkedin.svg';
import githubIcon from '../images/github.svg'

export default function Footer() {
  return (
    <footer id="footer">
      <a href="https://www.linkedin.com/in/rafael-rmoura/" className="background-contact" target="_blank" rel="noreferrer">
        <img src={ linkedinIcon } alt="linkedInIcon" className="contact" />
      </a>
      <h4 id="email">rafaelmoura7033@gmail.com</h4>
      <a href="https://github.com/RafaelMoura11" className="background-contact" target="_blank" rel="noreferrer">
        <img src={ githubIcon } alt="githubIcon" className="contact" />
      </a>
    </footer>
  )
}