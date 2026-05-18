import { Zap, Layers, Megaphone, Play } from 'lucide-react';
import { FiInstagram, FiYoutube } from 'react-icons/fi';
import './index.css';

function App() {
  return (
    <div className="container">
      <img 
        src="/profile.png" 
        alt="Grant Dershewitz" 
        className="profile-img" 
      />
      
      <h1 className="headline">
        <span className="headline-bold">Building </span>
        <span className="headline-italic">things that matter.</span>
      </h1>

      <div className="socials">
        <svg width="0" height="0">
          <linearGradient id="ig-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop stopColor="#f09433" offset="0%" />
            <stop stopColor="#e6683c" offset="25%" />
            <stop stopColor="#dc2743" offset="50%" />
            <stop stopColor="#cc2366" offset="75%" />
            <stop stopColor="#bc1888" offset="100%" />
          </linearGradient>
        </svg>
        <a href="https://instagram.com/grant_online" target="_blank" rel="noopener noreferrer" className="social-pill">
          <FiInstagram size={18} style={{ stroke: "url(#ig-gradient)" }} />
          @grant_online
        </a>
        <a href="https://www.youtube.com/@grant_online" target="_blank" rel="noopener noreferrer" className="social-pill">
          <FiYoutube size={18} color="#FF0000" />
          @grantdershewitz
        </a>
      </div>

      <div className="cards-container">
        <a href="https://stack-base.vercel.app" target="_blank" rel="noopener noreferrer" className="card">
          <img src="/stageone-icon.png" alt="StageOne Icon" className="card-icon custom-icon" />
          <div className="card-content">
            <h2 className="card-title">StageOne</h2>
            <p className="card-desc">A community for the next generation of founders</p>
          </div>
          <button className="card-button">Learn More</button>
        </a>

        <a href="https://splendid-managers-400679.framer.app" target="_blank" rel="noopener noreferrer" className="card">
          <img src="/brightcopy-icon.png" alt="BrightCopy Icon" className="card-icon custom-icon" />
          <div className="card-content">
            <h2 className="card-title">BrightCopy</h2>
            <p className="card-desc">AI-powered marketing agency for local businesses and startups.</p>
          </div>
          <button className="card-button">Learn More</button>
        </a>

        <a href="https://www.youtube.com/@grant_online" target="_blank" rel="noopener noreferrer" className="card">
          <img src="/youtube-icon.png" alt="YouTube Icon" className="card-icon custom-icon" />
          <div className="card-content">
            <h2 className="card-title">YouTube</h2>
            <p className="card-desc">Building my YouTube channel, 2k+ subscribers</p>
          </div>
          <button className="card-button">Watch Now</button>
        </a>

        <a href="mailto:gdershewitz@gmail.com" className="card">
          <div className="card-icon icon-work">
            <Zap size={22} />
          </div>
          <div className="card-content">
            <h2 className="card-title">Work with Grant</h2>
            <p className="card-desc">Open to startup marketing collabs and content partnerships.</p>
          </div>
          <button className="card-button">Get In Touch</button>
        </a>
      </div>
    </div>
  );
}

export default App;
