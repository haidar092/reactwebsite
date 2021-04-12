import React from 'react';
const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <>
        <footer className="w-100 bg-light text-center">
        
            <p>  © {year}  Haidar Ali. All Right Reserved | Terms And Condition Are Applied</p>
        </footer>
     
        </>
    );
  };
  export default Footer;