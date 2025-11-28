import express from "express"
import {moviesGET,moviesPOST,moviesPUT,moviesDELETE} from "../controllor/moviescontrollor.js"

const router = express.Router()


router.get("/", moviesGET)

router.post("/", moviesPOST)

router.put("/:id", moviesPUT)

router.delete("/:id", moviesDELETE)

export default router;