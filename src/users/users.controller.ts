import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import {
    UpdateBotsOutRoomRequest,
    UpdateBotsJoinRoomRequest,
    ResetBotInRoomRequest,
    UpdateStakeLevelRequest,
    BotsResponse,
    UserInfoResponse,
} from './models';
import { NumericalResult, Result } from 'src/common/models/result';
import { ApiOkResponse } from '@nestjs/swagger';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get('bots')
    @ApiOkResponse({ type: BotsResponse })
    async getAllBots() {
        return this.usersService.getAllBots();
    }

    @Get('bots/total')
    @ApiOkResponse({ type: NumericalResult })
    async getTotalBots() {
        return this.usersService.getTotalBots();
    }

    @Get('bots/disabled-bots')
    @ApiOkResponse({ type: BotsResponse })
    async getDisableBots() {
        return this.usersService.getDisableBots();
    }

    @Post('bots/out-room')
    @ApiOkResponse({ type: Result })
    async updateBotsOutRoom(@Body() body: UpdateBotsOutRoomRequest) {
        return this.usersService.updateBotsOutRoom(body.botIds);
    }

    @Post('bots/join-room')
    @ApiOkResponse({ type: Result })
    async updateBotsJoinRoom(@Body() body: UpdateBotsJoinRoomRequest) {
        return this.usersService.updateBotsJoinRoom(body.botIds, body.gameName);
    }

    @Post('bots/reset-in-room')
    @ApiOkResponse({ type: Result })
    async resetBotsInRoom(@Body() body: ResetBotInRoomRequest) {
        return this.usersService.resetBotsInRoom(body.gameName);
    }

    @Get('info')
    @ApiOkResponse({ type: UserInfoResponse })
    async getUserInfo(@Query('id') id: string) {
        return this.usersService.getUserInfo(id);
    }

    @Get('scoins')
    @ApiOkResponse({ type: NumericalResult })
    async getUserScoins(@Query('id') id: string) {
        return this.usersService.getScoins(id);
    }

    @Post('update-stake-level')
    @ApiOkResponse({ type: Result })
    async updateUserStakeLevel(@Body() body: UpdateStakeLevelRequest) {
        return this.usersService.updateStakeLevel(body);
    }
}
