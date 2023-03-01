"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateBadgeDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_badge_dto_1 = require("./create-badge.dto");
class UpdateBadgeDto extends (0, swagger_1.PartialType)(create_badge_dto_1.CreateBadgeDto) {
}
exports.UpdateBadgeDto = UpdateBadgeDto;
//# sourceMappingURL=update-badge.dto.js.map