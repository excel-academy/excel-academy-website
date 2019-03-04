import React, { useState } from 'react';
import PropTypes from 'prop-types';
import encode from '../../utils/encode';

const FormOpenHouse = ({ buttonText, program }) => {
  const [formState, setFormState] = useState({ program });
  const [formError, setFormError] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    console.log(formState);
    fetch('/?no-cache=1', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...formState,
      }),
    })
      .then(() => setFormSubmitted(true))
      .catch(error => setFormError(error));
  }

  return (
    <>
      {formSubmitted && (
        <p>Thank you for your submission. We will be in touch soon.</p>
      )}
      {!formSubmitted && (
        <form
          name="open-house"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
        >
          {formError && (
            <div
              css={{
                backgroundColor: 'red',
                color: 'white',
                padding: '1em',
                marginBottom: '1em',
              }}
            >
              {formError}
            </div>
          )}
          <input
            name="bot-field"
            onChange={handleChange}
            css={{
              display: 'none',
            }}
          />
          <input type="hidden" name="form-name" value="open-house" />
          <input type="text" name="name" placeholder="Name" onChange={handleChange} />
          <input type="email" name="email" placeholder="Email" onChange={handleChange} />
          <input type="hidden" name="program" value={program} />
          <input type="submit" value={buttonText} />
        </form>
      )}
    </>
  )
};

FormOpenHouse.propTypes = {
  buttonText: PropTypes.string,
  program: PropTypes.string,
};

FormOpenHouse.defaultProps = {
  buttonText: 'Sign up',
  program: '',
};

export default FormOpenHouse;
