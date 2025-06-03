import { useProfileStore } from "@/store/profileStore";
import { useState } from "react";

interface Props {
  onClose: () => void;
}

export default function EditBasicInfoModal({ onClose }: Props) {
  const { profile, updateBasicInfo } = useProfileStore();
  const [name, setName] = useState(profile?.name || "");
  const [summary, setSummary] = useState(profile?.summary || "");

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    updateBasicInfo(name, summary);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur"
        onClick={onClose}
      />
      <form
        onSubmit={handleSave}
        className="relative z-10 bg-white p-6 rounded-lg shadow-xl w-full max-w-lg"
      >
        <h2 className="text-xl font-bold mb-4">Edit Basic Info</h2>

        <label htmlFor="name">Name</label>
        <input
          type="text"
          required
          id="name"
          className="w-full p-2 border rounded mb-3"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />

        <label htmlFor="summary">Summary</label>
        <textarea
          required
          id="summary"
          className="w-full p-2 border rounded mb-4"
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          placeholder="Summary"
          rows={5}
        />

        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 border rounded hover:bg-gray-100"
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
    </div>
  );
}
