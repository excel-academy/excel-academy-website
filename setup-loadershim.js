/* eslint-disable no-underscore-dangle */
global.___loader = {
  enqueue: jest.fn(),
};

/* eslint-disable import/no-extraneous-dependencies */
global.fetch = require('jest-fetch-mock');
