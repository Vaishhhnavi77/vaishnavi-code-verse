
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import TeachingSection from '@/components/TeachingSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import SkillCard from '@/components/SkillCard';
import { Code, Database, GitBranch, Globe, Layout, Server } from 'lucide-react';

const Index = () => {
  // Skills data
  const frontendSkills = [
    { title: "HTML/CSS", level: 5, icon: <Layout className="h-5 w-5 text-teacher-purple" /> },
    { title: "JavaScript", level: 5, icon: <Code className="h-5 w-5 text-teacher-blue" /> },
    { title: "React.js", level: 5, icon: <Code className="h-5 w-5 text-teacher-purple" /> },
    { title: "TypeScript", level: 4, icon: <Code className="h-5 w-5 text-teacher-blue" /> },
    { title: "CSS Frameworks", level: 5, icon: <Layout className="h-5 w-5 text-teacher-purple" /> },
    { title: "Responsive Design", level: 5, icon: <Layout className="h-5 w-5 text-teacher-blue" /> }
  ];
  
  const backendSkills = [
    { title: "Node.js", level: 5, icon: <Server className="h-5 w-5 text-teacher-purple" /> },
    { title: "Express.js", level: 5, icon: <Server className="h-5 w-5 text-teacher-blue" /> },
    { title: "RESTful APIs", level: 5, icon: <Globe className="h-5 w-5 text-teacher-purple" /> },
    { title: "GraphQL", level: 4, icon: <Globe className="h-5 w-5 text-teacher-blue" /> },
    { title: "Authentication", level: 5, icon: <Server className="h-5 w-5 text-teacher-purple" /> },
    { title: "Microservices", level: 4, icon: <Server className="h-5 w-5 text-teacher-blue" /> }
  ];
  
  const databaseSkills = [
    { title: "SQL/PostgreSQL", level: 5, icon: <Database className="h-5 w-5 text-teacher-purple" /> },
    { title: "MongoDB", level: 5, icon: <Database className="h-5 w-5 text-teacher-blue" /> },
    { title: "Database Design", level: 5, icon: <Database className="h-5 w-5 text-teacher-purple" /> },
    { title: "Redis", level: 3, icon: <Database className="h-5 w-5 text-teacher-blue" /> }
  ];

  const devOpsSkills = [
    { title: "Git/GitHub", level: 5, icon: <GitBranch className="h-5 w-5 text-teacher-purple" /> },
    { title: "CI/CD", level: 4, icon: <GitBranch className="h-5 w-5 text-teacher-blue" /> },
    { title: "AWS", level: 4, icon: <Server className="h-5 w-5 text-teacher-purple" /> },
    { title: "Docker", level: 4, icon: <Server className="h-5 w-5 text-teacher-blue" /> }
  ];

  return (
    <>
      <Navbar />
      <HeroSection />
      <TeachingSection />

      {/* Skills Section */}
      <section id="skills" className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">My Skills</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-teacher-purple to-teacher-blue mx-auto mb-6"></div>
            <p className="text-lg text-gray-600">
              With extensive experience in these technologies, I teach students how to build complete, 
              robust and scalable web applications.
            </p>
          </div>

          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 gradient-text">Frontend Development</h3>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                {frontendSkills.map((skill, index) => (
                  <SkillCard key={index} {...skill} />
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6 gradient-text">Backend Development</h3>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                {backendSkills.map((skill, index) => (
                  <SkillCard key={index} {...skill} />
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6 gradient-text">Database Technologies</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {databaseSkills.map((skill, index) => (
                    <SkillCard key={index} {...skill} />
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-6 gradient-text">DevOps & Deployment</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {devOpsSkills.map((skill, index) => (
                    <SkillCard key={index} {...skill} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </>
  );
};

export default Index;
