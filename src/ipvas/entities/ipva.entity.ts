import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Crlv } from '../../crlvs/entities/crlv.entity';

@Entity('ipva')
export class Ipva {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'integer', nullable: true })
  crlv_id: number;

  @Column({ type: 'integer', nullable: true })
  ano_referencia: number;

  @Column({ type: 'date', nullable: true })
  data_vencimento: Date;

  @Column({ type: 'numeric', nullable: true })
  valor: number;

  @Column({ type: 'varchar', nullable: true })
  status: string;

  @ManyToOne(() => Crlv, (crlv) => crlv.ipvas)
  @JoinColumn({ name: 'crlv_id' })
  crlv: Crlv;
}
