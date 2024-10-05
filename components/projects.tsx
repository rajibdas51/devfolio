import { projectsData } from '@/lib/data';
import React from 'react';

const Projects = () => {
  return <div>Projects</div>;
};

export default Projects;

type ProjectProps = (typeof projectsData)[number];
funciton Project({title,description,tags,imageUrl}:ProjectProps){
 return <div>{title}</div>
}
