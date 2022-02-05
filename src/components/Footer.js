import React from 'react';
import linkedinIcon from '../images/linkedin.svg';
import githubIcon from '../images/github.svg'

export default function Footer() {
  return (
    <footer id="footer">
      <a href="https://www.linkedin.com/in/rafael-rmoura/" >
        <img src={ linkedinIcon } alt="linkedInIcon" id="contact" />
      </a>
      <p id="email">rafaelmoura7033@gmail</p>
      <a href="https://github.com/RafaelMoura11" >
        <img src={ githubIcon } alt="githubIcon" id="contact" />
      </a>
    </footer>
  )
}