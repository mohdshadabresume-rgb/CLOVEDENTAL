import { MapPin } from 'lucide-react';

export default function LocationsSection() {
  const cities = [
    {
      name: 'Delhi/NCR',
      clinics: 190,
      image: 'https://images.pexels.com/photos/7089014/pexels-photo-7089014.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Bangalore',
      clinics: 110,
      image: 'https://images.pexels.com/photos/6812581/pexels-photo-6812581.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Mumbai',
      clinics: 40,
      image: 'https://images.pexels.com/photos/6812462/pexels-photo-6812462.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Chennai',
      clinics: 59,
      image: 'https://images.pexels.com/photos/3845653/pexels-photo-3845653.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Hyderabad',
      clinics: 76,
      image: 'https://images.pexels.com/photos/6812464/pexels-photo-6812464.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Punjab',
      clinics: 27,
      image: 'https://images.pexels.com/photos/3845622/pexels-photo-3845622.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Pune',
      clinics: 76,
      image: 'https://images.pexels.com/photos/6528864/pexels-photo-6528864.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Ahmedabad',
      clinics: 27,
      image: 'https://images.pexels.com/photos/7089014/pexels-photo-7089014.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Find Us Across India
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            With over 500 clinics across India, you're never too far from a Clove Dental clinic.
            Choose your preferred city to book an appointment.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {cities.map((city, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="aspect-square relative">
                <img
                  src={city.image}
                  alt={`Clove Dental clinic in ${city.name}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-70"></div>

                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <div className="flex items-center mb-1">
                    <MapPin className="w-4 h-4 mr-1" />
                    <h3 className="text-lg font-bold">{city.name}</h3>
                  </div>
                  <p className="text-sm">{city.clinics} Clinics</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="bg-gray-900 text-white px-8 py-3 rounded-md font-semibold hover:bg-gray-800 transition">
            View All Locations
          </button>
        </div>
      </div>
    </section>
  );
}
