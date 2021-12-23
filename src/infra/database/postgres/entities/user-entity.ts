import { Exclude } from "class-transformer";
import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("users")

class PostgresUserEntity {

    @PrimaryColumn()
    readonly id_user: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    admin: boolean;

    @Exclude()
    @Column()
    password: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    constructor() {
        if(!this.id_user){
            this.id_user = uuid();
        }
    }

}

export { PostgresUserEntity };
