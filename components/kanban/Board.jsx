'use client'
import { useState } from "react";
import Column from "./Column";
import BurnBarrel from "./BurnBarrel";
import { DEFAULT_CARDS } from "./data";
import { ChevronDown } from "lucide-react";

const Board = () => {
  const [cards, setCards] = useState(DEFAULT_CARDS);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  
  // Dummy project data
  const projects = [
    { id: 1, name: "Website Redesign" },
    { id: 2, name: "Mobile App Development" },
    { id: 3, name: "Marketing Campaign" },
    { id: 4, name: "Database Migration" },
    { id: 5, name: "UI/UX Improvements" }
  ];

  const selectProject = (project) => {
    setSelectedProject(project);
    setIsDropdownOpen(false);
  };

  return (
    <div className="flex flex-col h-full w-full gap-6 max-w-[1200px]">
      <div className="flex items-center justify-between w-full absolute top-[15px] left-[15px]">
        
        {/* Project Selector Dropdown */}
        <div className="relative">
          <button 
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center justify-between gap-2 px-4 py-2 bg-[#171717] text-white rounded-lg shadow-md hover:bg-gray-700 transition-colors w-64"
          >
            <span className="truncate">
              {selectedProject ? selectedProject.name : "Select Project"}
            </span>
            <ChevronDown size={18} className={`transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
          </button>
          
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-64 bg-[#171717]  rounded-lg shadow-lg z-10 border border-[#171717]">
              <div className="py-1">
                {projects.map(project => (
                  <div 
                    key={project.id}
                    className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                    onClick={() => selectProject(project)}
                  >
                    <span className="text-sm">{project.name}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      
      <div className="flex h-full w-full gap-3">
        <Column
          title="Backlog"
          column="backlog"
          headingColor="text-neutral-500"
          cards={cards}
          setCards={setCards}
        />
        <Column
          title="TODO"
          column="todo"
          headingColor="text-yellow-200"
          cards={cards}
          setCards={setCards}
        />
        <Column
          title="In progress"
          column="doing"
          headingColor="text-blue-200"
          cards={cards}
          setCards={setCards}
        />
        <Column
          title="Complete"
          column="done"
          headingColor="text-emerald-200"
          cards={cards}
          setCards={setCards}
        />
        <BurnBarrel setCards={setCards} />
      </div>
    </div>
  );
};

export default Board;