import logo from './assets/logo.png'
import Feature1 from './assets/features1.png';
import Feature2 from './assets/features2.png';
import Feature3 from './assets/features3.png';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'


export const navigation = {

    logo,
    leftNav: [
        { name: 'About us', href: "#" },
        { name: 'jobs', href: "#" },
    ]
    ,


    rightNav: [
        { name: 'job seekers', href: '#' },
        { name: 'employees', href: '#' },
        { name: 'login', href: '#' },
    ]
};


export const features = [
    {
        img: <Feature1 />,
        title: 'Create your profile',
        subtitle: 'Take a bold step to create an outstanding profile on our platform.'
    },

    {
        img: <Feature2 />,
        title: "Describe your qualifications",
        subtitle: "Follow our interest-flow to create a very interesting interest and get Your dream job."
    },

    {
        img: <Feature3 />,
        title: "Be found",
        subtitle: "EduJobs NG will align You to top recruiters who are breed for Your skills."
    }
];

export const footer = {
    logo,
    socials: [
        {
            name: <FaFacebookF />,
            link: 'https://facebook.com/edujobsofficial'
        },
        {
            name: <FaInstagram />,
            link: 'https://instagram.com/edujobsofficial'
        },
        {
            name: <FaTwitter />,
            link: "https://twitter.com/edujobsofficial"
        }
    ],
    candidates: [
        {
            name: 'Sign up',
            href: '/jobseeker/register'
        },
        {
            name: 'Find Jobs',
            href: '/dashboard/find-jobs'
        },
    ],
    employees: [
        {
            name: 'Sign up',
            href: '/employer/register'
        },
        { name: 'Find candidate', href: '#' },
        { name: 'Post jobs', href: '/dashboard/employer/post-job' },
    ],
    company: [
        { name: 'About us', href: '#' },
        { name: 'Careers', href: '#' },
        { name: 'Contact us', href: '#' },
    ],

    support: [
        {
            name: 'General FAQs',
            href: '/faqs'
        },
        {
            name: 'Terms and Conditions',
            href: '/terms'
        },
    ],
};

export const updater = {
    email: {
        endpoint: '',
        elements: [
            { name: 'email', type: 'email', placeholder:'new email address' },
            { name: 'password', type: 'password', placeholder:'enter password' },
        ]
    },
    password: {}
};