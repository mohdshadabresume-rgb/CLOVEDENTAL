export default function PatientTransformations() {
  const transformations = [
    {
      name: 'Arjun Mehta',
      location: 'Mumbai',
      beforeImage: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300',
      afterImage: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'Kavita Sharma',
      location: 'Bangalore',
      beforeImage: 'https://images.pexels.com/photos/3765035/pexels-photo-3765035.jpeg?auto=compress&cs=tinysrgb&w=300',
      afterImage: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'Neha Joshi',
      location: 'Delhi',
      beforeImage: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300',
      afterImage: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'Viram Desai',
      location: 'Chennai',
      beforeImage: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=300',
      afterImage: 'https://images.pexels.com/photos/1121796/pexels-photo-1121796.jpeg?auto=compress&cs=tinysrgb&w=300'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Real Smiles, Real Transformations
          </h2>
          <p className="text-lg text-gray-600">
            See the life changing results our dental implant patients enjoy
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {transformations.map((patient, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="grid grid-cols-2">
                <div className="relative">
                  <img
                    src={patient.beforeImage}
                    alt={`${patient.name} before treatment`}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-xs py-1 text-center">
                    Before
                  </div>
                </div>
                <div className="relative">
                  <img
                    src={patient.afterImage}
                    alt={`${patient.name} after treatment`}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-xs py-1 text-center">
                    After
                  </div>
                </div>
              </div>
              <div className="p-4 text-center">
                <h3 className="font-semibold text-gray-900">{patient.name}</h3>
                <p className="text-sm text-gray-500">{patient.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
