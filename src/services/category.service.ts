/**
 * Created by roije on 09/12/2016.
 */
import {Injectable} from "@angular/core";
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import { Observable } from 'rxjs';
import {Category} from "../entities/category.entity";

@Injectable()
export class CategoryService{
  private categories : Category[];
  private url: string = "http://localhost:3000/api/categories";

  constructor(private http: Http){

  }

  public getAllLocalCategories() : Category[] {
    return this.categories;
  }

  public getAllRemoteCategories() : Observable<Category[]>{
    return this.http.get(this.url)
      .map((res: Response) => {
        let data = res.json();
        this.categories = data;
        return data || {};
      })
      .catch(this.handleError)
  }

  private handleError(error: Response | any) {
    return Observable.throw("some error message");
  }
}
