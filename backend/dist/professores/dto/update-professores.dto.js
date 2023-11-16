"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProfessoreDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_professores_dto_1 = require("./create-professores.dto");
class UpdateProfessoreDto extends (0, swagger_1.PartialType)(create_professores_dto_1.CreateProfessoreDto) {
}
exports.UpdateProfessoreDto = UpdateProfessoreDto;
//# sourceMappingURL=update-professores.dto.js.map