import React from 'react';
import mail from "../../mail.png";
import Facebook from "../../Facebook.png";
import Twitter from "../../Twitter.png";
import LinkedIn from "../../LinkedIn.png";

const Footer = () => {
    return (
        <div className='bg-black'>
            <div className='grid grid-cols-1 md:grid-cols-5 gap-5 max-w-7xl mx-auto py-10 px-5'>
                <div className='text-[#ffffff]'>
                <div className='font-extrabold'>CS — Ticket System</div>
                <div className='font-light text-[#A1A1AA]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
            </div>
 

            <div className='text-[#ffffff]'>
                <div className='font-bold'>Company</div>
                <div className='font-light text-[#A1A1AA]'>About Us</div>
                <div className='font-light text-[#A1A1AA]'>Our Mission</div>
                <div className='font-light text-[#A1A1AA]'>Contact Saled</div>
            </div>

            <div className='text-[#ffffff]'>
                <div className='font-bold'>Services</div>
                <div className='font-light text-[#A1A1AA]'>Products & Services</div>
                <div className='font-light text-[#A1A1AA]'>Customer Stories</div>
                <div className='font-light text-[#A1A1AA]'>Download Apps</div>
            </div>


            <div className='text-[#ffffff]'>
                <div className='font-bold'>Information</div>
                <div className='font-light text-[#A1A1AA]'>Privacy Policy</div>
                <div className='font-light text-[#A1A1AA]'>Terms & Conditions</div>
                <div className='font-light text-[#A1A1AA]'>Join Us</div>
            </div>

            <div className='text-[#ffffff]'>
                <div className='font-bold'>Social Links</div>
                <div className='font-light text-[#A1A1AA]'><img src={Twitter} alt="Twitter" className="w-4 h-4 inline mr-2" />@CS — Ticket System</div>
                <div className='font-light text-[#A1A1AA]'><img src={LinkedIn} alt="LinkedIn" className="w-4 h-4 inline mr-2" />support@cst.com</div>
                <div className='font-light text-[#A1A1AA]'><img src={Facebook} alt="Facebook" className="w-4 h-4 inline mr-2" />@CS — Ticket System</div>
                <div className='font-light text-[#A1A1AA]'><img src={mail} alt="mail" className="w-4 h-4 inline mr-2" />@CS — Ticket System</div>
            </div>
            </div>
            
            <div className='border-t border-gray-600 max-w-7xl mx-auto px-5 py-5 text-center'>
                <span className='text-[#FAFAFA]'>© 2025 CS — Ticket System. All rights reserved.</span>
            </div>
        </div>
    );
};

export default Footer;