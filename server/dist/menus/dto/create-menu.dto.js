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
exports.CreateMenuDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class CreateMenuDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'recetas veganas',
    }),
    __metadata("design:type", String)
], CreateMenuDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'comida sana para toda la semana',
    }),
    __metadata("design:type", String)
], CreateMenuDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'vegana',
    }),
    __metadata("design:type", Array)
], CreateMenuDto.prototype, "category", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: [
            "",
        ]
    }),
    __metadata("design:type", Object)
], CreateMenuDto.prototype, "user", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'budin de banana'
    }),
    __metadata("design:type", Array)
], CreateMenuDto.prototype, "recipes", void 0);
exports.CreateMenuDto = CreateMenuDto;
//# sourceMappingURL=create-menu.dto.js.map