import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { Expose } from "class-transformer";

import { v4 as uuid } from "uuid";

@Entity("tags")
class PostgresTagEntity {

    @PrimaryColumn()
    readonly id_tag: string;

    @Column()
    name: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @Expose({name: "name_custom"})
    nameCustom(): string {
        return `#${this.name}`;
    }

    constructor() {
        if(!this.id_tag){
            this.id_tag = uuid();
        }
    }
}


export { PostgresTagEntity }