
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TicketPercent } from "lucide-react";

const PricingSection = () => {
  const courses = [
    {
      title: "Frontend Development",
      description: "Learn HTML5, CSS3, JavaScript, TypeScript, React.js, responsive design and modern CSS frameworks like Tailwind CSS.",
      price: "₹4,000",
      features: ["Hands-on projects", "Code reviews", "24/7 support", "Certificate on completion"]
    },
    {
      title: "Backend Development",
      description: "Master Node.js, Express.js, RESTful API design, authentication, authorization, and server-side architecture.",
      price: "₹4,000",
      features: ["Database integration", "API development", "Authentication flows", "Performance optimization"]
    },
    {
      title: "Full Stack Development",
      description: "Comprehensive course covering both frontend and backend technologies to build complete web applications.",
      price: "₹4,000",
      features: ["End-to-end projects", "Deployment strategies", "Real-world applications", "Portfolio building"]
    },
  ];

  return (
    <section id="pricing" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Course Pricing</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-teacher-purple to-teacher-blue mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            Affordable pricing for high-quality education to help you master full stack development skills.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <Card key={index} className="card-hover border-none shadow-md h-full flex flex-col">
              <CardHeader className="pb-2">
                <div className="flex justify-center mb-4">
                  <TicketPercent className="h-12 w-12 text-teacher-purple" />
                </div>
                <CardTitle className="text-xl text-center">{course.title}</CardTitle>
                <div className="text-center mt-4">
                  <span className="text-3xl font-bold text-teacher-purple">{course.price}</span>
                  <span className="text-gray-500 ml-1">per course</span>
                </div>
              </CardHeader>
              <CardContent className="text-center flex-1 flex flex-col">
                <CardDescription className="text-gray-600 mb-6">
                  {course.description}
                </CardDescription>
                <div className="mt-auto">
                  <ul className="space-y-2 mb-6">
                    {course.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center justify-center">
                        <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button size="lg" className="w-full bg-teacher-purple hover:bg-teacher-purple/90">
                    <a href="#contact">Enroll Now</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
