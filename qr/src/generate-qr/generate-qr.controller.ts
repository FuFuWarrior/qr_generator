import { Controller, Get } from '@nestjs/common';
import { GenerateQrService } from './generate-qr.service';

@Controller('qr')
export class GenerateQrController {
  constructor(private generateQrService: GenerateQrService) {}

  @Get('generate')
  generate() {
    return this.generateQrService.generateQR('https://live.com');
  }
}
