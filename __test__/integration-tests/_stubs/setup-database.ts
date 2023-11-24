import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { GameConfigsDocument, GameConfigs } from '../../../src/game-configs/schemas';
import { ArchiveStatuses, ArchiveStatusesDocument } from '../../../src/archive-statuses/schemas';
import { Promotion, PromotionDocument } from '../../../src/promotions/schemas';
import { OperatorConfig, OperatorConfigDocument } from '../../../src/operator-configs/schemas';
import { Domains, DomainsDocument } from '../../../src/domains/schemas';

export const setupDatabase = async (moduleFixture: TestingModule) => {
    await initGameConfigs(moduleFixture);
    await initArchiveStatues(moduleFixture);
    await initPromotion(moduleFixture);
    await initOperatorConfig(moduleFixture);
    await initDomain(moduleFixture);
};

const initGameConfigs = async (moduleFixture: TestingModule) => {
    const model = moduleFixture.get(getModelToken('GameConfigs')) as Model<GameConfigsDocument>;

    // Clear
    await model.deleteMany({});

    // Insert
    const item = new GameConfigs();
    item.name = 'baccarat';
    item.enabled = true;
    item.minbet = 1;
    item.maxbet = 10;
    item.disabledround = 1;
    item.botenabled = true;
    item.botenabled = true;
    item.maxbot = 12;

    await model.insertMany([item]);
};

const initArchiveStatues = async (moduleFixture: TestingModule) => {
    const model = moduleFixture.get(getModelToken('ArchiveStatuses')) as Model<ArchiveStatusesDocument>;

    // Clear
    await model.deleteMany({});

    // Insert
    const item = new ArchiveStatuses();
    item.name = 'baccarat';
    item.lastArcRoundId = 12;

    await model.insertMany([item]);
};

const initPromotion = async (moduleFixture: TestingModule) => {
    const model = moduleFixture.get(getModelToken('Promotion')) as Model<PromotionDocument>;

    // Clear
    await model.deleteMany({});

    // Insert
    const item = new Promotion();
    item.gameId = 12;
    item.odds = { big: 2, small: 2 };
    item.startDateTime = new Date();
    item.endDateTime = new Date();
    item.status = 'enabled';
    item.isDaily = true;

    await model.insertMany([item]);
};

const initOperatorConfig = async (moduleFixture: TestingModule) => {
    const model = moduleFixture.get(getModelToken('OperatorConfig')) as Model<OperatorConfigDocument>;

    // Clear
    await model.deleteMany({});

    // Insert
    const item = new OperatorConfig();
    item.type = 'game_site_exclusions';
    item.partnerId = 'OW';
    item.value = [{ 10: ['site1'] }];
    item.operatorId = '123';

    await model.insertMany([item]);
};

const initDomain = async (moduleFixture: TestingModule) => {
    const model = moduleFixture.get(getModelToken('Domains')) as Model<DomainsDocument>;

    // Clear
    await model.deleteMany({});

    // Insert
    const item = new Domains();
    item.value = 'lumigame.com;luminetsoft.com';

    await model.insertMany([item]);
};
