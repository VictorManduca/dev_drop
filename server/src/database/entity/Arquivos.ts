import { Entity, PrimaryColumn, Column, OneToOne } from 'typeorm'

@Entity()
export class Arquivos {
  @PrimaryColumn()
  ID: number

  @Column()
  UsuarioID: number

  @Column()
  Arquivo: string
}
