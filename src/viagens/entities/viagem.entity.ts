import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Tables } from '../../supabase/supabase.types';
import { Caminhao } from '../../caminhoes/entities/caminhao.entity';
import { Motorista } from '../../motoristas/entities/motorista.entity';
import { MedicaoPneu } from '../../medicao_pneus/entities/medicao_pneu.entity';

@Entity('viagem')
export class Viagem implements Tables<'viagem'> {
  @ApiProperty({
    description: 'ID único da viagem',
    example: 1,
  })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiPropertyOptional({
    description: 'ID do caminhão vinculado',
    example: 1,
    nullable: true,
  })
  @Column({ type: 'integer', nullable: true })
  caminhao_id: number | null;

  @ApiPropertyOptional({
    description: 'ID do motorista responsável',
    example: 12,
    nullable: true,
  })
  @Column({ type: 'integer', nullable: true })
  motorista_id: number | null;

  @ApiPropertyOptional({
    description: 'Data e hora de início da viagem',
    example: '2026-08-27T10:00:00Z',
    nullable: true,
  })
  @Column({ type: 'timestamp', nullable: true })
  data_inicio: string | null;

  @ApiPropertyOptional({
    description: 'Data e hora de término da viagem',
    example: '2026-08-28T18:00:00Z',
    nullable: true,
  })
  @Column({ type: 'timestamp', nullable: true })
  data_fim: string | null;

  @ApiPropertyOptional({
    description: 'Quilometragem inicial do veículo',
    example: 120000.0,
    type: Number,
    nullable: true,
  })
  @Column({ type: 'numeric', nullable: true })
  km_inicial: number | null;

  @ApiPropertyOptional({
    description: 'Quilometragem final do veículo',
    example: 120450.5,
    type: Number,
    nullable: true,
  })
  @Column({ type: 'numeric', nullable: true })
  km_final: number | null;

  @ApiPropertyOptional({
    description: 'Distância total percorrida na viagem (em km)',
    example: 450.5,
    type: Number,
    nullable: true,
  })
  @Column({ type: 'numeric', nullable: true })
  distancia_percorrida: number | null;

  // --- Relacionamentos Opcionais ---

  @ApiPropertyOptional({
    description: 'Caminhão vinculado à viagem',
    type: () => Caminhao,
    nullable: true,
  })
  @ManyToOne(() => Caminhao, (caminhao) => caminhao.viagens)
  @JoinColumn({ name: 'caminhao_id' })
  caminhao?: Caminhao | null;

  @ApiPropertyOptional({
    description: 'Motorista responsável pela viagem',
    type: () => Motorista,
    nullable: true,
  })
  @ManyToOne(() => Motorista, (motorista) => motorista.viagens)
  @JoinColumn({ name: 'motorista_id' })
  motorista?: Motorista | null;

  @ApiPropertyOptional({
    description: 'Medições de pneus realizadas durante esta viagem',
    type: () => [MedicaoPneu],
  })
  @OneToMany(() => MedicaoPneu, (medicao) => medicao.viagem)
  medicoes_pneu?: MedicaoPneu[];
}
