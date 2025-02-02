export type Subject = {
  _id: string,
  nombre: string,
  codigo: string,
  semestre: string,
  cantidadCredito: number,
  asignaturaTipo: any,
  intensidadHorariaPractica: number,
  intensidadHorariaTeorica: number,
  intensidadHorariaIndependiente: number,
  intensidadHoraria: number,
  prerrequisitos: string,
  correquisitos: string,
  presentacionAsignatura: string,
  justificacionAsignatura: string,
  objetivoGeneral: string,
  objetivosEspecificos: string,
  competencias: string,
  mediosEducativos: string,
  evaluacion: string,
  bibliografia: string,
  cibergrafia: string,
  contenido: any[],
  docente: any[],
  equivalencia: any[]
};