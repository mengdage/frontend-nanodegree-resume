(function(global){
  'use strict';
  var bio ={
    name: 'Meng Lin',
    role: 'Front-End Developer',
    contacts: {
      mobile: '202-368-5848',
      email: 'menglin2727@gmail.com',
      github: 'https://github.com/mengdage',
      location: 'New York City, NY'
    },
    welcomeMessage: 'Hello!',
    skills: [
      'Front-End Development', 'Data Analysis', 'Machine Learning'
    ],
    biopic: 'images/menglin.jpg',
  },
  education = {
    schools: [
      {
        name: 'George Washington University',
        location: 'Wasington, D.C. US',
        degree: 'M.S.',
        majors: ['Computer Science'],
        dates: '01-2014 to 01-2016',
        url: 'https://www.gwu.edu/'
      },
      {
        name: 'Sichuan University',
        location: 'SiChuan, China',
        degree: 'B.Eng.',
        majors: ['Software Engineer'],
        dates: '09-2009 to 06-2014',
        url: 'http://www.scu.edu.cn/en/'
      }
    ],
    onlineCourses: [
      // {
      //   title: 'title',
      //   school: 'school',
      //   dates: 'date',
      //   url: 'url'
      // }
    ],
  },
  work = {
    jobs: [
      {
      employer: 'Harvard School of Public Health',
      title: 'Research Assistant',
      location: 'Boston, MA',
      dates: '06-2016 to 12-2016',
      description: 'Worked as a research assistant. Participated in research activities and implemented algorithms into programs.'
      }
    ],
  },
  projects ={
    projects: [
      {
        title: 'A Clone of the Frogger Game',
        dates: 'May 2017',
        description: 'A clone of the popular frogger game, which features a character selection menu, a persistent scoreboard, and mobile support. Built with HTML5 canvas. Use browser’s local storage and Web Audio API to increase user experience.',
        images: ['images/Frogger-300w.png'],
        url: 'https://github.com/mengdage/frontend-nanodegree-arcade-game'
      },
      {
        title: 'Chrome Tabs Manager',
        dates: 'May 2015',
        description: 'A Chrome extension that helps users manage Chrome tabs, including searching, closing, rearranging tabs. Wrote the popup in AngularJS. Added a new JavaScript-accessible Chromium API to return least frequently used tabs.',
        images: ['images/GoodTaber-300w.png'],
        url: 'https://github.com/mengdage/goodtaber'
      }
    ],
    display: function() {

    }
  };
  bio.display = function() {
    var headerEle = $('#header'),
        footerContactEle = $('#footerContacts'),
        topContacts = $('#topContacts'),
        skillsStartEle = $(HTMLskillsStart),
        skillsListEle = $(skillsStartEle[1]);

    var contacts = this.contacts;

    var formattedName = HTMLheaderName.replace('%data%', this.name);
    var formattedRole = HTMLheaderRole.replace('%data%', this.role);
    headerEle.prepend(formattedRole);
    headerEle.prepend(formattedName);

    var formattedMobile = HTMLmobile.replace('%data%', contacts.mobile),
        formattedEmail = HTMLemail.replace('%data%', contacts.email),
        formattedGithub = HTMLgithub.replace('%data%', contacts.github),
        formattedLocation = HTMLlocation.replace('%data%', contacts.location),
        formattedBioPic = HTMLbioPic.replace('%data%', this.biopic),
        formattedMsg = HTMLwelcomeMsg.replace('%data%', this.welcomeMessage),
        formattedSkill = '';

    this.skills.forEach(function(skill) {
      formattedSkill = HTMLskills.replace('%data%', skill);
      skillsListEle.append(formattedSkill);
    });

    topContacts
      .append(formattedMobile)
      .append(formattedEmail)
      .append(formattedGithub)
      .append(formattedLocation);
    footerContactEle
      .append(formattedMobile)
      .append(formattedEmail)
      .append(formattedGithub)
      .append(formattedLocation);
    headerEle
      .append(formattedMsg)
      .append(formattedBioPic)
      .append(skillsStartEle);
  };

  education.display = function() {
    var educationEle = $('#education'),
        schoolStartEle;

    this.schools.forEach(function(school) {
      var formattedSchoolName = HTMLschoolName.replace('%data%', school.name).replace('#', school.url),
          formattedSchoolDegree = HTMLschoolDegree.replace('%data%', school.degree),
          formattedSchoolDates = HTMLschoolDates.replace('%data%', school.dates),
          formattedSchoolLocation = HTMLschoolLocation.replace('%data%', school.location),
          formattedSchoolMajor = '';
      school.majors.forEach(function(major) {
          formattedSchoolMajor += HTMLschoolMajor.replace('%data%', major);
      });

      schoolStartEle = $(HTMLschoolStart);
      schoolStartEle
        .append(formattedSchoolName + formattedSchoolDegree)
        .append(formattedSchoolDates)
        .append(formattedSchoolLocation)
        .append(formattedSchoolMajor);
      educationEle.append(schoolStartEle);
    });

    if(this.onlineCourses.length > 0) {
      educationEle.append(HTMLonlineClasses);
    }
    this.onlineCourses.forEach(function(course) {
      var formattedOnlineTitle = HTMLonlineTitle.replace('%data%', course.title),
          formattedOnlineSchool = HTMLonlineSchool.replace('%data%', course.school),
          formattedOnlineDates = HTMLonlineDates.replace('%data%', course.dates),
          formattedOnlineURL = HTMLonlineURL.replace('%data%', course.url);
      schoolStartEle = $(HTMLschoolStart);
      schoolStartEle
        .append(formattedOnlineTitle)
        .append(formattedOnlineSchool)
        .append(formattedOnlineDates)
        .append(formattedOnlineURL);
      educationEle.append(schoolStartEle);
    });
  };

  work.display = function() {
    var workEle = $('#workExperience'),
        workStart;

    this.jobs.forEach(function(job) {
      var formattedWorkEmployer = HTMLworkEmployer.replace('%data%', job.employer),
          formattedWorkTitle = HTMLworkTitle.replace('%data%', job.title),
          formattedWorkDates = HTMLworkDates.replace('%data%', job.dates),
          formattedWorkLocation = HTMLworkLocation.replace('%data%', job.location),
          formattedWorkDescription = HTMLworkDescription.replace('%data%', job.description);

      workStart = $(HTMLworkStart);
      workStart
        .append(formattedWorkEmployer+formattedWorkTitle)
        .append(formattedWorkDates)
        .append(formattedWorkLocation)
        .append(formattedWorkDescription);

      workEle.append(workStart);
    });
  };

  projects.display = function() {
    var projectEle = $('#projects'), // the element where projects stay on the main page
        projectStart;                // container for a project
    this.projects.forEach(function(project) {
      // create formatted strings
      var formattedPorjectTitle = HTMLprojectTitle.replace('#', project.url).replace('%data%', project.title),
          formattedProjectDates = HTMLprojectDates.replace('%data%', project.dates),
          formattedProjectDescription = HTMLprojectDescription.replace('%data%', project.description),
          formattedProjectImg = '';
      project.images.forEach(function(image) {
        formattedProjectImg += HTMLprojectImage.replace('%data%', image);
      });

      // create a container for a project
      projectStart = $(HTMLprojectStart);
      // populate the container
      projectStart
        .append(formattedPorjectTitle)
        .append(formattedProjectDates)
        .append(formattedProjectDescription)
        .append(formattedProjectImg);
      // append the container to the main page
      projectEle.append(projectStart);
    });
  };

  function addMap() {
    var mapDiv = $('#mapDiv');
    mapDiv.html(googleMap);
  }

  // display resume content
  bio.display();
  education.display();
  work.display();
  projects.display();
  addMap();

  global.bio = bio;
  global.education = education;
  global.work = work;
})(self);
