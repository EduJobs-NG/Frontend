import { Faq } from '../cards';
import { useApi } from '../../hooks';
import { Circles } from 'react-loader-spinner';

const FaqSection = () => {
    // api hook
    const [data, error, load] = useApi("/admin/faqs");

    return <section className="w-screen flex items-center justify-center min-h-[20em] bg-gray-200">
        {
            load ? <Circles type="ThreeDots" width={200} height={40} color="blue" /> :
                <div className="flex flex-col bg-white w-1/2">
                    {data?.map(Faq)}
                </div>
        }
    </section>;
};

export default FaqSection;
