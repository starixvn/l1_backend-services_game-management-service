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
import { NumericalResult, Result } from '../common/models/result';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get('bots')
    @ApiOperation({ operationId: 'getAllBots' })
    @ApiOkResponse({ type: BotsResponse })
    async getAllBots() {
        return this.usersService.getAllBots();
    }

    @Get('bots/total')
    @ApiOperation({ operationId: 'getTotalBots' })
    @ApiOkResponse({ type: NumericalResult })
    async getTotalBots() {
        return this.usersService.getTotalBots();
    }

    @Get('bots/disabled-bots')
    @ApiOperation({ operationId: 'getDisableBots' })
    @ApiOkResponse({ type: BotsResponse })
    async getDisableBots() {
        return this.usersService.getDisableBots();
    }

    @Post('bots/out-room')
    @ApiOperation({ operationId: 'updateBotsOutRoom' })
    @ApiOkResponse({ type: Result })
    async updateBotsOutRoom(@Body() body: UpdateBotsOutRoomRequest) {
        return this.usersService.updateBotsOutRoom(body.botIds);
    }

    @Post('bots/join-room')
    @ApiOperation({ operationId: 'updateBotsJoinRoom' })
    @ApiOkResponse({ type: Result })
    async updateBotsJoinRoom(@Body() body: UpdateBotsJoinRoomRequest) {
        return this.usersService.updateBotsJoinRoom(body.botIds, body.gameName);
    }

    @Post('bots/reset-in-room')
    @ApiOperation({ operationId: 'resetBotsInRoom' })
    @ApiOkResponse({ type: Result })
    async resetBotsInRoom(@Body() body: ResetBotInRoomRequest) {
        return this.usersService.resetBotsInRoom(body.gameName);
    }

    @Get('info')
    @ApiOperation({ operationId: 'getUserInfo' })
    @ApiOkResponse({ type: UserInfoResponse })
    async getUserInfo(@Query('id') id: string) {
        return this.usersService.getUserInfo(id);
    }

    @Get('scoins')
    @ApiOperation({ operationId: 'getUserScoins' })
    @ApiOkResponse({ type: NumericalResult })
    async getUserScoins(@Query('id') id: string) {
        return this.usersService.getScoins(id);
    }

    @Post('update-stake-level')
    @ApiOperation({ operationId: 'updateUserStakeLevel' })
    @ApiOkResponse({ type: Result })
    async updateUserStakeLevel(@Body() body: UpdateStakeLevelRequest) {
        return this.usersService.updateStakeLevel(body);
    }
}
