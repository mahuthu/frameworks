import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import project1Image from '../../Dataset/default2.jpg'; // Import images for projects
import project2Image from '../../Dataset/default2.jpg';
import project3Image from '../../Dataset/default2.jpg';
import "./Project.css"
// Import other project images as needed

const Projects = () => {
  const projects = [
    {
      id: 1,
      imageUrl: project1Image,
      description: 'Project 1 Description',
    },
    {
      id: 2,
      imageUrl: project2Image,
      description: 'Project 2 Description',
    },
    {
      id: 3,
      imageUrl: project3Image,
      description: 'Project 3 Description',
    },
    // Add more projects as needed
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll
    autoplay: true,
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
  };

  return (
    <div className="projects-container">
      <h2 className="projects-heading">Our Projects</h2>
      <Slider {...sliderSettings}>
        {projects.map((project) => (
          <div key={project.id} className="project-item">
            <img src={project.imageUrl} alt={`Project ${project.id}`} className="project-image" />
            <p className="project-description">{project.description}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Projects;