import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export default class AlterRelationsUsers1594960210953
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'users',
      new TableColumn({
        name: 'address_id',
        type: 'uuid',
        isNullable: true,
      }),
    );

    await queryRunner.createForeignKey(
      'users',
      new TableForeignKey({
        name: 'UserAddress',
        columnNames: ['address_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'address',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('users', 'UserAddress');

    await queryRunner.dropColumn('users', 'address_id');
  }
}
