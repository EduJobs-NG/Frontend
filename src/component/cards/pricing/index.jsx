import { Link } from "react-router-dom";

const Pricing = (item) => {
    const num = Array(4).fill(0);

    return <div className="flex flex-col gap-2 rounded-lg p-4 border-grey border w-[max(18em,22%)]">
        <h2 className="capitalize text-3xl font-bold">{item?.name}</h2>
        <p className="font-thinbold">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam vero quisquam impedit.</p>
        <div className="flex flex-col gap-8">
        {num.map((_, id) => (
            <div key={id} className="flex gap-2 items-center">
            <i className="w-8 h-8 rounded-full bg-blue flex-none"></i>
            <span className="font-bold text-md">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
            </div>
        ))}
        </div>
        <div className="flex flex-col items-start">
            <span className="capitalize -mb-2">from</span>
            <h3 className="font-bold text-3xl">N10,000/<span className="text-xl">month</span></h3>
        </div>
        <button className="mt-4 bg-blue text-white uppercase font-bold w-[70%] mx-auto py-2 flex items-center justify-center rounded">
            select plan
        </button>
        <Link to='/' className="mx-auto capitalize text-blue font-bold">learn more</Link>
    </div>;
};

export default Pricing;
