import { io } from '../http';
import { ConnectionsService } from '../services/ConnectionsService';
import { UsersService } from '../services/UsersService';
import { MessagesService } from '../services/MessagesService';

interface IParams {
  email: string;
  text: string;
}

io.on("connect", (socket) => {
  const connectionsService = new ConnectionsService();
  const usersService = new UsersService();
  const messagesService = new MessagesService();

  socket.on("client_first_access", async (params: IParams) => {
    const socket_id = socket.id
    const { text, email } = params;
    let user_id = null;

    const userExists = await usersService.findByEmail(email);

    if (!userExists) {
      const user = await usersService.create(email);
      user_id = user.id;

      await connectionsService.create({
        socket_id,
        user_id,
      })
    } else {
      user_id = userExists.id;
      const connection = await connectionsService.findByUserId(userExists.id)

      if(!connection) {
        await connectionsService.create({
          socket_id,
          user_id
        })
      } else {
        connection.socket_id = socket.id;

        // sebreescreve conexao
        await connectionsService.create(connection);
      }
    }

    await messagesService.create({
      text,
      user_id,
    });

    const allMessages = await messagesService.listByUser(user_id);

    socket.emit("client_list_all_messages", allMessages);


  });
});

