import db from "../models";
const DB: any = db;
const { Users } = DB;

function add(req: any) {
  return Users.create({
    name: req.name,
  });
}

function listUser() {
  return Users.findAll();
}

export { add, listUser };
