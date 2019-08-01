//get val 



$('button').on('click', function(evt){
   let skill = $('input').val();
   var template= `
   <tr>
   <td><img src="https://i.imgur.com/S44m3ha.png"></td>
    <td>${skill}</td>
   </tr>
   `;

   $('tbody').append(template);

   $('input').val("");

});

$('tbody').on('click', 'img',function(){
    $(this).closest('tr').fadeOut(1000, function(){
        $(this).remove();
    });
    })