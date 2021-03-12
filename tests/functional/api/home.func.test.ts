import request from 'supertest';
import app from '../../../src/app';

describe('Home', () => {
  it('returns welcome greeting', async () => {
    const response: request.Response = await request(app).get('/');

    expect(response.status).toEqual(200);
    expect(response.text).toEqual('Hello World !');
  });
});
