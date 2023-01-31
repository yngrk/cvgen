/* eslint-disable react/prop-types */

import React, { Component } from 'react';

export class PersonalDetails extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <label htmlFor="fullName">Full Name</label>
        <input
          id="fullName"
          type="text"
          onChange={this.props.onNameChange}
          value={this.props.personalInfo.name}
        ></input>

        <label htmlFor="jobTitle">Job Title</label>
        <input
          id="pos"
          type="text"
          onChange={this.props.onTitleChange}
          value={this.props.personalInfo.title}
        ></input>

        <label htmlFor="tel">Phone</label>
        <input
          id="tel"
          type="tel"
          onChange={this.props.onPhoneChange}
          value={this.props.personalInfo.phone}
        ></input>

        <label htmlFor="mail">Mail</label>
        <input
          id="mail"
          type="email"
          onChange={this.props.onMailChange}
          value={this.props.personalInfo.mail}
        ></input>

        <label htmlFor="loc">Location</label>
        <input
          id="loc"
          type="text"
          onChange={this.props.onLocationChange}
          value={this.props.personalInfo.location}
        ></input>

        <label htmlFor="info">Additional Info</label>
        <textarea
          id="info"
          onChange={this.props.onAdditionalChange}
          value={this.props.personalInfo.additional}
        ></textarea>
      </>
    );
  }
}
