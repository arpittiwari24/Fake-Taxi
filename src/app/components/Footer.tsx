import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="text-center mt-4">
        &copy; {new Date().getFullYear()} Fake-Taxi. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
