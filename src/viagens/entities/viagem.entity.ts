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
  caminhao_id: number;

  @Column({ type: 'integer', nullable: true })
  motorista_id: number;

  @Column({ type: 'timestamp', nullable: true })
  data_inicio: Date;

  @Column({ type: 'timestamp', nullable: true })
  data_fim: Date;

  @Column({ type: 'numeric', nullable: true })
  km_inicial: number;

  @Column({ type: 'numeric', nullable: true })
  km_final: number;

  @Column({ type: 'numeric', nullable: true })
  distancia_percorrida: number;

  @ManyToOne(() => Caminhao, (caminhao) => caminhao.viagens)
  @JoinColumn({ name: 'caminhao_id' })
  caminhao: Caminhao;

  @ManyToOne(() => Motorista, (motorista) => motorista.viagens)
  @JoinColumn({ name: 'motorista_id' })
  motorista: Motorista;

  @OneToMany(() => MedicaoPneu, (medicao) => medicao.viagem)
  medicoes_pneu: MedicaoPneu[];
}
