import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm"
import { v4 as uuid } from "uuid";
import { PostgresTagEntity } from "./tag-entity";
import { PostgresUserEntity } from "./user-entity";

@Entity("compliments")
class PostgresComplimentEntity {

    @PrimaryColumn()
    readonly id: string;

    @Column()
    user_sender: string;
    
    @JoinColumn({name: "user_sender"})
    @ManyToOne(() => PostgresUserEntity)
    userSender: PostgresUserEntity;

    @Column()
    user_receiver: string;

    @JoinColumn({name: "user_receiver"})
    @ManyToOne(() => PostgresUserEntity)
    userReceiver: PostgresUserEntity;

    @Column()
    tag_id: string;

    @JoinColumn({name: "tag_id"})
    @ManyToOne(() => PostgresTagEntity)
    tag: PostgresTagEntity;

    @Column()
    message: string;

    @CreateDateColumn()
    created_at: Date;


    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }
}

export { PostgresComplimentEntity }