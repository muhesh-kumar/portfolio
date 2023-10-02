const imageDir = 'assets/images';

const getImageURL = (imageName: string) => `${imageDir}/${imageName}`;

export default [
  {
    projectName: 'Parkify',
    projectDescription:
      'An IoT based Smart Parking System with a Dashboard and Real-Time Logs that seamlessly integrates with the Raspberry-pi hardware. ',
    projectImageURL: getImageURL('parkify.jpeg'),
    projectRepoURL: 'https://github.com/muhesh-kumar/parkify',
    projectLiveURL: 'https://parkify.vercel.app/',
  },
  {
    projectName: 'Curriculum Schedular',
    projectDescription:
      'An automated Curriculum Schedular which prepares a schedule as per your needs. A great tool for any self-learning student!',
    projectImageURL: getImageURL('curriculum-schedular.png'),
    projectRepoURL: 'https://github.com/muhesh-kumar/curriculum-schedular',
    projectLiveURL: 'https://curriculum-schedular.vercel.app/',
  },
  {
    projectName: 'GitHub Downloader',
    projectDescription:
      'A CLI tool to download files and folders from any GitHub repo and store them in any given location. Wrriten in Typescript and NodeJS and has around 200+ Downloads in NPM Registry',
    projectImageURL: getImageURL('github-downloader.png'),
    projectRepoURL: 'https://github.com/muhesh-kumar/gh-downloader',
    projectLiveURL: 'https://www.npmjs.com/package/gh-downloader',
  },
  {
    projectName: 'LeetCode AC Count',
    projectDescription:
      'The extension displays solved count for each difficulty of any tag in LeetCode. The extension is built to support both Mozilla Firefox and Google Chrome and it is also available as a Firefox Browser Add-On. Increased student productivity when solving problems topic-wise.',
    projectImageURL: getImageURL('leetcode-ac-count.jpg'),
    projectRepoURL: 'https://github.com/muhesh-kumar/leetcode-ac-count',
    projectLiveURL:
      'https://addons.mozilla.org/en-US/firefox/addon/leetcode-ac-count/',
  },
  {
    projectName: 'Github Repo Lister',
    projectDescription:
      'A Single Page Application developed using React to display the list of GitHub repositories using the Github Rest API. Improved User accessibility by implementing features such as Search with name and language, Sort by stars and name, Order by ascending and descending order, Pagination, when listing the repositories. Prevented Prop drilling by using Context API for State Management',
    projectImageURL: getImageURL('github-repo-lister.png'),
    projectRepoURL: 'https://github.com/muhesh-kumar/github-repo-lister',
    projectLiveURL: 'https://muhesh-kumar.github.io/github-repo-lister/',
  },
  {
    projectName: 'Hopsital Management System',
    projectDescription:
      'A minimal Hospital Management System with multiple features like Contact Consultancy, Authentication and Booking Appointments. Implemented JWT and Cookies for Authentication and Authorization of doctors and patients',
    projectImageURL: getImageURL('hospital-management-system.png'),
    projectRepoURL: 'https://github.com/muhesh-kumar/cse3002-project',
    projectLiveURL: 'https://hospital-management-system3002.herokuapp.com',
  },
];
