import { Service } from 'typedi';

@Service()
export class GreetingService {
  public greetNewComer() {
    return 'Hello orld !';
  }
}
