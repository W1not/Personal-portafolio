import { useTranslation } from "react-i18next";
import ItemBox from "./components/ItemBox.jsx"
import Experience from "./Experience.jsx";

import { skills } from "./data/skills.js";

function AboutMe() {
    const { t, i18n } = useTranslation('aboutme');

    return (
        <>
            <div className="max-2-5x1 mx-auto px-20 md:px-25 lg:px-60 text-amber-50">
                <h1 className="text-4xl pb-2">{t('title')}</h1>
                <hr className='pb-5' />
                <div className="flex flex-col md:flex-row items-baseline gap-8">
                    <div className="flex-2">
                        <h2 className="text-3xl">{t('carrerTitle')}</h2>
                        <p>
                            {t('description')}
                            <br />
                            <br />
                            {t('description2')}
                        </p>
                    </div>
                    <div className="flex-2">
                        <h2 className="text-3xl"> {t('Hobbietitle')}</h2>
                        <p>{t('hobbiesDescription')}</p>
                    </div>
                </div>
            </div>

            <div className="py-20 max-2-5x1 mx-auto px-20 md:px-25 lg:px-60 text-amber-50">
                <h1 className="text-4xl">{t('skills')}</h1>

                <div className="flex flex-wrap items-centergap-5 gap-5 py-5">
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

            <Experience/>
        </>

    );
}

export default AboutMe;