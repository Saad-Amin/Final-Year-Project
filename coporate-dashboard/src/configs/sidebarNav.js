import { FaUsers } from "react-icons/fa";
import {MdCases, MdDashboard } from 'react-icons/md';
import {BiReceipt} from 'react-icons/bi';


const sidebarNav = [
    {
        link: '/dashboard',
        section: 'home',
        icon: <MdDashboard size={25}/>,
        text: 'Home'
    },
    {
        link: '/dashboard/postajob',
        section: 'postajob',
        icon: <BiReceipt size={25}/>,
        text: 'Post a Job'
    },
    {
        link: '/dashboard/jobs',
        section: 'products',
        icon: <MdCases size={25}/>,
        text: 'Jobs'
    },
    {
        link: '/dashboard/failedcandidates',
        section: 'failedcandidates',
        icon:  <FaUsers size={25}/>,
        text: 'Failed Candidates'
    },
    {
        link: '/dashboard/passedcandidates',
        section: 'passedcandidates',
        icon: <FaUsers size={25}/>,
        text: 'Passed Candidates'
    },
    {
        link: '/dashboard/rejectedcandidates',
        section: 'rejectedcandidates',
        icon: <FaUsers size={25}/>,
        text: 'Rejected Candidates'
    },
]

export default sidebarNav