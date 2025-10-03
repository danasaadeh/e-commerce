import type React from "react";
import { Twitter, Instagram, LinkedIn } from "@mui/icons-material";

const team = [
  {
    name: "Tom Cruise",
    role: "Founder & Chairman",
    img: "src/assets/images/about/team/woman.png",
  },
  {
    name: "Emma Watson",
    role: "Managing Director",
    img: "src/assets/images/about/team/man.png",
  },
  {
    name: "Will Smith",
    role: "Product Designer",
    img: "src/assets/images/about/team/man2.png",
  },
];

const TeamSection: React.FC = () => {
  return (
    <section className="px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {team.map((member, idx) => (
          <div key={idx} className="flex flex-col items-center text-center">
            <div className="w-full bg-gray-100 rounded-lg mb-6 overflow-hidden">
              <img
                src={member.img || "/placeholder.svg"}
                alt={member.name}
                className="w-full h-80 object-cover"
              />
            </div>

            <h3 className="text-2xl font-semibold mb-1">{member.name}</h3>
            <p className="text-gray-600 mb-4">{member.role}</p>

            <div className="flex gap-3">
              <a
                href="#"
                className="text-black hover:text-red-500 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="text-xl" />
              </a>
              <a
                href="#"
                className="text-black hover:text-red-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="text-xl" />
              </a>
              <a
                href="#"
                className="text-black hover:text-red-500 transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedIn className="text-xl" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
