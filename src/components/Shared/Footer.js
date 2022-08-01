import React from 'react';
import footerBG from '../../images/footerbackground.png'
import location from '../../images/location.png'
import facebook from '../../images/social/facebook.png'
import instagram from '../../images/social/instagram.png'
import twitter from '../../images/social/twitter.png'
import linkedin from '../../images/social/linkedin.png'

const Footer = () => {
    return (
        <div>
            <footer className='flex justify-center' style={{
                backgroundImage: `url("${footerBG}")`
            }}>
                <div className='grid grid-cols-1 lg:grid-cols-2 lg:max-w-6xl py-24 gap-4 p-4'>
                    <div className='mb-12'>
                        <div>
                            <div>
                                <h2 className='font-bold text-2xl mb-4 text-black'>YOUR LOGO</h2>
                                <p className='text-base'>We earned a reputation of being good at what we do. <br /> Let us take your online shop to new dimension in <br /> success!</p>
                            </div>
                            <div className='mt-6'>
                                <div className='text-base'>
                                    <div className='flex mb-4'>
                                        <img className='mr-6' src={location} alt="" srcSet="" />
                                        <p>Comilla, Bangladesh 3500</p>
                                    </div>
                                    <div className='mb-4'>
                                        <p className='underline underline-offset-8 mb-2'>kawsarahmed0210@gmail.com</p>
                                        <p>01647470457</p>
                                    </div>
                                </div>
                                {/* social start */}
                                <div className="flex ">
                                    <a href="http://"><img src={facebook} alt="" srcSet="" /></a>
                                    <a href="http://" className='mx-6'><img src={instagram} alt="" srcSet="" /></a>
                                    <a href="http://" className='mr-6'><img src={twitter} alt="" srcSet="" /></a>
                                    <a href="http://"><img src={linkedin} alt="" srcSet="" /></a>

                                </div>
                                {/* social end */}
                            </div>
                        </div>
                    </div>
                    {/* receive email address start */}
                    <div className=''>
                        <div>
                            <div>
                                <h2 className='font-bold text-2xl mb-4 text-black'>RECIVE EMAIL UPDATES</h2>

                                {/* join with email start */}
                                <div className="">
                                    <div className="flex justify-start items-start">
                                        <div className="relative">
                                            <div className="absolute top-4 left-0"> <i className="fa fa-search text-gray-400 z-0 hover:text-gray-500"></i> </div> 
                                            <input type="text" className="h-10 w-96 pl-5 pr-20 z-0 focus:shadow focus:outline-none" placeholder="Your Email Address"/>
                                            <div className="absolute top-0 right-2"> <button className="h-10 w-20 text-black rounded-lg font-bold hover:text-gray-500">Join</button> </div>
                                        </div>
                                    </div>
                                </div>

                                {/* join withemail end */}

                            </div>

                            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 mt-16 text-base gap-2 '>
                                <div>
                                    <ul>
                                        <span className='text-xl font-bold'>SHOP</span>
                                        <li className='my-4'><a href="http://">Shop</a></li>
                                        <li><a href="http://">Collection</a></li>
                                        <li className='my-4'><a href="http://">Outlet</a></li>
                                        <li><a href="http://">Lookbook</a></li>
                                    </ul>
                                </div>
                                <div>
                                    <ul>
                                        <span className='text-xl font-bold'>HELP</span>
                                        <li className='my-4'><a href="http://">FAQ</a></li>
                                        <li><a href="http://">Privecy Policy</a></li>
                                        <li className='my-4'><a href="http://">Tearms and conditions</a></li>
                                        <li><a href="http://">Return and Exchanges</a></li>
                                    </ul>
                                </div>
                                <div>
                                    <ul>
                                        <span className='text-xl font-bold'>ABOUT</span>
                                        <li className='my-4'><a href="http://">Journal</a></li>
                                        <li><a href="http://">Our Story</a></li>
                                        <li className='my-4'><a href="http://">Contact</a></li>
                                        <li><a href="http://">Store Location</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* receive email address end */}
                </div>

            </footer>
        </div>
    );
};

export default Footer;