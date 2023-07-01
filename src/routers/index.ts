import { Router } from "express";
import Location from "../controllers/Location";
import Company from "../controllers/Company";
import Contact from "../controllers/Contact";
import Credit from "../controllers/Credit";
import Users from "../controllers/Users";
import DatOne from "../controllers/DatOne";
import DatPower from "../controllers/DatPower";
import TrucksEdge from "../controllers/TrucksEdge";
import Loads from "../controllers/Loads";

const router= Router()

// location
router.get("/location",Location.Get);
router.get("/location/:id",Location.GetId);
router.post("/location/",Location.Post);
router.put("/location/:id",Location.Put);
router.delete("/location/:id",Location.Delete);

// company
router.get("/company",Company.Get);
router.get("/company/:id",Company.GetId);
router.post("/company/",Company.Post);
router.put("/company/:id",Company.Put);
router.delete("/company/:id",Company.Delete);

// contact
router.get("/contacts",Contact.Get);
router.get("/contacts/:id",Contact.GetId);
router.post("/contacts/",Contact.Post);
router.put("/contacts/:id",Contact.Put);
router.delete("/contacts/:id",Contact.Delete);

// credit
router.get("/credits",Credit.Get);
router.get("/credits/:id",Credit.GetId);
router.post("/credits/",Credit.Post);
router.put("/credits/:id",Credit.Put);
router.delete("/credits/:id",Credit.Delete);

// users
router.get("/users",Users.Get);
router.get("/users/:id",Users.GetId);
router.post("/users/",Users.Post);
router.put("/users/:id",Users.Put);
router.delete("/users/:id",Users.Delete);

// datOne
router.get("/datone",DatOne.Get);
router.get("/datone/:id",DatOne.GetId);
router.post("/datone/",DatOne.Post);
router.put("/datone/:id",DatOne.Put);
router.delete("/datone/:id",DatOne.Delete);

// datPower
router.get("/datpower",DatPower.Get);
router.get("/datpower/:id",DatPower.GetId);
router.post("/datpower/",DatPower.Post);
router.put("/datpower/:id",DatPower.Put);
router.delete("/datpower/:id",DatPower.Delete);

// truckEdge
router.get("/trucksedge",TrucksEdge.Get);
router.get("/trucksedge/:id",TrucksEdge.GetId);
router.post("/trucksedge/",TrucksEdge.Post);
router.put("/trucksedge/:id",TrucksEdge.Put);
router.delete("/trucksedge/:id",TrucksEdge.Delete);

// loads
router.get("/loads",Loads.Get);
router.get("/loads/:id",Loads.GetId);
router.post("/loads/",Loads.Post);
router.put("/loads/:id",Loads.Put);
router.delete("/loads/:id",Loads.Delete);


export default router
