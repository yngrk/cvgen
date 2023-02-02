/* eslint-disable react/prop-types */
import React from 'react';

export const DisplayPersonalInfo = (props) => {
  return (
    <section id="personal-details">
      <div className="header">
        <div className="main">
          <div className="name">{props.personalInfo.name}</div>
          <div className="job-title">{props.personalInfo.title}</div>
        </div>
        <div className="sub">
          <div className="phone">{props.personalInfo.phone}</div>
          <div className="mail">{props.personalInfo.mail}</div>
          <div className="location">{props.personalInfo.location}</div>
        </div>
      </div>
      <div className="separator"></div>
      <div className="additional-info">
        <p>{props.personalInfo.additional}</p>
      </div>
    </section>
  );
};

export const DisplayWorkExperience = (props) => {
  return (
    <section id="work-experience">
      <div className="title">Work Experience</div>

      {props.workList.map((work) => {
        return (
          <WorkTile
            key={work.id}
            company={work.company}
            position={work.position}
            begin={work.begin}
            end={work.end}
            description={work.description}
          />
        );
      })}
    </section>
  );
};

export const DisplayEducation = (props) => {
  return (
    <section id="education">
      <div className="title">Education</div>

      {props.eduList.map((edu) => {
        return (
          <EduTile
            key={edu.id}
            facility={edu.facility}
            course={edu.course}
            begin={edu.begin}
            end={edu.end}
          />
        );
      })}
    </section>
  );
};

const WorkTile = (props) => {
  return (
    <div className="work-tile">
      <div className="header">
        <div className="position">{props.position}</div>
        <div className="data-container">
          <div className="company">{props.company}</div>
          <div>|</div>
          <div className="date">
            <span className="begin">{props.begin.split('-')[0]}</span>
            <span> - </span>
            <span className="end">{props.end.split('-')[0] || 'Present'}</span>
          </div>
        </div>
      </div>
      <div className="description">{props.description}</div>
    </div>
  );
};

const EduTile = (props) => {
  return (
    <div className="edu-tile">
      <div className="course">{props.course}</div>
      <div className="data-container">
        <div className="facility">{props.facility}</div>
        <div>|</div>
        <div className="date">
          <span className="begin">{props.begin.split('-')[0]}</span>
          <span> - </span>
          <span className="end">{props.end.split('-')[0] || 'Present'}</span>
        </div>
      </div>
    </div>
  );
};
