import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Pneu } from '../../pneus/entities/pneu.entity';
import { Viagem } from '../../viagens/entities/viagem.entity';

@Entity('medicao_pneu')
export class MedicaoPneu {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'integer', nullable: true })
  pneu_id: number | null;

  @Column({ type: 'integer', nullable: true })
  viagem_id: number | null;

  @Column({ type: 'numeric', nullable: true })
  profundidade_atual_mm: number | null;

  @Column({ type: 'date', nullable: true })
  data_medicao: string | null;

  // optional

  @ManyToOne(() => Pneu, (pneu) => pneu.medicoes)
  @JoinColumn({ name: 'pneu_id' })
  pneu?: Pneu | null;

  @ManyToOne(() => Viagem, (viagem) => viagem.medicoes_pneu)
  @JoinColumn({ name: 'viagem_id' })
  viagem?: Viagem | null;
}
