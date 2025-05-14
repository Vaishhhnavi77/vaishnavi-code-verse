
import React from 'react';
import { cn } from "@/lib/utils";

interface SkillCardProps {
  title: string;
  level: number; // 1-5 scale
  icon?: React.ReactNode;
  className?: string;
}

const SkillCard = ({ title, level, icon, className }: SkillCardProps) => {
  // Generate circles for skill level display
  const renderSkillLevel = () => {
    const circles = [];
    
    for (let i = 1; i <= 5; i++) {
      circles.push(
        <div 
          key={i}
          className={cn(
            "w-3 h-3 rounded-full",
            i <= level 
              ? "bg-gradient-to-r from-teacher-purple to-teacher-blue"
              : "bg-gray-200"
          )}
        />
      );
    }
    
    return circles;
  };

  return (
    <div className={cn(
      "bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg",
      className
    )}>
      <div className="flex items-center mb-4">
        {icon && <div className="mr-4">{icon}</div>}
        <h3 className="font-semibold text-lg">{title}</h3>
      </div>
      
      <div className="flex space-x-2">
        {renderSkillLevel()}
      </div>
    </div>
  );
};

export default SkillCard;
