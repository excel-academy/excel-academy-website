import React from 'react';
import {
  render, fireEvent, act, waitForElement,
} from '@testing-library/react';
import FormOpenHouse from './form-open-house';

describe('FormOpenHouse', () => {
  it('renders correctly', () => {
    const { asFragment } = render(
      <FormOpenHouse />,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders correctly with button text', () => {
    const { asFragment } = render(
      <FormOpenHouse buttonText="Hit the button" />,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders correctly with program', () => {
    const { asFragment } = render(
      <FormOpenHouse program="new program" />,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should accept a name', () => {
    const utils = render(<FormOpenHouse />);
    const input = utils.getByLabelText('Name');
    fireEvent.change(input, { target: { value: 'hello' } });
    expect(input.value).toBe('hello');
  });

  it('should accept an email', () => {
    const utils = render(<FormOpenHouse />);
    const input = utils.getByLabelText('Email');
    fireEvent.change(input, { target: { value: 'hello@world.com' } });
    expect(input.value).toBe('hello@world.com');
  });

  it('should not submit a blank form', () => {
    const utils = render(<FormOpenHouse />);
    const button = utils.getByText('Sign up');
    fireEvent.click(button);
    expect(utils.queryByText('Sign up')).toBeInTheDocument();
  });

  it('should submit the form', async () => {
    fetch.resetMocks();
    fetch.mockResponseOnce(JSON.stringify({ data: '12345' }));
    const { getByLabelText, getByText, queryByText } = render(<FormOpenHouse />);
    const name = getByLabelText('Name');
    fireEvent.change(name, { target: { value: 'hello' } });
    const email = getByLabelText('Email');
    fireEvent.change(email, { target: { value: 'hello@world.com' } });
    const button = getByText('Sign up');
    act(() => {
      fireEvent.click(button);
    });
    expect(fetch.mock.calls.length).toEqual(1);
    expect(fetch.mock.calls[0][0]).toEqual('/?no-cache=1');
    const [thankYouElement, buttonElement] = await waitForElement(
      () => [
        getByText('Thank you for your submission. We will be in touch soon.'),
        queryByText('Sign up'),
      ],
    );
    expect(thankYouElement).toBeInTheDocument();
    expect(buttonElement).not.toBeInTheDocument();
  });

  it('should show a message on error', async () => {
    fetch.resetMocks();
    fetch.mockReject(new Error('fake error message'));
    const { getByLabelText, getByText, queryByText } = render(<FormOpenHouse />);
    const name = getByLabelText('Name');
    fireEvent.change(name, { target: { value: 'hello' } });
    const email = getByLabelText('Email');
    fireEvent.change(email, { target: { value: 'hello@world.com' } });
    const button = getByText('Sign up');
    act(() => {
      fireEvent.click(button);
    });
    expect(fetch.mock.calls.length).toEqual(1);
    expect(fetch.mock.calls[0][0]).toEqual('/?no-cache=1');
    const [errorMessage, thankYouElement, buttonElement] = await waitForElement(
      () => [
        getByText('fake error message'),
        queryByText('Thank you for your submission. We will be in touch soon.'),
        queryByText('Sign up'),
      ],
    );
    expect(errorMessage).toBeInTheDocument();
    expect(thankYouElement).not.toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });
});
