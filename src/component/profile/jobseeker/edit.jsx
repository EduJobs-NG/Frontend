import * as tabs from './tabs';
import { useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Edit = () => {
    // location hook
    const nav = useNavigate();
    const location = useLocation();

    // memo
    const Tab = useMemo(() => {
        const tab = location?.search.substring(location?.search?.indexOf("=") + 1);
        console.log(tabs[tab] || tabs.personal);
        return tabs[tab] || tabs.personal;
    }, [location.search]);

    // methods
    const setLocation = ({currentTarget}) => void nav(`/jobseeker/profile/edit?tab=${currentTarget.name || 'personal'}`);

    return <section className="w-screen flex flex-col h-screen">
        <div className="w-full flex flex-col relative p-8 pb-2">
            <h2 className="capitalize font-bold absolute top-4 left-4">profile</h2>
            <div className="grid"></div>
            <div className="flex items-center justify-evenly flex-wrap gap-4 w-full">
                <button name="personal" onClick={setLocation} className="font-bold capitalize">
                    personal information
                </button>
                <button name="professional" onClick={setLocation} className="font-bold capitalize">
                    professional information
                </button>
                <button name="credential" onClick={setLocation} className="font-bold capitalize">
                    credentials
                </button>
                <button name="contact" onClick={setLocation} className="font-bold capitalize">
                    contact information
                </button>
            </div>
        </div>
        <div className="w-full flex">
            <Tab></Tab>
        </div>
    </section>;
};

export default Edit;
