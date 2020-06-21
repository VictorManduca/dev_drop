import { Entity, PrimaryColumn, Column, OneToOne } from 'typeorm'

@Entity()
export class Planos {
  @PrimaryColumn()
  ID: number

  @Column()
  Nome: string

  @Column()
  Preco: number
}
