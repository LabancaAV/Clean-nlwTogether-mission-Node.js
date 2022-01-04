export abstract class ComplimentRepository {
  createCompliment: (compliment: any) => Promise<any>
}