import { getMockProfile } from "@/lib/fakeApi";
import EditBasicInfoModal from "@/pages/component/EditBasicInfoModal";
import { useProfileStore } from "@/store/profileStore";
import { Profile } from "@/types/profile";
import { Pencil } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function ProfilePage() {
  const { username } = useRouter().query;
  const { profile, setProfile } = useProfileStore();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (username && typeof username === "string") {
      const data = getMockProfile(username);
      setProfile(data as Profile);
    }
  }, [username, setProfile]);

  if (!profile) return <p className="text-center mt-10">No profile found.</p>;

  return (
    <div className="container mx-auto">
      <div className="flex lg:flex-nowrap flex-wrap justify-center w-3/4 mx-auto py-10 items-center gap-6">
        <Image
          src={profile.profileImage}
          alt="Profile"
          width={220}
          height={150}
          className="rounded-lg"
        />
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center gap-1">
            <h1 className="text-2xl font-bold">{profile.name}</h1>
            <button onClick={() => setShowModal(true)}>
              <Pencil fill="#000" stroke="#fff" size={18} />
            </button>
          </div>
          <p className="text-lg line-clamp-5" title={profile.summary}>
            {profile.summary}
          </p>
        </div>
      </div>

      {showModal && <EditBasicInfoModal onClose={() => setShowModal(false)} />}
    </div>
  );
}
