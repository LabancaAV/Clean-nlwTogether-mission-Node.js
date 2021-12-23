import {MigrationInterface, QueryRunner} from "typeorm";

export class factor1638919149497 implements MigrationInterface {
    name = 'factor1638919149497'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "tags" ("id_user" character varying NOT NULL, "name" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_5885febecbafc3542057d1bbfa6" PRIMARY KEY ("id_user"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id_user" character varying NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "admin" boolean NOT NULL, "password" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_fbb07fa6fbd1d74bee9782fb945" PRIMARY KEY ("id_user"))`);
        await queryRunner.query(`CREATE TABLE "compliments" ("id" character varying NOT NULL, "user_sender" character varying NOT NULL, "user_receiver" character varying NOT NULL, "tag_id" character varying NOT NULL, "message" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_c54299c9e1656922eb0045c246e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "compliments" ADD CONSTRAINT "FK_cd4e6c54f85a02905a11897e91e" FOREIGN KEY ("user_sender") REFERENCES "users"("id_user") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "compliments" ADD CONSTRAINT "FK_47922731571b285347daed32941" FOREIGN KEY ("user_receiver") REFERENCES "users"("id_user") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "compliments" ADD CONSTRAINT "FK_3e32d250792f1db0b4dde4bc90a" FOREIGN KEY ("tag_id") REFERENCES "tags"("id_user") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "compliments" DROP CONSTRAINT "FK_3e32d250792f1db0b4dde4bc90a"`);
        await queryRunner.query(`ALTER TABLE "compliments" DROP CONSTRAINT "FK_47922731571b285347daed32941"`);
        await queryRunner.query(`ALTER TABLE "compliments" DROP CONSTRAINT "FK_cd4e6c54f85a02905a11897e91e"`);
        await queryRunner.query(`DROP TABLE "compliments"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "tags"`);
    }

}
