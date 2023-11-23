import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { GameConfigsDocument, GameConfigs } from '../../../src/game-configs/schemas';
import { ArchiveStatuses, ArchiveStatusesDocument } from '../../../src/archive-statuses/schemas';

export const setupDatabase = async (moduleFixture: TestingModule) => {
    await initGameConfigs(moduleFixture);
    await initArchiveStatues(moduleFixture);
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
