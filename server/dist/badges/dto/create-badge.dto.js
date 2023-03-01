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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateBadgeDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class CreateBadgeDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: "0000" }),
    __metadata("design:type", String)
], CreateBadgeDto.prototype, "_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "go vegan" }),
    __metadata("design:type", String)
], CreateBadgeDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "post 10 vegan recipes" }),
    __metadata("design:type", String)
], CreateBadgeDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: [
            "be a registered user", "post 10 vegan recipies"
        ] }),
    __metadata("design:type", Array)
], CreateBadgeDto.prototype, "requirements", void 0);
exports.CreateBadgeDto = CreateBadgeDto;
//# sourceMappingURL=create-badge.dto.js.map