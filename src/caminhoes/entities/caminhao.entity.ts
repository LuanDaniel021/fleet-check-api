import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Crlv } from '../../crlvs/entities/crlv.entity';
//import { Motorista } from '../../motorista/entities/motorista.entity';
//import { Viagem } from '../../viagem/entities/viagem.entity';
//import { Pneu } from '../../pneu/entities/pneu.entity';
//import { Manutencao } from '../../manutencao/entities/manutencao.entity';

@Entity('caminhao')
export class Caminhao {
  @ApiProperty({
    description: 'ID único do caminhão',
    example: 1,
  })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiPropertyOptional({
    description: 'Quilometragem atual do veículo',
    example: 125000.5,
    type: Number,
  })
  @Column({ type: 'numeric', nullable: true })
  km_atual: number;

  @ApiPropertyOptional({
    description: 'Status operacional do caminhão (ex: Ativo, Em Manutenção, Inativo)',
    example: 'Ativo',
  })
  @Column({ type: 'varchar', nullable: true })
  status: string;

  @ApiPropertyOptional({
    description: 'ID do registro do CRLV vinculado',
    example: 3,
  })
  @Column({ type: 'integer', nullable: true })
  crlv_id: number;

  @ApiPropertyOptional({
    description: 'ID do motorista responsável',
    example: 12,
  })
  @Column({ type: 'integer', nullable: true })
  motorista_id: number;

  @ApiPropertyOptional({
    description: 'Dados do documento CRLV associado',
    type: () => Crlv,
  })
  @ManyToOne(() => Crlv, (crlv) => crlv.caminhoes)
  @JoinColumn({ name: 'crlv_id' })
  crlv: Crlv;

  //@ApiPropertyOptional({ description: 'Motorista vinculado', type: () => Motorista })
  //@ManyToOne(() => Motorista, (motorista) => motorista.caminhoes)
  //@JoinColumn({ name: 'motorista_id' })
  //motorista: Motorista;

  //@ApiPropertyOptional({ description: 'Histórico de viagens do caminhão', type: () => [Viagem] })
  //@OneToMany(() => Viagem, (viagem) => viagem.caminhao)
  //viagens: Viagem[];

  //@ApiPropertyOptional({ description: 'Pneus instalados no caminhão', type: () => [Pneu] })
  //@OneToMany(() => Pneu, (pneu) => pneu.caminhao)
  //pneus: Pneu[];

  //@ApiPropertyOptional({ description: 'Histórico de manutenções', type: () => [Manutencao] })
  //@OneToMany(() => Manutencao, (manutencao) => manutencao.caminhao)
  //manutencoes: Manutencao[];
}
