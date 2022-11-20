import { $jobs } from './slice/job';
import { useDispatch } from 'react-redux';
import { $profile } from './slice/profile';
import { $login, $register, $user, $logout } from './slice/auth';

const useMyDispatch = () => {
    const dispatch = useDispatch();

    return ({
        user: () => dispatch($user()),
        logout: () => dispatch($logout()),
        profile: () => dispatch($profile()),
        login: (data) => dispatch($login(data)),
        register: (data) => dispatch($register(data)),
        jobs: (data = '/jobseeker/job-list') => dispatch($jobs(data)),
    });
};

export default useMyDispatch;
