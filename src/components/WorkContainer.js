/* eslint-disable react/prop-types */

import React, { Component } from 'react';

export class WorkContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { id } = this.props;

    return (
      <div className="work-container">
        <label htmlFor={'work-company-' + id}>Company</label>
        <input
          id={'work-company-' + id}
          type="text"
          onChange={this.props.onCompanyChange}
          value={this.props.workValues.company}
        ></input>

        <label htmlFor={'work-position-' + id}>Position</label>
        <input
          id={'work-position-' + id}
          type="text"
          onChange={this.props.onPositionChange}
          value={this.props.workValues.position}
        ></input>

        <div className="work-date">
          <div className="work-date-tile">
            <label htmlFor={'work-begin-' + id}>Begin</label>
            <input
              id={'work-begin-' + id}
              type="date"
              onChange={this.props.onBeginChange}
              value={this.props.workValues.begin}
            ></input>
          </div>
          <div className="work-date-tile">
            <label htmlFor={'work-end-' + id}>End</label>
            <input
              id={'work-end-' + id}
              type="date"
              onChange={this.props.onEndChange}
              value={this.props.workValues.end}
            ></input>
          </div>
        </div>

        <label htmlFor={'work-descr-' + id}>Description</label>
        <textarea
          id={'work-descr-' + id}
          onChange={this.props.onDescriptionChange}
          value={this.props.workValues.description}
        ></textarea>
      </div>
    );
  }
}
