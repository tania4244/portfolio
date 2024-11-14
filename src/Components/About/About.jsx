import React from "react";

const About = () => {
  return (
    <section id="about" className="bg-[#18181B]">
      <div className="max-w-screen-2xl w-full pt-4 pb-12 mx-auto">
        <h1 className="text-2xl md:text-3xl font-extrabold text-center uppercase lg:text-4xl py-4 md:py-8 text-zinc-200">
          About Me
        </h1>

        <div className="flex items-center justify-between mt-12">
          <div className="w-full lg:w-3/4 mx-auto flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-16 px-6">
            {/* Card */}
            <div class="flex items-center justify-center hover:shadow-[0_0_30px_rgba(0,183,255,0.5)] duration-300 hover:scale-[1.05] transition-all">
              <div class="w-64 rounded-lg border-2 border-[#2B69BE] bg-transparent p-4 text-center shadow-lg dark:bg-[#1F2937]">
                <div className="flex items-center justify-center">
                  <img
                    className="object-cover w-52 h-52 rounded-full"
                    src="https://i.postimg.cc/XqwTbdbg/1707588679322.jpg"
                    alt="Alamin"
                  />
                </div>

                <h2 class="mt-4 text-xl font-bold text-zinc-200 font-poppins">
                  Tania Kabir
                </h2>
                <p class="pt-1 pb-4 text-zinc-300 font-poppins">
                  Frontend Developer
                </p>
              </div>
            </div>

            {/* Progress Bar */}

            <div className="w-full md:w-3/4 mx-auto duration-300 hover:scale-[1.05] transition-all p-4">
              <div className="space-y-6">
                <p className="text-2xl text-zinc-200 font-poppins tracking-wide capitalize text-center md:text-left">
                  What I do
                </p>
                <div>
                  <div className="flex items-center  justify-between">
                    <p className="text-zinc-200 font-poppins tracking-wider">
                      Web Development
                    </p>
                    <p className="text-zinc-200 font-poppins tracking-wider">
                      90%
                    </p>
                  </div>

                  <progress
                    className="progress progress-info w-full"
                    value="90"
                    max="100"
                  ></progress>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <p className="text-zinc-200 font-poppins tracking-wider">
                      Graphic Design
                    </p>
                    <p className="text-zinc-200 font-poppins tracking-wider">
                      60%
                    </p>
                  </div>
                  <progress
                    className="progress progress-success w-full"
                    value="60"
                    max="100"
                  ></progress>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <p className="text-zinc-200 font-poppins tracking-wider">
                      {" "}
                      UI/UX Design
                    </p>{" "}
                    <p className="text-zinc-200 font-poppins tracking-wider">
                      70%
                    </p>
                  </div>
                  <progress
                    className="progress progress-primary w-full "
                    value="70"
                    max="100"
                  ></progress>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Info Description */}
        <div className="px-6">
          <div className="space-y-4 mt-12 py-14 w-full bg-[#1F2937] px-4 rounded-2xl duration-300 hover:scale-[1.05] transition-all">
            <h2 className="text-2xl text-zinc-200  font-poppins tracking-wide capitalize text-center pb-2">
              Why Choose Me
            </h2>
            <p className="text-lg text-zinc-300 tracking-wide">
              Hi! I'm a Frontend Developer with a passionate love for creating
              amazing user experiences. I believe in being punctual and
              dedicated with a strong commitment to continuous improvement
              mindset.
            </p>
            <p className="text-lg text-zinc-300 tracking-wide">
              My enthusiasm for frontend development shines through in every
              project I take on. I truly believe in the value of collaboration
              and I'm eager to work with others to create innovative solutions
              that meet user needs.
            </p>
            <p className="text-lg text-zinc-300 tracking-wide">
              As a frontend developer, I believe in the power of creativity and
              technology to create seamless user experiences that leave a
              lasting impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
