import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleWare.js";
import { brainTreePaymentController, braintreeTokenController, createProductController, deleteProductController, getProductController, getSingleProductController, productCategoryController, productFiltersController, productPhotoController, relatedProductController, searchProductController, updateProductController } from "../controllers/productControllers.js";
const router = express.Router();
import Formidable from "express-formidable";

//routes
router.post("/create-product", requireSignIn, isAdmin, Formidable(), createProductController);


//get products
router.get("/get-product", getProductController);


//single product
router.get("/get-product/:slug", getSingleProductController);

//get photo
router.get("/product-photo/:pid", productPhotoController);



//delete rproduct
router.delete("/delete-product/:pid", deleteProductController);

//routes update
router.put(
    "/update-product/:pid",
    requireSignIn,
    isAdmin,
    Formidable(),
    updateProductController
  );
  
//filter product
router.post("/product-filters", productFiltersController);

//search product
router.get("/search/:keyword", searchProductController);

//similar product 
router.get("/related-product/:pid/:cid" ,  relatedProductController)


//category wise product
router.get("/product-category/:slug", productCategoryController);


//payments routes
//token
router.get("/braintree/token", braintreeTokenController);

//payments
router.post("/braintree/payment", requireSignIn, brainTreePaymentController);

export default router;
