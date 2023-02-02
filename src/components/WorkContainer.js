/* eslint-disable react/prop-types */

import React from 'react';

export const WorkContainer = (props) => {
  return (
    <div className="work-container">
      <label htmlFor={'work-company-' + props.id}>Company</label>
      <input
        id={'work-company-' + props.id}
        type="text"
        onChange={props.onCompanyChange}
        value={props.workValues.company}
      ></input>

      <label htmlFor={'work-position-' + props.id}>Position</label>
      <input
        id={'work-position-' + props.id}
        type="text"
        onChange={props.onPositionChange}
        value={props.workValues.position}
      ></input>

      <div className="work-date">
        <div className="work-date-tile">
          <label htmlFor={'work-begin-' + props.id}>Begin</label>
          <input
            id={'work-begin-' + props.id}
            type="date"
            onChange={props.onBeginChange}
            value={props.workValues.begin}
          ></input>
        </div>
        <div className="work-date-tile">
          <label htmlFor={'work-end-' + props.id}>End</label>
          <input
            id={'work-end-' + props.id}
            type="date"
            onChange={props.onEndChange}
            value={props.workValues.end}
          ></input>
        </div>
      </div>

      <label htmlFor={'work-descr-' + props.id}>Description</label>
      <textarea
        id={'work-descr-' + props.id}
        onChange={props.onDescriptionChange}
        value={props.workValues.description}
      ></textarea>
    </div>
  );
};
