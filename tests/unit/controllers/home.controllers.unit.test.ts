import { HomeController } from '../../../src/controllers/home.controller';
import { GreetingService } from '../../../src/services/greeting.service';

describe('HomeController', () => {
  describe('#index', () => {
    it('should returns the welcome message', function () {
      /*
       * Given
       */
      const greetingService = new GreetingService();
      const expectedMessage = 'Test greeting';
      spyOn(greetingService, 'greetNewComer').and.returnValue(expectedMessage);
      const homeController = new HomeController(greetingService);

      /*
       * When
       */
      const result = homeController.index();

      /*
       * Then
       */
      expect(result).toEqual(expectedMessage);
    });
  });
});
