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
exports.Discipline = void 0;
const base_entity_1 = require("../../bases/entities/base.entity");
const student_entity_1 = require("../../students/entities/student.entity");
const typeorm_1 = require("typeorm");
let Discipline = class Discipline extends base_entity_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Discipline.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => student_entity_1.Student, (students) => students.disciplines, {
        nullable: true,
    }),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], Discipline.prototype, "students", void 0);
Discipline = __decorate([
    (0, typeorm_1.Entity)()
], Discipline);
exports.Discipline = Discipline;
//# sourceMappingURL=discipline.entity.js.map