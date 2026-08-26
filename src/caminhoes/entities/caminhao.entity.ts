import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { Crlv } from '../../crlvs/entities/crlv.entity';
//import { Motorista } from '../../motorista/entities/motorista.entity';
//import { Viagem } from '../../viagem/entities/viagem.entity';
//import { Pneu } from '../../pneu/entities/pneu.entity';
//import { Manutencao } from '../../manutencao/entities/manutencao.entity';

@Entity('caminhao')
export class Caminhao {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'numeric', nullable: true })
  km_atual: number;

  @Column({ type: 'varchar', nullable: true })
  status: string;

  @Column({ type: 'integer', nullable: true })
  crlv_id: number;

  @Column({ type: 'integer', nullable: true })
  motorista_id: number;

  @ManyToOne(() => Crlv, (crlv) => crlv.caminhoes)
  @JoinColumn({ name: 'crlv_id' })
  crlv: Crlv;

  //@ManyToOne(() => Motorista, (motorista) => motorista.caminhoes)
  //@JoinColumn({ name: 'motorista_id' })
  //motorista: Motorista;

  //@OneToMany(() => Viagem, (viagem) => viagem.caminhao)
  //viagens: Viagem[];

  //@OneToMany(() => Pneu, (pneu) => pneu.caminhao)
  //pneus: Pneu[];

  //@OneToMany(() => Manutencao, (manutencao) => manutencao.caminhao)
  //manutencoes: Manutencao[];
}

