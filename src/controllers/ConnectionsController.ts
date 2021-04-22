import { Request, Response } from "express"
import { ConnectionsService } from "../services/ConnectionsService";

class ConnectionsController {

  async create(request: Request, response: Response): Promise<Response> {
    const { } = request.body;

    const connectionsService = new ConnectionsService();

    try {
      const message = await connectionsService.create({});

      return response.json(message);
    } catch (error) {
      return response.status(400).json({
        message: error.message,
      })
    }
  }

}

export { ConnectionsController }
