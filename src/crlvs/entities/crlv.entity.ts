import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { Caminhao } from '../../caminhoes/entities/caminhao.entity';
import { Ipva } from '../../ipvas/entities/ipva.entity';
import { Tables } from '../../supabase/supabase.types';

@Entity('crlv')
export class Crlv implements Tables<'crlv'> {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', unique: true })
  placa: string;

  @Column({ type: 'varchar', unique: true })
  chassi: string;

  @Column({ type: 'integer', nullable: true })
  ano_fabricacao: number | null;

  @Column({ type: 'integer', nullable: true })
  ano_modelo: number | null;

  @Column({ type: 'integer', nullable: true })
  exercicio: number | null;

  @Column({ type: 'varchar', nullable: true })
  crv: string | null;

  @Column({ type: 'varchar', unique: true, nullable: true })
  renavam: string | null;

  @Column({ type: 'varchar', nullable: true })
  marca: string | null;

  @Column({ type: 'varchar', nullable: true })
  modelo: string | null;

  @Column({ type: 'varchar', nullable: true })
  especie: string | null;

  @Column({ type: 'varchar', nullable: true })
  tipo: string | null;

  @Column({ type: 'char', length: 2, nullable: true })
  uf: string | null;

  // optional

  @OneToOne(() => Caminhao, (caminhao) => caminhao.crlv)
  caminhao?: Caminhao | null;

  @OneToMany(() => Ipva, (ipva) => ipva.crlv)
  ipvas?: Ipva[];
}
