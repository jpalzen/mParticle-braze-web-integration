import * as utils from './../utilities';
import React from 'react';
import './forms.css';

class CustomAttributes extends React.Component {

    state = {
        attributeName: "",
        attributeValue: "",
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    handleClick = (e) => {
        // Call utilities based on submit button id to triage request to braze
        e.preventDefault();
        utils.logCustomAttribute(this.state.attributeName,this.state.attributeValue);

    }


    render() {
        return (

            <div className="Input-Group">

                <form className="form-group" onSubmit={this.handleClick}>

                    <div className="form-line">
                        <label htmlFor="attribute_name" className="Label">Attribute Name</label>
                        <input className="InputElement" id="attribute_name" type="text" name="attributeName" required onChange={this.handleChange} value={this.state.attributeName} />
                    </div>
                    <div className="form-line">
                        <label htmlFor="attribute_value" className="Label">Attribute Name</label>
                        <input className="InputElement" id="attribute_value" type="text" name="attributeValue" required onChange={this.handleChange} value={this.state.attributeValue} />
                    </div>
                    <div className="form-line">
                        <button type='submit' className="btn btn-primary" id="attribute_button" >Submit</button>
                    </div>

                </form>

            </div>
        );

    }
}
export default CustomAttributes;