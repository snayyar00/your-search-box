"use client";
import React from "react";
import Image from "next/image";

const teamData = [
  {
    name: "John Doe",
    title: "CEO & Founder",
    bio: "John is the visionary behind our company. He has a passion for innovation and is always looking for ways to improve the user experience.",
    photo: "https://avatars.githubusercontent.com/u/10244208?v=4",
  },
  {
    name: "Jane Smith",
    title: "CTO",
    bio: "Jane is our technical genius. She leads the development team and ensures our products are always cutting-edge.",
    photo: "https://randomuser.me/api/portraits/women/75.jpg",
  },
  {
    name: "Michael Johnson",
    title: "Marketing Manager",
    bio: "Michael is the mastermind behind our marketing strategy. He's always finding new ways to reach our target audience.",
    photo: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    name: "Emily Davis",
    title: "UX Designer",
    bio: "Emily is our design expert. She crafts user experiences that are both beautiful and intuitive.",
    photo: "https://randomuser.me/api/portraits/women/76.jpg",
  },
];

const TeamPage = () => {
  return (
    <section className="py-12 md:py-24 text-white relative overflow-clip">
      <div className="container">
        <div className="sm:w-[33.75rem] lg:w-full mx-auto flex flex-col items-center">
          <div className="flex justify-center pb-5">
            <div className="tag">Meet the Team</div>
          </div>
          <h2 className="section-header bg-gradient-to-b from-white to-[#586285] text-transparent bg-clip-text [-webkit-background-clip:text] lg:w-[55rem] mt-10 lg:leading-tight">
            Our Team of Experts
          </h2>
          <p className="text-white/80 text-xl leading-relaxed pt-5 text-center max-w-[34.375rem]">
            Our team is comprised of experienced professionals who are
            passionate about delivering exceptional results.
          </p>
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamData.map((member, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-lg p-6 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg overflow-hidden"
              >
                <Image
                  src={member.photo}
                  alt={member.name}
                  height={200}
                  width={200}
                  className=" h-48 w-full object-cover rounded-t-lg"
                />
                <div className="px-6 py-4">
                  <h3 className="text-2xl font-semibold mb-2 text-white">
                    {member.name}
                  </h3>
                  <p className="text-white/80">{member.title}</p>
                  <p className="text-white/80">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamPage;
