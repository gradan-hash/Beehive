const express = require("express");
const router = express.Router();
const {
  createupload,
  getalluploads,
  getsingleupload,
  deleteupload,
  updateupload,
} = require("../controllers/upload");

router.route("/").get(getalluploads).post(createupload);
router
  .route("/:id")
  .get(getsingleupload)
  .patch(updateupload)
  .delete(deleteupload);

module.exports = router;
