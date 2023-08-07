import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Store {
    @PrimaryGeneratedColumn('uuid')
    id: String;
    @Column('varchar')
    name: string;
    @Column('varchar')
   descreption: string;
   @Column('varchar')
   category: string;
   @Column('varchar')
   contact: string;
   @Column( 'double precision')
   latitude: number;
   @Column( 'double precision')
   longitude: number;

}