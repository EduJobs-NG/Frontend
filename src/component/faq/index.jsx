import { Faq } from '../cards';
import Boundary from '../boundary';
import { useApi } from '../../hooks';

const FaqSection = () => {
    // api hook
    const [data, error, load] = useApi("/admin/faqs");

    return <section className="w-screen flex items-center justify-center min-h-[20em] bg-gray-200">
        <Boundary error={error} load={load}>
            {data?.map(Faq)}
        </Boundary>
    </section>;
};

export default FaqSection;
