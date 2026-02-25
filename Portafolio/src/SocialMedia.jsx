import SocialMediaBox from "./components/SocialMediaBox";
import { socialmedialist } from "./data/socialmedia"

function SocialMedia() {
    return (
        <>
            <div>
                <h1 className="text-4xl text-amber-50">Social Media</h1>
                <div className="grid grid-cols-1">
                    {socialmedialist.map((sociallist) =>
                        <SocialMediaBox
                            key={sociallist.title}
                            title={sociallist.title}
                            image = {sociallist.image}
                            link={sociallist.link} />)}
                </div>

            </div>
        </>
    )
}

export default SocialMedia;