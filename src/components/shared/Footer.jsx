import React from 'react';

const Footer = () => {
    return (
        <>
            <div className="bg-neutral">
                <div className='footer p-10  text-neutral-content my-container '>
                    <div>
                        <h2 className='text-2xl font-bold text-white'>Volunteer Network</h2>
                    </div>
                    <div>
                        <span className="footer-title">Services</span>
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </div>
                    <div>
                        <span className="footer-title">Company</span>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </div>
                    <div>
                        <span className="footer-title">Legal</span>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </div>
                </div>
            </div>
            <footer>
                <p className='text-center text-white p-8 bg-gray-500'>All right are reserved by | volunteer network Group</p>
            </footer>
        </>
    );
};

export default Footer;