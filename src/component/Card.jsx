export default function Card({ img, title, type, src }) {
    return (
        <div className="flex flex-col justify-center items-center h-[300px] w-[260px]">
            <img src={img} alt="title" className="w-[120px]" />
            <h2 className="text-2xl pb-2">{title}</h2>
            <p>{type}</p>
            <a href={src} className="w-[100px] bg-blue-700 text-white text-center p-1 rounded-md mt-2 hover:bg-blue-400">
                <button>View page</button>
            </a>
        </div>
    )
};