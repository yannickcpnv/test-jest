import { Container } from 'typedi';
import { GreetingService } from '../../../src/services/greeting.service';

describe('GreetingService', () => {
  let greetingService: GreetingService;

  beforeEach(() => {
    greetingService = Container.get(GreetingService);
  });

  it('is created', () => {
    expect(greetingService).toBeInstanceOf(GreetingService);
  });

  describe('#greetNewcomer', () => {
    it('returns the newcomer greeting', () => {
      const greeting = greetingService.greetNewComer();

      expect(greeting).toEqual('Hello World !');
    });
  });
});
