import React from 'react';
import bg from '../../images/footerBottom.png'

const FooterBottom = () => {
    const today = new Date();
    const year = today.getFullYear();

    return (
        <div>
            <footer className="footer footer-center p-4 text-base-content text-base" style={{
                backgroundImage: `url("${bg}")`, height: "93px"
            }}>
                <div>
                    <p>Copyright © {year}. Your company name  All rights reserved</p>
                </div>
            </footer>
        </div>
    );
};

export default FooterBottom;