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
exports.BaseDTO = void 0;
const query_graphql_1 = require("@nestjs-query/query-graphql");
const graphql_1 = require("@nestjs/graphql");
let BaseDTO = class BaseDTO {
    static _GRAPHQL_METADATA_FACTORY() {
        return { id: { type: () => String }, createdAt: { type: () => Date }, updatedAt: { type: () => Date }, deletedAt: { type: () => Date } };
    }
};
__decorate([
    (0, query_graphql_1.FilterableField)(),
    __metadata("design:type", String)
], BaseDTO.prototype, "id", void 0);
__decorate([
    (0, query_graphql_1.FilterableField)(),
    __metadata("design:type", Date)
], BaseDTO.prototype, "createdAt", void 0);
__decorate([
    (0, query_graphql_1.FilterableField)(),
    __metadata("design:type", Date)
], BaseDTO.prototype, "updatedAt", void 0);
__decorate([
    (0, query_graphql_1.FilterableField)(),
    __metadata("design:type", Date)
], BaseDTO.prototype, "deletedAt", void 0);
BaseDTO = __decorate([
    (0, graphql_1.ObjectType)()
], BaseDTO);
exports.BaseDTO = BaseDTO;
//# sourceMappingURL=base.dto.js.map