import { Controller, Get } from '@nestjs/common';

@Controller('/hello')
export class AppController {
  @Get()
  home() {
    return 'Welcome to my Movie API';
  }
}
