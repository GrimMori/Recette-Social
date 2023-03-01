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
exports.MenusService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const menu_schema_1 = require("./schemas/menu.schema");
let MenusService = class MenusService {
    constructor(menuModel) {
        this.menuModel = menuModel;
    }
    async create(createMenuDto) {
        return this.menuModel.create(createMenuDto);
    }
    async findAll() {
        return this.menuModel
            .find({}, { _id: 0, __v: 0, is_private: 0 })
            .populate('recipes', 'title')
            .exec();
    }
    async findOne(id) {
        return this.menuModel
            .findOne({ _id: id }, { _id: 0, __v: 0, is_private: 0 })
            .populate('recipe', '-_id -__v  -author -description')
            .exec();
    }
    async update(id, updateMenuDto) {
        return this.menuModel.findOneAndUpdate({ _id: id }, updateMenuDto, {
            new: true,
        });
    }
    async removeMenu(id) {
        return this.menuModel.findByIdAndRemove({ _id: id }).exec();
    }
    async removeRecipeFromMenu(menuId, recipeId) {
        return this.menuModel.updateOne({ _id: menuId }, { $pull: { recipes: recipeId } })
            .exec();
    }
};
MenusService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(menu_schema_1.Menu.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], MenusService);
exports.MenusService = MenusService;
//# sourceMappingURL=menus.service.js.map