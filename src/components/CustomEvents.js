import * as utils from './../utilities';
import React from 'react';
import './forms.css';

class CustomEvents extends React.Component {

    state = {
        eventName: "",
        optionalProperties: "",
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    handleClick = (e) => {
        // Call utilities based on submit button id to triage request to braze
        e.preventDefault();
        utils.logCustomEvent(this.state.eventName, this.state.optionalProperties);

    }

    render() {
        return (
            <div className="Input-Group">
                <form className="form-group" onSubmit={this.handleClick}>

                    <div className="form-line">
                        <label htmlFor="event_name" className="Label">Event Name</label>
                        <input className="InputElement" id="event_name" required type="text" name="eventName" onChange={this.handleChange} value={this.state.eventName} />
                    </div>
                    <div className="form-line">
                        <label htmlFor="properties" className="Label">[Optional] Event Properties (JSON)</label>
                        <textarea className="InputElement" id="properties"  type="text" name="optionalProperties" onChange={this.handleChange} value={this.state.optionalProperties} />

                    </div>


                    <div className="form-line">
                        <button type="submit" className="btn btn-primary" id="event_button">Submit</button>

                    </div>
                </form>
            </div>

        );
    }
}

export default CustomEvents;