import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import project1Image from '../../Dataset/servercore.jpg'; // Import images for projects
import project2Image from '../../Dataset/Salesforce.jpeg';
import project3Image from '../../Dataset/azure1.png';
import project4Image from '../../Dataset/tableau1.jpg';
import project5Image from '../../Dataset/whatsapp.png';
import project6Image from '../../Dataset/dyamics.jpg';
import project7Image from '../../Dataset/chatbot.jpeg';
import project8Image from '../../Dataset/ibm watson.jpg';

import './Projects2.css';
// Import other project images as needed

const Projects1 = () => {
  const projects = [
    {
      id: 1,
      imageUrl: project1Image,
      description: 'Servercore',
    },
    {
      id: 2,
      imageUrl: project2Image,
      description: 'Salesforce',
    },
    {
      id: 3,
      imageUrl: project3Image,
      description: 'Microsoft Azure',
    },
    {
      id: 4,
      imageUrl: project8Image,
      description: 'IBM Watson',
    },
    {
      id: 5,
      imageUrl: project5Image,
      description: 'Whatsapp Business',
    },
    {
      id: 6,
      imageUrl: project6Image,
      description: 'Microsoft Dynamics',
    },
    
    {
      id: 8,
      imageUrl: project4Image,
      description: 'Tableau',
    },  

    
    // Add more projects as needed
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll
    autoplay: true,
    arrows: false,
    autoplaySpeed: 3000, // Autoplay interval in milliseconds
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    prevArrow: null, // Remove the previous arrow
    nextArrow: null, // Remove the next arrow
  };

  return (
    <div className="projects-container">
      <h2 className="projects-heading">Our Partners</h2>
      <Slider {...sliderSettings}>
        {projects.map((project) => (
          <div key={project.id} className="project-item">
            <img src={project.imageUrl} alt={`Project ${project.id}`} className="project-image" />
            <p className="project-description" dangerouslySetInnerHTML={{ __html: project.description }} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Projects1;
