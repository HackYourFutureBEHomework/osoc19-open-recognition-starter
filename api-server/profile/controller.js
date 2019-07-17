const profile = require('./model');

const controller = {};

// routes =>

/* ------------------- INDEX -------------------*/
// GET  "/"                     => greetings

controller.welcome = (req, res) => {
  console.log("-- GET /all --");
  res.send("hi, you're at the profile api");
}

/* ------------------- INDEX -------------------*/
// GET  "/all"                     => show all profile

controller.get_all = (req, res) => {
  console.log("-- GET /all --");
  profile.find()
    // modify the next line based on your project's needs
    .then((db_response) => { res.send(db_response) })
    .catch((err) => {
      res.status(500).send({
        message: err.message
      });
    });
}

/* ------------------- CREATE -------------------*/
// GET  "/add"                => instructions
// POST "/add"                => Create new profile

controller.get_add = (req, res) => {
  console.log("-- GET /add --");
  res.send('put a new profile\'s name in the body and send a post request to this address: { first_name: "string" }. you\'ll get back the new profile\'s entry');
}

controller.post_add = (req, res) => {
  console.log("-- POST /add --");
  const new_firstName = req.body.firstName;
  const new_lastName = req.body.lastName;
  const new_email = req.body.email;
  const new_profilePhoto = req.body.profilePhoto;
  const new_profile = {
    firstName: new_firstName,
    lastName: new_lastName,
    email: new_email,
    profilePhoto: new_profilePhoto
  };
  profile.create(new_profile)
    // modify the next line based on your project's needs
    .then((db_response) => { res.send(db_response) })
    .catch((err) => {
      res.status(500).send({
        message: err.message
      });
    });
}


/* ------------------- READ -------------------*/
// GET  "/:id"             => View profile Info with id ...


controller.get_id = (req, res) => {
  const profile_id = req.params.id;
  console.log("-- GET /" + profile_id + " --");
  const id_object = { _id: profile_id };
  profile.find(id_object)
    // modify the next line based on your project's needs
    .then((db_response) => { res.send(db_response) })
    .catch((err) => {
      res.status(500).send({
        message: err.message
      });
    });
}



/* ------------------- UPDATE -------------------*/
// GET  "/:id/update"     => instructions
// POST "/:id/update"     => update profile with id...


controller.get_id_update = (req, res) => {
  const profile_id = req.params.id;
  console.log("-- GET /" + profile_id + "/update --");
  res.send('send a post request to this address a first_name in the body');
}

controller.post_id_update = (req, res) => {
  const profile_id = req.params.id;
  console.log("-- POST /" + profile_id + "/update --");
  const id_object = { _id: profile_id };
  const firstName = req.body.firstName;
  const password = req.body.password;
  const email = req.body.email;
  const lastName = req.body.lastName;
  const profilePhoto = req.body.profilePhoto;
  const userObject = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password,
    profilePhoto: profilePhoto
  };
  profile.update(id_object, userObject)
    // modify the next line based on your project's needs
    .then((db_response) => { res.send(db_response) })
    .catch((err) => {
      res.status(500).send({
        message: err.message
      });
    });
}

/* ------------------- DELETE -------------------*/
// GET  "/:id/delete"     => instructions
// POST "/:id/delete"     => delete profile with id...


controller.get_id_delete = (req, res) => {
  const profile_id = req.params.id;
  console.log("-- GET /" + profile_id + "/delete --");
  res.send('send a post request to this address with an profile ID, it will be deleted');
}

controller.post_id_delete = (req, res) => {
  const profile_id = req.params.id;
  console.log("-- POST /" + profile_id + "/delete --");
  const id_object = { _id: profile_id };
  profile.remove(id_object)
    // modify the next line based on your project's needs
    .then((db_response) => { res.send(db_response) })
    .catch((err) => {
      res.status(500).send({
        message: err.message
      });
    });
}


module.exports = controller;
