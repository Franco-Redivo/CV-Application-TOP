// import uniqid from 'uniqid';


const exampleData = {
    personalInfo: {
        fullName: 'John Doe',
        email: 'johnDoe@gmail.com',
        phoneNumber: '123-456-7890',
        address: '1234 Elm Street',
    },
  
    sections: {
        educations: {
            degree: 'Bachelor of Science in Computer Science',
            school: 'University of California, Berkeley',
            location: 'Berkeley, CA',
            startDate: '2016-08',
            endDate: '2019-06',
            isCollapsed: true,
        },
        experiences: {
            companyName: 'Google',
            positionTitle: 'Software Engineer',
            location: 'Mountain View, CA',
            startDate: '2019-09',
            endDate: '2022-02',
            description: 'Worked on the Google Search team to improve search results for users.',
            isCollapsed: true,
        },
    }
}

// const exampleData = {
//     personalInfo: {
//         fullName: 'John Doe',
//         email: 'johnDoe@gmail.com',
//         phoneNumber: '123-456-7890',
//         address: '1234 Elm Street',
//     },

//     sections: {
//         educations: [
//             {
//                 degree: 'Bachelor of Science in Computer Science',
//                 school: 'University of California, Berkeley',
//                 location: 'Berkeley, CA',
//                 startDate: '08/2016',
//                 endDate: '05/2020',
//                 id: uniqid(),
//                 isCollapsed: true,
//             },
//             {
//                 degree: 'High School Diploma',
//                 school: 'John F. Kennedy High School',
//                 location: 'Sacramento, CA',
//                 startDate: '08/2012',
//                 endDate: '05/2016',
//                 id: uniqid(),
//                 isCollapsed: true,
//             },
//         ],
//         experiences: [
//             {
//                 companyName: 'Google',
//                 positionTitle: 'Software Engineer',
//                 location: 'Mountain View, CA',
//                 startDate: '06/2020',
//                 endDate: 'Present',
//                 id: uniqid(),
//                 isCollapsed: true,
//                 description: 'Worked on the Google Search team to improve search results for users.',
//             },
//             {
//                 companyName: 'Facebook',
//                 positionTitle: 'Software Engineer Intern',
//                 location: 'Menlo Park, CA',
//                 startDate: '06/2019',
//                 endDate: '08/2019',
//                 id: uniqid(),
//                 isCollapsed: true,
//                 description: 'Worked on the Facebook Messenger team to improve user experience.',
//             },
//         ],
//     }
// }

export default exampleData;