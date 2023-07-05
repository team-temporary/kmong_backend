import { Test, TestingModule } from '@nestjs/testing';
import { BlameService } from '../blame.service';

describe('BlameService', () => {
  let service: BlameService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BlameService],
    }).compile();

    service = module.get<BlameService>(BlameService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
