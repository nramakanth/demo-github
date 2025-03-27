import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-12 px-10 font-sans tracking-wide" data-aos="fade-up">
    <div className="lg:max-w-[50%] mx-auto text-center">
      <h3 className="text-3xl font-bold text-white">Newsletter</h3>
      <p className="text-sm mt-6 text-white">Subscribe to our newsletter and stay up to date with the latest news,
        updates, and exclusive offers. Get valuable insights. Join our community today!</p>

      <div className="bg-[#dddddd] flex px-2 py-1.5 rounded-full text-left mt-10">
        <input type='email' placeholder='Enter your email' className="w-full outline-none bg-transparent text-sm pl-4" />
        <button type='button'
          className="bg-gray-600 hover:bg-gray-700 text-white text-sm rounded-full px-5 py-2.5 ml-4 transition-all">Submit</button>
      </div>
    </div>

    <hr className="border-gray-300 my-12" />

    <div className="grid max-sm:grid-cols-1 max-lg:grid-cols-2 lg:grid-cols-4 gap-8">

      <div>
        <h4 className="text-lg font-bold mb-6 text-white">About Us</h4>
        <p className="text-white mb-2 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean gravida,
          mi eu pulvinar cursus, sem elit interdum mauris.</p>
      </div>

      <div>
        <h4 className="text-lg font-bold mb-6 text-white">Services</h4>
        <ul className="space-y-4">
          <li><a  href="#" className="text-white hover:text-red-500 text-[15px]">Web
            Development</a></li>
          <li><a  href="" className="text-white hover:text-red-500 text-[15px]">Mobile App
            Development</a></li>
          <li><a  href="" className="text-white hover:text-red-500 text-[15px]">UI/UX
            Design</a></li>
          <li><a  href="" className="text-white hover:text-red-500 text-[15px]">Digital Marketing</a></li>
        </ul>
      </div>

      <div>
        <h4 className="text-lg font-bold mb-6 text-white">Resources</h4>
        <ul className="space-y-4">
          <li><a  href="" className="text-white hover:text-red-500 text-[15px]">Webinars</a>
          </li>
          <li><a  href="" className="text-white hover:text-red-500 text-[15px]">Ebooks</a>
          </li>
          <li><a  href="" className="text-white hover:text-red-500 text-[15px]">Templates</a>
          </li>
          <li><a  href="" className="text-white hover:text-red-500 text-[15px]">Tutorials</a></li>
        </ul>
      </div>

      <div>
        <h4 className="text-lg font-bold mb-6 text-white">About Us</h4>
        <ul className="space-y-4">
          <li><a  href="" className="text-white hover:text-red-500 text-[15px]">Our Story</a>
          </li>
          <li><a  href="" className="text-white hover:text-red-500 text-[15px]">Mission and
            Values</a></li>
          <li><a  href="" className="text-white hover:text-red-500 text-[15px]">Team</a></li>
          <li><a  href="" className="text-white hover:text-red-500 text-[15px]">Testimonials</a></li>
        </ul>
      </div>
    </div>
  </footer>
  );
};

export default Footer;
