import React from 'react';
import { ChevronRight } from 'lucide-react';

interface Service {
  id: string;
  name: string;
  description: string;
  logo: string;
  color: string;
  bgColor: string;
  borderColor: string;
}

interface ServiceCardProps {
  service: Service;
  onClick: (service: Service) => void;
}

export default function ServiceCard({ service, onClick }: ServiceCardProps) {
  return (
    <div
      onClick={() => onClick(service)}
      className={`${service.bgColor} ${service.borderColor} border-2 rounded-2xl p-6 cursor-pointer transform hover:scale-105 transition-all duration-300 hover:shadow-xl group relative overflow-hidden`}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
      
      <div className="relative z-10">
        <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
          {service.logo}
        </div>
        
        <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-gray-900">
          {service.name}
        </h3>
        
        <p className="text-gray-600 mb-4 leading-relaxed">
          {service.description}
        </p>
        
        <div className="flex items-center justify-between">
          <span className={`text-sm font-semibold bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
            View Plans
          </span>
          <ChevronRight className={`w-5 h-5 text-gray-400 group-hover:text-gray-600 transform group-hover:translate-x-1 transition-all duration-300`} />
        </div>
      </div>
    </div>
  );
}