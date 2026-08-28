import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Tables } from '../../supabase/supabase.types';
import { Crlv } from '../../crlvs/entities/crlv.entity';

@Entity('ipva')
export class Ipva implements Tables<'ipva'> {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'integer', nullable: true })
  crlv_id: number | null;

  @Column({ type: 'integer', nullable: true })
  ano_referencia: number | null;

  @Column({ type: 'date', nullable: true })
  data_vencimento: string | null;

  @Column({ type: 'numeric', nullable: true })
  valor: number | null;

  @Column({ type: 'varchar', nullable: true })
  status: string | null;

  // optional

  @ManyToOne(() => Crlv, (crlv) => crlv.ipvas)
  @JoinColumn({ name: 'crlv_id' })
  crlv?: Crlv;
}
