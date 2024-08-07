import React from "react";
import Logo from "../Images/carpoolingbg.jpeg";
import { motion, useAnimation } from "framer-motion";
export const Footer = () => {
  const controls = useAnimation();
  return (
    <div className="flex flex-col items-center justify-center mt-[600px] md:mt-[50px]">
      <motion.div className="w-full h-full flex items-center justify-center ">
        <motion.img
          animate={controls}
          onMouseEnter={() => controls.stop()}
          onMouseLeave={() =>
            controls.start({
              y: [0, -8, 0], // Y-axis movement
              scale: [1.0001, 1.0001, 1.0001], // Scale effect
              transition: {
                duration: 2, // Duration of the animation
                repeat: Infinity, // Repeat the animation infinitely
                ease: "easeInOut", // Easing function
              },
            })
          }
          src={Logo}
          className="w-4/5 h-[400px] m-0 rounded-md"
          alt=""
        />
      </motion.div>
      <div></div>
      <footer class=" text-yellow-400 w-full">
        <div class="max-w-6xl mx-auto px-4 py-10 md:py-12">
          <div class="xl:grid grid-cols-3 gap-8">
            <div class="space-y-4">
              <h2 class="text-xl font-bold">About Us</h2>
              <p class="text-yellow-400 text-opacity-80">
                We're committed to offering top quality services through our
                website, ensuring customer satisfaction and engagement.
              </p>
              <div class="flex space-x-4">
                <a
                  href="https://www.instagram.com/"
                  class="text-yellow-400 hover:text-yellow-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    class="h-6 w-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
                    />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/"
                  class="text-yellow-400 hover:text-yellow-300"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <rect
                      width="20"
                      height="20"
                      x="2"
                      y="2"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm-1.48-2.72a1.75 1.75 0 10-3.04 0 1.75 1.75 0 003.04 0z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>

                <a
                  href="https://www.linkedin.com/in"
                  class="ml-3 text-yellow-400 hover:text-yellow-300"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </div>
            </div>
            <div class="space-y-4 mt-8 xl:mt-0">
              <h2 class="text-xl font-bold">Quick Links</h2>
              <ul class="text-yellow-400 text-opacity-80 space-y-2">
                <li>
                  <a href="#" class="hover:text-yellow-300">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-yellow-300">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-yellow-300">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-yellow-300">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div class="space-y-4 mt-8 xl:mt-0">
              <h2 class="text-xl font-bold">Contact Us</h2>
              <div class="text-yellow-400 text-opacity-80">
                <p>Tower valcons,Gurgaon</p>
                <p>bypass@gmail.com</p>
                <p>+91 90123-xxxxx</p>
              </div>
            </div>
          </div>
          <div class="pt-8 mt-8 border-t border-yellow-700 text-center">
            <p>© 2024 ByPass. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
