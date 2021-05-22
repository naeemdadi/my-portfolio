import React from 'react';
import Layout from '../../components/Layout';
import { SectionTitle, Pill } from '../../styles';
import { ProjectItem, ProjectTitle, SkillContainer, ProjectLinks } from './styles';

const Projects = ({ user }) => {

  console.log(user.projects)
  return (
    <Layout user={user}>
      <div>
        <SectionTitle>Projects</SectionTitle>
        <ul>
          {user.projects.map((project, i) => (
            <ProjectItem key={i}>
              <ProjectTitle>{project.name}</ProjectTitle>
              <p>{project.summary}</p>
              <SkillContainer>
                {[...project.languages, ...project.libraries].map((item, j) => (
                  <Pill key={j}>{item}</Pill>
                ))}
              </SkillContainer>
              <ProjectLinks>
                <div>
                    <p>GitHub Repo: </p><Pill key={i}><a style={{color: "inherit", textDecoration: "none"}} href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer noopener">{project.githubUrl}</a></Pill>
                </div>
                {project.url ? (
                  <div>
                    <p>Live Project Link: </p><Pill key={i}><a style={{color: "inherit", textDecoration: "none"}} href={project.url}
                    target="_blank"
                    rel="noreferrer noopener">{project.url}</a></Pill>
                </div>
                ) : (
                  <></>
                )}
                
            </ProjectLinks>
            </ProjectItem>
            
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default Projects;
