import { Portfolio } from '../cards';
import { portfolio } from '../../data';

const PortfolioSection = (item) => {
    // api hook
    return <section className="flex flex-col gap-4 w-screen mx-auto my-8">
        <div className="flex w-full items-center justify-center">
            <h2 className="text-center capitalize text-blue font-bold sm:text-3xl text-xl">
                What EduJobs offer
            </h2>
        </div>
        <div className="flex flex-col gap-2 justify-center">
            {portfolio.map(Portfolio)}
        </div>
    </section>;
};

export default PortfolioSection;
