const Job = (item) => {
    return <div key={item.id} className="flex flex-col border border-gray-600 rounded-md p-4 w-full">
        {item.title} - title
    </div>;
};

export default Job;
