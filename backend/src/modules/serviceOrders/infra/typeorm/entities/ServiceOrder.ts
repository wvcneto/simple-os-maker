import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';

import Service from '@modules/_services/infra/typeorm/entities/Service';
import User from '@modules/users/infra/typeorm/entities/User';

@Entity('service_orders')
class ServiceOrder {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  description: string;

  @Column()
  service_id: string;

  @OneToOne(() => Service)
  @JoinColumn({ name: 'service_id' })
  service: Service;

  @Column()
  client_id: string;

  @OneToOne(() => User)
  @JoinColumn({ name: 'client_id' })
  client: User;

  @Column()
  responsible_id: string;

  @OneToOne(() => User)
  @JoinColumn({ name: 'responsible_id' })
  responsible: User;

  @Column()
  requester_id: string;

  @OneToOne(() => User)
  @JoinColumn({ name: 'requester_id' })
  requester: User;

  @Column('time with time zone')
  deadline: Date;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default ServiceOrder;
