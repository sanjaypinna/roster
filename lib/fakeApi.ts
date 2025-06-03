// lib/fakeApi.ts or mockDB.ts
export const getMockProfile = (username: string) => {
    const profiles: Record<string, unknown> = {
        sanjay: {
            name: "Sanjay Pinna",
            summary: "Creative professional with hands-on experience in content writing, video editing, and thumbnail design. Skilled at crafting engaging stories, producing visually compelling videos, and designing click-worthy thumbnails that drive results. Adept at aligning content with brand voice and audience needs across platforms.",
            profileImage: "/profile.png",
            tags: ["video editing", "YouTube", "Premiere Pro", "shorts", "storytelling"],
            employers: [
                {
                    name: "Nas Daily",
                    projects: [
                        {
                            video: "https://youtube.com/embed/xmrsYfRawew?si=m9PgYkQnrllTr46u",
                            title: "Thumbnail Designer",
                            duration: "Mar 2024 – Mar 2024",
                            type: "Contract",
                            contribution: "Designed engaging thumbnails for Nas Daily's team."
                        },
                        {
                            video: "https://youtube.com/embed/AOmtvewq7l8?si=vHs391vpZeUnwQ7h",
                            title: "Video Editor",
                            duration: "Mar 2024 – Mar 2024",
                            type: "Contract",
                            contribution: "Edited engaging video content for Nas Daily's team."
                        },
                        {
                            video: "https://youtube.com/embed/16UVu9jJDh8?si=Yoe6-J5q9WOPjBG6",
                            title: "Video Editor",
                            duration: "Mar 2024 – Mar 2024",
                            type: "Contract",
                            contribution: "Edited engaging video content for Nas Daily's team."
                        },

                    ],

                },
                {
                    name: "MrBeast",
                    projects: [
                        {
                            video: "https://youtube.com/embed/IQxea9UB1nQ?si=Bd407GHxPBS9ujjm",
                            title: "Script Writer",
                            duration: "Mar 2024 – Mar 2024",
                            type: "Full-time",
                            contribution: "Wrote engaging scripts for MrBeast's team."
                        },
                        {
                            video: "https://youtube.com/embed/T8I165Qxeo8?si=yhuBdzy8y03ztJnv",
                            title: "Transcriber",
                            duration: "Mar 2024 – Mar 2024",
                            type: "Full-time",
                            contribution: "Transcribed engaging video content for MrBeast's team."
                        },
                        {
                            video: "https://youtube.com/embed/3dxksf0CzS8?si=JR4JJUpC6TXR4SDw",
                            title: "Video Editor",
                            duration: "Mar 2024 – Mar 2024",
                            type: "Full-time",
                            contribution: "Edited engaging video content for MrBeast's team."
                        },
                        {
                            video: "https://youtube.com/embed/Tbn4cYCaZCk?si=2qlvgXfl3LGIsE_7",
                            title: "Video Editor",
                            duration: "Mar 2024 – Mar 2024",
                            type: "Full-time",
                            contribution: "Edited engaging video content for MrBeast's team."
                        },
                    ],
                },
                {
                    name: "Marques Brownlee",
                    projects: [
                        {
                            video: "https://youtube.com/embed/FNnK1J-BdiM?si=nDsnDNEiKD49mBkf",
                            title: "Thumbnail Designer",
                            duration: "Mar 2024 – Mar 2024",
                            type: "Full-time",
                            contribution: "Designed engaging thumbnails for Marques Brownlee's team."
                        },
                        {
                            video: "https://youtube.com/embed/cShtHM7cFR0?si=CkgaEPmfYtiAvWPc",
                            title: "Content Writer",
                            duration: "Mar 2024 – Mar 2024",
                            type: "Full-time",
                            contribution: "Wrote engaging content for Marques Brownlee's team."
                        },
                        {
                            video: "https://youtube.com/embed/eXA9M9Nyo1E?si=GObgcdg25ApiDrIX",
                            title: "Researcher",
                            duration: "Mar 2024 – Mar 2024",
                            type: "Full-time",
                            contribution: "Conducted engaging research for Marques Brownlee's team."
                        },
                    ],
                }
            ]
        }
    };

    return profiles[username] || null;
};


// lib/fakeApi.ts

export const getMockJobs = () => {
    return [
        {
            id: "job1",
            title: "YouTube Video Editor",
            company: "Creator Studio",
            tags: ["video editing", "YouTube", "Premiere Pro", "shorts"],

            description:
                "We're looking for a talented video editor to help us create high-performing YouTube Shorts and long-form content. Must be creative and fast.",
        },
        {
            id: "job2",
            title: "Content Writer - Pop Culture",
            company: "BuzzFactory",
            tags: ["content writing", "storytelling", "scripts", "creative writing"],
            description:
                "Join our team to write engaging scripts for top-tier content creators. Must understand current trends and YouTube formats.",
        },
        {
            id: "job3",
            title: "Thumbnail Designer",
            company: "ThumbX",
            tags: ["thumbnails", "Photoshop", "design", "click-through-rate"],
            description:
                "Design eye-catching thumbnails for viral YouTube videos. Understanding of CTR and visual storytelling is a must.",
        },
        {
            id: "job4",
            title: "Video Editing Intern",
            company: "Viral Media Hub",
            tags: ["video editing", "internship", "learning", "basic"],
            description:
                "A great opportunity for junior editors to work with mentors and learn the art of fast-paced content production.",
        },
        {
            id: "job5",
            title: "Creative Director - Social Media",
            company: "ContentLab",
            tags: ["storytelling", "strategy", "creative direction", "YouTube"],
            description:
                "Lead the vision for high-growth content on social platforms. Strong sense of audience psychology and trends required.",
        },
    ];
};

