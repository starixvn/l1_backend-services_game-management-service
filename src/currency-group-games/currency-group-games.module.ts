import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CurrencyGroupGamesService } from './currency-group-games.service';
import { CurrencyGroupGamesController } from './currency-group-games.controller';
import { CurrencyGroupGameConfigs, CurrencyGroupGameConfigsSchema, CurrencyGroupGames, CurrencyGroupGamesSchema } from './schemas';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: CurrencyGroupGames.name, schema: CurrencyGroupGamesSchema, collection: 'currency_group_games' },
            { name: CurrencyGroupGameConfigs.name, schema: CurrencyGroupGameConfigsSchema, collection: 'currency_group_game_configs' },
        ]),
    ],
    providers: [CurrencyGroupGamesService],
    exports: [CurrencyGroupGamesService],
    controllers: [CurrencyGroupGamesController],
})
export class CurrencyGroupGamesModule {}
