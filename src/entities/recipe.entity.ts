/**
 * Created by roije on 09/12/2016.
 */
export class Recipe{
  constructor(
    public _id: string,
    public title: string,
    public ingredients : Object[],
    public tags: string[],
    public procedure: string,
    public category : string,
    public numPersons : number,
    public picture : string,
    public rating : number
  ) {}
}
