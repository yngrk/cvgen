import React, { Component } from 'react';
import './Builder.css';
import uniqid from 'uniqid';
import { EduContainer } from './EduContainer';
import { WorkContainer } from './WorkContainer';
import { PersonalDetails } from './PersonalDetailsContainer';
import {
  DisplayEducation,
  DisplayPersonalInfo,
  DisplayWorkExperience,
} from './ResultContainer';

export class Builder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      workList: [],
      eduList: [],
      personal: {
        name: '',
        title: '',
        phone: '',
        mail: '',
        location: '',
        additional: '',
      },
      showEditPage: true,
    };
  }

  submitBtnClick = (e) => {
    e.preventDefault();
    this.setState({
      showEditPage: !this.state.showEditPage,
    });
  };

  addWorkplace = () => {
    const id = uniqid();
    this.setState({
      workList: [
        ...this.state.workList,
        {
          id: id,
          company: '',
          position: '',
          begin: '',
          end: '',
          description: '',
        },
      ],
    });
  };

  removeWorkplace = () => {
    this.setState({
      workList: [...this.state.workList].slice(0, -1),
    });
  };

  addEducation = () => {
    const id = uniqid();
    this.setState({
      eduList: [
        ...this.state.eduList,
        {
          id: id,
          facility: '',
          course: '',
          begin: '',
          end: '',
        },
      ],
    });
  };

  removeEducation = () => {
    this.setState({
      eduList: [...this.state.eduList].slice(0, -1),
    });
  };

  handlePersonalInfo = (entryType, target) => {
    const value = target.value;
    const currentPersonalInfo = { ...this.state.personal };
    currentPersonalInfo[entryType] = value;
    this.setState({
      personal: currentPersonalInfo,
    });
  };

  handleWorkInputs(entryType, target) {
    const id = target.id.split('-')[2];
    const value = target.value;
    const currentWorkList = this.state.workList.slice();

    currentWorkList.map((work) => {
      if (work.id === id) {
        work[entryType] = value;
      }
    });

    this.setState({
      workList: currentWorkList,
    });
  }

  handleEducationInputs = (entryType, target) => {
    const id = target.id.split('-')[2];
    const value = target.value;
    const currentEducationList = this.state.eduList.slice();

    currentEducationList.map((edu) => {
      if (edu.id === id) {
        edu[entryType] = value;
      }
    });

    this.setState({
      eduList: currentEducationList,
    });
  };

  render() {
    if (!this.state.showEditPage) {
      return (
        <div id="result-container">
          <button id="edit" onClick={this.submitBtnClick}>
            Back to Edit Mode
          </button>
          <DisplayPersonalInfo personalInfo={this.state.personal} />
          <DisplayWorkExperience workList={this.state.workList} />
          <DisplayEducation eduList={this.state.eduList} />
        </div>
      );
    } else {
      return (
        // {FORM PAGE}
        <div id="builder-container">
          <form>
            <section>
              <div className="title">Personal Details</div>
              <PersonalDetails
                onNameChange={(e) => {
                  this.handlePersonalInfo('name', e.target);
                }}
                onTitleChange={(e) => {
                  this.handlePersonalInfo('title', e.target);
                }}
                onPhoneChange={(e) => {
                  this.handlePersonalInfo('phone', e.target);
                }}
                onMailChange={(e) => {
                  this.handlePersonalInfo('mail', e.target);
                }}
                onLocationChange={(e) => {
                  this.handlePersonalInfo('location', e.target);
                }}
                onAdditionalChange={(e) => {
                  this.handlePersonalInfo('additional', e.target);
                }}
                personalInfo={this.state.personal}
              />
            </section>

            <section>
              <div className="title">Work Experience</div>

              {/* WORK CONTAINER */}
              {this.state.workList.map((work) => {
                return (
                  <WorkContainer
                    id={work.id}
                    key={work.id}
                    onCompanyChange={(e) => {
                      this.handleWorkInputs('company', e.target);
                    }}
                    onPositionChange={(e) => {
                      this.handleWorkInputs('position', e.target);
                    }}
                    onBeginChange={(e) => {
                      this.handleWorkInputs('begin', e.target);
                    }}
                    onEndChange={(e) => {
                      this.handleWorkInputs('end', e.target);
                    }}
                    onDescriptionChange={(e) => {
                      this.handleWorkInputs('description', e.target);
                    }}
                    workValues={work}
                  />
                );
              })}

              <div className="btn-container">
                <span className="btn" onClick={this.addWorkplace}>
                  +
                </span>
                <span className="btn" onClick={this.removeWorkplace}>
                  −
                </span>
              </div>
            </section>

            <section>
              <div className="title">Education</div>

              {/* EDUCATION CONTAINER */}
              {this.state.eduList.map((edu) => {
                return (
                  <EduContainer
                    id={edu.id}
                    key={edu.id}
                    onFacilityChange={(e) => {
                      this.handleEducationInputs('facility', e.target);
                    }}
                    onCourseChange={(e) => {
                      this.handleEducationInputs('course', e.target);
                    }}
                    onBeginChange={(e) => {
                      this.handleEducationInputs('begin', e.target);
                    }}
                    onEndChange={(e) => {
                      this.handleEducationInputs('end', e.target);
                    }}
                    eduValues={edu}
                  />
                );
              })}

              <div className="btn-container">
                <span className="btn" onClick={this.addEducation}>
                  +
                </span>
                <span className="btn" onClick={this.removeEducation}>
                  −
                </span>
              </div>
            </section>

            <button onClick={this.submitBtnClick}>
              Generate super cool CV that gets me hired instantly!
            </button>
          </form>
        </div>
      );
    }
  }
}
