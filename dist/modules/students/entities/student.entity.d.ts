import { Discipline } from 'src/modules/disciplines/entities/discipline.entity';
import { BaseEntity } from './../../bases/entities/base.entity';
export declare class Student extends BaseEntity {
    name: string;
    key: string;
    disciplines: Discipline[];
}
