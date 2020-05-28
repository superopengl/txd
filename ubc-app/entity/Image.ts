import { Entity, Column , PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Image {
    @PrimaryGeneratedColumn('uuid')
    posterId: number;

    @Column({ default: new Date() })
    createdAt: Date;

    @Column()
    createdBy: string;

    @Column()
    fileName: string;

    @Column()
    mine: string;

    @Column()
    lastAccess: Date;

    @Column({type: 'bytea'})
    base64data: string;
}


