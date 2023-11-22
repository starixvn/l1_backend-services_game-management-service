import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../../../src/app.module';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { setupDatabase } from '../_stubs/setup-database';

//jest.setTimeout(10000);
describe('Game Configs', () => {
  let app: INestApplication;
    
  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication<NestFastifyApplication>(new FastifyAdapter());
    await app.init();
    await app.getHttpAdapter().getInstance().ready();
    await setupDatabase(moduleFixture);    
  });
 
  it('/game-configs/get-game-configs (GET)', async () => {
    // Act
    const result = await request(app.getHttpServer())
      .get('/game-configs/get-game-configs?gameName=baccarat');
    
    // Assert
    expect(result.status).toBe(200);    
    console.log(result.text);
  });
});
