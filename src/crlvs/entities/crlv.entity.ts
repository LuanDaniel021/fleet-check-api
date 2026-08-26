import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Caminhao } from '../../caminhoes/entities/caminhao.entity';
import { Ipva } from '../../ipvas/entities/ipva.entity';

@Entity('crlv')
export class Crlv {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', unique: true })
  placa: string;

  @Column({ type: 'varchar', unique: true })
  chassi: string;

  @Column({ type: 'integer', nullable: true })
  ano_fabricacao: number;

  @Column({ type: 'integer', nullable: true })
  ano_modelo: number;

  @Column({ type: 'integer', nullable: true })
  exercicio: number;

  @Column({ type: 'varchar', nullable: true })
  crv: string;

  @Column({ type: 'varchar', unique: true, nullable: true })
  renavam: string;

  @Column({ type: 'varchar', nullable: true })
  marca: string;

  @Column({ type: 'varchar', nullable: true })
  modelo: string;

  @Column({ type: 'varchar', nullable: true })
  especie: string;

  @Column({ type: 'varchar', nullable: true })
  tipo: string;

  @Column({ type: 'char', length: 2, nullable: true })
  uf: string;

  @OneToMany(() => Caminhao, (caminhao) => caminhao.crlv)
  caminhoes: Caminhao[];

  @OneToMany(() => Ipva, (ipva) => ipva.crlv)
  ipvas: Ipva[];
}
