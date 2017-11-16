import { Pipe,PipeTransform } from '@angular/core';

@Pipe({
    name: 'convertToSpaces'
}
)

export class ConvertToSpaces implements PipeTransform{

    transform(value: string, charecter: string): string{
        return value.replace(charecter,' ')
    }

}
