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

let scoreX=0;
let scoreO=0;
$(".result-O").text(scoreO);
$(".result-X").text(scoreX);

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
            if($(".field").eq(i).val()=="X"&&$(".field").eq(i).siblings().eq(0).val()=="X"&&$(".field").eq(i).siblings().eq(1).val()=="X"){
                $(".referee").show().text("Player X wins");
                
            }
      
        if($(".first-row").children().eq(i).val()=="X"&&$(".second-row").children().eq(i).val()=="X"&&$(".third-row").children().eq(i).val()=="X"){
            $(".referee").show().text("Player X wins");
           
        }
        if($(".first-row").children().eq(0).val()=="X"&&$(".second-row").children().eq(1).val()=="X"&&$(".third-row").children().eq(2).val()=="X"){
            $(".referee").show().text("Player X wins");
            
        }
        if($(".first-row").children().eq(2).val()=="X"&&$(".second-row").children().eq(1).val()=="X"&&$(".third-row").children().eq(0).val()=="X"){
            $(".referee").show().text("Player X wins");
            
        }
       
    }
    if($(".referee").text()=="Player X wins"){

                
        scoreX++;
$(".result-X").text(scoreX);
$("input[type='text']").attr("disabled",true);
}
    })
    })
})


// Player O Chances
$(document).ready(function(){
    $(function(){
    $(".field").on("click",function(){
        for(let i=0 ;i<fieldContent.length;i++){

            if($(".field").eq(i).val()=="O"&&$(".field").eq(i).siblings().eq(0).val()=="O"&&$(".field").eq(i).siblings().eq(1).val()=="O"){
                $(".referee").show().text("Player O wins");   
            }
         
        if($(".first-row").children().eq(i).val()=="O"&&$(".second-row").children().eq(i).val()=="O"&&$(".third-row").children().eq(i).val()=="O"){
            $(".referee").show().text("Player O wins");  
        }
        if($(".first-row").children().eq(0).val()=="O"&&$(".second-row").children().eq(1).val()=="O"&&$(".third-row").children().eq(2).val()=="O"){
            $(".referee").show().text("Player O wins");   
        }
        
        if($(".first-row").children().eq(2).val()=="O"&&$(".second-row").children().eq(1).val()=="O"&&$(".third-row").children().eq(0).val()=="O"){
            $(".referee").show().text("Player O wins");   
        }
    }
    if($(".referee").text()=="Player O wins"){
        scoreO++;
        $(".result-O").text(scoreO);
$("input[type='text']").attr("disabled",true);
    }
    })
    })
})


    
  //Again          
  $(document).ready(function(){
    $(".button").on("click",function(){
        $("input[type='text']").val("").attr("disabled",false);
        
    $(".referee").text("");
   return index=0;

})
  })              
                
        
   