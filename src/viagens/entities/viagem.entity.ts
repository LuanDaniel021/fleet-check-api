import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { Caminhao } from '../../caminhoes/entities/caminhao.entity';
import { Motorista } from '../../motoristas/entities/motorista.entity';
import { MedicaoPneu } from '../../medicao_pneus/entities/medicao_pneu.entity';

@Entity('viagem')
export class Viagem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'integer', nullable: true })
  caminhao_id: number | null;

  @Column({ type: 'integer', nullable: true })
  motorista_id: number | null;

  @Column({ type: 'timestamp', nullable: true })
  data_inicio: string | null;

  @Column({ type: 'timestamp', nullable: true })
  data_fim: string | null;

  @Column({ type: 'numeric', nullable: true })
  km_inicial: number | null;

  @Column({ type: 'numeric', nullable: true })
  km_final: number | null;

  @Column({ type: 'numeric', nullable: true })
  distancia_percorrida: number | null;

  // optional

  @ManyToOne(() => Caminhao, (caminhao) => caminhao.viagens)
  @JoinColumn({ name: 'caminhao_id' })
  caminhao?: Caminhao | null;

  @ManyToOne(() => Motorista, (motorista) => motorista.viagens)
  @JoinColumn({ name: 'motorista_id' })
  motorista?: Motorista | null;

  @OneToMany(() => MedicaoPneu, (medicao) => medicao.viagem)
  medicoes_pneu?: MedicaoPneu[];
}
