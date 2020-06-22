import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customers'
})
export class CustomerPipe implements PipeTransform {

  transform(value: string, gender : string): string {

    if(gender.toLocaleLowerCase() === 'male') 
    {
      return "Mr. " + value;
    }
    else
    {
        return "Miss. " + value;
    }
  }

}
