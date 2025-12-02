import { useState } from 'react';

export default function HeroSection() {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    captcha: '',
    agreed: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Painless Root Canal Treatment in Delhi
            </h1>
            <p className="text-xl text-gray-600">
              Expert RCT. Zero Pain. Right Here in Delhi.
            </p>
            <button className="bg-gray-900 text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-gray-800 transition">
              Book Appointment
            </button>

            <div className="flex flex-wrap gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">600+</div>
                <div className="text-sm text-gray-600">Clinics</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">1300+</div>
                <div className="text-sm text-gray-600">Dentists</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">30 L+</div>
                <div className="text-sm text-gray-600">Happy Patients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">35K+</div>
                <div className="text-sm text-gray-600">Ortho Cases</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">55K+</div>
                <div className="text-sm text-gray-600">Implants Placed</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Get Expert Dental Guidance in Delhi
            </h3>
            <p className="text-gray-600 mb-6">
              Book your free consultation today and take the first step towards healthy, beautiful teeth.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900"
                required
              />
              <input
                type="tel"
                placeholder="Mobile Number"
                value={formData.mobile}
                onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900"
                required
              />
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Captcha"
                  value={formData.captcha}
                  onChange={(e) => setFormData({ ...formData, captcha: e.target.value })}
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900"
                  required
                />
                <div className="bg-gray-100 px-6 py-3 rounded-md font-mono text-lg font-bold">
                  1514
                </div>
              </div>
              <label className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  checked={formData.agreed}
                  onChange={(e) => setFormData({ ...formData, agreed: e.target.checked })}
                  className="mt-1"
                  required
                />
                <span className="text-sm text-gray-600">
                  I agree to CLOVE Dental's Terms and Privacy Policy and consent to contact via phone, email, or SMS.
                </span>
              </label>
              <button
                type="submit"
                className="w-full bg-gray-900 text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-800 transition"
              >
                Book a Free Consultation
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16">
          <img
            src="https://images.pexels.com/photos/6812464/pexels-photo-6812464.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Professional dentist in dental clinic"
            className="w-full h-96 object-cover rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
