
import React from 'react';
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="about" className="min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-gray-100 pt-16">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
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
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-teacher-purple hover:bg-teacher-purple/90">
              <a href="#teaching">Explore Courses</a>
            </Button>
            <Button size="lg" variant="outline" className="border-teacher-purple text-teacher-purple hover:bg-teacher-purple/10">
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
