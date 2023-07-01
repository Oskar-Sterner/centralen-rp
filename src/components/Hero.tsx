import { useEffect, useState } from 'react';
import '../scss/main.scss';
import homeIcon from '../assets/icons/home.svg';
import aboutIcon from '../assets/icons/about.svg';
import rulesIcon from '../assets/icons/rules.svg';
import forumIcon from '../assets/icons/forum.svg';
import ServerPanel from './ServerPanel';

function Hero() {
  const links = [
    { text: 'Hem', icon: homeIcon, style: { marginBottom: '7px', marginRight: '4px' } },
    { text: 'Om', icon: aboutIcon, style: { marginBottom: '0px', marginRight: '4px' } },
    { text: 'Regler', icon: rulesIcon, style: { marginBottom: '7px', marginRight: '4px' } },
    { text: 'Forum', icon: forumIcon, style: { marginBottom: '10px', marginRight: '4px' } },
  ];

  const [logoRotation, setLogoRotation] = useState<number>(0);
  const [clickCount, setClickCount] = useState<number>(0);

  const handleLogoClick = () => {
    setClickCount((prevClickCount) => prevClickCount + 1);

    if (clickCount === 2) {
      setClickCount(0);
      setLogoRotation(360);
    }
  };

  useEffect(() => {
    const preloader = document.getElementById('preloader') as HTMLDivElement;

    const timeoutId = setTimeout(() => {
      preloader.classList.add('fade-out');
    }, 2000);

    const video = document.getElementById('hero-video') as HTMLVideoElement;
    video.play().catch((error) => console.error('Error playing video:', error));

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      {/* <div id='preloader'>
        <img src="src/assets/loader.gif" alt="Loader" />
  </div>*/}
      <nav>
        <ul>
          {links.map((link, index) => (
            <li key={index}>
              <a href="#">
                <img src={link.icon} alt={link.text} style={link.style} />
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div id="Hero">
        <div id="Content">
          <img
            src="src/assets/logo.png"
            alt="Logo"
            style={{ transform: `rotate(${logoRotation}deg)` }}
            onClick={handleLogoClick}
          />
          <ServerPanel />
        </div>

        <video id="hero-video" muted loop autoPlay>
          <source src="src/assets/bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </>
  );
}

export default Hero;
