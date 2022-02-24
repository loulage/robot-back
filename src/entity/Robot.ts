import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { Command } from './Command';
@Entity('robot')
export class Robot {
  @PrimaryGeneratedColumn('increment')
  id: number;
  
  @Column("text", {array: true})
  current_position: string[];

  @OneToMany(type => Command, robot => Robot)
  commands: Command[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}