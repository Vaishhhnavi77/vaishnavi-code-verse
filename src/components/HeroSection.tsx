
import React from 'react';
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="about" className="min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-gray-100 pt-16">
      <div className="container-custom grid md:grid-cols-2 gap-12 items-center">
        
        <div className="order-2 md:order-1 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            Hi, I'm <span className="gradient-text">Vaishnavi Nakhate</span>
          </h1>
          
          <h2 className="text-2xl sm:text-3xl mb-6 text-gray-700">
            Full Stack Developer & Teacher
          </h2>
          
          <p className="text-lg text-gray-600 mb-8">
            I'm passionate about teaching web development, from frontend to backend technologies, 
            helping students build modern applications with best practices and effective workflows.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-teacher-purple hover:bg-teacher-purple/90">
              <a href="#teaching">Explore Courses</a>
            </Button>
            <Button size="lg" variant="outline" className="border-teacher-purple text-teacher-purple hover:bg-teacher-purple/10">
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </div>
        
        <div className="order-1 md:order-2 flex justify-center animate-float">
          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-teacher-purple to-teacher-blue rounded-full blur opacity-50"></div>
            <div className="relative bg-white rounded-full p-2">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Vaishnavi Nakhate" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default HeroSection;
