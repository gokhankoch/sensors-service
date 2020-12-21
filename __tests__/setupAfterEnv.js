/* eslint-disable no-undef */
require('dotenv').config();

const databaseHelper = require('../utils/database');

beforeAll(() => {
  return databaseHelper.connect();
});

beforeEach(() => {
  return databaseHelper.truncate();
});

afterAll(() => {
  return databaseHelper.disconnect();
});