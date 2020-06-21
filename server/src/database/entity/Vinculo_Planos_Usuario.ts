import { Entity, PrimaryColumn, Column, OneToOne } from 'typeorm'

@Entity()
export class Vinculo_Planos_Usuario {
  @PrimaryColumn()
  ID: number

  @Column()
  UsuarioID: number

  @Column()
  PlanosID: number
}
