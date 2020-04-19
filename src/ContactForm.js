// Customize this 'myform.js' script and add it to your JS bundle.
// Then import it with 'import MyForm from "./myform.js"'.
// Finally, add a <MyForm/> element whereever you wish to display the form.

import React from "react";
import {
  Text
} from 'rebass';
export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <div>
        <Text style={{padding: '1rem'}} className='large'>Contact me!</Text>
        <hr />
        <br />
        <form
            onSubmit={this.submitForm}
            action="https://formspree.io/xrgawlvk"
            method="POST"
        >
            {/* <!-- add your custom form HTML here --> */}
            <Text className='lead'>Email Address:</Text>
            <input type="email" name="email" />
            <Text className='lead'>Message:</Text>
            <input type="text" name="message" />
            {status === "SUCCESS" ? <div className='alert alert-success'>Thanks!</div> : <button className='btn btn-dark'>Submit</button>}
            {status === "ERROR" && <div className='alert alert-danger'>Ooops! There was an error.</div>}
        </form>
      </div>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}