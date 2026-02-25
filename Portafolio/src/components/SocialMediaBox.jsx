export default function SocialMediaBox({ title, image, link }) {
    return (
        <a className="text-amber-50 bg-amber-800 p-6 m-2 ">
            {title}
            <img
            src= {image}
            alt= {title}
            className="w-5 h-5
                sm:w-6 sm:h-6
                md:w-7 md:h-7 
                object-contain"/>
        </a>
    );
}