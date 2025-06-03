// lib/fakeApi.ts or mockDB.ts
export const getMockProfile = (username: string) => {
    const profiles: Record<string, unknown> = {
        sanjay: {
            name: "Sanjay Pinna",
            summary: "For the past 12 years, I have assisted creators in gaining over 35 million subscribers and hundreds of millions of views. Since 2024, I have also taken on roles that focus on creative direction and ideation. I am seeking a long-term, full-time job where I can grow and thrive.",
            profileImage: "/profile.png",
            employers: [
                {
                    name: "MrBeast",
                    videos: [
                        "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4"
                    ],
                    title: "Video Editor",
                    duration: "Jan 2022 – Dec 2022",
                    type: "Contract",
                    contribution: "Edited high-retention YouTube videos"
                },
                {
                    name: "Yes Theory",
                    videos: [
                        "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4"
                    ],
                    title: "Creative Director",
                    duration: "Mar 2021 – Jan 2022",
                    type: "Full-time",
                    contribution: "Directed travel videos and shorts"
                }
            ]
        }
    };

    return profiles[username] || null;
};
