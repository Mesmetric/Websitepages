"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export default function ResumeSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <div className="p-6">
      <motion.div variants={container} initial="hidden" animate="show">
        <motion.div variants={item} className="flex justify-between items-center">
          <h2 className="text-2xl font-bold mb-4 relative inline-block">
            Resume
            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-amber-400"></span>
          </h2>

          <Button variant="outline" className="bg-amber-500 hover:bg-amber-600 text-black border-none">
            <Download className="mr-2 h-4 w-4" /> Download CV
          </Button>
        </motion.div>

        {/* Education Section */}
        <motion.div variants={item} className="mt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="text-amber-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c3 3 9 3 12 0v-5" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold">Education</h3>
          </div>

          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px before:h-full before:w-0.5 before:bg-zinc-700">
            <div className="relative flex items-start">
              <div className="absolute left-0 top-1 mt-1.5">
                <div className="flex items-center justify-center w-10 h-10">
                  <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                </div>
              </div>

              <div className="ml-12 bg-zinc-800/50 p-5 rounded-lg hover:bg-zinc-800 transition-colors duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                  <div className="font-semibold text-amber-400">
                    Niharika College Of Management And Information Technology
                  </div>
                  <div className="text-sm text-zinc-400">2017 — 2021</div>
                </div>
                <div className="text-sm mb-2">
                  Bachelor of Science in Computer Science and Information Technology (B.Sc. CSIT)
                </div>
              </div>
            </div>

            <div className="relative flex items-start">
              <div className="absolute left-0 top-1 mt-1.5">
                <div className="flex items-center justify-center w-10 h-10">
                  <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                </div>
              </div>

              <div className="ml-12 bg-zinc-800/50 p-5 rounded-lg hover:bg-zinc-800 transition-colors duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                  <div className="font-semibold text-amber-400">Greenland International College</div>
                  <div className="text-sm text-zinc-400">2015 — 2017</div>
                </div>
                <div className="text-sm mb-2">+2 Science</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Experience Section */}
        <motion.div variants={item} className="mt-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="text-amber-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold">Experience</h3>
          </div>

          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px before:h-full before:w-0.5 before:bg-zinc-700">
            <div className="relative flex items-start">
              <div className="absolute left-0 top-1 mt-1.5">
                <div className="flex items-center justify-center w-10 h-10">
                  <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                </div>
              </div>

              <div className="ml-12 bg-zinc-800/50 p-5 rounded-lg hover:bg-zinc-800 transition-colors duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                  <div className="font-semibold text-amber-400">Mid-Level Flutter Developer</div>
                  <div className="text-sm text-zinc-400">Aug, 2023 — Present • 8 mos</div>
                </div>
                <div className="text-sm mb-2">Takmo Technologies</div>
                <div className="text-sm text-zinc-400">
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Developed new features and implemented UI designs into code using Flutter.</li>
                    <li>Designed and created custom e-form features including scanning features and data entries.</li>
                    <li>Organized and managed state using Provider and GetX.</li>
                    <li>Designed dynamic functionalities using the BLOC design pattern.</li>
                    <li>Integrated APIs for seamless data communication and backend functionality.</li>
                    <li>Implemented payment gateway integration like Khalti for secure transactions.</li>
                    <li>Collaborated with other developers and backend team to deliver features.</li>
                    <li>Participated in team meetings to discuss new features and project updates.</li>
                    <li>Ensured smooth functionality and user-friendly experiences throughout the app.</li>
                    <li>Performed code review and deployed the app in Playstore and Appstore.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="relative flex items-start">
              <div className="absolute left-0 top-1 mt-1.5">
                <div className="flex items-center justify-center w-10 h-10">
                  <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                </div>
              </div>

              <div className="ml-12 bg-zinc-800/50 p-5 rounded-lg hover:bg-zinc-800 transition-colors duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                  <div className="font-semibold text-amber-400">Flutter Developer</div>
                  <div className="text-sm text-zinc-400">Oct, 2022 — Aug, 2023 • 11 mos</div>
                </div>
                <div className="text-sm mb-2">Infocore Technology</div>
                <div className="text-sm text-zinc-400">
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Developed new features and transformed UI designs into fully functional user interfaces.</li>
                    <li>Implemented payment solution like esewa for secure and seamless transactions.</li>
                    <li>Optimized application performance to ensure a smooth and engaging user experience.</li>
                    <li>
                      Supported fellow team members initiatives by developing solutions to common problems and sharing
                      those solutions.
                    </li>
                    <li>Identified and resolved bugs, improving app stability and performance.</li>
                    <li>Wrote clean, maintainable, and testable code following best practices.</li>
                    <li>Integrated CI/CD pipelines and automated testing to ensure backend compatibility.</li>
                    <li>
                      Collaborated with backend developers, designers, and cross-functional teams to deliver scalable,
                      high-quality solutions.
                    </li>
                    <li>Performed code review and deployed the app in Playstore and Appstore.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="relative flex items-start">
              <div className="absolute left-0 top-1 mt-1.5">
                <div className="flex items-center justify-center w-10 h-10">
                  <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                </div>
              </div>

              <div className="ml-12 bg-zinc-800/50 p-5 rounded-lg hover:bg-zinc-800 transition-colors duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                  <div className="font-semibold text-amber-400">Flutter Developer Intern</div>
                  <div className="text-sm text-zinc-400">May, 2022 — Sep, 2022 • 5 mos</div>
                </div>
                <div className="text-sm mb-2">YAJ Tech Pvt. Ltd.</div>
                <div className="text-sm text-zinc-400">
                  <ul className="list-disc pl-4 space-y-1">
                    <li>
                      Assisted in developing and maintaining Flutter applications, ensuring seamless functionality and
                      user-friendly interfaces.
                    </li>
                    <li>
                      Supported the implementation of visually appealing UI designs that aligned with client
                      requirements and design principles.
                    </li>
                    <li>
                      Collaborated with cross-functional teams, including back-end developers and designers, to deliver
                      scalable solutions.
                    </li>
                    <li>
                      Gained hands-on experience in debugging, troubleshooting, and refining app features to improve
                      user experience.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

