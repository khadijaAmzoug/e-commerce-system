"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const apiService_1 = require("./services/apiService");
const discountCalculator_1 = require("./utils/discountCalculator");
const taxCalculator_1 = require("./utils/taxCalculator");
const errorHandler_1 = require("./utils/errorHandler");
const Product_1 = require("./models/Product");
function startApp() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const productsData = yield (0, apiService_1.fetchProducts)();
            const products = productsData.map((data) => {
                const discountAmount = (0, discountCalculator_1.calculateDiscount)(data.price, data.discountPercentage);
                const taxAmount = (0, taxCalculator_1.calculateTax)(data.price, data.category);
                return new Product_1.Product(data.id, data.title, data.price, data.discountPercentage, data.category, discountAmount, taxAmount);
            });
            products.forEach((product) => {
                console.log(product.displayDetails());
            });
        }
        catch (error) {
            (0, errorHandler_1.handleError)(error);
        }
    });
}
startApp();
