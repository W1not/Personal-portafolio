export default function ItemBox({title, image}) {
    return(
        <div className="w-40 h-40 rounded-x1 flex flex-col items-center justify-center gap-3 hover:scale-105 transition bg-[#105174]">
            <h1 className="text-2xl text-amber-50">{title}</h1>
            <img
            src={image}
            alt={title}
            className="w-12 h-12 object-contain"/>
            
        </div>
    );
}