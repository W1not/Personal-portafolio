import { useTranslation } from "react-i18next";
import ItemBox from "./components/ItemBox.jsx"

import { skills } from "./data/skills.js";
function AboutMe() {
    const { t, i18n } = useTranslation('');

    return (
        <>
            <div className="max-2-5x1 mx-auto px-20 md:px-25 lg:px-60 text-amber-50">
                <h1 className="text-4xl">{t('aboutme')}</h1>
                <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="flex-2">
                        <p>
                            Desarrollador con experiencia en distintos lenguajes de programacion, administracion de base de datos en Microsoft SQL Server y MySQL, conocimiento en plataformas en la nube
                        </p>
                    </div>
                    <div className="flex-1">
                        <p>1</p>
                    </div>
                </div>
            </div>

            <div className="py-30 max-2-5x1 mx-auto px-20 md:px-25 lg:px-60 text-amber-50">
                <h1 className="text-4xl">Skills</h1>
                <div className="flex flex-col md:flex-row items-center gap-5 py-5">
                    {skills.map((skill) =>
                    (
                        <ItemBox
                        key={skill.title}
                        title={skill.title}
                        image={skill.image}
                        />
                    ))}

                </div>

            </div>
        </>

    );
}

export default AboutMe;