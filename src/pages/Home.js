// pages/Home.js
import React, { useEffect }  from 'react';
import Tabs  from '../components/Tabs';
import Bestseller from '../components/Bestseller';
import Herobelow from '../components/Herobelow';
import Testimonials from '../components/Testimonial';
import 'aos/dist/aos.css';
import AOS from 'aos';



const Home = () => {
  const images = [
    'https://htmlbeans.com/html/schon/images/products/img04.jpg',
    'https://htmlbeans.com/html/schon/images/products/img01.jpg',
    'https://htmlbeans.com/html/schon/images/products/img05.jpg',
    'https://htmlbeans.com/html/schon/images/products/img07.jpg',
    'https://htmlbeans.com/html/schon/images/products/img04.jpg',
    'https://htmlbeans.com/html/schon/images/products/img08.jpg',
    'https://htmlbeans.com/html/schon/images/products/img02.jpg',
    'https://htmlbeans.com/html/schon/images/products/img04.jpg',
    'https://htmlbeans.com/html/schon/images/products/img06.jpg',
    'https://htmlbeans.com/html/schon/images/products/img08.jpg',
    'https://htmlbeans.com/html/schon/images/products/img02.jpg',
    'https://htmlbeans.com/html/schon/images/products/img01.jpg',
    'https://htmlbeans.com/html/schon/images/products/img03.jpg',
    'https://htmlbeans.com/html/schon/images/products/img04.jpg',
    'https://htmlbeans.com/html/schon/images/products/img02.jpg',
    'https://htmlbeans.com/html/schon/images/products/img03.jpg',
    'https://htmlbeans.com/html/schon/images/products/img06.jpg',
  
    // Add more image URLs here
  ];

  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <div>
      <Herobelow />
    <div class="flex justify-center items-center">
      <div class="6xl:mx-auto 6xl:container lg:px-20 lg:py-16 md:py-12 md:px-6 py-9 px-4 w-96 sm:w-auto">
        <div role="main" class="flex flex-col items-center justify-center" data-aos="fade-up">
          <h1 class="text-4xl font-semibold leading-9 text-center text-gray-500 dark:text-gray-600">
          Special Collection
          </h1>
          <p class="text-base leading-normal text-center text-gray-400 dark:text-gray-500 mt-4 lg:w-1/2 md:w-10/12 w-11/12">
          In our carefully curated Special Collection, you’ll find a captivating array of rare artifacts, timeless masterpieces, and hidden gems.
          </p>
        </div>
        <div class="lg:flex items-stretch md:mt-12 mt-8">
          <div class="lg:w-1/2">
            <div class="sm:flex items-center justify-between xl:gap-x-8 gap-x-6">
              <div className="sm:w-1/2 relative overflow-hidden group rounded-lg hover:shadow-lg" data-aos="fade-right">
                <img
                  src="https://i.ibb.co/DYxtCJq/img-1.png"
                  className="w-full transform transition-transform duration-500 group-hover:scale-110"
                  alt="chair"
                />
                <div className="absolute inset-0  flex flex-col justify-between p-6">
                  <p className="text-xs font-medium leading-3 text-white absolute top-6 right-6">
                    12 April 2021
                  </p>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h2 className="text-xl font-semibold text-white">
                      The Decorated Ways
                    </h2>
                    <p className="text-base leading-4 text-white mt-2">
                      Dive into minimalism
                    </p>
                    <a
                      href="javascript:void(0)"
                      className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                    >
                      <p className="pr-2 text-sm font-medium leading-none">
                        Read More
                      </p>
                      <svg
                        className="fill-stroke"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.75 12.5L10.25 8L5.75 3.5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              <div className="sm:w-1/2 relative overflow-hidden group rounded-lg hover:shadow-lg" data-aos="fade-right">
                <img
                  src="https://i.ibb.co/3C5HvxC/img-2.png"
                  className="w-full transform transition-transform duration-500 group-hover:scale-110"
                  alt="chair"
                />
                <div className="absolute inset-0  flex flex-col justify-between p-6">
                  <p className="text-xs font-medium leading-3 text-white absolute top-6 right-6">
                    12 April 2021
                  </p>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h2 className="text-xl font-semibold text-white">
                      The Decorated Ways
                    </h2>
                    <p className="text-base leading-4 text-white mt-2">
                      Dive into minimalism
                    </p>
                    <a
                      href="javascript:void(0)"
                      className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                    >
                      <p className="pr-2 text-sm font-medium leading-none">
                        Read More
                      </p>
                      <svg
                        className="fill-stroke"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.75 12.5L10.25 8L5.75 3.5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="relative" data-aos="fade-right">
              <div>
                <p class="md:p-10 p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                  12 April 2021
                </p>
                <div class="absolute bottom-0 left-0 md:p-10 p-6">
                  <h2 class="text-xl font-semibold 5 text-white">
                    The Decorated Ways
                  </h2>
                  <p class="text-base leading-4 text-white mt-2">
                    Dive into minimalism
                  </p>
                  <a
                    href="javascript:void(0)"
                    class="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                  >
                    <p class="pr-2 text-sm font-medium leading-none">
                      Read More
                    </p>
                    <svg
                      class="fill-stroke"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.75 12.5L10.25 8L5.75 3.5"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              <img
                src="https://i.ibb.co/Ms4qyXp/img-3.png"
                alt="sitting place"
                class="w-full mt-8 md:mt-6 hidden sm:block rounded-xl shadow-xl"
              />
              <img
                class="w-full mt-4 sm:hidden"
                src="https://i.ibb.co/6XYbN7f/Rectangle-29.png"
                alt="sitting place"
              />
            </div>
          </div>

          <div className="lg:w-1/2 xl:ml-8 lg:ml-4 lg:mt-0 md:mt-6 mt-4 lg:flex flex-col justify-between rounded-xl">
            <div className="relative rounded-xl " data-aos="fade-left">
              <div className='rounded-xl'>
                <p class="md:p-10 p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                  12 April 2021
                </p>
                <div className="absolute bottom-0 left-0 md:p-10 p-6">
                  <h2 className="text-xl font-semibold 5 text-white">
                    The Decorated Ways
                  </h2>
                  <p className="text-base leading-4 text-white mt-2">
                    Dive into minimalism
                  </p>
                  <a
                    href="javascript:void(0)"
                    class="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                  >
                    <p class="pr-2 text-sm font-medium leading-none">
                      Read More
                    </p>
                    <svg
                      class="fill-stroke"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.75 12.5L10.25 8L5.75 3.5"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              <img
                src="https://i.ibb.co/6Wfjf2w/img-4.png"
                alt="sitting place"
                class="w-full sm:block hidden rounded-xl shadow-xl"
              />
              <img
                class="w-full sm:hidden"
                src="https://i.ibb.co/dpXStJk/Rectangle-29.png"
                alt="sitting place"
              />
            </div>
            <div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6 md:mt-6 mt-4 " >
              <div className="relative w-full overflow-hidden group rounded-lg hover:shadow-lg" data-aos="fade-left">
                <div>
                  <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0 ">
                    12 April 2021
                  </p>
                  <div className="absolute bottom-0 left-0 p-6 z-10">
                    <h2 className="text-xl font-semibold text-white">
                      The Decorated Ways
                    </h2>
                    <p className="text-base leading-4 text-white mt-2">
                      Dive into minimalism
                    </p>
                    <a
                      href="javascript:void(0)"
                      className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                    >
                      <p className="pr-2 text-sm font-medium leading-none">
                        Read More
                      </p>
                      <svg
                        className="fill-stroke"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.75 12.5L10.25 8L5.75 3.5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
                <img
                  src="https://i.ibb.co/3yvZBpm/img-5.png"
                  className="w-full transform transition-transform duration-500 group-hover:scale-110"
                  alt="chair"
                />
              </div>
              <div className="relative w-full overflow-hidden group sm:mt-0 mt-4 rounded-lg hover:shadow-lg" data-aos="fade-left">
                <div>
                  <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0 ">
                    12 April 2021
                  </p>
                  <div className="absolute bottom-0 left-0 p-6 z-10">
                    <h2 className="text-xl font-semibold text-white">
                      The Decorated Ways
                    </h2>
                    <p className="text-base leading-4 text-white mt-2">
                      Dive into minimalism
                    </p>
                    <a
                      href="javascript:void(0)"
                      className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                    >
                      <p className="pr-2 text-sm font-medium leading-none">
                        Read More
                      </p>
                      <svg
                        className="fill-stroke"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.75 12.5L10.25 8L5.75 3.5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
                <img
                  src="https://i.ibb.co/gDdnJb5/img-6.png"
                  className="w-full transform transition-transform duration-500 group-hover:scale-110"
                  alt="wall design"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="max-w-6xl mx-auto mt-8 p-4">
      <Tabs />
    </div>

    <div className="max-w-6xl mx-auto mt-6">
      <h1 className="text-3xl font-bold mb-3 text-gray-500">Bestsellers</h1>
      <Bestseller images={images} />
    </div>


 
<Testimonials />



    </div>


  );
};

export default Home;
