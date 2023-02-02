/* eslint-disable react/prop-types */

import React from 'react';

export const PersonalDetails = (props) => {
  return (
    <>
      <label htmlFor="fullName">Full Name</label>
      <input
        id="fullName"
        type="text"
        onChange={props.onNameChange}
        value={props.personalInfo.name}
      ></input>

      <label htmlFor="jobTitle">Job Title</label>
      <input
        id="pos"
        type="text"
        onChange={props.onTitleChange}
        value={props.personalInfo.title}
      ></input>

      <label htmlFor="tel">Phone</label>
      <input
        id="tel"
        type="tel"
        onChange={props.onPhoneChange}
        value={props.personalInfo.phone}
      ></input>

      <label htmlFor="mail">Mail</label>
      <input
        id="mail"
        type="email"
        onChange={props.onMailChange}
        value={props.personalInfo.mail}
      ></input>

      <label htmlFor="loc">Location</label>
      <input
        id="loc"
        type="text"
        onChange={props.onLocationChange}
        value={props.personalInfo.location}
      ></input>

      <label htmlFor="info">Additional Info</label>
      <textarea
        id="info"
        onChange={props.onAdditionalChange}
        value={props.personalInfo.additional}
      ></textarea>
    </>
  );
};
