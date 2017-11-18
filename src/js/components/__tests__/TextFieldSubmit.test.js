import React from 'react';
import { mount, shallow } from 'enzyme';

import TextFieldSubmit from '../TextFieldSubmit';

describe('TextFieldSubmit', () => {
  let wrapper;
  const onSubmit = jest.fn();

  beforeEach(() => {
    wrapper = mount(
      <TextFieldSubmit
        onSubmit={onSubmit}
      />
    );
  });

  afterEach(() => {
    onSubmit.mockClear();
  });

  describe('user populates search field', () => {
    const value = '0x2BCe7bDD496d8E840E46795C1Be20bC6E9C7D1e5';

    beforeEach(() => {
      const input = wrapper.find('input').first();

      input.simulate('change', {
        target: { value }
      });
    });

    it('should update state property `address`', () => {
      expect(
        wrapper.state().address
      ).toEqual(value);
    });

    describe('and submits address by clicking on submit button', () => {
      beforeEach(() => {
        const submitButton = wrapper.find('.submit-button').first();
        submitButton.simulate('click');
      });

      it('should call prop `onSubmit` with inputted address', () => {
        const invocationArgs = onSubmit.mock.calls[0];
        expect(invocationArgs[0]).toEqual(value);
      });
    });
  });
});