"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePcDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_pc_dto_1 = require("./create-pc.dto");
class UpdatePcDto extends (0, swagger_1.PartialType)(create_pc_dto_1.CreatePcDto) {
}
exports.UpdatePcDto = UpdatePcDto;
//# sourceMappingURL=update-pc.dto.js.map