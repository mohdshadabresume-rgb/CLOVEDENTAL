import { CheckCircle } from 'lucide-react';

export default function WhyChoose() {
  const features = [
    'DORI - A.I. enabled Dental chair',
    '10x Safety and 4 steps sterilization process',
    'Experienced and Certified implantologist',
    'Updated with world class equipments',
    'Regular audits for safety protocols'
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose Clove Dental
          </h2>
          <p className="text-lg text-gray-600">
            Clove Dental is India's Leading dental care brand with 600+ clinic nationwide
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
              >
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-lg text-gray-800">{feature}</span>
              </div>
            ))}
          </div>

          <div className="relative">
            <img
              src="https://images.pexels.com/photos/6812561/pexels-photo-6812561.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Happy dental patient with dentist"
              className="w-full h-[500px] object-cover rounded-2xl shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl font-bold text-gray-900">600+</div>
              <div className="text-gray-600">Clinics Nationwide</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
