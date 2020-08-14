import React, {Component} from 'react';
import Field from '../Common/Field';
import {withFormik} from 'formik';
import * as Yup from 'yup';


const fields = {
    sections: [
        [
            {
                name: 'name',
                elementName: 'input',
                type: 'text',
                placeholder: 'Your name'
            }, {
                name: 'email',
                elementName: 'input',
                type: 'email',
                placeholder: 'Your email'
            }, {
                name: 'phone',
                elementName: 'input',
                type: 'text',
                placeholder: 'Your phone number'
            }
        ],
        [
            {
                name: 'message',
                elementName: 'textarea',
                type: 'text',
                placeholder: 'Type your name'
            }
        ]
    ]
};

class Contact extends Component {

    render() {
        return (
            <div>
                <section className="page-section" id="contact">
                    <div className="container">
                        <div className="text-center">
                            <h2 className="section-heading text-uppercase">Contact Us</h2>
                            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                        </div>
                        <form className="contactForm" name="sentMessage" novalidate="novalidate" onSubmit={this.props.handleSubmit}>
                            <div className="row align-items-stretch mb-5 text-center">

                                {fields
                                    .sections
                                    .map((section, sectionIndex) => {
                                        console.log("Rendaring section ", section, "with", sectionIndex)
                                        return (
                                            <div className="col-md-6">
                                                <div className="form-group form-group-textarea mb-md-0 " key={sectionIndex}>
                                                    {section.map((field, i) => {
                                                        return <Field
                                                            {...field}
                                                            key={i}
                                                            value= {this.props.values[field.name]}
                                                            name={field.name}
                                                            onChange={this.props.handleChange}
                                                            onBlur={this.props.handleBlur}
                                                            touched={(this.props.touched[field.name])}
                                                            errors={this.props.errors[field.name]}
                                                        />
                                                    })
}
                                                </div>
                                            </div>
                                        )
                                    })
}
                            </div>
                            <div className="text-center">
                                <div id="success"></div>
                                <button
                                    className="btn btn-primary btn-xl text-uppercase"
                                    type="submit" onClick={e => this.submitForm}>Send Message</button>
                            </div>
                        </form>
                    </div>
                </section>

            </div>
        );
    };
};

export default withFormik({
    mapPropsToValues : () => ({
        name : '',
        email : '',
        phone : '',
        message : ''
    }),

    validationSchema : Yup.object().shape({
        name : Yup.string().min(5, 'Full name please').required('You must give us your name.'),
        email : Yup.string().email("You need to give us a valid email"),
        phone : Yup.string().min(11, 'Please provide 11 digits phone number').max(15, 'Your Phone number is too long').required("We need your phone number to reach you"),
        message : Yup.string().min(50, 'We need more information about you').required('Message is required')
    }),

    handleSubmit: (values, {setSubmitting}) => {
        console.log("VLUES", values);
        alert("You've submitted the form", JSON.stringify(values));
    }
})(Contact);