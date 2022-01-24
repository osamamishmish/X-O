var fieldContent=[
    {
       // name:1,
        value:"X",
    },
    {
       // name:2,
        value:"O",
    },
    {
       // name:3,
        value:"X",
    },
    {
       // name:4,
        value:"O",
    },
    {
      //  name:5,
        value:"X",
    },
    {
      //  name:6,
        value:"O",
    },
    {
       // name:7,
        value:"X",
    },
    {
      //  name:8,
        value:"O",
    },
    {
      //  name:9,
        value:"X",
    },
]
var theFirstRow=document.querySelector(".first-row"),
    theSecondRow=document.querySelector(".second-row");
let index=0;
$(document).ready(function(){
    $(".field").on("focus",function(){
        $(this).addClass("focused");
    }).on("click",function(){
        
        $(this).val(fieldContent[index].value).attr("disabled",true);
        
        index++;
        
    })

})

$(document).ready(function(){
    $(function(){
    $(".field").on("click",function(){
        for(let i=0 ;i<fieldContent.length;i++){

        if($(".field").eq(i-2).val()=="X"&&$(".field").eq(i-1).val()=="X"&&$(".field").eq(i).val()=="X"){
            alert("Player X wins");
        }
        if($(".field").eq(i-2).val()=="O"&&$(".field").eq(i-1).val()=="O"&&$(".field").eq(i).val()=="O"){
            alert("Player O wins");
        }
        if($(".first-row").children().eq(0).val()=="X"&&$(".second-row").children().eq(0).val()=="X"&&$(".third-row").children().eq(0).val()=="X"){
            alert("PlayerX wins");
        }
        if($(".first-row").children().eq(0).val()=="O"&&$(".second-row").children().eq(0).val()=="O"&&$(".third-row").children().eq(0).val()=="O"){
            alert("Player O wins");
        }
        if($(".first-row").children().eq(1).val()=="O"&&$(".second-row").children().eq(1).val()=="O"&&$(".third-row").children().eq(1).val()=="O"){
            alert("Player O wins");
        }
        if($(".first-row").children().eq(1).val()=="X"&&$(".second-row").children().eq(1).val()=="X"&&$(".third-row").children().eq(1).val()=="X"){
            alert("Player X wins");
        }
        if($(".first-row").children().eq(2).val()=="X"&&$(".second-row").children().eq(2).val()=="X"&&$(".third-row").children().eq(2).val()=="X"){
            alert("Player X wins");
        }
        if($(".first-row").children().eq(2).val()=="O"&&$(".second-row").children().eq(2).val()=="O"&&$(".third-row").children().eq(2).val()=="O"){
            alert("Player O wins");
        }
        if($(".first-row").children().eq(0).val()=="O"&&$(".second-row").children().eq(1).val()=="O"&&$(".third-row").children().eq(2).val()=="O"){
            alert("Player O wins");
        }
        if($(".first-row").children().eq(0).val()=="X"&&$(".second-row").children().eq(1).val()=="X"&&$(".third-row").children().eq(2).val()=="X"){
            alert("Player X wins");
        }
        if($(".first-row").children().eq(2).val()=="X"&&$(".second-row").children().eq(1).val()=="X"&&$(".third-row").children().eq(0).val()=="X"){
            alert("Player X wins");
        }
        if($(".first-row").children().eq(2).val()=="O"&&$(".second-row").children().eq(1).val()=="O"&&$(".third-row").children().eq(0).val()=="O"){
            alert("Player O wins");
        }
    }
    })
    })
})