import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../../../src/app.module';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { setupDatabase } from '../_stubs/setup-database';
import { getBearerToken } from '../_stubs/helper';
import { Notification } from 'src/notifications/schemas';

jest.setTimeout(10000);
describe('Notification', () => {
    let app: INestApplication;
    let moduleFixture: TestingModule;

    beforeEach(async () => {
        moduleFixture = await Test.createTestingModule({
            imports: [AppModule],
        }).compile();

        app = moduleFixture.createNestApplication<NestFastifyApplication>(new FastifyAdapter());
        await app.init();
        await app.getHttpAdapter().getInstance().ready();
        await setupDatabase(moduleFixture);
    });

    it('/notification/get-um-messages (GET)', async () => {
        // Act
        const token = await getBearerToken();
        const result = await request(app.getHttpServer())
            .get('/notification/get-um-messages?configName=baccarat')
            .set('Authorization', token);

        // Assert
        expect(result.status).toBe(200);
        expect(JSON.parse(result.text)).toEqual({ message: 'um message' });
    });
});
