import { MapPin, Building2 } from 'lucide-react';

export default function LocationsSection() {
  const cities = [
    {
      name: 'Delhi/NCR',
      clinics: 190,
      icon: Building2,
      image1: 'https://images.pexels.com/photos/6812464/pexels-photo-6812464.jpeg?auto=compress&cs=tinysrgb&w=300',
      image2: 'https://images.pexels.com/photos/6812581/pexels-photo-6812581.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'Bangalore',
      clinics: 110,
      icon: Building2,
      image1: 'https://images.pexels.com/photos/3845624/pexels-photo-3845624.jpeg?auto=compress&cs=tinysrgb&w=300',
      image2: 'https://images.pexels.com/photos/6812462/pexels-photo-6812462.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'Mumbai',
      clinics: 40,
      icon: Building2,
      image1: 'https://images.pexels.com/photos/6812464/pexels-photo-6812464.jpeg?auto=compress&cs=tinysrgb&w=300',
      image2: 'https://images.pexels.com/photos/3845653/pexels-photo-3845653.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'Chennai',
      clinics: 59,
      icon: Building2,
      image1: 'https://images.pexels.com/photos/6812581/pexels-photo-6812581.jpeg?auto=compress&cs=tinysrgb&w=300',
      image2: 'https://images.pexels.com/photos/3845622/pexels-photo-3845622.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'Hyderabad',
      clinics: 76,
      icon: Building2,
      image1: 'https://images.pexels.com/photos/6812462/pexels-photo-6812462.jpeg?auto=compress&cs=tinysrgb&w=300',
      image2: 'https://images.pexels.com/photos/6528864/pexels-photo-6528864.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'Punjab',
      clinics: 27,
      icon: Building2,
      image1: 'https://images.pexels.com/photos/3845653/pexels-photo-3845653.jpeg?auto=compress&cs=tinysrgb&w=300',
      image2: 'https://images.pexels.com/photos/6812464/pexels-photo-6812464.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'Pune',
      clinics: 76,
      icon: Building2,
      image1: 'https://images.pexels.com/photos/6812581/pexels-photo-6812581.jpeg?auto=compress&cs=tinysrgb&w=300',
      image2: 'https://images.pexels.com/photos/3845624/pexels-photo-3845624.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'Ahmedabad',
      clinics: 27,
      icon: Building2,
      image1: 'https://images.pexels.com/photos/6812462/pexels-photo-6812462.jpeg?auto=compress&cs=tinysrgb&w=300',
      image2: 'https://images.pexels.com/photos/6812581/pexels-photo-6812581.jpeg?auto=compress&cs=tinysrgb&w=300'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Find Us Across India
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            With over 500 clinics across India, you're never too far from a Clove Dental clinic. Choose your preferred city to book an appointment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {cities.map((city, index) => (
            <div
              key={index}
              className="group bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden"
            >
              <div className="grid grid-cols-2 gap-0.5">
                <div className="relative overflow-hidden h-24 md:h-28">
                  <img
                    src={city.image1}
                    alt={`${city.name} clinic storefront`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="relative overflow-hidden h-24 md:h-28">
                  <img
                    src={city.image2}
                    alt={`${city.name} clinic interior`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              <div className="p-4 border-t">
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center">
                    <city.icon className="w-4 h-4 text-gray-600 mr-2" />
                    <h3 className="font-bold text-gray-900 text-sm">{city.name}</h3>
                  </div>
                </div>
                <p className="text-xs text-gray-600">{city.clinics} Clinics</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="https://images.pexels.com/photos/6812464/pexels-photo-6812464.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Clove Dental clinic storefront"
              className="w-full h-56 md:h-64 object-cover"
            />
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="https://images.pexels.com/photos/3845624/pexels-photo-3845624.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Clove Dental clinic signage"
              className="w-full h-56 md:h-64 object-cover"
            />
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="https://images.pexels.com/photos/6812581/pexels-photo-6812581.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Clove Dental clinic reception"
              className="w-full h-56 md:h-64 object-cover"
            />
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="https://images.pexels.com/photos/3845653/pexels-photo-3845653.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Clove Dental clinic interior"
              className="w-full h-56 md:h-64 object-cover"
            />
          </div>
        </div>

        <div className="mt-12 text-center">
          <button className="bg-gray-900 text-white px-8 py-3 rounded-md font-semibold hover:bg-gray-800 transition">
            Book Appointment
          </button>
        </div>
      </div>
    </section>
  );
}
