import { motion } from "motion/react";

function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="w-full h-auto p-10 flex bg-[#182825] text-center text-sm text-gray-400  items-center justify-center">

            <div className="flex flex-col p-2 gap-3 items-center justify-center">
                <div className="flex flex-row gap-5">
                    <motion.a href="https://www.linkedin.com/in/raul-rodriguez-22010430b/" target="blank"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9, transition: { duration: 0.1 } }}
                        transition={{ duration: 0.1 }}>
                        <img className="w-6 h-6" src={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg"} />
                    </motion.a>
                    <motion.a href="https://github.com/W1not" target="blank"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9, transition: { duration: 0.1 } }}
                        transition={{ duration: 0.1 }}>
                        <img className="w-6 h-6 invert" src={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"} />
                    </motion.a>
                </div>


                <p>© {currentYear} W1n0t. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer