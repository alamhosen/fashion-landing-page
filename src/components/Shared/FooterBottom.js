import React from 'react';
import bg from '../../images/footerBottom.png'

const FooterBottom = () => {
    return (
        <div>
            <footer class="footer footer-center p-4 text-base-content text-base" style={{
                backgroundImage: `url("${bg}")`, height: "93px"
            }}>
                <div>
                    <p>Copyright © 2022. Your company name  All rights reserved</p>
                </div>
            </footer>
        </div>
    );
};

export default FooterBottom;