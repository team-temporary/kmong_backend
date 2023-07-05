import { Test, TestingModule } from '@nestjs/testing';
import { BlameController } from '../blame.controller';

describe('BlameController', () => {
  let controller: BlameController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BlameController],
    }).compile();

    controller = module.get<BlameController>(BlameController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
