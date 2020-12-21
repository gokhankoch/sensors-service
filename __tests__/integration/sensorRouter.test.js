const supertest = require('supertest');

const app = require('../../app');

const request = supertest(app);

describe('Sensor', () => {
  it('should be able to get all sensor', async () => {
    const response = await request.get('/api/v1/sensors').send();
    expect(response.status).toBe(200);
  });

  it('Create sensor', async () => {
    const response = await request.post('/api/v1/sensors').send({
      name: 'test123456',
      deviceID: '000000',
      devicetype: 'TempHum',
      temp: 10,
      hum: 10
    });
    expect(response.status).toBe(201);
  });
});
