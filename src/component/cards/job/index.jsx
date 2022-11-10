const Job = (item, key) => {
    return <div key={item.id} className="flex flex-col border border-gray-600 rounded-md p-4 w-full">
        {item.job_type}
    </div>;
};

export default Job;
