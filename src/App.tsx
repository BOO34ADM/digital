import React, { useState } from 'react';
import { Zap, Shield, Clock } from 'lucide-react';
import ServiceCard from './components/ServiceCard';
import ServiceModal from './components/ServiceModal';
import WhatsAppButton from './components/WhatsAppButton';
import data from './data.json';

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

interface Plan {
  duration: string;
  price: string;
  currency: string;
  features: string[];
  popular?: boolean;
}

function App() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleServiceClick = (service: Service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  const handleSelectPlan = (service: Service, plan: Plan) => {
    const message = `Hi! I'm interested in the ${service.name} ${plan.duration} plan for ${plan.price} ${plan.currency}. Can you help me with the subscription?`;
    const whatsappUrl = `https://wa.me/${data.contact.whatsapp.replace('+', '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-xl">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  DigitalHub
                </h1>
                <p className="text-sm text-gray-600">Premium Digital Services</p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4" />
                <span>Secure</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>Instant Access</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
            Premium Digital
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Access the world's best streaming, music, and design platforms with our exclusive subscription packages. 
            Affordable prices, instant activation, and premium support.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {data.services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onClick={handleServiceClick}
            />
          ))}
        </div>

        {/* Features Section */}
        <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-lg">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">Why Choose DigitalHub?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-green-400 to-green-600 p-4 rounded-2xl w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">Instant Activation</h4>
              <p className="text-gray-600">Get access to your favorite services within minutes of purchase</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-blue-400 to-blue-600 p-4 rounded-2xl w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">100% Secure</h4>
              <p className="text-gray-600">All transactions are encrypted and your data is protected</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-400 to-purple-600 p-4 rounded-2xl w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">24/7 Support</h4>
              <p className="text-gray-600">Get help whenever you need it via WhatsApp</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Modal */}
      {selectedService && (
        <ServiceModal
          service={selectedService}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          onSelectPlan={handleSelectPlan}
        />
      )}

      {/* WhatsApp Button */}
      <WhatsAppButton
        phoneNumber={data.contact.whatsapp}
        message={data.contact.message}
      />

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-xl">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold">DigitalHub</span>
          </div>
          <p className="text-gray-400">© 2024 DigitalHub. All rights reserved. Premium digital services at your fingertips.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;