import { motion, AnimatePresence } from "motion/react"
import { Link } from "react-router-dom";
import { useState } from "react"
import { useTranslation } from 'react-i18next';

const MotionLink = motion.create(Link);


function Header() {

    const [open, setOpen] = useState(false);

    const { t, i18n } = useTranslation('header');

    const currentLang = i18n.language.toUpperCase();

    // Toggle between Spanish and English
    const toggleLanguage = () => {
        const newLang = i18n.language === "es" ? "en" : "es";
        i18n.changeLanguage(newLang);
    };

    return (
        <>
            {/* Main container */}
            <div class='fixed top-0 left-0 w-full z-50 '>
                <div class="max-w-7x1 mx-auto px-4 py-3 flex items-center justify-between text-white bg-[#0E1B18]/60 ">
                    {/* Left items */}
                    <div class='flex items-center gap-10' >
                        <p class="text-xl font-bold">W1N0T</p>

                        {/* Language changer */}
                        {/* Button to change the language Spanish to English */}
                        <motion.button
                            class="hidden md:flex hover:text-bright hover:bg-[#105174] p-2 rounded-sm"
                            whileHover={{
                                scale: 1.05,
                                transition: { duration: 0.1 }
                            }}
                            whileTap={{
                                scale: 0.9,
                                transition: { duration: 0.1 }
                            }}
                            transition={{ duration: 0.2 }}
                            onClick={toggleLanguage}
                        >
                            🌍 {currentLang}
                        </motion.button>
                    </div>



                    {/* Navigation buttons for desktop view, disable when the movile device will be activated*/}
                    <nav class="hidden md:flex space-x-10">
                        <motion.a
                            href="#Home"
                            className="hover:text-bright hover:bg-[#016FB9] p-2 rounded-sm select-none cursor-pointer"
                            whileHover={{
                                scale: 1.1,
                                transition: { duration: 0.1 }
                            }}
                            transition={{ duration: 0.2 }}
                        >
                            {t('home')}
                        </motion.a>
                        <motion.a
                            href="#Aboutme"
                            className="hover:text-bright hover:bg-[#016FB9] p-2 rounded-sm select-none cursor-pointer"
                            whileHover={{
                                scale: 1.1,
                                transition: { duration: 0.1 }
                            }}
                            transition={{ duration: 0.2 }}
                        >
                            {t('aboutme')}
                        </motion.a>
                        <motion.a
                            href="#Projects"
                            className="hover:text-bright hover:bg-[#016FB9] p-2 rounded-sm select-none cursor-pointer"
                            whileHover={{
                                scale: 1.1,
                                transition: { duration: 0.1 }
                            }}
                            whileClick={{
                                scale: 0.95,
                                transition: { duration: 0.1 }
                            }}
                            transition={{ duration: 0.2 }}
                        >
                            {t('projects')}
                        </motion.a>
                        <motion.a
                            href="#Contact"
                            className="hover:text-bright hover:bg-[#016FB9] p-2 rounded-sm select-none cursor-pointer"
                            whileHover={{
                                scale: 1.1,
                                transition: { duration: 0.1 }
                            }}
                            transition={{ duration: 0.2 }}
                        >
                            {t('contact')}
                        </motion.a>

                    </nav>

                    {/* Navigation button for reactive enviroment */}
                    <motion.button
                        whileHover={{
                            scale: 1.2,
                            transition: { duration: 0.1 }
                        }}
                        whileTap={{
                            scale: 0.9,
                            transition: { duration: 0.1 }
                        }}
                        className="md:hidden text-2xl"
                        onClick={() => setOpen(!open)}>
                        ☰
                    </motion.button>

                    {/* Menu for mobile devices */}
                    <AnimatePresence>
                        {open && (
                            <motion.div
                                className="fixed inset-0 md:hidden bg-[#016FB9]"
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <nav className="flex flex-col p-6 space-y-4 text-lg">
                                    {/* Main container to buttons on the top */}
                                    <div className="flex items-center w-full gap-3">

                                        {/* Language changer */}
                                        {/* Button to change the language to Spanish */}
                                        <div className="flex items-center justify-between gap-3">
                                            <motion.button
                                                className=" bg-[#182825] flex-3 hover:text-bright p-2 rounded-sm"
                                                initial={{ y: -15 }}
                                                animate={{ y: 1 }}
                                                whileHover={{
                                                    scale: 1.04,
                                                    transition: { duration: 0.1 }
                                                }}
                                                whileTap={{
                                                    scale: 0.9,
                                                    transition: { duration: 0.1 }
                                                }}
                                                transition={{ duration: 0.2 }}
                                                onClick={toggleLanguage}
                                            >
                                                <motion.p>
                                                    🌍 {currentLang}
                                                </motion.p>
                                            </motion.button>
                                        </div>
                                        {/* Button to close de mobile menu */}
                                        <motion.button
                                            className="bg-[#182825] flex-7 p-2 rounded-sm hover:text-bright"
                                            initial={{ y: -15 }}
                                            animate={{ y: 1 }}
                                            whileHover={{
                                                scale: 1.04,
                                                transition: { duration: 0.1 }
                                            }}
                                            whileTap={{
                                                scale: 0.9,
                                                transition: { duration: 0.1 }
                                            }}
                                            transition={{ duration: 0.2 }}
                                            onClick={() => setOpen(false)}
                                        >
                                            <p>X</p>
                                        </motion.button>


                                    </div>



                                    <hr class='size-1 w-full' ></hr>

                                    {/* Navigation buttons */}
                                    <motion.a
                                        className="hover:text-bright hover:bg-[#016FB9] p-2"
                                        whileHover={{
                                            x: 15,
                                            transition: { duration: 0.1 }
                                        }}
                                        transition={{ duration: 0.2 }}
                                        onClick={() => {
                                            setOpen(false);

                                            setTimeout(() => {
                                                const section = document.getElementById("Home");
                                                section?.scrollIntoView({ behavior: "smooth" });
                                            }, 100);
                                        }}
                                    >
                                        {t('home')}
                                    </motion.a>
                                    <motion.a
                                        className="hover:text-bright hover:bg-[#016FB9] p-2"
                                        whileHover={{
                                            x: 15,
                                            transition: { duration: 0.1 }
                                        }}
                                        transition={{ duration: 0.2 }}
                                        onClick={() => {
                                            setOpen(false);

                                            setTimeout(() => {
                                                const section = document.getElementById("Aboutme");
                                                section?.scrollIntoView({ behavior: "smooth" });
                                            }, 100);
                                        }}
                                    >
                                        {t('aboutme')}
                                    </motion.a>
                                    <motion.a
                                        className="hover:text-bright hover:bg-[#016FB9] p-2"
                                        whileHover={{
                                            x: 15,
                                            transition: { duration: 0.1 }
                                        }}
                                        transition={{ duration: 0.2 }}
                                        onClick={() => {
                                            setOpen(false);

                                            setTimeout(() => {
                                                const section = document.getElementById("Projects");
                                                section?.scrollIntoView({ behavior: "smooth" });
                                            }, 100);
                                        }}
                                    >
                                        {t('projects')}
                                    </motion.a>
                                    <motion.a
                                        className="hover:text-bright hover:bg-[#016FB9] p-2"
                                        whileHover={{
                                            x: 15,
                                            transition: { duration: 0.1 }
                                        }}
                                        transition={{ duration: 0.2 }}
                                        onClick={() => {
                                            setOpen(false);

                                            setTimeout(() => {
                                                const section = document.getElementById("Contact");
                                                section?.scrollIntoView({ behavior: "smooth" });
                                            }, 100);
                                        }}
                                    >
                                        {t('contact')}
                                    </motion.a>
                                </nav>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>

        </>
    )
}

export default Header