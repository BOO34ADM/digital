import React from 'react';
import { X, Check, Star } from 'lucide-react';

interface Plan {
  duration: string;
  price: string;
  currency: string;
  features: string[];
  popular?: boolean;
}

interface Service {
  id: string;
  name: string;
  description: string;
  logo: string;
  color: string;
  bgColor: string;
  borderColor: string;
  plans: Plan[];
}

interface ServiceModalProps {
  service: Service;
  isOpen: boolean;
  onClose: () => void;
  onSelectPlan: (service: Service, plan: Plan) => void;
}

export default function ServiceModal({ service, isOpen, onClose, onSelectPlan }: ServiceModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="text-4xl">{service.logo}</div>
              <div>
                <h2 className="text-3xl font-bold text-gray-800">{service.name}</h2>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Choose Your Plan</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {service.plans.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-xl border-2 p-6 cursor-pointer transform hover:scale-105 transition-all duration-300 ${
                  plan.popular
                    ? `${service.borderColor} bg-gradient-to-br ${service.color} text-white shadow-lg`
                    : 'border-gray-200 bg-white hover:border-gray-300 shadow-sm hover:shadow-md'
                }`}
                onClick={() => onSelectPlan(service, plan)}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-bold flex items-center space-x-1">
                      <Star className="w-4 h-4" />
                      <span>Most Popular</span>
                    </div>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h4 className={`text-xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-gray-800'}`}>
                    {plan.duration}
                  </h4>
                  <div className="flex items-baseline justify-center">
                    <span className={`text-4xl font-bold ${plan.popular ? 'text-white' : 'text-gray-800'}`}>
                      {plan.price}
                    </span>
                    <span className={`text-lg ml-1 ${plan.popular ? 'text-white opacity-80' : 'text-gray-600'}`}>
                      {plan.currency}
                    </span>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <Check className={`w-5 h-5 ${plan.popular ? 'text-white' : 'text-green-500'} flex-shrink-0`} />
                      <span className={`${plan.popular ? 'text-white' : 'text-gray-700'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-white text-gray-800 hover:bg-gray-100'
                      : `bg-gradient-to-r ${service.color} text-white hover:shadow-lg`
                  }`}
                >
                  Select Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}