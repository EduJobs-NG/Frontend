import Feature1 from './assets/features1.png';
import Feature2 from './assets/features2.png';
import Feature3 from './assets/features3.png';
import {FaFacebookF, FaInstagram, FaTwitter} from 'react-icons/fa'
import logo1 from './assets/logo.png'


export const navigation = {
    
    logo:logo1,
    leftNav: [
           {
                name: 'About us',
                href: "#"
            },
            {
                name: 'jobs',
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
    logo:logo1,
    socials:[
        {
            name:<FaFacebookF />,
            link:'https://facebook.com/edujobsofficial'
        }, 
        {
            name:<FaInstagram />,
            link:'https://twitter.com/edujobsofficial'
        }, 
        {
            name:<FaTwitter />,
            link:"https://twitter.com/edujobsofficial"
        }
      
    ],
    candidates:[
        {
            name:'Sign up',
            href:'/jobseeker/register'
        },
        {
            name:'Find Jobs',
            href:'/dashboard/find-jobs'

        },
    ],
    employees:[
        {
            name:'Sign up',
            href:'/employer/register'

        },
        {
            name:'Find candidate',
            href:''

        },
        {
            name:'Post jobs',
            href:'/dashboard/employer/post-job'

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
            href:'/faqs'

        },
        {
            name:'Employment Help/FAQs',
            href:'/faqs'

        },
        {
            name:'General FAQs',
            href:'/faqs'

        },
    ],
    

}

