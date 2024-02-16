
function r()
{
    let c=Math.floor(Math.random()*3+1)
                
                let cr=
                    c===1
                    ?"rock":
                    c===2
                    ?"paper"
                    :"scissor";

                let result=

                    b===cr
                    ?"tie":

                    b==="rock" &&cr==="paper"
                    ?`user choice ${b} and computer is ${cr} the winner is computer`:

                    b==="paper" &&cr==="scissor"
                    ?`user choice ${b} and computer is ${cr} the winner is computer`:

                    b==="scissor"&&cr==="rock"
                    ?`user choice ${b} and computer is ${cr} the winner is computer`

                    :`user choice ${b} and computer is ${cr} the winner is user`;

                    alert(result)
                    let pa=confirm("playagain");
                    pa?location.reload():alert("thanks for playin")
                
            

}




a=confirm("do you want to play this game")

if (a){
    c=prompt("rock,paper or scissor")
    if (c){
        b=c.trim().toLowerCase()
    

        if (b==="rock"||
            b==="paper"||
            b==="scissor")
            { 
                r(b)
                
        }
            else{
                alert("type correctly")
            }
    
        }else{
            alert("choose properly")
        }
    }else{
        alert("playagain later")

    }