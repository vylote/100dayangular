import { Pipe, PipeTransform } from "@angular/core";

interface UserLike {
    name: string,
    age: number,
    class: string
}

@Pipe({
    name: 'formatUser'
})

export class FormatUser implements PipeTransform{
    transform(user : UserLike, para1?: string) {
        console.log(user, para1)
        return user.name+" "+user.age+" "+user.class
    }
}