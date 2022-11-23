import { Faq } from '../cards';
import { useEffect } from 'react';
import Boundary from '../boundary';
import { useApi } from '../../hooks';

const FaqSection = () => {
    // api hook
    const [data, error, load] = useApi("/faqs/");

    useEffect(()=>{console.log(data)},[]);

    return <section className="w-screen flex flex-col items-center justify-center min-h-[20em] bg-gray-200">
        <Boundary error={error} load={load}>
            {data?.results?.map(item => <Faq {...item} key={item.id} />)}
        </Boundary>
    </section>;
};

export default FaqSection;
