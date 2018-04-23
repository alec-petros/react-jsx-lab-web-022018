import React from 'react'


class RegistrationForm extends React.Component {
  render() {
    return (
        <form class="registration-form" action="index.html" method="post">
          <label>Name: </label>
          <input type="text" /><br />
          <label>Password:</label>
          <input type="password" /><br />
          <button type="submit" name="button">Submit</button>
        </form>
    )
  }
}

export default RegistrationForm
