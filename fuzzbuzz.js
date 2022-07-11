//new file
var fizz = fizzBuzz(50)
console.log(fizz)

function fizzBuzz(num){
    if ((typeof num) !== ('number')) {
        
        return "not a number"
    }
    let fb = []
    for(var i = 1;i<=num;i++)
    {
        if(!(i%3) && !(i%5)){
            fb.push('Fizz Buzz')
        }
        else if (!(i%3)){
            fb.push('Fizz')
        }
        else if (!(i%5)){
            fb.push('Buzz')
        }
        else fb.push(i)
    }
    return fb
}

