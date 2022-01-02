import {MigrationInterface, QueryRunner} from "typeorm";

export class correctIdtag1641134987341 implements MigrationInterface {
    name = 'correctIdtag1641134987341'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tags" RENAME COLUMN "id_user" TO "id_tag"`);
        await queryRunner.query(`ALTER TABLE "tags" RENAME CONSTRAINT "PK_5885febecbafc3542057d1bbfa6" TO "PK_beb5f3ec19a8dbe6ce642519370"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tags" RENAME CONSTRAINT "PK_beb5f3ec19a8dbe6ce642519370" TO "PK_5885febecbafc3542057d1bbfa6"`);
        await queryRunner.query(`ALTER TABLE "tags" RENAME COLUMN "id_tag" TO "id_user"`);
    }

}
