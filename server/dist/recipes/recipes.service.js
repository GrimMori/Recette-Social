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
exports.RecipesService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const recipe_schema_1 = require("./schemas/recipe.schema");
const mongoose_2 = require("mongoose");
let RecipesService = class RecipesService {
    constructor(recipeModel) {
        this.recipeModel = recipeModel;
    }
    async create(createRecipeDto) {
        return this.recipeModel.create(createRecipeDto);
    }
    async findAll() {
        return this.recipeModel.find({}, { "__v": 0, "is_private": 0 })
            .populate("ingredients", "name")
            .exec();
    }
    async findOne(id) {
        return this.recipeModel
            .findOne({ _id: id }, { "__v": 0, "is_private": 0 })
            .populate("ingredients author comments.user", "-_id -__v -shopping_list -email -password")
            .exec();
    }
    async findByName(title) {
        return this.recipeModel
            .find({ title: { $regex: `${title}` } })
            .exec();
    }
    async findOne2(id) {
        return this.recipeModel.findOne({ _id: id }).exec();
    }
    async update(id, updateRecipeDto) {
        return this.recipeModel.findOneAndUpdate({ _id: id }, updateRecipeDto, {
            new: true,
        });
    }
    async remove(id) {
        return this.recipeModel.findByIdAndRemove({ _id: id }).exec();
    }
    async addComment(id, comment) {
        let commentary = await this.recipeModel.findById(id);
        commentary.comments.push(comment);
        commentary.save();
        return commentary;
    }
    async addIngredient(recipeId, ingredient) {
        const recipe = await (await this.recipeModel.findById(recipeId)).populate('ingredients');
        recipe.ingredients.push(ingredient);
        return recipe.save();
    }
};
RecipesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(recipe_schema_1.Recipe.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], RecipesService);
exports.RecipesService = RecipesService;
//# sourceMappingURL=recipes.service.js.map