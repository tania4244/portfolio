import React from "react";

const Blogs = () => {
  return (
    <section id="blogs" className="bg-[#18181B]">
      <div className="max-w-screen-2xl px-6 pt-4 pb-10 mx-auto">
        <h1 className="text-2xl md:text-3xl font-extrabold text-center uppercase lg:text-4xl py-4 md:py-8 text-black tracking-wider mb-10">
          Blogs & Articles
        </h1>

        <div className="lg:flex lg:-mx-6">
          <div className="lg:w-3/4 lg:px-6">
            <img
              className="object-cover object-center w-full h-80 xl:h-[28rem] rounded-xl"
              src="https://i.postimg.cc/1Xr499q1/DALL-E-2024-10-13-20-14-52-A-futuristic-cover-image-featuring-a-sleek-3-D-React-js-logo-in-the-cen.webp"
              alt=""
            />

            <div>
              <p className="mt-6 text-sm text-blue-500 capitalize font-poppins">
                Date Posted: 16/06/2024
              </p>
              <div className="duration-300 hover:scale-[1.05] transition-all">
                <a
                  href="https://www.linkedin.com/posts/fuade-hasan-alamin_react-frontenddevelopment-webdevelopment-activity-7197636254841122816-POQZ?utm_source=share&utm_medium=member_desktop"
                  target="_blank"
                  className="hover:underline"
                >
                  <h1 className="max-w-lg mt-4 text-2xl font-semibold leading-tight text-gray-800 dark:text-white">
                    Why should we use React for the front-end?
                  </h1>
                </a>
              </div>

              <div className="flex items-center mt-6">
                <img
                  className="object-cover object-center w-10 h-10 rounded-full"
                  src="https://i.postimg.cc/XqwTbdbg/1707588679322.jpg"
                  alt="Tania"
                />

                <div className="mx-4">
                  <h1 className="text-sm text-zinc-200 dark:text-gray-200 font-poppins">
                    Tania Kabir
                  </h1>
                  <p className="text-xs text-zinc-300 dark:text-gray-400 font-poppins">
                    Frontend Developer
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 lg:w-1/4 lg:mt-0 lg:px-6">
            <div>
              <h3 className="text-zinc-200 font-poppins capitalize text-2xl">
                Key Features
              </h3>
            </div>
            <hr className="my-6 border-gray-200 dark:border-gray-700" />
            <div>
              <h3 className="text-zinc-300 font-poppins capitalize">
                Component-Based Architecture
              </h3>
            </div>

            <hr className="my-6 border-gray-200 dark:border-gray-700" />

            <div>
              <h3 className="text-zinc-300 font-poppins capitalize">
                Virtual DOM
              </h3>
            </div>

            <hr className="my-6 border-gray-200 dark:border-gray-700" />

            <div>
              <h3 className="text-zinc-300 font-poppins capitalize">
                {" "}
                Declarative UI
              </h3>
            </div>

            <hr className="my-6 border-gray-200 dark:border-gray-700" />

            <div>
              <h3 className="text-zinc-300 font-poppins capitalize">
                Rich Ecosystem and Community Support
              </h3>
            </div>

            <hr className="my-6 border-gray-200 dark:border-gray-700" />
            <div>
              <h3 className="text-zinc-300 font-poppins capitalize">
                Unidirectional Data Flow
              </h3>
            </div>
            <hr className="my-6 border-gray-200 dark:border-gray-700" />
            <div>
              <h3 className="text-zinc-300 font-poppins capitalize">
                Performance Optimization
              </h3>
            </div>
            <hr className="my-6 border-gray-200 dark:border-gray-700" />
            <div>
              <h3 className="text-zinc-300 font-poppins capitalize">
                Extensive Tooling and Developer Experience
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;









