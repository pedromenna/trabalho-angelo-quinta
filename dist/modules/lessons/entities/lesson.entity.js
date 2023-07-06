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
exports.Lesson = void 0;
const base_entity_1 = require("../../bases/entities/base.entity");
const content_entity_1 = require("../../contents/entities/content.entity");
const typeorm_1 = require("typeorm");
let Lesson = class Lesson extends base_entity_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Lesson.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => content_entity_1.Content, (contents) => contents.lesson),
    __metadata("design:type", Array)
], Lesson.prototype, "contents", void 0);
Lesson = __decorate([
    (0, typeorm_1.Entity)()
], Lesson);
exports.Lesson = Lesson;
//# sourceMappingURL=lesson.entity.js.map