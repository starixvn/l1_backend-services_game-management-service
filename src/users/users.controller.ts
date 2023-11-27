import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateBotOutRoomRequest, UpdateBotJoinRoomRequest, ResetBotInRoomRequest, UpdateStakeLevelRequest } from './models';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get('bots')
    async getAllBots() {
        return this.usersService.getAllBots();
    }

    @Get('bots/total')
    async getTotalBots() {
        return this.usersService.getTotalBots();
    }

    @Get('bots/disabled-bots')
    async getDisableBots() {
        return this.usersService.getDisableBots();
    }

    @Post('bots/out-room')
    async updateBotOutRoom(@Body() body: UpdateBotOutRoomRequest) {
        return this.usersService.updateBotOutRoom(body.botId);
    }

    @Post('bots/join-room')
    async updateBotJoinRoom(@Body() body: UpdateBotJoinRoomRequest) {
        return this.usersService.updateBotJoinRoom(body.botId, body.gameName);
    }

    @Post('bots/reset-in-room')
    async resetBotsInRoom(@Body() body: ResetBotInRoomRequest) {
        return this.usersService.resetBotsInRoom(body.gameName);
    }

    @Get('info')
    async getUserInfo(@Query('id') id: string) {
        return this.usersService.getUserInfo(id);
    }

    @Get('scoins')
    async getUserScoins(@Query('id') id: string) {
        return this.usersService.getScoins(id);
    }

    @Post('update-stake-level')
    async updateUserStakeLevel(@Body() body: UpdateStakeLevelRequest) {
        return this.usersService.updateStakeLevel(body);
    }
}
