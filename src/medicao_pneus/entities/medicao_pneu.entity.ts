import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Tables } from '../../supabase/supabase.types';
import { Pneu } from '../../pneus/entities/pneu.entity';
import { Viagem } from '../../viagens/entities/viagem.entity';

@Entity('medicao_pneu')
export class MedicaoPneu implements Tables<'medicao_pneu'> {
  @ApiProperty({
    description: 'ID único da medição do pneu',
    example: 1,
  })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiPropertyOptional({
    description: 'ID do pneu medido',
    example: 1,
    nullable: true,
  })
  @Column({ type: 'integer', nullable: true })
  pneu_id: number | null;

  @ApiPropertyOptional({
    description: 'ID da viagem em que a medição foi realizada',
    example: 1,
    nullable: true,
  })
  @Column({ type: 'integer', nullable: true })
  viagem_id: number | null;

  @ApiPropertyOptional({
    description: 'Profundidade atual do sulco do pneu (em milímetros)',
    example: 12.3,
    type: Number,
    nullable: true,
  })
  @Column({ type: 'numeric', nullable: true })
  profundidade_atual_mm: number | null;

  @ApiPropertyOptional({
    description: 'Data em que a medição foi registrada',
    example: '2026-08-27',
    nullable: true,
  })
  @Column({ type: 'date', nullable: true })
  data_medicao: string | null;

  // --- Relacionamentos Opcionais ---

  @ApiPropertyOptional({
    description: 'Pneu associado a esta medição',
    type: () => Pneu,
    nullable: true,
  })
  @ManyToOne(() => Pneu, (pneu) => pneu.medicoes)
  @JoinColumn({ name: 'pneu_id' })
  pneu?: Pneu | null;

  @ApiPropertyOptional({
    description: 'Viagem associada a esta medição',
    type: () => Viagem,
    nullable: true,
  })
  @ManyToOne(() => Viagem, (viagem) => viagem.medicoes_pneu)
  @JoinColumn({ name: 'viagem_id' })
  viagem?: Viagem | null;
}
