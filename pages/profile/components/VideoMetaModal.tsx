import { useState, useEffect } from "react";
import { Employer, Project } from "@/types/profile";
import { X } from "lucide-react";

interface Props {
  employer: Employer;
  videoIndex: number;
  onClose: () => void;
  onSave: (updates: Partial<Project>) => void;
}

export default function VideoMetaModal({
  employer,
  videoIndex,
  onClose,
  onSave,
}: Props) {
  const initialState = {
    title: employer?.projects[videoIndex].title || "",
    duration: employer?.projects[videoIndex].duration || "",
    type: employer?.projects[videoIndex].type || "",
    contribution: employer?.projects[videoIndex].contribution || "",
  };

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(initialState);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const handleSave = () => {
    onSave(formData); // Update only on Save
    setIsEditing(false); // Exit editing mode
  };

  const handleCancel = () => {
    setFormData(initialState); // Revert changes
    setIsEditing(false); // Exit editing mode
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      <div
        className={`relative z-10 bg-white p-4 sm:p-6 rounded-lg shadow-xl  max-w-3xl ${
          !isEditing ? "w-full" : "w-1/2"
        }`}
      >
        <div className="flex flex-col justify-center lg:flex-row gap-6 h-[80vh] md:h-[70vh] lg:h-[60vh] overflow-hidden">
          {/* Video */}

          {!isEditing && (
            <iframe
              src={employer?.projects[videoIndex].video}
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-60 lg:h-full lg:w-1/2 rounded object-cover"
            />
          )}
          {/* Details/Form */}
          <div
            className={`w-full ${
              !isEditing ? "lg:w-1/2" : ""
            } overflow-y-auto py-2 lg:py-0 md:py-0`}
          >
            <div className="flex mb-4 justify-between">
              <h2 className="text-xl font-semibold">{employer?.name}</h2>
              <X size={20} onClick={onClose} className="cursor-pointer" />
            </div>

            {!isEditing ? (
              <div className="text-sm space-y-3">
                <p className="text-lg">
                  <strong>Job Title:</strong> {formData.title || "—"}
                </p>
                <p className="text-lg">
                  <strong>Duration:</strong> {formData.duration || "—"}
                </p>
                <p className="text-lg">
                  <strong>Type:</strong> {formData.type || "—"}
                </p>
                <p className="text-lg">
                  <strong>Contribution:</strong>
                  <br />
                  {formData.contribution || "—"}
                </p>
                <button
                  onClick={() => setIsEditing(true)}
                  className="text-sm px-3 py-1 border rounded hover:bg-gray-100"
                >
                  Edit
                </button>
              </div>
            ) : (
              <form onSubmit={handleSave}>
                <label className="block mb-1 text-sm font-medium">
                  Job Title
                </label>
                <input
                  name="title"
                  className="w-full p-2 border rounded mb-3"
                  value={formData.title}
                  required
                  onChange={handleChange}
                  placeholder="e.g. Video Editor"
                />

                <label className="block mb-1 text-sm font-medium">
                  Duration
                </label>
                <input
                  name="duration"
                  className="w-full p-2 border rounded mb-3"
                  value={formData.duration}
                  required
                  onChange={handleChange}
                  placeholder="e.g. Jan 2022 - Dec 2022"
                />

                <label className="block mb-1 text-sm font-medium">
                  Employment Type
                </label>
                <select
                  name="type"
                  className="w-full p-2 border rounded mb-3"
                  value={formData.type}
                  required
                  onChange={handleChange}
                >
                  <option value="">Select type</option>
                  <option value="Full-time">Full-time</option>
                  <option value="Contract">Contract</option>
                </select>

                <label className="block mb-1 text-sm font-medium">
                  Contribution
                </label>
                <textarea
                  name="contribution"
                  className="w-full p-2 border rounded mb-4"
                  value={formData.contribution}
                  required
                  onChange={handleChange}
                  placeholder="Describe what you worked on"
                  rows={4}
                />

                <div className="flex justify-end gap-2">
                  <button
                    onClick={handleCancel}
                    className="px-4 py-2 border rounded"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                  >
                    Save
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
