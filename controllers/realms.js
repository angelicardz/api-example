const Realm = require("../models/realms");

function createRealm(req, res) {
  const body = req.body;
  Realm.create(body).then((realm) => {
    res.status(201).send(realm);
  });
}

async function getRealm(req, res) {
  const id = req.params.id;
  const realm = await Realm.findByPk(id);
  res.status(200).json(realm);
}

async function getRealms(req, res) {
  const realms = await Realm.findAll();
  res.status(200).json(realms);
}

async function updateRealm(req, res) {
  const id = req.params.id;
  const realm = req.body;
  await Realm.update(realm, { where: { id } });
  const realm_updated = await Realm.findByPk(id);
  res.status(200).json(realm_updated);
}

async function deleteRealm(req, res) {
  const id = req.params.id;
  const deleted = await Realm.destroy({ where: { id } });
  //{id: id}
  res.status(200).json(deleted);
}

module.exports = { createRealm, getRealm, getRealms, updateRealm, deleteRealm };
