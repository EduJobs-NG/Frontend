import Feature1 from './assets/features1.png';
import Feature2 from './assets/features2.png';
import Feature3 from './assets/features3.png';


export const navigation = [
    {
        leftNav: [
            {
                name: 'About us',
                href: "#"
            },
            {
                name: 'jobs',
                href: "#"
            },
            {
                name: 'Trending',
                href: "#"
            },
            {
                name: 'Pricing',
                href: "#"
            },
        ]
    },

    {
        rightNav: [
            {
                name:'job seekers',
                href:'#'
            }, 
            {
                name:'employees',
                href:'#'
            }, 
            {
                name:'login',
                href:'#'
            }, 


        ]
    }

]


export const features = [
    {
        img:<Feature1 />,
        title:'Create Your Profile',
        subtitle: 'Take a bold step to create an outstanding profile on our platform'
    },

    {
        img:<Feature2 />,
        title:"Describe Your interests and qualifications",
        subtitle:"Follow our interest-flow to create a very interesting interest and get Your dream job."
    },
    
    {   img:<Feature3 />,
        title:"Be found",
        subtitle:"EduJobs NG will align You to top recruiters who are breed for Your skills."
    }
]

