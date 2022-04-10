import {COMMENT_CREATE} from './types';
let badwords=['осел', 'козел', 'дурак','cука']
export function spamFilter(store){
return function(next){
    return function(action){
    if(action.type===COMMENT_CREATE){
        console.log(`cпам фильтер    ы${action.data.text}`)
        const bad=badwords.some(res=>action.data.text.includes(res))
        if(bad){
            alert('уважайте людей')
        }
    }
    return next(action)
    }
}
}