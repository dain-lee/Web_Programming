
 function getLike(){
    let res;
    $.ajax({
        type: "get",
        url: 'http://localhost:7000/admin/like/list',
        datatype: 'json',
        async:false,
        success: function (data) {
            res = data.map(v=>v.contentId) 
            console.log(data)
           
        }
       
    })
    console.log(res)
    return res;
}
async function likeCards(){
    let likes = getLike()
    console.log(likes)
    likes.map((like,index)=>{
        likeCard(like)
    })

}

function getItem(requestUrl){
    let data;
    $.ajax({
        type: "get",
        url: requestUrl,
        datatype: 'json',
        async:false,
        success: function (msg) {
            data= msg.response.body.items.item;
           
           
        }
       
    })
 
    return data;
}
async function likeCard(like) {
    let URL = `http://api.visitkorea.or.kr/openapi/service/rest/KorService/detailCommon?ServiceKey=Q1rnD0P2lMbHzUSEqclxucsYKUIwcWXh%2BV48SXPuLPs7%2FxbrkIMg%2BN2HV9ELlnWxyawWxv4xQuo4BkUsFgs%2FYg%3D%3D&contentId=${like}&MobileOS=ETC&MobileApp=TourAPI3.0_Guide&defaultYN=Y&firstImageYN=Y&areacodeYN=Y&catcodeYN=Y&addrinfoYN=Y&mapinfoYN=Y&overviewYN=Y&transGuideYN=Y&_type=json`
  
   let item = getItem(URL)
  

 let common = '';
 common += '<div class="col-md-4">'
 common +='<div class="card mb-4 shadow-sm">'
 common +='<img width="100%" height="270px" src = '+item.firstimage+'>'+'<rect width="100%" height="300px" fill="#55595c"/></img>'
 common += '<div class="card-body">'
 common +=  '<p class="card-text">'+item.title+'</p>'
 common += '<div class="d-flex justify-content-between align-items-center">'
 common +='<div class="btn-group">'
 common +='<button type="button" class="btn btn-sm btn-outline-secondary" >View</button>'

 common +='</div></div></div></div></div>'
            common +=
                $(".likes").append(common);

}


function getReview(){
    let res;
    $.ajax({
        type: "get",
        url: 'http://localhost:7000/admin/review/list',
        datatype: 'json',
        async:false,
        success: function (data) {
             res = data
            console.log(data)
           
        }
       
    })
    console.log(res)
    return res;
}
async function onereview(review,index) {
    console.log(review)
    let common ='';
    common+='<tr><td >'+index+'</td>'
      common+='<td>'+review.locationName+'</td>'
      common+=' <td>'+review.destName+'</td>'
      common+=' <td>'+review.destDescription+'</td>'
      common+=' </tr>'
      common +=
      $(".tbody").append(common);

  
  //  let common = '';
  //  common += '<div class="col-md-4">'
  //  common +='<div class="card mb-4 shadow-sm">'
  //  common +='<img width="100%" height="270px" src = '+item.firstimage+'>'+'<rect width="100%" height="300px" fill="#55595c"/></img>'
  //  common += '<div class="card-body">'
  //  common +=  '<p class="card-text">'+item.title+'</p>'
  //  common += '<div class="d-flex justify-content-between align-items-center">'
  //  common +='<div class="btn-group">'
  //  common +='<button type="button" class="btn btn-sm btn-outline-secondary" >View</button>'
  
  //  common +='</div></div></div></div></div>'
  //             common +=
  //                 $(".likes").append(common);
  
  }
async function reviewTable(){
    let reviews = getReview()
    console.log(reviews)
    reviews.map((review,index)=>{
       
        onereview(review,index)
    })

}
