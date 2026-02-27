import { useTranslation } from "react-i18next";
import { experience_list } from "./data/experience";


function Experience() {
    const { t, i18n } = useTranslation('experience')

    return (
        <div className="py-20 max-2-5x1 mx-auto px-20 md:px-25 lg:px-60 text-amber-50 ">
            <h1 className="text-4xl pb-2">Experience</h1>
            <hr />
            {Object.entries(experience_list).map(([key, details]) => (
                <div key={key}
                    className="grid grid-cols-1 md:grid-cols-[60px_1fr] gap-y-4 md:gap-x-8 p-6 md:p-10">
                    <div className="flex justify-center md:justify-start">
                        <h1 className="text-4xl justify-center">※</h1>
                    </div>
                    <div className="text-center md:text-start">
                        <h1 className="text-2xl font-semibold ">{t(`${key}.position`)}</h1>
                        <h2 className="text-lg">{details.company}</h2>
                        
                        <p>{t(`${key}.description`)}</p>
                        <p className="text-gray-300">{t(`${key}.monthStart`)} {details.startYear} - {t(`${key}.monthFinished`)} {details.endYear ?? t('current')}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Experience;
