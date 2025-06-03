// Clients.tsx
import { Employer, Profile, Project } from "@/types/profile";
import { useState } from "react";
import VideoMetaModal from "./VideoMetaModal";
import AllProjectsModal from "./AllProjectsModal";

const Clients = ({ profile }: { profile: Profile }) => {
  const [selectedEmployer, setSelectedEmployer] = useState<number | null>(null);
  const [selectedVideoIndex, setSelectedVideoIndex] = useState<number | null>(null);
  const [viewAllModalEmployer, setViewAllModalEmployer] = useState<number | null>(null);

  const openVideoModal = (empIdx: number, vidIdx: number) => {
    setSelectedEmployer(empIdx);
    setSelectedVideoIndex(vidIdx);
  };

  const closeVideoModal = () => {
    setSelectedEmployer(null);
    setSelectedVideoIndex(null);
  };

  const openViewAllModal = (empIdx: number) => {
    setViewAllModalEmployer(empIdx);
  };

  const closeViewAllModal = () => {
    setViewAllModalEmployer(null);
  };

  return (
    <div className="container mx-auto  ">
      <h2 className="text-2xl font-bold mb-2">Clients</h2>
      <div>
        {profile?.employers.map((emp, empIndex) => {
          const showAll = emp.projects.length > 3;
          const visibleProjects = showAll ? emp.projects.slice(0, 3) : emp.projects;

          return (
            <div key={empIndex} className="mb-5">
              <h2 className="text-xl font-bold mb-4">{emp.name}</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {visibleProjects.map((proj, projIndex) => (
                  <div
                    key={projIndex}
                    onClick={() => openVideoModal(empIndex, projIndex)}
                    className="cursor-pointer group relative"
                  >
                    <iframe
                      src={proj.video}
                      width="100%"
                      height="250"
                      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="rounded pointer-events-none"
                    />
                    <div className="absolute inset-0 z-10" />
                  </div>
                ))}
              </div>
              {showAll && (
                <button
                  onClick={() => openViewAllModal(empIndex)}
                  className="mt-2 text-end w-full text-sm text-blue-600 hover:underline"
                >
                  View All
                </button>
              )}
            </div>
          );
        })}
      </div>

      {selectedEmployer !== null && selectedVideoIndex !== null && (
        <VideoMetaModal
          employer={profile.employers[selectedEmployer]}
          videoIndex={selectedVideoIndex}
          onClose={closeVideoModal}
          onSave={(updates: Partial<Project>) => {
            const updated = [...profile.employers];
            Object.assign(updated[selectedEmployer].projects[selectedVideoIndex], updates);
          }}
        />
      )}

      {viewAllModalEmployer !== null && (
        <AllProjectsModal
          employer={profile.employers[viewAllModalEmployer]}
          onClose={closeViewAllModal}
          onUpdate={(updates: Partial<Employer>) => {
            const updated = [...profile.employers];
            Object.assign(updated[viewAllModalEmployer], updates);
          }}
        />
      )}
    </div>
  );
};

export default Clients;
