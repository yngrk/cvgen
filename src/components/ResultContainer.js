/* eslint-disable react/prop-types */
import React, { Component } from 'react';

export class DisplayPersonalInfo extends Component {
  render() {
    return (
      <section id="personal-details">
        <div className="header">
          <div className="main">
            <div className="name">{this.props.personalInfo.name}</div>
            <div className="job-title">{this.props.personalInfo.title}</div>
          </div>
          <div className="sub">
            <div className="phone">{this.props.personalInfo.phone}</div>
            <div className="mail">{this.props.personalInfo.mail}</div>
            <div className="location">{this.props.personalInfo.location}</div>
          </div>
        </div>
        <div className="separator"></div>
        <div className="additional-info">
          <p>{this.props.personalInfo.additional}</p>
        </div>
      </section>
    );
  }
}

export class DisplayWorkExperience extends Component {
  render() {
    return (
      <section id="work-experience">
        <div className="title">Work Experience</div>

        {this.props.workList.map((work) => {
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
  }
}

export class DisplayEducation extends Component {
  render() {
    return (
      <section id="education">
        <div className="title">Education</div>

        {this.props.eduList.map((edu) => {
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
  }
}

class WorkTile extends Component {
  render() {
    return (
      <div className="work-tile">
        <div className="header">
          <div className="position">{this.props.position}</div>
          <div className="data-container">
            <div className="company">{this.props.company}</div>
            <div>|</div>
            <div className="date">
              <span className="begin">{this.props.begin.split('-')[0]}</span>
              <span> - </span>
              <span className="end">
                {this.props.end.split('-')[0] || 'Present'}
              </span>
            </div>
          </div>
        </div>
        <div className="description">{this.props.description}</div>
      </div>
    );
  }
}

class EduTile extends Component {
  render() {
    return (
      <div className="edu-tile">
        <div className="course">{this.props.course}</div>
        <div className="data-container">
          <div className="facility">{this.props.facility}</div>
          <div>|</div>
          <div className="date">
            <span className="begin">{this.props.begin.split('-')[0]}</span>
            <span> - </span>
            <span className="end">
              {this.props.end.split('-')[0] || 'Present'}
            </span>
          </div>
        </div>
      </div>
    );
  }
}
