import { Apoderado } from "./apoderado";

export class Publicacion{
  idPublicacion: number=0
  comunidad:Comunidad = new Comunidad();
  apoderado:Apoderado = new Apoderado();
  tituloPublicacion:String = ""
  comentarioPublicacion:String = ""
}