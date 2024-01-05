import React, { useState, useEffect } from 'react';

const DropdownButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [specialities, setSpecialities] = useState([]); // State to store the fetched specialities

  const toggleDropdown = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  useEffect(() => {
    // Fetch data from your API endpoint for specialities
    fetch('your-api-endpoint-for-specialities')
      .then((response) => response.json())
      .then((data) => setSpecialities(data))
      .catch((error) => console.error('Error fetching specialities:', error));
  }, []); // Run this effect only once when the component mounts

  return (
    <div className='relative inline-block text-left' >
      <button
        onClick={toggleDropdown}
        type="button"
        className=' border-2 border-vert-foncé-0 rounded-lg h-10 w-80 px-10 focus:outline-none'
        id="options-menu"
        aria-haspopup="true"
        aria-expanded="true"
      >
        <span className='mr-20'>Spécialité</span> <i className=" fa-solid fa-caret-down"></i>
      </button>

      {isOpen && (
        <div
        className='border-2 border-vert-foncé-0 rounded-lg h-14 w-80 px-10 focus:outline-none'
          
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="py-1" role="none">
            {/* Map over the fetched specialities and create dropdown items */}
            {specialities.map((speciality) => (
              <a
                key={speciality.id} // Assuming each speciality has a unique identifier
                href={`#${speciality.id}`} // You can replace this with the actual link or action
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
              >
                {speciality.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownButton;
