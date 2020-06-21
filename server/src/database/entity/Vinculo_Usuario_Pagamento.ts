import { Entity, PrimaryColumn, Column, OneToOne } from 'typeorm'

@Entity()
export class Vinculo_Usuario_Pagamento {
  @PrimaryColumn()
  ID: number

  @Column()
  VinculoPlanoUsuarioID: number

  @Column()
  ApiToken: string
}
