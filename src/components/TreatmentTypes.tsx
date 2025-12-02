export default function TreatmentTypes() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Types of Root Canal Treatments
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            In a root canal, the dentist removes infected pulp, cleans the tooth, and fills it with special material.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-orange-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Root Canal Treatment
                </h3>
                <p className="text-gray-600 mb-4">
                  Ideal for infected or damaged tooth
                </p>

                <div className="space-y-2 mb-6">
                  <h4 className="font-semibold text-gray-900">Types of RCT</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Root Canal Treatment</li>
                    <li>• Split RCT</li>
                    <li>• Split RCT with rubber dam</li>
                    <li>• Split RCT with laser</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <div className="text-sm text-gray-500 mb-1">Starting Price</div>
                  <div className="text-3xl font-bold text-gray-900">₹ 19,999</div>
                </div>

                <button className="w-full md:w-auto bg-gray-900 text-white px-8 py-3 rounded-md font-semibold hover:bg-gray-800 transition">
                  Get Free Consultation
                </button>
              </div>

              <div className="flex-shrink-0">
                <img
                  src="https://images.pexels.com/photos/3845653/pexels-photo-3845653.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Root canal treatment illustration showing tooth anatomy"
                  className="w-full md:w-48 h-48 object-cover rounded-xl"
                />
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Re-Root Canal Treatment
                </h3>
                <p className="text-gray-600 mb-4">
                  Ideal issues that persist or recur after an initial root canal treatment
                </p>

                <div className="space-y-2 mb-6">
                  <h4 className="font-semibold text-gray-900">Types of RCT</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Re-RCT with rubber dam</li>
                    <li>• Re-RCT laser specialist</li>
                    <li>• Re-RCT with retrieval of old RCT filling</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <div className="text-sm text-gray-500 mb-1">Starting Price</div>
                  <div className="text-3xl font-bold text-gray-900">₹ 19,999</div>
                </div>

                <button className="w-full md:w-auto bg-gray-900 text-white px-8 py-3 rounded-md font-semibold hover:bg-gray-800 transition">
                  Get Free Consultation
                </button>
              </div>

              <div className="flex-shrink-0">
                <img
                  src="https://images.pexels.com/photos/6528864/pexels-photo-6528864.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Re-root canal treatment showing tooth restoration"
                  className="w-full md:w-48 h-48 object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
