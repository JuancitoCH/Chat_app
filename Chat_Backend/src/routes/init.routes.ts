import { Router } from "express";
import init from "../controller/init.controller"
const router = Router()

router.get("/",init.intit)
router.get("/error",init.error)

export default router