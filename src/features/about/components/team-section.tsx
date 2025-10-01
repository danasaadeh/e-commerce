import React from "react";

const team = [
  {
    name: "Tom Cruise",
    role: "Founder & Chairman",
    img: "src/assets/images/men.png",
  },
  {
    name: "Emma Watson",
    role: "Managing Director",
    img: "src/assets/images/woman.png",
  },
  {
    name: "Will Smith",
    role: "Product Designer",
    img: "src/assets/images/man2.png",
  },
];

const TeamSection: React.FC = () => {
  return (
    <section className="px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {team.map((member, idx) => (
          <div
            key={idx}
            className="p-6 shadow-md rounded-lg flex flex-col items-center"
          >
            <img
              src={member.img}
              alt={member.name}
              className="w-40 h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-semibold">{member.name}</h3>
            <p className="text-gray-500">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
