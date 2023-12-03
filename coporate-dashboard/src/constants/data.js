import images from "./images"

const data = {
    user: {
        name: 'Hello Recruiter',
        img: images.avt
    },
    summary: [
        {
            title: 'Jobs',
            subtitle: 'Total Jobs Posted',
            value: '10',
        },
        {
            title: 'Passed Candidates',
            subtitle: 'No. of Passed Candidates',
            value: '5'
        },
        {
            title: 'Failed Candidates',
            subtitle: 'No. of Failed Candidates',
            value: '0'
        },
        {
            title: 'Rejected Candidates',
            subtitle: 'No. of Rejected Candidates',
            value: '20'
        }
    ],
}

export default data;