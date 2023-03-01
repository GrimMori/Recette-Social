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
exports.CreateCommentDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class CreateCommentDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Me encantó' }),
    __metadata("design:type", String)
], CreateCommentDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 3,
    }),
    __metadata("design:type", Number)
], CreateCommentDto.prototype, "stars", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'El resultado final es maravilloso, he podido disfrutar esta receta acompañada de vino y la mezcla de sabores es increible.',
    }),
    __metadata("design:type", String)
], CreateCommentDto.prototype, "comment", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '63d7873a3eb90db3ba4b52e1' }),
    __metadata("design:type", Object)
], CreateCommentDto.prototype, "user", void 0);
exports.CreateCommentDto = CreateCommentDto;
//# sourceMappingURL=create-comment.dto.js.map