
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Database, Globe, GitBranch, Server, Layout } from "lucide-react";

const TeachingSection = () => {
  const teachingTopics = [
    {
      title: "Frontend Development",
      description: "HTML5, CSS3, JavaScript, TypeScript, React.js, responsive design, UI/UX principles, and modern CSS frameworks like Tailwind CSS.",
      icon: <Layout className="h-12 w-12 text-teacher-purple" />
    },
    {
      title: "Backend Development",
      description: "Node.js, Express.js, RESTful API design, authentication, authorization, middleware patterns, and server-side rendering.",
      icon: <Server className="h-12 w-12 text-teacher-blue" />
    },
    {
      title: "Database Technologies",
      description: "SQL (PostgreSQL, MySQL), NoSQL (MongoDB), database design, normalization, relationships, indexing, and query optimization.",
      icon: <Database className="h-12 w-12 text-teacher-pink" />
    },
    {
      title: "Version Control & Deployment",
      description: "Git workflow, branches, merging strategies, GitHub collaboration, CI/CD pipelines, and deployment to cloud platforms.",
      icon: <GitBranch className="h-12 w-12 text-teacher-purple" />
    },
    {
      title: "Web APIs & Integration",
      description: "Working with third-party APIs, webhooks, creating API documentation, testing APIs, and handling authentication.",
      icon: <Globe className="h-12 w-12 text-teacher-blue" />
    },
    {
      title: "Modern JavaScript",
      description: "ES6+ features, asynchronous JavaScript, promises, async/await, modules, functional programming concepts, and clean code practices.",
      icon: <Code className="h-12 w-12 text-teacher-pink" />
    }
  ];

  return (
    <section id="teaching" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">What I Teach</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-teacher-purple to-teacher-blue mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            As a full stack teacher, I cover a comprehensive curriculum designed to transform beginners into confident 
            full stack developers ready for the modern tech industry.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teachingTopics.map((topic, index) => (
            <Card key={index} className="card-hover border-none shadow-md h-full">
              <CardHeader className="pb-2">
                <div className="flex justify-center mb-4">
                  {topic.icon}
                </div>
                <CardTitle className="text-xl text-center">{topic.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600">
                  {topic.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeachingSection;
