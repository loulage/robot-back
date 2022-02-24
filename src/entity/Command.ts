import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Robot } from './Robot';

@Entity('command')
export class Command {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  command: string;

  @Column()
  is_valid: boolean;

  @ManyToOne((type) => Robot, (commands) => Command, { cascade: true, eager: true })
  robot: Robot;

  @CreateDateColumn()
  created_at: Date;
}
