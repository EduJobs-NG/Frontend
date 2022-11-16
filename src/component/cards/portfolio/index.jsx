const Portfolio = (item, key) => {
    return <div key={item.id}
        style={{ flexDirection: key % 2 ? 'row' : 'row-reverse' }}
        className="flex flex-wrap gap-8 w-screen px-12 py-6 justify-center"
    >
        {/* main content */}
        <div className="flex flex-col items-start justify-center grow-1 shrink-1 basis-[30em] gap-4">
            <h3 className="text-blue font-bold capitalize sm:text-2xl text-xl" style={{ alignSelf: key % 2 ? 'flex-start' : 'flex-end' }}>{item.title}</h3>
            <p className="sm:text-xl text-sm" style={{ textAlign: key % 2 ? 'left' : 'right' }}>{item.content}</p>
        </div>
        {/* image container */}
        <div className="flex items-center justify-center grow-1 shrink-1 basis-[30em] gap-4">
            <img src={item.image} alt="" className="w-[100%] object-contain" />
        </div>
    </div>;
};

export default Portfolio;
