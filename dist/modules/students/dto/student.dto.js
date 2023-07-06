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
exports.StudentDTO = void 0;
const query_graphql_1 = require("@nestjs-query/query-graphql");
const graphql_1 = require("@nestjs/graphql");
const base_dto_1 = require("../../bases/dto/base.dto");
const discipline_dto_1 = require("../../disciplines/dto/discipline.dto");
let StudentDTO = class StudentDTO extends base_dto_1.BaseDTO {
    static _GRAPHQL_METADATA_FACTORY() {
        return { name: { type: () => String }, key: { type: () => String } };
    }
};
__decorate([
    (0, query_graphql_1.FilterableField)(),
    __metadata("design:type", String)
], StudentDTO.prototype, "name", void 0);
__decorate([
    (0, query_graphql_1.FilterableField)(),
    __metadata("design:type", String)
], StudentDTO.prototype, "key", void 0);
StudentDTO = __decorate([
    (0, graphql_1.ObjectType)('Student'),
    (0, query_graphql_1.FilterableOffsetConnection)('disciplines', () => discipline_dto_1.DisciplineDTO, {
        nullable: true,
    })
], StudentDTO);
exports.StudentDTO = StudentDTO;
//# sourceMappingURL=student.dto.js.map