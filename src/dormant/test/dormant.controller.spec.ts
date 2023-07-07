import { Test, TestingModule } from '@nestjs/testing';
import { DormantController } from '../dormant.controller';

describe('DormantController', () => {
  let controller: DormantController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DormantController],
    }).compile();

    controller = module.get<DormantController>(DormantController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
