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
import { MedicaoPneu } from '../../medicao_pneus/entities/medicao_pneu.entity';

@Entity('pneu')
export class Pneu implements Tables<'pneu'> {
  @ApiProperty({
    description: 'ID único do pneu',
    example: 1,
  })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiPropertyOptional({
    description: 'ID do caminhão em que o pneu está instalado',
    example: 1,
    nullable: true,
  })
  @Column({ type: 'integer', nullable: true })
  caminhao_id: number | null;

  @ApiPropertyOptional({
    description:
      'Posição do pneu no veículo (ex: Dianteiro Esquerdo, Tração Direita)',
    example: 'Dianteiro Esquerdo',
    nullable: true,
  })
  @Column({ type: 'varchar', nullable: true })
  posicao: string | null;

  @ApiPropertyOptional({
    description: 'Marca / Fabricante do pneu',
    example: 'Michelin',
    nullable: true,
  })
  @Column({ type: 'varchar', nullable: true })
  marca: string | null;

  @ApiPropertyOptional({
    description:
      'Profundidade inicial do sulco da banda de rodagem (em milímetros)',
    example: 15.5,
    type: Number,
    nullable: true,
  })
  @Column({ type: 'numeric', nullable: true })
  sulco_inicial_mm: number | null;

  @ApiPropertyOptional({
    description: 'Status do pneu (ex: Em uso, Descartado, Manutenção)',
    example: 'Em uso',
    nullable: true,
  })
  @Column({ type: 'varchar', nullable: true })
  status: string | null;

  // --- Relacionamentos Opcionais ---

  @ApiPropertyOptional({
    description: 'Caminhão onde o pneu está instalado',
    type: () => Caminhao,
    nullable: true,
  })
  @ManyToOne(() => Caminhao, (caminhao) => caminhao.pneus)
  @JoinColumn({ name: 'caminhao_id' })
  caminhao?: Caminhao | null;

  @ApiPropertyOptional({
    description: 'Histórico de medições do sulco deste pneu',
    type: () => [MedicaoPneu],
  })
  @OneToMany(() => MedicaoPneu, (medicao) => medicao.pneu)
  medicoes?: MedicaoPneu[];
}
