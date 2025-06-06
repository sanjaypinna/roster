import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getMockJobs, getMockProfile } from "@/lib/fakeApi";
import { Job, Profile } from "@/types/profile";

export default function JobMatchPage() {
  const { username } = useRouter().query;
  const [jobs, setJobs] = useState<Job[]>([]);
  const [profile, setProfile] = useState<Profile | null>(null);

  useEffect(() => {
    if (username && typeof username === "string") {
      const data = getMockProfile(username);
      setProfile(data as Profile);
    }
  }, [username]);

  useEffect(() => {
    if (profile) {
      const j = getMockJobs();

      const scoredJobs = j
        .map((job) => {
          const { score, matchedTags } = matchScore(job.tags, profile.tags);
          return {
            ...job,
            matchScore: score,
            matchedTags,
          };
        })
        .sort((a, b) => b.matchScore - a.matchScore);

      setJobs(scoredJobs);
    }
  }, [profile]);

  const matchScore = (jobTags: string[], profileTags: string[]) => {
    const matchedTags = jobTags.filter((tag) => profileTags.includes(tag));
    const matchRatio = matchedTags.length / jobTags.length;

    let score = 0;
    if (matchRatio === 1) score = 100;
    else if (matchRatio >= 0.75) score = 75;
    else if (matchRatio >= 0.5) score = 50;
    else if (matchRatio >= 0.25) score = 25;

    return { score, matchedTags };
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Matching Jobs</h1>
      {jobs.length === 0 ? (
        <p>No matches found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job, idx) => (
            <div
              key={idx}
              className="border flex flex-col gap-2 justify-between rounded-lg p-4 shadow-md hover:shadow-2xl transition"
            >
              <div>
                <h2 className="text-xl font-semibold mb-1">{job.title}</h2>
                <p className="text-gray-600 mb-2">{job.company}</p>
              </div>

              <div className="flex flex-wrap gap-2 mb-3">
                {job.tags.map((tag, i) => (
                  <span
                    key={i}
                    className={`text-sm px-2 py-1 rounded-full ${
                      job?.matchedTags?.includes(tag)
                        ? "bg-green-100 text-green-800"
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center mt-auto">
                {job?.matchScore ? (
                  <span
                    className={`inline-block text-sm font-medium px-2 py-1 rounded ${
                      job?.matchScore === 100
                        ? "bg-green-100 text-green-800"
                        : job?.matchScore >= 75
                        ? "bg-blue-100 text-blue-800"
                        : job?.matchScore >= 50
                        ? "bg-yellow-100 text-yellow-800"
                        : job?.matchScore >= 25
                        ? "bg-orange-100 text-orange-800"
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    Match Score: {job?.matchScore}%
                  </span>
                ) : (
                  <span className="text-sm text-gray-500">No match score</span>
                )}

                <button className="bg-black font-semibold text-white px-4 py-2 rounded">
                  Apply
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
