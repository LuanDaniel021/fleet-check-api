import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { Caminhao } from '../../caminhoes/entities/caminhao.entity';
import { MedicaoPneu } from '../../medicao_pneus/entities/medicao_pneu.entity';

@Entity('pneu')
export class Pneu {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'integer', nullable: true })
  caminhao_id: number;

  @Column({ type: 'varchar', nullable: true })
  posicao: string;

  @Column({ type: 'varchar', nullable: true })
  marca: string;

  @Column({ type: 'numeric', nullable: true })
  sulco_inicial_mm: number;

  @Column({ type: 'varchar', nullable: true })
  status: string;

  @ManyToOne(() => Caminhao, (caminhao) => caminhao.pneus)
  @JoinColumn({ name: 'caminhao_id' })
  caminhao: Caminhao;

  @OneToMany(() => MedicaoPneu, (medicao) => medicao.pneu)
  medicoes: MedicaoPneu[];
}
