import Feature1 from './assets/features1.png';
import Feature2 from './assets/features2.png';
import Feature3 from './assets/features3.png';
import {FaFacebookF, FaLinkedinIn, FaTwitter} from 'react-icons/fa'
import logo from './assets/EduJobs.png'


export const navigation = {
    
    logo:'EdujobsNG',
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
    ,

    
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

export const footer = {
    logo:'EduJobs NG',
    socials:[
        {
            name:<FaFacebookF />
        }, 
        {
            name:<FaLinkedinIn />
        }, 
        {
            name:<FaTwitter />
        }
      
    ],
    candidates:[
        {
            name:'Sign up',
            href:''
        },
        {
            name:'Find Jobs',
            href:''

        },
    ],
    employees:[
        {
            name:'Sign up',
            href:''

        },
        {
            name:'Find candidate',
            href:''

        },
        {
            name:'Post jobs',
            href:''

        },
    ],
    company:[
        {
            name:'About us',
            href:''

        },
        {
            name:'Careers',
            href:''

        },
        {
            name:'Contact us',
            href:''

        },
    ],
    
    support:[
        {
            name:'Job Seekers/FAQS ',
            href:''

        },
        {
            name:'Employment Help/FAQs',
            href:''

        },
        {
            name:'General FAQs',
            href:''

        },
    ],
    

}

