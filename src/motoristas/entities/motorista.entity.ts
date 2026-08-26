import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Caminhao } from '../../caminhoes/entities/caminhao.entity';
import { Viagem } from '../../viagens/entities/viagem.entity';

@Entity('motorista')
export class Motorista {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', nullable: true })
  nome: string;

  @Column({ type: 'varchar', unique: true, nullable: true })
  cpf: string;

  @Column({ type: 'varchar', unique: true, nullable: true })
  numero_cnh: string;

  @Column({ type: 'varchar', nullable: true })
  categoria_cnh: string;

  @OneToMany(() => Caminhao, (caminhao) => caminhao.motorista)
  caminhoes: Caminhao[];

  @OneToMany(() => Viagem, (viagem) => viagem.motorista)
  viagens: Viagem[];
}
