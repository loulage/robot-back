import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Robot {
  @PrimaryGeneratedColumn('increment')
  id: number;
  
  @Column("text", {array: true})
  current_position: string[];

  @Column("text", {array: true})
  last_position: string[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}