// components/SocialIcons.js

import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutubeSquare } from 'react-icons/fa';

export default function SocialIcons (){
    return (
        <div className="flex justify-center space-x-6">
            <a href="https://web.facebook.com/profile.php?id=100084349942297" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-blue-600 hover:text-blue-800" size={30} />
            </a>
            <a href="https://x.com/natenrock" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-blue-400 hover:text-blue-600" size={30} />
            </a>
            <a href="https://www.instagram.com/naatenrock/?next=%2F" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-pink-500 hover:text-pink-700" size={30} />
            </a>
            {/* <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-blue-700 hover:text-blue-900" size={30} />
            </a> */}
            <a href="https://youtu.be/5VR4mavFgg8" target="_blank" rel="noopener noreferrer">
                <FaYoutubeSquare className="text-red-700 hover:text-blue-900" size={30} />
            </a>
        </div>
    );
};

