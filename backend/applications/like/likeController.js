const knex = require("../../db/knex");
var generateSafeId = require("generate-safe-id");
const { select } = require("../../db/knex");

let likeController = {};

// likeController.create = function (req, res) {
//   knex("destination")
//     .insert({
//       destName: req.body.params.destinationName,
//       destDescription: req.body.params.description,
//       destId: req.body.params.Id || 1,
      
//     })
//     .then(() => {
//       res.send("A destination is created");
//     });
// };

likeController.create = async (req, res) => {
    const { contentId} = req.body;
    knex
      .insert({
        contentId:contentId
      })
      .into("likelist")
      .then((result) => {
        res.end("likeCreated");
      });
  };
  likeController.delete = function (req, res) {
    const { contentId} = req.body;
    knex("likelist")
      .where("contentId", contentId)
      .del()
      .then(() => {
        res.end("A Project is deleted");
      });
  };

  likeController.read = function (req, res) {
  knex("likelist")
      
      .select("likelist.contentId")
      .then((likeList) => {
      res.json(likeList);
  });
};


module.exports = likeController;