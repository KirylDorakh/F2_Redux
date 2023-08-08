// es5
// export function logging(store){
//     return function(next){
//         return function(action){
//             console.log('123')
//             return next(action)
//         }
//     }
// }

//es6

export const logging = store => next => action => {
    console.log(`Done: ${action.type}`)
    return next(action)
}