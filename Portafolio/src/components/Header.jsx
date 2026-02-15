import { motion, AnimatePresence } from "motion/react"
import { Link } from "react-router-dom";
import { useState } from "react"
import { useTranslation } from 'react-i18next';

const MotionLink = motion.create(Link);


function Header() {

    const [open, setOpen] = useState(false);

    const { t, i18n } = useTranslation('header');

    const currentLang = i18n.language.toUpperCase();
    const toggleLanguage = () => {
        const newLang = i18n.language === "es" ? "en" : "es";
        i18n.changeLanguage(newLang);
    };

    
    

    return (
        <>
            {/* Main container */}
            <div class='fixed top-0 left-0 w-full z-50'>
                <div class="max-w-7x1 mx-auto px-4 py-3 flex items-center justify-between text-white">
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
                            transition={{ duration: 0.2 }}
                            onClick={toggleLanguage}          
                        >
                            🌍 {currentLang}
                        </motion.button>
                    </div>



                    {/* Navigation buttons for desktop view, disable when the movile device will be activated*/}
                    <nav class="hidden md:flex space-x-10">
                        <MotionLink
                            to="/"
                            className="hover:text-bright hover:bg-[#016FB9] p-2 rounded-sm select-none cursor-pointer"
                            whileHover={{
                                scale: 1.1,
                                transition: { duration: 0.1 }
                            }}
                            transition={{ duration: 0.2 }}
                        >
                            {t('home')}
                        </MotionLink>
                        <MotionLink
                            to="/projects"
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
                        </MotionLink>
                        <MotionLink
                            to="/"
                            className="hover:text-bright hover:bg-[#016FB9] p-2 rounded-sm select-none cursor-pointer"
                            whileHover={{
                                scale: 1.1,
                                transition: { duration: 0.1 }
                            }}
                            transition={{ duration: 0.2 }}
                        >
                            {t('contact')}
                        </MotionLink>

                    </nav>

                    {/* Navigation button for reactive enviroment */}
                    <motion.button
                        whileHover={{
                            scale: 1.2,
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
                                    {/* Button to close de mobile menu */}
                                    <motion.button
                                        className="hover:text-bright bg-[#182825] p-2 rounded-sm"
                                        initial={{ y: -15 }}
                                        animate={{ y: 1 }}
                                        whileHover={{
                                            scale: 1.05,
                                            transition: { duration: 0.1 }
                                        }}
                                        transition={{ duration: 0.2 }}
                                        onClick={() => setOpen(false)}
                                    >
                                        <motion.p
                                            initial={{ rotate: 359 }}
                                            animate={{ rotate: 0 }}
                                        >X</motion.p>
                                    </motion.button>

                                    {/* Language changer */}
                                    {/* Button to change the language to Spanish */}
                                    <div className="flex items-center justify-between gap-3">
                                        <motion.button
                                            className="hover:text-bright bg-[#182825] p-2 rounded-sm w-80"
                                            initial={{ y: -15 }}
                                            animate={{ y: 1 }}
                                            whileHover={{
                                                scale: 1.05,
                                                transition: { duration: 0.1 }
                                            }}
                                            transition={{ duration: 0.2 }}
                                            onClick={() => setOpen(false)}
                                        >
                                            <motion.p
                                                initial={{ rotate: 359 }}
                                                animate={{ rotate: 0 }}
                                            >ES</motion.p>
                                        </motion.button>
                                        {/* Button to change the language to English */}
                                        <motion.button
                                            className="hover:text-bright bg-[#182825] p-2 rounded-sm w-80"
                                            initial={{ y: -15 }}
                                            animate={{ y: 1 }}
                                            whileHover={{
                                                scale: 1.05,
                                                transition: { duration: 0.1 }
                                            }}
                                            transition={{ duration: 0.2 }}
                                            onClick={() => setOpen(false)}
                                        >
                                            <motion.p
                                                initial={{ rotate: 359 }}
                                                animate={{ rotate: 0 }}
                                            >EN</motion.p>
                                        </motion.button>
                                    </div>

                                    <hr class='size-1 w-full' ></hr>

                                    {/* Navigation buttons */}
                                    <MotionLink
                                        to="/"
                                        className="hover:text-bright hover:bg-[#016FB9] p-2"
                                        whileHover={{
                                            x: 15,
                                            transition: { duration: 0.1 }
                                        }}
                                        transition={{ duration: 0.2 }}
                                        onClick={() => setOpen(false)}
                                    >
                                        {t('home')}
                                    </MotionLink>
                                    <MotionLink
                                        to="/projects"
                                        className="hover:text-bright hover:bg-[#016FB9] p-2"
                                        whileHover={{
                                            x: 15,
                                            transition: { duration: 0.1 }
                                        }}
                                        transition={{ duration: 0.2 }}
                                        onClick={() => setOpen(false)}
                                    >
                                        {t('projects')}
                                    </MotionLink>
                                    <MotionLink
                                        to="/"
                                        className="hover:text-bright hover:bg-[#016FB9] p-2"
                                        whileHover={{
                                            x: 15,
                                            transition: { duration: 0.1 }
                                        }}
                                        transition={{ duration: 0.2 }}
                                        onClick={() => setOpen(false)}
                                    >
                                        {t('contact')}
                                    </MotionLink>
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