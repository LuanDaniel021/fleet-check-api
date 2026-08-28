import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Caminhao } from '../../caminhoes/entities/caminhao.entity';
import { Viagem } from '../../viagens/entities/viagem.entity';
import { Tables } from '../../supabase/supabase.types';

@Entity('motorista')
export class Motorista implements Tables<'motorista'> {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', nullable: true })
  nome: string | null;

  @Column({ type: 'varchar', unique: true, nullable: true })
  cpf: string | null;

  @Column({ type: 'varchar', unique: true, nullable: true })
  numero_cnh: string | null;

  @Column({ type: 'varchar', nullable: true })
  categoria_cnh: string | null;

  // optional

  @OneToMany(() => Caminhao, (caminhao) => caminhao.motorista)
  caminhoes?: Caminhao[];

  @OneToMany(() => Viagem, (viagem) => viagem.motorista)
  viagens?: Viagem[];
}
