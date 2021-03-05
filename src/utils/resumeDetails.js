import React from "react";

// import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import AndroidIcon from '@material-ui/icons/Android';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import TheatersIcon from '@material-ui/icons/Theaters';


export default {
    name : 'Nitish Kumar Sonthalia',
    title : 'Full Stack Android Developer, Flutter Developer & Web Developer',

    jobs : 'Student',
    email : 'nitishks1110@gmail.com',
    phone : '+91-9918598220',
    address : 'Gorakhpur , U.P.',
    address2: 'Flat no.-10 , Santosh Appartment , Gas Godam Lane , Vijay Chock',

    social: {
        // facebook:{
        //     link : 'https://www.facebook.com',
        //     text : 'Nitish',
        //     icon : <FacebookIcon />,
        // },     
        linkedIn:{
            link : 'https://www.linkedin.com/in/nitish-kumar-sonthalia-4713a8193/',
            text : 'Nitish-Kumar-Sonthalia',
            icon : <LinkedInIcon />,
        },
        github:{
            link : 'https://github.com/nks102000',
            text : 'nks102000',
            icon : <GitHubIcon />,
        },
        instagram:{
            link : 'https://www.instagram.com/nitish_rider_1110/',
            text : 'nitish_rider_1110',
            icon : <InstagramIcon />,
        },  
    },
    about: 'Hello guys, this is Ashish Kumar Mishra. I am an earnest techie  with keen interest in every new updates that come up    everyday. I love being hardworking and dedicated to whatever I take up as a task. Web development attracts me the most. And I also have some basic idea in android. Apart from that I also have knowledge on SEO.The last one year has been an amazing experience.\n\nThe journey of my BTech years has started with these new experiences and I felt a keen interest growing in me. Getting to learn these things have always been worth it. But this is just the beginning. I am always brushing up my skills more to attain perfection. Looking forward to gather more knowledge and being more accurate in my field.',

    experiences : [
        {
            title : 'Android Developer (Innic Studios)',
            date: '01/01/2021 - Present',
            desc: 'I am responsible for developing the Application and WebSites (both Frontend & Backend)',
        },
        {
            title : 'Android Web (GFG-KIIT)',
            date: 'November-2020 - Present',
            desc: 'I am responsible for making projects on the above mentioned domains and helping others in the club with the same. I am also responsible for leading some of the major events which the club puts forward for all the students and developers around the University.',
        },
        {
            title : 'Campus Ambassador (Verzeo)',
            date: 'November-2020 - October-2020',
            desc: 'I was responsibe for developing the companies website inthe give time period',
        },
        {
            title : 'Machine Learning Model Development (Verzeo)',
            date: 'April-2020 - May-2020',
            desc: 'I am responsible for developing the EDA of the given data using Python Libraries & Model in ML to predict the car price with my team.',
        },
    ],

    educations: [
        {
            title : 'Secondary (X)',
            date: '05/2016 - 05/2017',
            desc: 'I studied in H P Childrens Academy; Its an ICSE board school with all facilities. I secured 93% in my Xth grade and my subjects were English,Maths,History, Civics &Geography,Science(Phy,Chem.Bio) & Hindi',
        },
        {
            title : 'Senior Secondary (XII)',
            date: '05/2018 - 05/2019',
            desc: 'I studied in Surmount International School; Its an CBSE board school with all facilities. I secured 90% in my XIIth grade and my subjects were (Physics,Chemistry,Maths,English,Computer Science)',
        },
        {
            title : 'Bachelor(B.tech)',
            date: 'July-2019 - Present',
            desc: 'I am a 2nd year IT student. I secured 9.67 CGPA in my 3rd Semester. I have started doing development stuffs from mid of my 1st year and development facinated me a lot.',
        },
       
    ],

    services: [
                {
            title: 'Android Development & Flutter Developemnt',
            desc: 'I have been developing & learning Android & Flutter Developemnt from past 1.5 Years. I have developed 2 Android Application',
            icon: <AndroidIcon />
        },
        {
            title: 'Photography',
            desc: 'Photography is my hobbie and I like to click pictures of all the beauty around me.',
            icon: <PhotoCameraIcon />
        },
        {
            title: 'Vediography & Vedio Editting ',
            desc: 'I have been doing Vediography and editing since 4 years and like to reacord all happenings around me.',
            icon: <TheatersIcon />
        },

    ],

    skills:[
        {
            title : "Front-End",
            desc  : [
                "XML",
                "Materia UI",
                "ReactJs",
                "JavaScript",
                "Bootstrap",
            ],
        },
        {
            title : "Back-End",
            desc : [
                "Java",
                "Kotlin",
                "C/C++",
                "Dart",
                "Python",

            ],
        },
        {
            title : "Databases",
            desc : [
                "Firebase",
                "MySQL",
                "SQL Lite",               
            ],
        },
        {
            title : "Graphics",
            desc : [
                "Figma",
                "Adobe Premiere Pro",
                "Wondershare Filmora"
            ],
        },
    ],
};