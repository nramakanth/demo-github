import React, { useRef, useEffect, useState } from "react";

const Bestseller = () => {
  const scrollContainerRef = useRef(null);
  const [hoverIndex, setHoverIndex] = useState(null);
  const [modalIndex, setModalIndex] = useState(null);
  const modalRef = useRef(null);
  const [quantity, setQuantity] = useState(1);
  const items = [
    {
      image: 'https://htmlbeans.com/html/schon/images/products/img04.jpg',
      Head: 'Content for image 1',
      Para: 'ParaContent1',
    },
    {
      image: 'https://htmlbeans.com/html/schon/images/products/img01.jpg',
      Head: 'Content for image 2',
      Para: 'ParaContent1',

    },
    {
      image: 'https://htmlbeans.com/html/schon/images/products/img05.jpg',
      Head: 'Content for image 3',
      Para: 'ParaContent1',

    },
    {
      image: 'https://htmlbeans.com/html/schon/images/products/img09.jpg',
      Para: 'ParaContent1',
      Head: 'Content for image 1',
    },
    {
      image: 'https://htmlbeans.com/html/schon/images/products/img04.jpg',
      Head: 'Content for image 2',
      Para: 'ParaContent1',

    },
    {
      image: 'https://htmlbeans.com/html/schon/images/products/img08.jpg',
      Head: 'Content for image 3',
      Para: 'ParaContent1',

    },
    {
      image: 'https://htmlbeans.com/html/schon/images/products/img05.jpg',
      Para: 'ParaContent1',
      Head: 'Content for image 1',
    },
    {
      image: 'https://htmlbeans.com/html/schon/images/products/img01.jpg',
      Para: 'ParaContent1',
      Head: 'Content for image 2',
    },
    {
      image: 'https://htmlbeans.com/html/schon/images/products/img09.jpg',
      Para: 'ParaContent9',
      content: 'Content for image 3',
    },
    {
      image: 'https://htmlbeans.com/html/schon/images/products/img02.jpg',
      Para: 'ParaContent2',
      Head: 'Content for image 1',
    },
    {
      image: 'https://htmlbeans.com/html/schon/images/products/img07.jpg',
      Para: 'ParaContent1',
      Head: 'Content for image 7',
    },
    {
      image: 'https://htmlbeans.com/html/schon/images/products/img06.jpg',
      Head: 'Content for image 3',
      Para: 'ParaContent6',

    },
    // Add more items here
  ];
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };

    if (modalIndex !== null) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalIndex]);

  const openModal = (index) => {
    setModalIndex(index);
  };

  const closeModal = () => {
    setModalIndex(null);
  };
  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="overflow-hidden w-full">
      <div
        ref={scrollContainerRef}
        className="flex items-center overflow-x-auto scrollbar-hide relative"
        style={{ width: "100%" }} // Ensure the container takes full width
      >
        <div className="flex space-x-4 items-center">
          {items.map((item, index) => (
            <div
              key={index}
              className="relative inline-block p-2"
              style={{ minWidth: "20%" }}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
              onClick={() => openModal(index)}
            >
              <img
                src={item.image}
                alt={`Bestseller ${index}`}
                className="object-cover w-full h-auto cursor-pointer"
              />
              {hoverIndex === index && (
                <button
                  className="absolute inset-0 flex items-center justify-center text-white w-full h-full"
                >
                  <span className="bg-white px-2 py-2 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="black"
                      className="bi bi-eye"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
                      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
                    </svg>{" "}
                  </span>
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
      {modalIndex !== null && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
          <div ref={modalRef} className="bg-white p-4 max-w-xl max-h-full overflow-auto rounded-lg">
            <div className="flex flex-row items-center">
              <div className="flex flex-col items-center justify-center">

              <img
                src={items[modalIndex].image}
                alt={`Bestseller ${modalIndex}`}
                className="object-contain max-h-full w-full"
                />
                <div className="mt-4 flex items-center space-x-4">
                <button
                  onClick={decrementQuantity}
                  className="px-4 py-2 bg-gray-300 rounded-full"
                >
                  -
                </button>
                <span className="px-4 py-2 border rounded-full">{quantity}</span>
                <button
                  onClick={incrementQuantity}
                  className="px-4 py-2 bg-gray-300 rounded-full"
                >
                  +
                </button>
              </div>
                </div>

              <div className="mt-4">
                <h2>{items[modalIndex].Head}</h2>
                <p>{items[modalIndex].Para}</p>

              </div>
            </div>
            {/* <button
              onClick={closeModal}
              className="absolute top-0 right-0 m-4 px-2 bg-gray-900 text-white rounded-full hover:bg-gray-700"
            >
              x
            </button> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Bestseller;
