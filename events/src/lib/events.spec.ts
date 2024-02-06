import { newUserConnectedEvent } from './events';

describe('events', () => {
  it('should work', () => {
    expect(newUserConnectedEvent('example userId')).toEqual({
      type: '[User] new user connected',
      userId: 'example userId',
    });
  });
});
