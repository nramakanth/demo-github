import React, { useRef, useState, useEffect } from "react";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const imageContainerRef = useRef(null);
  const [filledHeart, setFilledHeart] = useState(false);
  const [rating, setRating] = useState(0);
  

  const tabs = [
    {
      id: 0,
      label: "FEATURED",
      items: [
        {
          imageUrl:
            "https://htmlbeans.com/html/schon/images/products/img01.jpg",
          name: "Chair 1",
          cost: "$100",
        },
        {
          imageUrl:
            "https://htmlbeans.com/html/schon/images/products/img09.jpg",
          name: "Chair 2",
          cost: "$120",
        },
        {
          imageUrl:
            "https://htmlbeans.com/html/schon/images/products/img02.jpg",
          name: "Chair 3",
          cost: "$90",
        },
        {
          imageUrl:
            "https://htmlbeans.com/html/schon/images/products/img03.jpg",
          name: "Chair 4",
          cost: "$110",
        },
        {
          imageUrl:
            "https://htmlbeans.com/html/schon/images/products/img04.jpg",
          name: "Chair 5",
          cost: "$95",
        },
        {
          imageUrl:
            "https://htmlbeans.com/html/schon/images/products/img05.jpg",
          name: "Chair 6",
          cost: "$130",
        },
        {
          imageUrl:
            "https://htmlbeans.com/html/schon/images/products/img06.jpg",
          name: "Chair 7",
          cost: "$115",
        },
        {
          imageUrl:
            "https://htmlbeans.com/html/schon/images/products/img07.jpg",
          name: "Chair 8",
          cost: "$125",
        },
        {
          imageUrl:
            "https://htmlbeans.com/html/schon/images/products/img09.jpg",
          name: "Chair 9",
          cost: "$105",
        },
        {
          imageUrl:
            "https://htmlbeans.com/html/schon/images/products/img10.jpg",
          name: "Chair 10",
          cost: "$85",
        },
        {
          imageUrl:
            "https://htmlbeans.com/html/schon/images/products/img01.jpg",
          name: "Chair 1",
          cost: "$100",
        },
        {
          imageUrl:
            "https://htmlbeans.com/html/schon/images/products/img02.jpg",
          name: "Chair 2",
          cost: "$120",
        },
        {
          imageUrl:
            "https://htmlbeans.com/html/schon/images/products/img03.jpg",
          name: "Chair 3",
          cost: "$90",
        },
        {
          imageUrl:
            "https://htmlbeans.com/html/schon/images/products/img04.jpg",
          name: "Chair 4",
          cost: "$110",
        },
        {
          imageUrl:
            "https://htmlbeans.com/html/schon/images/products/img05.jpg",
          name: "Chair 5",
          cost: "$95",
        },
        {
          imageUrl:
            "https://htmlbeans.com/html/schon/images/products/img06.jpg",
          name: "Chair 6",
          cost: "$130",
        },
        {
          imageUrl:
            "https://htmlbeans.com/html/schon/images/products/img07.jpg",
          name: "Chair 7",
          cost: "$115",
        },
        {
          imageUrl:
            "https://htmlbeans.com/html/schon/images/products/img08.jpg",
          name: "Chair 8",
          cost: "$125",
        },
        {
          imageUrl:
            "https://htmlbeans.com/html/schon/images/products/img09.jpg",
          name: "Chair 9",
          cost: "$105",
        },
        {
          imageUrl:
            "https://htmlbeans.com/html/schon/images/products/img10.jpg",
          name: "Chair 10",
          cost: "$85",
        },
      ],
    },
    {
      id: 1,
      label: "LATEST",
      items: [
        {
          imageUrl:
            "https://htmlbeans.com/html/schon/images/products/img05.jpg",
          name: "Chair 1",
          cost: "$100",
        },
        {
          imageUrl:
            "https://htmlbeans.com/html/schon/images/products/img03.jpg",
          name: "Chair 2",
          cost: "$120",
        },
        {
          imageUrl:
            "https://htmlbeans.com/html/schon/images/products/img08.jpg",
          name: "Chair 3",
          cost: "$90",
        },
        {
          imageUrl:
            "https://htmlbeans.com/html/schon/images/products/img01.jpg",
          name: "Chair 4",
          cost: "$110",
        },
        {
          imageUrl:
            "https://htmlbeans.com/html/schon/images/products/img09.jpg",
          name: "Chair 5",
          cost: "$95",
        },
        {
          imageUrl:
            "https://htmlbeans.com/html/schon/images/products/img03.jpg",
          name: "Chair 6",
          cost: "$130",
        },
        {
          imageUrl:
            "https://htmlbeans.com/html/schon/images/products/img09.jpg",
          name: "Chair 7",
          cost: "$115",
        },
        {
          imageUrl:
            "https://htmlbeans.com/html/schon/images/products/img04.jpg",
          name: "Chair 8",
          cost: "$125",
        },
        {
          imageUrl:
            "https://htmlbeans.com/html/schon/images/products/img09.jpg",
          name: "Chair 9",
          cost: "$105",
        },
        {
          imageUrl:
            "https://htmlbeans.com/html/schon/images/products/img10.jpg",
          name: "Chair 10",
          cost: "$85",
        },
      ],
    },
    {
      id: 2,
      label: "BEST SELLER",
      items: [
        {
          imageUrl:
            "https://htmlbeans.com/html/schon/images/products/img08.jpg",
          name: "Chair 1",
          cost: "$100",
        },
        {
          imageUrl:
            "https://htmlbeans.com/html/schon/images/products/img01.jpg",
          name: "Chair 2",
          cost: "$120",
        },
        {
          imageUrl:
            "https://htmlbeans.com/html/schon/images/products/img06.jpg",
          name: "Chair 3",
          cost: "$90",
        },
        {
          imageUrl:
            "https://htmlbeans.com/html/schon/images/products/img02.jpg",
          name: "Chair 4",
          cost: "$110",
        },
        {
          imageUrl:
            "https://htmlbeans.com/html/schon/images/products/img04.jpg",
          name: "Chair 5",
          cost: "$95",
        },
        {
          imageUrl:
            "https://htmlbeans.com/html/schon/images/products/img09.jpg",
          name: "Chair 6",
          cost: "$130",
        },
        {
          imageUrl:
            "https://htmlbeans.com/html/schon/images/products/img07.jpg",
          name: "Chair 7",
          cost: "$115",
        },
        {
          imageUrl:
            "https://htmlbeans.com/html/schon/images/products/img08.jpg",
          name: "Chair 8",
          cost: "$125",
        },
        {
          imageUrl:
            "https://htmlbeans.com/html/schon/images/products/img09.jpg",
          name: "Chair 9",
          cost: "$105",
        },
        {
          imageUrl:
            "https://htmlbeans.com/html/schon/images/products/img10.jpg",
          name: "Chair 10",
          cost: "$85",
        },
      ],
    },
  ];

  const itemsPerPage = 5; // Number of items to display per page
  const totalPages = Math.ceil(tabs[activeTab].items.length / itemsPerPage);

  const handleNextImage = () => {
    setActiveImageIndex((prevIndex) => (prevIndex + 1) % totalPages);
  };

  const handlePrevImage = () => {
    setActiveImageIndex((prevIndex) =>
      prevIndex === 0 ? totalPages - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const container = imageContainerRef.current;
    const imageWidth = container.firstChild
      ? container.firstChild.offsetWidth
      : 0;
    container.scrollTo({
      left: imageWidth * itemsPerPage * activeImageIndex,
      behavior: "smooth",
    });
  }, [activeImageIndex, activeTab, itemsPerPage]);

  const toggleHeart = () => {
    setFilledHeart(!filledHeart);
  };
  const handleRating = (newRating) => {
    setRating(newRating);
  };

  return (
    <div className="">
      {/* Left Side - Tabs */}
      <div className="pr-4 flex flex-row justify-between">
        <nav className="flex flex-row" data-aos="fade-left">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                setActiveImageIndex(0); // Reset the image index when switching tabs
              }}
              className={`px-4 py-2 text-lg focus:outline-none ${
                activeTab === tab.id ? "text-blue-500" : "text-gray-500"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
        <div className="mt-4 flex space-x-2" data-aos="fade-right">
          <button
            onClick={handlePrevImage}
            className="px-2 py-1 bg-gray-200 text-gray-600 rounded hover:bg-gray-300"
          >
            <span>
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-chevron-left"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
                />
              </svg>{" "}
            </span>
          </button>
          <button
            onClick={handleNextImage}
            className="px-2 py-1 bg-gray-200 text-gray-600 rounded hover:bg-gray-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-chevron-right"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Right Side - Image Carousel */}
      <div
        className="flex-1 flex items-center overflow-x-auto scrollbar-hide"
        ref={imageContainerRef}
      >
        <div className="flex space-x-4 items-center justify-center w-full">
          {tabs[activeTab].items
            .slice(
              activeImageIndex * itemsPerPage,
              (activeImageIndex + 1) * itemsPerPage
            )
            .map((item, index) => (
              <div key={index} className="relative">
                <div className="relative h-64">
                  <img
                    src={item.imageUrl}
                    alt={` ${index + 1}`}
                    className="w-full h-full object-cover transition duration-300 transform hover:scale-110"
                  />
                  <div className="absolute bottom-0 left-0 right-0  bg-black bg-opacity-80 text-white flex justify-between opacity-0 py-2 rounded-md hover:opacity-100 transition duration-300 pr-2 pl-2">
                    <div className="">
                      <p className="text-sm">{item.name}</p>
                      <p className="text-xs mt-4">{item.cost}</p>
                    </div>
                    <div className="flex flex-col">
                      <div className="flex w-full items-center justify-center">
                        <span className="ml-auto mr-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-cart"
                            viewBox="0 0 16 16"
                          >
                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                          </svg>
                        </span>

                        <span onClick={toggleHeart} className="cursor-pointer">
                          {filledHeart ? (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="red"
                              width="16"
                              height="16"
                              viewBox="0 0 512 512"
                            >
                              <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
                            </svg>
                          ) : (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-heart"
                              viewBox="0 0 16 16"
                            >
                              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                            </svg>
                          )}
                        </span>
                      </div>
                      <div className="flex mt-4 gap-1">
                        {[...Array(5)].map((_, index) => (
                          <span
                            key={index}
                            onClick={() => handleRating(index + 1)}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="14"
                              height="14"
                              fill={index < rating ? "#FBBF24" : "#e4e5e9"}
                              className="bi bi-star-fill"
                              viewBox="0 0 16 16"
                            >
                              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </svg>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
