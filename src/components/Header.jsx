import React, { useState, useEffect } from 'react';

function Header() {
  const [currentPage, setCurrentPage] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('div[id]');
      let currentSection = 'Home';

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop - sectionHeight / 3) {
          currentSection = section.getAttribute('id');
        }
      });

      setCurrentPage(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Initial highlighting
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLinkClick = (page) => {
    const section = document.getElementById(page);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const linkClasses = (page) => {
    return `border-b-2 mx-3 sm:mx-10 transition duration-300 font-normal ${
      currentPage === page ? 'text-black border-black text-lg' : 'border-transparent hover:text-black text-gray-600'
    }`;
  };

  return (
    <nav className="fixed min-w-full shadow bg-gradient-to-r from-emerald-400 to-cyan-500 text-sm sm:text-lg z-50 justify-center">
      <div className="container flex items-center justify-center py-3 lg:py-5 mx-auto capitalize text-black">
        <a
          href="#Home"
          className={linkClasses('Home')}
          onClick={() => handleLinkClick('Home')}
        >
          Home
        </a>
        <a
          href="#About"
          className={linkClasses('About')}
          onClick={() => handleLinkClick('About')}
        >
          About
        </a>
        <a
          href="#Skillstack"
          className={linkClasses('Skillstack')}
          onClick={() => handleLinkClick('Skillstack')}
        >
          Skillstack
        </a>
        <a
          href="#Projects"
          className={linkClasses('Projects')}
          onClick={() => handleLinkClick('Projects')}
        >
          Projects
        </a>
        <a
          href="#Contact"
          className={linkClasses('Contact')}
          onClick={() => handleLinkClick('Contact')}
        >
          Contact
        </a>
      </div>
    </nav>
  );
}

export default Header;
