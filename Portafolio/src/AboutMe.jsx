import { useTranslation } from "react-i18next";

function AboutMe() {
    const {t, i18n} = useTranslation('');
    return (
        <>
            <div className="m-40 text-amber-50">
                <h1 className="text-4xl">About Me</h1>
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
        </>

    );
}

export default AboutMe;