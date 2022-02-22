import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Robot {
  @PrimaryGeneratedColumn('increment')
  id: number;
  
  @Column()
  current_position: string;

  @Column()
  last_position: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}