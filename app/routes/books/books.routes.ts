import { FastifyInstance } from "fastify";
import { IncomingMessage, Server, ServerResponse } from "http";

function bookRoutes(
  fastify: FastifyInstance<Server, IncomingMessage, ServerResponse>,
  opts: { prefix: string },
  next: (err?: Error) => void
) {
  fastify.get("/", async (request, reply) => {
    reply.send("books");
  });
  next();
}
export default bookRoutes;
