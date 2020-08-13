import React, {Component} from 'react';

class Field extends Component {
    render() {
        return (
            <div className="form-group">
                {this.props.elementName === 'input'
                    ? <input
                            className="form-control"
                            id={this.props.name}
                            type={this.props.type}
                            placeholder={this.props.placeholder}
                            required="required"
                            vlaue={this.props.value}
                            onChange={e => this.props.onChange(e)}
                            data-validation-required-message="Please enter your name.
                    "/>
                    : <textarea
                        className="form-control"
                        id={this.props.name}
                        placeholder={this.props.placeholder}
                        required="required"
                        vlaue={this.props.value}
                        onChange={e => this.props.onChange(e)}
                        data-validation-required-message="Please enter a message."/>
}
                <p className="help-block text-danger"></p>
            </div>
        );
    };
};

export default Field;