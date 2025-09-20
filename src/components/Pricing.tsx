import React from 'react';
import { Check, Star } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "Essential",
      price: "2,500",
      period: "Starting from",
      description: "Perfect for small spaces and budget-conscious clients",
      features: [
        "Basic modular kitchen (up to 8ft)",
        "Standard hardware and fittings",
        "Laminate finish options",
        "Basic storage solutions",
        "1 year warranty",
        "Free consultation",
        "Basic installation"
      ],
      popular: false,
      color: "gray"
    },
    {
      name: "Premium",
      price: "6,500",
      period: "Starting from",
      description: "Most popular choice for complete room makeovers",
      features: [
        "Full modular kitchen (up to 15ft)",
        "Premium hardware and soft-close",
        "Solid wood or premium laminate",
        "Advanced storage solutions",
        "Quartz/granite countertops",
        "Under-cabinet LED lighting",
        "3 years warranty",
        "Free design consultation",
        "Professional installation",
        "Post-installation support"
      ],
      popular: true,
      color: "amber"
    },
    {
      name: "Luxury",
      price: "15,000",
      period: "Starting from",
      description: "Premium craftsmanship for discerning clients",
      features: [
        "Full home furniture solutions",
        "Imported premium hardware",
        "Solid wood with premium finish",
        "Smart storage with automation",
        "Premium countertops (marble/quartz)",
        "Smart lighting integration",
        "Built-in appliance integration",
        "5 years comprehensive warranty",
        "3D design visualization",
        "White-glove installation",
        "Lifetime support",
        "Priority service calls"
      ],
      popular: false,
      color: "purple"
    }
  ];

  const getButtonColor = (color: string, popular: boolean) => {
    if (popular) {
      return "bg-amber-600 text-white hover:bg-amber-700 shadow-lg";
    }
    switch (color) {
      case 'gray':
        return "border-2 border-gray-300 text-gray-700 hover:bg-gray-50";
      case 'purple':
        return "border-2 border-purple-600 text-purple-600 hover:bg-purple-50";
      default:
        return "border-2 border-amber-600 text-amber-600 hover:bg-amber-50";
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Transparent Pricing</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect package for your needs. All prices include design consultation, 
            materials, and professional installation. No hidden costs, just honest pricing.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl ${
                plan.popular 
                  ? 'ring-4 ring-amber-500 ring-opacity-50 scale-105' 
                  : 'hover:scale-105'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-amber-500 text-white px-4 py-2 text-sm font-semibold">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-current" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              <div className={`p-8 ${plan.popular ? 'bg-gradient-to-br from-amber-50 to-orange-50' : 'bg-white'}`}>
                {/* Header */}
                <div className="mb-6">
                  <h3 className={`text-2xl font-bold mb-2 ${
                    plan.color === 'purple' ? 'text-purple-600' : 
                    plan.popular ? 'text-amber-600' : 'text-gray-900'
                  }`}>
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 text-sm">{plan.description}</p>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline">
                    <span className="text-sm text-gray-500 mr-2">{plan.period}</span>
                  </div>
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-gray-900">${plan.price}</span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <Check className={`h-5 w-5 mt-0.5 flex-shrink-0 ${
                        plan.popular ? 'text-amber-500' : 'text-gray-400'
                      }`} />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  getButtonColor(plan.color, plan.popular)
                }`}>
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-amber-50 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Need a Custom Quote?</h3>
            <p className="text-gray-600 mb-6">
              Every project is unique. Our experts will visit your space, understand your requirements, 
              and provide a detailed quote tailored to your specific needs and budget.
            </p>
            <button className="bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors duration-300">
              Schedule Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;