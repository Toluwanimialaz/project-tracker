$(document).ready(function(){
    let hero=$("#hero");
    let dayTime=$('<h3>');
    hero.append(dayTime);
    sec=10000;

    function interval(){
        let time=setInterval(function(){
            let day=moment().format("[Today is] dddd, DD MM YYYY, HH:mm:ss a");
            dayTime.text(day);
            sec=sec-1
            if(sec===15){
                clearInterval(time)
            }
        },1000)
    }

    interval();


    $( function() {
        $( "#dueDate" ).datepicker();
    } );

    $( "#dueDate").datepicker({
        minDate: new Date(moment("23/06/2023","DD MM YYYY"))//if you leave bracket within moment empty,mindate would be the present day
    });

    var minDate = $( ".selector" ).datepicker( "option", "minDate" );
                      
    var table=$('table');
    var ths=$('th');
    console.log(ths);
    let currentTime=moment(new Date())
    $('#type').val("");


    function createTable(){
        var input1=$('#inp1').val()
        var input2=$('#inp2').val();
        var input3=$('#inp3').val();
        var input4=$('#inp4').val();
        if(!input1||!input4||input4<0){
            alert("fill in all the details properly");
            return
        }
        var inps=$('.stuff');
        var tableCont=$('<tr>')
        for(i=0;i<ths.length;i++){
            if(i===4){
                var list=$('<th>');
                var hourlyWage=inps[3].value
                var potentialEarned=hourlyWage*dif*8;
                list.html(potentialEarned);
                tableCont.append(list);
                tableCont.addClass("blue")
                table.append(tableCont);
                continue
            }
            if(i===5){
                var list=$('<th>');
                var butt=$('<button>');
                butt.attr("type","button");
                butt.attr("class","close");
                butt.attr("aria-label","Close");
                var span=$("<span>");
                span.attr("aria-hidden","true");
                span.html("&times;")
                butt.append(span);
                list.html(butt);
                tableCont.append(list);
                tableCont.addClass("blue")
                table.append(tableCont);
                continue
            }
            var list=$('<th>');
            list.text(inps[i].value)
            tableCont.append(list);
            tableCont.addClass("blue")
            table.append(tableCont);
            if(i===2){
                var duedate=inps[i].value;
                var endDate=moment(duedate)
                console.log(duedate);
                var dif=endDate.diff(currentTime,"days");
            }
        }
        for(i=0;i<inps.length;i++){
            inps[i].value="";
        }

        $('.submit').attr("data-dismiss","modal");
    }

    $('#submit').on("click",createTable);
    
    $('#tabili').on("click",".close",function(event){
        var too=event.target;
        too.parentElement.parentElement.parentElement.remove();
    })

});