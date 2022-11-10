import { Pricing } from '../cards';
import { useApi } from '../../hooks';
import { Circles } from 'react-loader-spinner';

const PricingSection = () => {
    // api hook
    const [data, error, load] = useApi('');

    return <section className="flex flex-col gap-4 w-screen mx-auto my-8">
        <div className="flex w-full items-center justify-center">
            <h2 className="text-center capitalize text-blue font-bold sm:text-3xl text-xl">
                edujobs plans and pricing
            </h2>
        </div>
        <div className="flex flex-wrap gap-8 items-center justify-center">
            {load ?
                <Circles type="ThreeDots" width={100} height={20} color="blue" /> :
                error ? <p>Error Loading Plans, Refresh The Page</p> : data?.map(Pricing)
            }
        </div>
    </section>;
};

export default PricingSection;
