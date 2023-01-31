/* eslint-disable react/prop-types */

import React, { Component } from 'react';

export class EduContainer extends Component {
  render() {
    const { id } = this.props;

    return (
      <div className="education-container">
        <label htmlFor={'edu-facility-' + id}>Facility</label>
        <input
          id={'edu-facility-' + id}
          type="text"
          onChange={this.props.onFacilityChange}
          value={this.props.eduValues.facility}
        ></input>

        <label htmlFor={'edu-course-' + id}>Course of Studies / Degree</label>
        <input
          id={'edu-course-' + id}
          type="text"
          onChange={this.props.onCourseChange}
          value={this.props.eduValues.course}
        ></input>

        <div className="edu-date">
          <div className="edu-date-tile">
            <label htmlFor={'edu-begin-' + id}>Begin</label>
            <input
              id={'edu-begin-' + id}
              type="date"
              onChange={this.props.onBeginChange}
              value={this.props.eduValues.begin}
            ></input>
          </div>
          <div className="edu-date-tile">
            <label htmlFor={'edu-end-' + id}>End</label>
            <input
              id={'edu-end-' + id}
              type="date"
              onChange={this.props.onEndChange}
              value={this.props.eduValues.end}
            ></input>
          </div>
        </div>
      </div>
    );
  }
}
