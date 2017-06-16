import { Pipe } from '@angular/core';

@Pipe({
    name: 'TestPipe'
})
export class TestPipe {
    transform(value, args): any  {

		console.log(value)
		console.log(args)

		return args

//		console.log(""+ args[0] + " / "+ args[1] + " / "+ args[2] )

		// if (args[1] == args[2]){
		// 	return args[0];
		// }
	}
}


// @Pipe({
//   name: 'TestPipe',
//   pure: false
// })
// export class TestPipe implements PipeTransform {
//   transform(data: any, searchTerm: string): any[] {
//       if(searchTerm == 'mobile'){
// 		  return data;
// 	  }
//   }
// }