const knex = require("../../db/knex");
var generateSafeId = require("generate-safe-id");
const { select } = require("../../db/knex");

let reviewController = {};


reviewController.create = async (req, res) => {
    const { destName, destDescription, destId,locationId } = req.body;
    knex
      .insert({
        destName: destName,
        destDescription: destDescription,
        destId: destId,
        locationId:locationId
      })
      .into("destination")
      .then((result) => {
        res.end("destinationCreated");
      });
  };

  reviewController.update = function (req, res) {
    const { locationId, destDescription, destId } = req.body;
    console.log(req.body)
    knex("destination")
      .where("destId", destId)
      .whereIn("locationId",[locationId])
      .update({
         
        destDescription: destDescription,
        
      })
      .then(() => {
        res.end("A project is updated");
      });
  };
  

  reviewController.read = function (req, res) {
  knex("location")
      
      .select("destination.destDescription", "destination.destName","location.locationName")
      .leftJoin("destination", "destination.locationId", "location.locationId")
      .then((destinationList) => {
      res.json(destinationList);
  });
};


module.exports = reviewController;