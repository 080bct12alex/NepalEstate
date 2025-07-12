// src/components/FeaturedProperties.js
export default function FeaturedProperties() {
    //sample data
  const properties = [
    {
      id: 1,
      title: 'Modern House in Bhaktapur',
      price: 50000000,
      location: 'Bhaktapur',
      area: 10,
      floors: 2,
      roadWidth: 20,
      roadType: 'Blacktopped',
      image:
        'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 2,
      title: 'Luxury Villa in Lalitpur',
      price: 60000000,
      location: 'Lalitpur',
      area: 10,
      floors: 2,
      roadWidth: 20,
      roadType: 'Blacktopped',
      image:
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 3,
      title: 'Modern Apartment in Kathmandu',
      price: 30000000,
      location: 'Kathmandu',
      area: 5,
      floors: 1,
      roadWidth: 20,
      roadType: 'Blacktopped',
      image:
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
    }
  ];

  return (
    <section>
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Featured Properties</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {properties.map((property) => (
          <div
            key={property.id}
            className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:transform hover:scale-105"
          >
            <img src={property.image} alt={property.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{property.title}</h3>
              <p className="text-2xl font-bold text-indigo-600 mb-4">
                {new Intl.NumberFormat('en-NP', {
                  style: 'currency',
                  currency: 'NPR',
                  maximumFractionDigits: 0
                }).format(property.price)}
              </p>
              <div className="flex items-center text-gray-600 mb-4">
                <svg
                  className="w-5 h-5 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>{property.location}</span>
              </div>
              
              <div className="flex justify-between text-sm text-gray-600">
               
                <div className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                    />
                  </svg>
                  <span>{property.area} Anas</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 text-sm text-gray-600 mt-4">
                <div>
                  <strong>Floors:</strong> {property.floors}
                </div>
                <div>
                  <strong>Road Width:</strong> {property.roadWidth} ft
                </div>
                <div>
                  <strong>Road Type:</strong> {property.roadType}
                </div>
              </div>

              <button className="mt-4 w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition duration-300">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
