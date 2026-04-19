import React from 'react';

function Footer() {
  return (
    <footer className="site-footer">
      <span>Barath B</span>
      <span>AI Engineer</span>
      <span>{new Date().getFullYear()}</span>
    </footer>
  );
}

export default Footer;
