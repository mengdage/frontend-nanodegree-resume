(function(global){
  'use strict';
  var bio ={
    name: 'Meng Lin',
    role: 'Front-End Developer',
    contacts: {
      mobile: '202-368-5848',
      email: 'menglin2727@gmail.com',
      github: 'https://github.com/mengdage',
      location: '516 Main ST, New York City, NY'
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
        location: 'Wasingtong D.C. US',
        degree: 'M.S.',
        majors: ['Computer Science'],
        dates: '01-2014 to 01-2016',
        url: 'https://www.gwu.edu/'
      },
      {
        name: 'Sichuan University',
        location: 'SiChuan China',
        degree: 'B.Eng.',
        majors: ['Software Engineer'],
        dates: '09-2009 to 06-2014',
        url: 'http://www.scu.edu.cn/en/'
      }
    ],
    onlineCourses: [
      {
        title: 'title',
        school: 'school',
        dates: 'date',
        url: 'url'
      }
    ],
  },
  work = {
    jobs: [
      {
      employer: 'Harvar School of Public Health',
      title: 'Research Assistant',
      location: 'Boston',
      dates: '06-2016 to 12-2016',
      description: 'xxx'

      }
    ],
  },
  projects ={
    projects: [
      {
        title: 'A Clone of the Frogger Game',
        dates: 'sss',
        description: 'A clone of the popular frogger game, which features a character selection menu, a persistent scoreboard, and mobile support. Built with HTML5 canvas. Use browser’s local storage and Web Audio API to increase user experience.',
        url: 'images/Frogger-300w.png'
      }
    ],
    display: function() {

    }
  };
  bio.display = function() {
    var headerEle = $('#header'),
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
        .append(formattedSchoolName)
        .append(formattedSchoolDegree)
        .append(formattedSchoolDates)
        .append(formattedSchoolLocation)
        .append(formattedSchoolMajor);
      educationEle.append(schoolStartEle);
    });

    educationEle.append(HTMLonlineClasses);
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
        .append(formattedWorkEmployer)
        .append(formattedWorkTitle)
        .append(formattedWorkDates)
        .append(formattedWorkLocation)
        .append(formattedWorkDescription);

      workEle.append(workStart);
    });
  };

  projects.display = function() {
    var projectEle = $('#projects'),
        projectStart;
    this.projects.forEach(function(project) {
      var formattedPorjectTitle = HTMLprojectTitle.replace('%data%', project.title),
          formattedProjectDates = HTMLprojectDates.replace('%data%', project.dates),
          formattedProjectDescription = HTMLprojectDescription.replace('%data%', project.description),
          formattedProjectImg = HTMLprojectImage.replace('%data%', project.url);
      projectStart = $(HTMLprojectStart);
      projectStart
        .append(formattedPorjectTitle)
        .append(formattedProjectDates)
        .append(formattedProjectDescription)
        .append(formattedProjectImg);
      projectEle.append(projectStart);
    });
  };

  bio.display();
  education.display();
  work.display();
  projects.display();
})(self);
