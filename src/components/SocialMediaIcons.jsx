import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from 'react-icons/fa';

const SocialMediaIcons = () => {
  const handleIconClick = (platform) => {
    let url;
    switch (platform) {
      case 'linkedin':
        url = 'https://www.linkedin.com/in/jyotirmay-padhiary-625050304/';
        break;
      case 'github':
        url = 'https://github.com/Kaizen2002';
        break;
      case 'instagram':
        url = 'https://www.instagram.com/rockyyx_/';
        break;
      case 'facebook':
        url = 'https://www.facebook.com/jyotirmay.padhiary';
        break;
      default:
        url = '';
    }
    window.location.href = url;
  };

  return (
    <div className="flex justify-center space-x-4 p-5">
      <button onClick={() => handleIconClick('linkedin')} className="text-blue-600 text-3xl">
        <FaLinkedin />
      </button>
      <button onClick={() => handleIconClick('github')} className="text-gray-800 text-3xl">
        <FaGithub />
      </button>
      <button onClick={() => handleIconClick('instagram')} className="text-pink-500 text-3xl">
        <FaInstagram />
      </button>
      <button onClick={() => handleIconClick('facebook')} className="text-blue-700 text-3xl">
        <FaFacebook />
      </button>
    </div>
  );
};

export default SocialMediaIcons;
