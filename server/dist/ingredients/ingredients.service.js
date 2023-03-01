"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IngredientsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const ingredient_schema_1 = require("./schemas/ingredient.schema");
const mongoose_2 = require("mongoose");
let IngredientsService = class IngredientsService {
    constructor(ingredientModel) {
        this.ingredientModel = ingredientModel;
    }
    async create(createIngredientDto) {
        return this.ingredientModel.create(createIngredientDto);
    }
    async findAll() {
        return this.ingredientModel.find().exec();
    }
    async findOne(id) {
        return this.ingredientModel.findOne({ _id: id });
    }
    async update(id, updateIngredientDto) {
        return this.ingredientModel.findOneAndUpdate({ _id: id }, updateIngredientDto, {
            new: true,
        });
    }
    async remove(id) {
        return this.ingredientModel.findByIdAndRemove({ _id: id }).exec();
    }
};
IngredientsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(ingredient_schema_1.Ingredient.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], IngredientsService);
exports.IngredientsService = IngredientsService;
//# sourceMappingURL=ingredients.service.js.map