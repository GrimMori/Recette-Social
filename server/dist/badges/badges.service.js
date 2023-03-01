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
exports.BadgesService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const badge_schema_1 = require("./schema/badge.schema");
let BadgesService = class BadgesService {
    constructor(badgeModel) {
        this.badgeModel = badgeModel;
    }
    create(createBadgeDto) {
        return this.badgeModel.create(createBadgeDto);
    }
    findAll() {
        return this.badgeModel.find().exec();
    }
    findOne(id) {
        return this.badgeModel.findOne({ _id: id });
    }
    update(id, updateBadgeDto) {
        return `This action updates a #${id} badge`;
    }
    remove(id) {
        return this.badgeModel.findByIdAndRemove({ _id: id }).exec();
    }
};
BadgesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(badge_schema_1.Badge.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], BadgesService);
exports.BadgesService = BadgesService;
//# sourceMappingURL=badges.service.js.map