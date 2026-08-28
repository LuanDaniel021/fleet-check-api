import { Test, TestingModule } from '@nestjs/testing';
import { CrlvsController } from './crlvs.controller';
import { CrlvsService } from './crlvs.service';

describe('CrlvsController', () => {
  let controller: CrlvsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CrlvsController],
      providers: [
        {
          provide: CrlvsService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<CrlvsController>(CrlvsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
