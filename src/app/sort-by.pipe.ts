import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

  transform(categories: any, searchText: any): Array<string> {
    if (searchText == null) { return categories; } else {

    return categories.filter( category => category.title.toLowerCase().indexOf(searchText.toLowerCase()) > -1) ;
    }

  }
}
