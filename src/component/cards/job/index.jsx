const Job = (item) => {
    return <div key={item.id} className="flex flex-col border border-gray-600 rounded-md p-4 w-full gap-8">
        <div className="flex items-start justify-between">
            <div className="flex flex-col items-start justify-center">
                <h3 className="font-bold capitalize">{item?.title}</h3>
            </div>
        </div>
        <p className="transition-all overflow-hidden">{item?.summary}</p>
        <div className="transition-all flex items-center justify-center overflow-hidden bg-red">
            <button className="flex items-center justify-center text-white bg-blue font-bold uppercase py-2 px-24 rounded-md">
                apply
            </button>
        </div>
        <div className="flex items-center justify-between w-full">
            <span className="">{item?.posted_time} ago</span>
            <button className="border-none capitalize text-blue">read more</button>
        </div>
    </div>;
};

export default Job;
