import React, { Component } from 'react';
import Form from './components/forms/Form';
import {Text, TextArea} from './components/forms/Text';
import Button from './components/forms/Buttons';
import * as yup from 'yup';
import {setLocale} from 'yup';

class App extends Component {

  state = {
    firstName: "",
    surName: "",
    message: ""
  }

  handleOnSubmit(e) {
    e.preventDefault();

    setLocale({
      string: {
        max: 'Beskeden må maksimalt være 200'
      }
    });

    const textSchema = yup.object().shape({
      firstName: yup.string().required(),
      surName: yup.string().required(),
      message: yup.string().max(200)
    });

    const isValidForm = textSchema.isValid(this.state).then(valid => {
      console.log(valid)
    });

    textSchema.validate(this.state, { abortEarly: false }).catch(error => {
      console.log(error)
    });
  }

  render() {
    console.log(this.state)

    return (
      <div className="on-time-wrapper">
        <Form onSubmit={e => this.handleOnSubmit(e)}>
          <Text name="firstName" label="Navn:" value={this.state.firstName} onChange={e => this.setState({[e.target.name]: e.target.value})} />
          <Text name="surName" label="Efter navn:" value={this.state.surName} onChange={e => this.setState({[e.target.name]: e.target.value})} />
          <TextArea name="message" label="Besked:" value={this.state.message} onChange={e => this.setState({[e.target.name]: e.target.value})} />
          <Button text="Send" />
        </Form>
      </div>
    );
  }
}

export default App;
