import { Controller, Get } from 'routing-controllers';
import { GreetingService } from '../services/greeting.service';

@Controller()
export class HomeController {
  public constructor(private greetingService: GreetingService) {}

  @Get('/')
  public index() {
    return this.greetingService.greetNewComer();
  }
}
