import { Entity, PrimaryColumn, Column } from 'typeorm'

@Entity()
export class Usuario {
  @PrimaryColumn()
  ID: number

  @Column()
  Nome: string

  @Column()
  Email: string

  @Column()
  Senha: string

  @Column()
  Token: string
}
