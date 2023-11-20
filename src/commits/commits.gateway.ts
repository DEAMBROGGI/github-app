import {
    MessageBody,
    SubscribeMessage,
    WebSocketGateway,
    WebSocketServer,
    WsResponse,
} from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway({
    cors: {
        origin: '*',
    },
})
export class CommitGateway {
    @WebSocketServer()
    server: Server;

    @SubscribeMessage('newCommit')
    async newCommit(@MessageBody() data: any): Promise<any> {
        //return this.server.to(data).emit("newCommit", data)
        return data
    }
}