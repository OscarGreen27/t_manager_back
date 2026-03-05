import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'user_data', name: 'user' })
export class User {
  @PrimaryColumn()
  id: string;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  role: string;
}
