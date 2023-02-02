/* eslint-disable react/prop-types */

import React from 'react';

export const EduContainer = (props) => {
  return (
    <div className="education-container">
      <label htmlFor={'edu-facility-' + props.id}>Facility</label>
      <input
        id={'edu-facility-' + props.id}
        type="text"
        onChange={props.onFacilityChange}
        value={props.eduValues.facility}
      ></input>

      <label htmlFor={'edu-course-' + props.id}>
        Course of Studies / Degree
      </label>
      <input
        id={'edu-course-' + props.id}
        type="text"
        onChange={props.onCourseChange}
        value={props.eduValues.course}
      ></input>

      <div className="edu-date">
        <div className="edu-date-tile">
          <label htmlFor={'edu-begin-' + props.id}>Begin</label>
          <input
            id={'edu-begin-' + props.id}
            type="date"
            onChange={props.onBeginChange}
            value={props.eduValues.begin}
          ></input>
        </div>
        <div className="edu-date-tile">
          <label htmlFor={'edu-end-' + props.id}>End</label>
          <input
            id={'edu-end-' + props.id}
            type="date"
            onChange={props.onEndChange}
            value={props.eduValues.end}
          ></input>
        </div>
      </div>
    </div>
  );
};
