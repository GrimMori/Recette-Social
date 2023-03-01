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
exports.CreateRecipeDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class CreateRecipeDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'tostada',
    }),
    __metadata("design:type", String)
], CreateRecipeDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'rodaja de pan tostada',
    }),
    __metadata("design:type", String)
], CreateRecipeDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '63d9049bee15be130124a938',
    }),
    __metadata("design:type", Object)
], CreateRecipeDto.prototype, "author", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: [
            "63d0e7a3d465ce8c3453c972",
        ]
    }),
    __metadata("design:type", Array)
], CreateRecipeDto.prototype, "ingredients", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 2,
    }),
    __metadata("design:type", Number)
], CreateRecipeDto.prototype, "time", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: false,
    }),
    __metadata("design:type", Boolean)
], CreateRecipeDto.prototype, "is_private", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: ['vegana', 'fácil', 'desayuno'],
    }),
    __metadata("design:type", Array)
], CreateRecipeDto.prototype, "tags", void 0);
exports.CreateRecipeDto = CreateRecipeDto;
//# sourceMappingURL=create-recipe.dto.js.map