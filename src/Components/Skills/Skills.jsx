import React from "react";

const Skills = () => {
  // Custom array of objects with skills in the specified order
  const skills = [
    {
      id: 1,
      name: "React.js",
      image:
        "https://gerold.themejunction.net/wp-content/uploads/2024/05/react.png",
    },
    {
      id: 2,
      name: "Express.js",
      image: "https://i.postimg.cc/TwNLjkt5/icons8-express-js-50.png",
    },
    {
      id: 3,
      name: "Node.js",
      image: "https://i.postimg.cc/7hT63qCj/icons8-nodejs-48.png",
    },
    {
      id: 4,
      name: "JavaScript",
      image: "https://i.postimg.cc/mgqFFp6c/icons8-javascript-48.png",
    },
    {
      id: 5,
      name: "MongoDB",
      image: "https://i.postimg.cc/Fzjft993/icons8-mongo-db-48.png",
    },
    {
      id: 6,
      name: "Firebase",
      image: "https://i.postimg.cc/Yqz4bqDw/icons8-firebase-48.png",
    },
    {
      id: 7,
      name: "Tailwind",
      image: "https://i.postimg.cc/kMVF18WP/icons8-tailwind-css-48.png",
    },
    {
      id: 8,
      name: "Bootstrap",
      image: "https://i.postimg.cc/28kjjdGP/icons8-bootstrap-64.png",
    },
    {
      id: 9,
      name: "Figma",
      image:
        "https://gerold.themejunction.net/wp-content/uploads/2024/05/figma.png",
    },
    {
      id: 10,
      name: "Illustrator",
      image: "https://i.postimg.cc/tgYYqdqX/icons8-illustrator-48.png",
    },
    {
      id: 11,
      name: "CSS3",
      image: "https://i.postimg.cc/5t1CfQHy/icons8-css-48.png",
    },
    {
      id: 12,
      name: "HTML5",
      image: "https://i.postimg.cc/PrpZyjsX/icons8-html5-48.png",
    },
  ];

  return (
    <section id="skills" className="bg-[#18181B]">
      <div className="max-w-screen-2xl px-6 w-full pt-4 pb-12 mx-auto">
        <h1 className="text-2xl md:text-3xl font-extrabold text-center uppercase lg:text-4xl py-4 md:py-8 text-zinc-200">
          My Skills
        </h1>

        <p className="my-2 text-[1rem] text-zinc-300 font-poppins tracking-wider text-center w-full md:w-3/4 mx-auto">
          I take your ideas and turn them into unique web projects that not only
          inspire you but also engage your audience.
        </p>

        {/* Dynamically rendering skills */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:grid-cols-6 items-center justify-center py-10">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="flex flex-col items-center justify-center gap-4 bg-[#1F2937] rounded-2xl overflow-hidden relative  hover:shadow-[0_0_30px_rgba(0,183,255,0.5)] duration-300 hover:scale-[1.05] transition-all p-4"
            >
              <img src={skill.image} alt={skill.name} className="w-16" />
              <p className="text-2xl text-center tracking-wider text-zinc-200">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
