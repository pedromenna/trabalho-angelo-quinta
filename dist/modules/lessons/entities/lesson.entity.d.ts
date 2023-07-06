import { BaseEntity } from 'src/modules/bases/entities/base.entity';
import { Content } from 'src/modules/contents/entities/content.entity';
export declare class Lesson extends BaseEntity {
    description: string;
    contents: Content[];
}
