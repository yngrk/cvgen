import React, { useState } from 'react';
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

export const Builder = () => {
  const [workList, setWorkList] = useState([]);
  const [eduList, setEduList] = useState([]);
  const [showEditPage, setShowEditPage] = useState(true);
  const [personal, setPersonal] = useState({
    name: '',
    title: '',
    phone: '',
    mail: '',
    location: '',
    additional: '',
  });

  const submitBtnClick = (e) => {
    e.preventDefault();
    setShowEditPage(!showEditPage);
  };

  const addWorkplace = () => {
    const id = uniqid();
    setWorkList([
      ...workList,
      {
        id: id,
        company: '',
        position: '',
        begin: '',
        end: '',
        description: '',
      },
    ]);
  };

  const removeWorkplace = () => {
    setWorkList([...workList].slice(0, -1));
  };

  const addEducation = () => {
    const id = uniqid();
    setEduList([
      ...eduList,
      {
        id: id,
        facility: '',
        course: '',
        begin: '',
        end: '',
      },
    ]);
  };

  const removeEducation = () => {
    setEduList([...eduList].slice(0, -1));
  };

  const handlePersonalInfo = (entryType, target) => {
    const value = target.value;
    const currentPersonalInfo = { ...personal };
    currentPersonalInfo[entryType] = value;
    setPersonal(currentPersonalInfo);
  };

  const handleWorkInputs = (entryType, target) => {
    const id = target.id.split('-')[2];
    const value = target.value;
    const currentWorkList = workList.slice();

    currentWorkList.map((work) => {
      if (work.id === id) {
        work[entryType] = value;
      }
    });

    setWorkList(currentWorkList);
  };

  const handleEducationInputs = (entryType, target) => {
    const id = target.id.split('-')[2];
    const value = target.value;
    const currentEducationList = eduList.slice();

    currentEducationList.map((edu) => {
      if (edu.id === id) {
        edu[entryType] = value;
      }
    });

    setEduList(currentEducationList);
  };

  if (!showEditPage) {
    return (
      <div id="result-container">
        <button id="edit" onClick={submitBtnClick}>
          Back to Edit Mode
        </button>
        <DisplayPersonalInfo personalInfo={personal} />
        <DisplayWorkExperience workList={workList} />
        <DisplayEducation eduList={eduList} />
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
                handlePersonalInfo('name', e.target);
              }}
              onTitleChange={(e) => {
                handlePersonalInfo('title', e.target);
              }}
              onPhoneChange={(e) => {
                handlePersonalInfo('phone', e.target);
              }}
              onMailChange={(e) => {
                handlePersonalInfo('mail', e.target);
              }}
              onLocationChange={(e) => {
                handlePersonalInfo('location', e.target);
              }}
              onAdditionalChange={(e) => {
                handlePersonalInfo('additional', e.target);
              }}
              personalInfo={personal}
            />
          </section>

          <section>
            <div className="title">Work Experience</div>

            {/* WORK CONTAINER */}
            {workList.map((work) => {
              return (
                <WorkContainer
                  id={work.id}
                  key={work.id}
                  onCompanyChange={(e) => {
                    handleWorkInputs('company', e.target);
                  }}
                  onPositionChange={(e) => {
                    handleWorkInputs('position', e.target);
                  }}
                  onBeginChange={(e) => {
                    handleWorkInputs('begin', e.target);
                  }}
                  onEndChange={(e) => {
                    handleWorkInputs('end', e.target);
                  }}
                  onDescriptionChange={(e) => {
                    handleWorkInputs('description', e.target);
                  }}
                  workValues={work}
                />
              );
            })}

            <div className="btn-container">
              <span className="btn" onClick={addWorkplace}>
                +
              </span>
              <span className="btn" onClick={removeWorkplace}>
                −
              </span>
            </div>
          </section>

          <section>
            <div className="title">Education</div>

            {/* EDUCATION CONTAINER */}
            {eduList.map((edu) => {
              return (
                <EduContainer
                  id={edu.id}
                  key={edu.id}
                  onFacilityChange={(e) => {
                    handleEducationInputs('facility', e.target);
                  }}
                  onCourseChange={(e) => {
                    handleEducationInputs('course', e.target);
                  }}
                  onBeginChange={(e) => {
                    handleEducationInputs('begin', e.target);
                  }}
                  onEndChange={(e) => {
                    handleEducationInputs('end', e.target);
                  }}
                  eduValues={edu}
                />
              );
            })}

            <div className="btn-container">
              <span className="btn" onClick={addEducation}>
                +
              </span>
              <span className="btn" onClick={removeEducation}>
                −
              </span>
            </div>
          </section>

          <button onClick={submitBtnClick}>
            Generate super cool CV that gets me hired instantly!
          </button>
        </form>
      </div>
    );
  }
};
