import { FastifyReply, FastifyRequest } from "fastify";
import { add, listUser } from "../services/user.service";

function create(req: FastifyRequest, reply: FastifyReply) {
  return add(req.body)
    .then((user: any) => {
      reply.status(200).send(user);
    })
    .catch((err: Error) => {
      reply.status(400).send(err);
    });
}

function list(req: FastifyRequest, reply: FastifyReply) {
  return listUser()
    .then((user: any) => {
      reply.status(200).send(user);
    })
    .catch((err: Error) => {
      reply.status(400).send(err);
    });
}

export { create, list };
