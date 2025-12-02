import { Shield, Sparkles, Cpu } from 'lucide-react';

export default function SafetySection() {
  const safetyFeatures = [
    {
      icon: Shield,
      title: 'Uncompromised\nSafety',
      description: '10X Safety Protocols for a secure and worry-free dental experience',
      image: 'https://images.pexels.com/photos/3845653/pexels-photo-3845653.jpeg?auto=compress&cs=tinysrgb&w=600',
      bgGradient: 'from-blue-900 to-blue-700'
    },
    {
      icon: Sparkles,
      title: 'Assuring\nCleanliness',
      description: 'Rigid 4-Step Sterilization process, assuring a safe a spotless clinic.',
      image: 'https://images.pexels.com/photos/3845622/pexels-photo-3845622.jpeg?auto=compress&cs=tinysrgb&w=600',
      bgGradient: 'from-teal-600 to-cyan-600'
    },
    {
      icon: Cpu,
      title: 'Experience AIPS',
      description: "Our AI-Powered Sterilization (AIPS) Monitoring system from DORI, USA Exclusively at Clove",
      image: 'https://images.pexels.com/photos/6812464/pexels-photo-6812464.jpeg?auto=compress&cs=tinysrgb&w=600',
      bgGradient: 'from-orange-600 to-red-600'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Safety, Precision, and Innovation
          </h2>
          <p className="text-lg text-gray-600">
            Advanced care with top safety, sterilization, and technology
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {safetyFeatures.map((feature, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 h-96"
            >
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-full object-cover"
              />

              <div className={`absolute inset-0 bg-gradient-to-t ${feature.bgGradient} opacity-80 group-hover:opacity-90 transition-opacity`}></div>

              <div className="absolute inset-0 p-8 flex flex-col justify-between text-white">
                <div>
                  <feature.icon className="w-12 h-12 mb-4" />
                  <h3 className="text-2xl font-bold mb-3 whitespace-pre-line">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <button className="self-start bg-white text-gray-900 px-6 py-2 rounded-md font-semibold hover:bg-gray-100 transition">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
