import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Caminhao } from '../../caminhoes/entities/caminhao.entity';

@Entity('manutencao')
export class Manutencao {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'integer', nullable: true })
  caminhao_id: number | null;

  @Column({ type: 'varchar', nullable: true })
  tipo: string | null;

  @Column({ type: 'numeric', nullable: true })
  km_realizacao: number | null;

  @Column({ type: 'date', nullable: true })
  data_manutencao: string | null;

  @Column({ type: 'numeric', nullable: true })
  custo: number | null;

  @Column({ type: 'text', nullable: true })
  observacoes: string | null;

  // optional

  @ManyToOne(() => Caminhao, (caminhao) => caminhao.manutencoes)
  @JoinColumn({ name: 'caminhao_id' })
  caminhao?: Caminhao | null;
}
