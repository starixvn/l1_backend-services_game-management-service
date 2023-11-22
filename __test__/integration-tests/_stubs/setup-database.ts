import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { GameConfigsDocument, GameConfigs } from '../../../src/game-configs/schemas';

export const setupDatabase = async (moduleFixture: TestingModule) => {
    await initGameConfigs(moduleFixture);   
}

const initGameConfigs = async (moduleFixture: TestingModule) => {
    const gameConfigsModel = moduleFixture.get(getModelToken('GameConfigs')) as Model<GameConfigsDocument>;
    await gameConfigsModel.deleteMany({});
    const item = new GameConfigs();
    //item.name = "baccarat";
    //item.gameId = 123;
    //await gameConfigsModel.insertMany([item]);
    const config = await gameConfigsModel.findOne({name: "baccarat"}).lean().exec();
    console.log("config", config);
}