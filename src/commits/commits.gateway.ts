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
        console.log(data)
        return this.server.emit("newCommit", data)
        
    }
}