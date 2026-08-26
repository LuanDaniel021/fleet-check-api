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
  caminhao_id: number;

  @Column({ type: 'varchar', nullable: true })
  tipo: string;

  @Column({ type: 'numeric', nullable: true })
  km_realizacao: number;

  @Column({ type: 'date', nullable: true })
  data_manutencao: Date;

  @Column({ type: 'numeric', nullable: true })
  custo: number;

  @Column({ type: 'text', nullable: true })
  observacoes: string;

  @ManyToOne(() => Caminhao, (caminhao) => caminhao.manutencoes)
  @JoinColumn({ name: 'caminhao_id' })
  caminhao: Caminhao;
}
