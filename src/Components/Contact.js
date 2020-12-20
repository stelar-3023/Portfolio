import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import * as emailjs from "emailjs-com";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      subject: "",
      message: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetForm = this.resetForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { name, email, subject, message } = this.state;
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Steve Larsen",
      subject,
      message: message,
    };
    emailjs.send(
      "gmail",
      "portfolio_contact",
      templateParams,
      "user_9I2Def0ojqmxFU8gsRbhX"
    );
    this.resetForm();
  }

  resetForm() {
    this.setState({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  render() {
    const { name, email, subject, message } = this.state;
    if (this.props.data) {
      var my_name = this.props.data.name;
      var my_city = this.props.data.address.city;
      var my_state = this.props.data.address.state;
      var my_phone = this.props.data.phone;
      var my_email = this.props.data.email;
      var my_message = this.props.data.contactmessage;
    }

    return (
      <section id="contact">
      <Form onSubmit={this.handleSubmit}>
        <FormGroup className="row section-head">
          <div className="two columns header-col">
            <h1>
              <span>Get In Touch.</span>
            </h1>
          </div>
          <div className="ten columns">
            <p className="lead">{my_message}</p>
          </div>
          <div className="row">
            <div className="eight columns" id="contactForm" name="contactForm">
              <FormGroup>
                <Label for="contactName">
                  Name<span className="required">*</span>
                </Label>
                <Input
                  type="text"
                  name="name"
                  id="contactName"
                  size="35"
                  placeholder="First and last name"
                  value={name}
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="contactEmail">
                  Email<span className="required">*</span>
                </Label>
                <Input
                  type="text"
                  name="email"
                  id="contactEmail"
                  size="35"
                  placeholder="Email address"
                  value={email}
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="contactSubject">Subject</Label>
                <Input
                  type="text"
                  name="subject"
                  id="contactSubject"
                  size="35"
                  placeholder="Subject"
                  value={subject}
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="contactMessage">Message</Label>
                <Input
                  type="textarea"
                  name="message"
                  id="contactMessage"
                  size="35"
                  placeholder="Tell me more about..."
                  value={message}
                  onChange={this.handleChange}
                />
                <Button className="submit">Submit</Button>
              </FormGroup>
            </div>
            <aside>
              <div className="widget widget_contact">
                <h4>Address and Phone</h4>
                <p className="address">
                  {my_name}
                  <br />
                  {my_city}, {my_state}
                  <br />
                  <span>{my_phone}</span>
                  <br />
                  <a href={`mailto:${my_email}`}>slarsen-3@att.net</a>
                </p>
              </div>
            </aside>
          </div>
        </FormGroup>
      </Form>
      </section>
    );
  }
}

export default Contact;
