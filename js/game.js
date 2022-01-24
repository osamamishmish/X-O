var fieldContent=[
    {
       
        value:"X",
    },
    {
       
        value:"O",
    },
    {
       
        value:"X",
    },
    {
       
        value:"O",
    },
    {
      
        value:"X",
    },
    {
      
        value:"O",
    },
    {
       
        value:"X",
    },
    {

        value:"O",
    },
    {
      
        value:"X",
    },
]

//fill the fields
let index=0;
$(document).ready(function(){
    $(".field").on("focus",function(){
        $(this).addClass("focused");
    }).on("click",function(){
        
        $(this).val(fieldContent[index].value).attr("disabled",true);
        
        index++;
        
        
    })

})






//Player X Chances
$(document).ready(function(){
    $(function(){
    $(".field").on("click",function(){
        for(let i=0 ;i<fieldContent.length;i++){

        if($(".field").eq(i).val()=="X"&&$(".field").eq(i+1).val()=="X"&&$(".field").eq(i+2).val()=="X"){
        
            $(".referee").show().text("Player X wins");
        }
      /*  if($(".second-row").children().eq(0).val()=="X"&&$(".second-row").children().eq(1).val()=="X"&&$(".second-row").children().eq(2).val()=="X"){
            $(".referee").show().text("Player X wins");
        }
        if($(".third-row").children().eq(0).val()=="X"&&$(".third-row").children().eq(1).val()=="X"&&$(".third-row").children().eq(2).val()=="X"){
            $(".referee").show().text("Player X wins");
        }*/
        
        if($(".first-row").children().eq(0).val()=="X"&&$(".second-row").children().eq(0).val()=="X"&&$(".third-row").children().eq(0).val()=="X"){
            $(".referee").show().text("Player X wins");
        }
        
        if($(".first-row").children().eq(1).val()=="X"&&$(".second-row").children().eq(1).val()=="X"&&$(".third-row").children().eq(1).val()=="X"){
            $(".referee").show().text("Player X wins");
        }
        if($(".first-row").children().eq(2).val()=="X"&&$(".second-row").children().eq(2).val()=="X"&&$(".third-row").children().eq(2).val()=="X"){
            $(".referee").show().text("Player X wins");
        }
        
        if($(".first-row").children().eq(0).val()=="X"&&$(".second-row").children().eq(1).val()=="X"&&$(".third-row").children().eq(2).val()=="X"){
            $(".referee").show().text("Player X wins");
        }
        if($(".first-row").children().eq(2).val()=="X"&&$(".second-row").children().eq(1).val()=="X"&&$(".third-row").children().eq(0).val()=="X"){
            $(".referee").show().text("Player X wins");
        }
       
    }
    })
    })
})


// Player O Chances
$(document).ready(function(){
    $(function(){
    $(".field").on("click",function(){
        for(let i=0 ;i<fieldContent.length;i++){

            if($(".field").eq(i).val()=="O"&&$(".field").eq(i+1).val()=="O"&&$(".field").eq(i+2).val()=="O"){
        
                $(".referee").show().text("Player O wins");
            }
           /* if($(".first-row").children().eq(0).val()=="O"&&$(".first-row").children().eq(1).val()=="O"&&$(".first-row").children().eq(2).val()=="O"){
                $(".referee").show().text("Player O wins");
            }
            if($(".second-row").children().eq(0).val()=="O"&&$(".second-row").children().eq(1).val()=="O"&&$(".second-row").children().eq(2).val()=="O"){
                $(".referee").show().text("Player O wins");
            }
            if($(".third-row").children().eq(0).val()=="O"&&$(".third-row").children().eq(1).val()=="O"&&$(".third-row").children().eq(2).val()=="O"){
                $(".referee").show().text("Player O wins");
            }*/
        if($(".first-row").children().eq(0).val()=="O"&&$(".second-row").children().eq(0).val()=="O"&&$(".third-row").children().eq(0).val()=="O"){
            $(".referee").show().text("Player O wins");
        }
        if($(".first-row").children().eq(1).val()=="O"&&$(".second-row").children().eq(1).val()=="O"&&$(".third-row").children().eq(1).val()=="O"){
            $(".referee").show().text("Player O wins");
        }
        
        if($(".first-row").children().eq(2).val()=="O"&&$(".second-row").children().eq(2).val()=="O"&&$(".third-row").children().eq(2).val()=="O"){
            $(".referee").show().text("Player O wins");
        }
        if($(".first-row").children().eq(0).val()=="O"&&$(".second-row").children().eq(1).val()=="O"&&$(".third-row").children().eq(2).val()=="O"){
            $(".referee").show().text("Player O wins");
        }
        
        if($(".first-row").children().eq(2).val()=="O"&&$(".second-row").children().eq(1).val()=="O"&&$(".third-row").children().eq(0).val()=="O"){
            $(".referee").show().text("Player O wins");
        }
    }
    })
    })
})



//calculate the score
let scoreX=0;
let scoreO=0;
$(".result-O").text(scoreO);
$(".result-X").text(scoreX);
$(document).ready(function(){
    $(function(){
        $(".button").on("click",function(){
            $("input[type='text']").val("").attr("disabled",false);
            
            
                if($(".referee").text()=="Player O wins"){
                    scoreO++;
                    $(".result-O").text(scoreO);
                    
                
                }
                if($(".referee").text()=="Player X wins"){
                    scoreX++;
                    $(".result-X").text(scoreX);
                
                }
                $(".referee").text("");
               return index=0;

        })
        
    })
})