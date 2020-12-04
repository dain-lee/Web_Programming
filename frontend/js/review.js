function handleCreateReview(locationId,description,destId){
    
    console.log(locationId,description,destId)
    let data = {locationId:locationId,destDescription:description,destId:destId}
    console.log(data)
    $.ajax({
        type: "put",
        url: 'http://localhost:7000/admin/review',
        datatype: 'json',
        data:{data},
        success: function(data){
            
           console.log(data)
        }
    }) 
        
      
}
function getDestination(){
    $.ajax({
        type: "get",
        url: 'http://localhost:7000/admin/review/list',
        datatype: 'json',
        success: function(msg){
            var items = msg;
           console.log(items)
        }
    })
}