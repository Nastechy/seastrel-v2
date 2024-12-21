import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[#1D4ED8] text-white  py-12 px-4">
            <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12">
                <div>
                    <h3 className="text-3xl font-semibold text-seastrel-blue mb-4">SeastrelTech</h3>
                    <p className="text-sm mb-4">Seastrel is committed to being your software partner.</p>
                    <div className="flex space-x-4">
                        <a href="#" className="text-seastrel-blue hover:text-blue-400">
                            <Facebook />
                        </a>
                        <a href="#" className="text-seastrel-blue hover:text-blue-400">
                            <Twitter />
                        </a>
                        <a href="#" className="text-seastrel-blue hover:text-blue-400">
                            <Instagram />
                        </a>
                        <a href="#" className="text-seastrel-blue hover:text-blue-400">
                            <Linkedin />
                        </a>
                    </div>
                </div>
                <div>
                    <h4 className="text-[18px] font-bold text-seastrel-blue mb-4">Short Link</h4>
                    <ul className='text-[16px]'>
                        <li><a href="#" >About Us</a></li>
                        <li><a href="#" >Contact Us</a></li>
                        <li><a href="#" >Our Services</a></li>
                        <li><a href="#" >Our Projects</a></li>
                        <li><a href="#" >Our Values</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-[18px] font-semibold text-seastrel-blue mb-4">Help Link</h4>
                    <ul className='text-[16px]'>
                        <li><a href="#" >Terms of Use</a></li>
                        <li><a href="#" >Privacy Policy</a></li>
                        <li><a href="#" >Helps</a></li>
                        <li><a href="#" >FAQs</a></li>
                        <li><a href="#" >Contact</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-[18px] font-semibold text-seastrel-blue mb-4">Contact Us</h4>
                    <ul className='text-[16px]'>
                        <li className="flex items-center space-x-2">
                            <span>📍</span>
                            <span className="text-seastrel-light">23 Life Camp, Abuja</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <span>📞</span>
                            <span className="text-seastrel-light">+234 813-1299-296</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <span>📧</span>
                            <span className="text-seastrel-light">Seastrel.ltd@gmail.com</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="text-start mt-12 max-w-7xl mx-auto">
                <p>&copy; 2024 Seastrel International Limited | All rights reserved</p>
            </div>
            
        </footer>
    );
};

export default Footer;
