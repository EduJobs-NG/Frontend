// import Boundary from '../boundary';
import { Pricing } from '../cards';
// import { useApi } from '../../hooks';

const pricings = [
    {name:'basic'},
    {name:'starter'},
    {name:'premium'},
    {name:'professional'},
]

const PricingSection = () => {
    // api hook
    // const [data, error, load] = useApi('');

    return <section className="flex flex-col gap-8 w-screen mx-auto my-8">
        <div className="flex w-full items-center justify-center">
            <h2 className="text-center capitalize text-blue font-bold sm:text-3xl text-xl">
                edujobs plans and pricing
            </h2>
        </div>
        <div className="flex flex-wrap gap-8 items-center justify-center">
            {pricings.map((item, id) => <Pricing key={id} {...item} />)}
            {/* <Boundary error={error} load={load}>
                {data?.map(Pricing)}
            </Boundary> */}
        </div>
    </section>;
};

export default PricingSection;
