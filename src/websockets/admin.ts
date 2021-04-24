import { io } from '../http';
import { ConnectionsService } from '../services/ConnectionsService';

io.on("connect", async (socket) => {
  const connectionsService = new ConnectionsService();

  const allConnectionswithoutadmin = await connectionsService.findAllWithoutAdmin();

  io.emit("admin_list_all_users", allConnectionswithoutadmin);
})
