import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'


import { actLogIn } from '../action/index'

function Contact(props) {

    let { propLpgIn } = props

    const [inputForm, setInputForm] = useState({
        username: '',
        password: ''
      });
      const handleChangeInputForm = (event) => {
        const target = event.target
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = target.name
    // set giá trị biến không cần return (C.1)
        setInputForm(prev => ({
                ...prev,
                [name]: value
        }))
    }
    function checkLogin (e) {
        propLpgIn(inputForm)
        console.log(inputForm)
        e.preventDefault()
    }
    // Adding script tag to React/JSX
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "js/jqBootstrapValidation.js";
        script.async = true;
        document.body.appendChild(script);
        return () => {
          document.body.removeChild(script);
        }
      }, [])
      useEffect(() => {
        const script = document.createElement('script');
        script.src = "js/contact_me.js";
        script.async = true;
        document.body.appendChild(script);
        return () => {
          document.body.removeChild(script);
        }
      }, []);
  return (
    <div className="contact">
        {/* Page Header */}
        <header className="masthead" style={{backgroundImage: 'url("img/contact-bg.jpg")'}}>
            <div className="overlay" />
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-10 mx-auto">
                        <div className="page-heading">
                            <h1>Contact Login</h1>
                            <span className="subheading">Login now to see the post</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        {/* Main Content */}
        <div className="container">
            <div className="row">
                <div className="col-lg-8 col-md-10 mx-auto">
                    <p>Want to login to see post? Fill out the form below to login</p>

                    <form onSubmit={checkLogin}>
                        <div className="control-group">
                            <div className="form-group floating-label-form-group controls">
                                <label>Name</label>
                                <input type="text" className="form-control" placeholder="Name" id="username" name="username" required data-validation-required-message="Please enter your name." value={inputForm.username} onChange={handleChangeInputForm} />
                            </div>
                        </div>
                        <div className="control-group">
                            <div className="form-group floating-label-form-group controls">
                                <label>Pass</label>
                                <input type="password" className="form-control" placeholder="Password" id="password" name="password" required data-validation-required-message="Please enter password." value={inputForm.password} onChange={handleChangeInputForm} />
                            </div>
                        </div>
                        <br />
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary" id="sendMessageButton">Login</button>
                        </div>
                    </form>


                    {/* Contact Form - Enter your email address on line 19 of the mail/contact_me.php file to make this form work. */} {/* WARNING: Some web hosts do not allow emails to be sent through forms to common mail hosts like Gmail or Yahoo. It's recommended that you use a private domain email address! */} {/* To use the contact form, your site must be on a live web host with PHP! The form will not work locally! */}

                    {/* <form name="sentMessage" id="contactForm" noValidate>
                        <div className="control-group">
                            <div className="form-group floating-label-form-group controls">
                                <label>Name</label>
                                <input type="text" className="form-control" placeholder="Name" id="name" required data-validation-required-message="Please enter your name." />
                                <p className="help-block text-danger" />
                            </div>
                        </div>
                        <div className="control-group">
                            <div className="form-group floating-label-form-group controls">
                                <label>Email Address</label>
                                <input type="email" className="form-control" placeholder="Email Address" id="email" required data-validation-required-message="Please enter your email address." />
                                <p className="help-block text-danger" />
                            </div>
                        </div>
                        <div className="control-group">
                            <div className="form-group col-xs-12 floating-label-form-group controls">
                                <label>Phone Number</label>
                                <input type="tel" className="form-control" placeholder="Phone Number" id="phone" required data-validation-required-message="Please enter your phone number." />
                                <p className="help-block text-danger" />
                            </div>
                        </div>
                        <div className="control-group">
                            <div className="form-group floating-label-form-group controls">
                                <label>Message</label>
                                <textarea rows={5} className="form-control" placeholder="Message" id="message" required data-validation-required-message="Please enter a message." defaultValue={ ""} />
                                <p className="help-block text-danger" />
                            </div>
                        </div>
                        <br />
                        <div id="success" />
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary" id="sendMessageButton">Send</button>
                        </div>
                    </form> */}
                </div>
            </div>
        </div>
        <hr />
    </div>
  );
}


const mapStateToProps = (state /*, ownProps*/) => {
    return {

    }
  }

  const mapDispatchToProps = dispatch => {
        return {
            propLpgIn: (userInfo) => {
                dispatch(actLogIn(userInfo))
            }
        }
    }

export default connect(
mapStateToProps,
mapDispatchToProps
)(Contact)
