import { Employer, Project } from "@/types/profile";
import { useState } from "react";
import VideoMetaModal from "./VideoMetaModal";
import { X } from "lucide-react";

interface Props {
  employer: Employer;
  onClose: () => void;
  onUpdate: (updates: Employer) => void;
}

export default function AllProjectsModal({ employer, onClose, onUpdate }: Props) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleSave = (videoIndex: number, updates: Partial<Project>) => {
    const updatedProjects = [...employer.projects];
    updatedProjects[videoIndex] = {
      ...updatedProjects[videoIndex],
      ...updates,
    };
    onUpdate({ ...employer, projects: updatedProjects });
    setSelectedIndex(null);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative z-10 bg-white p-4 sm:p-6 rounded-lg shadow-xl w-full max-w-5xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">All Projects - {employer.name}</h2>
          <X className="cursor-pointer" onClick={onClose} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {employer.projects.map((project, index) => (
            <div
              key={index}
              className="relative cursor-pointer group"
              onClick={() => setSelectedIndex(index)}
            >
              <iframe
                src={project.video}
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-48 rounded pointer-events-none"
              />
              <div className="absolute inset-0 z-10" />
            </div>
          ))}
        </div>

        {selectedIndex !== null && (
          <VideoMetaModal
            employer={employer}
            videoIndex={selectedIndex}
            onClose={() => setSelectedIndex(null)}
            onSave={(updates) => handleSave(selectedIndex, updates)}
          />
        )}
      </div>
    </div>
  );
}
