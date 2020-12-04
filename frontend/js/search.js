function map() {
    $('.fa-angle-up').toggleClass('clicked');
    if($('.location-map').css('display') == 'none') {
        $('.location-map').show();
    }
    else {
        $('.location-map').hide();
    }
}

const serviceKey = "Q1rnD0P2lMbHzUSEqclxucsYKUIwcWXh%2BV48SXPuLPs7%2FxbrkIMg%2BN2HV9ELlnWxyawWxv4xQuo4BkUsFgs%2FYg%3D%3D";

function attraction(id, code) {
    var requestUrl = '';
    requestUrl += "http://api.visitkorea.or.kr/openapi/service/rest/KorService/areaBasedList?ServiceKey=";
    requestUrl += serviceKey;
    requestUrl += "&contentTypeId=" + id + "&areaCode=1&sigunguCode=&";
    requestUrl += "cat1=" + code + "&cat2=&cat3=&listYN=Y&firstImageYN=Y&MobileOS=ETC&MobileApp=TourAPI3.0_Guide&arrange=P&numOfRows=100&pageNo=1&_type=json";
    data(requestUrl);
}

function events(code) {
    var requestUrl = '';
    requestUrl += "http://api.visitkorea.or.kr/openapi/service/rest/KorService/areaBasedList?ServiceKey=";
    requestUrl += serviceKey;
    requestUrl += "&contentTypeId=15&areaCode=1&sigunguCode=&cat1=A02&";
    requestUrl += "cat2=" + code + "&cat3=&listYN=Y&firstImageYN=Y&MobileOS=ETC&MobileApp=TourAPI3.0_Guide&arrange=P&numOfRows=100&pageNo=1&_type=json";
    data(requestUrl);
}

function mainevents(code) {
    var requestUrl = '';
    requestUrl += "http://api.visitkorea.or.kr/openapi/service/rest/KorService/areaBasedList?ServiceKey=";
    requestUrl += serviceKey;
    requestUrl += "&contentTypeId=15&areaCode=1&sigunguCode=&cat1=A02&";
    requestUrl += "cat2=" + code + "&cat3=&listYN=Y&firstImageYN=Y&MobileOS=ETC&MobileApp=TourAPI3.0_Guide&arrange=P&numOfRows=100&pageNo=1&_type=json";
    maindata(requestUrl);
}

function area(code) {
    var requestUrl = '';
    requestUrl += "http://api.visitkorea.or.kr/openapi/service/rest/KorService/areaBasedList?ServiceKey=";
    requestUrl += serviceKey;
    requestUrl += "&contentTypeId=12&areaCode=1&"
    requestUrl += "sigunguCode=" + code + "&cat1=&cat2=&cat3=&listYN=Y&firstImageYN=Y&MobileOS=ETC&MobileApp=TourAPI3.0_Guide&arrange=P&numOfRows=100&pageNo=1&_type=json";
    data(requestUrl);
}

function search(category) {
    var temp = document.getElementById('search').value;
    var key = encodeURI(temp);
    var requestUrl = '';
    requestUrl += "http://api.visitkorea.or.kr/openapi/service/rest/KorService/searchKeyword?ServiceKey=";
    requestUrl += serviceKey;
    requestUrl += "&keyword=" + key;
    requestUrl += "&areaCode=1&sigunguCode=&cat1=&cat2=&cat3=&listYN=Y&MobileOS=ETC&MobileApp=TourAPI3.0_Guide&arrange=O&numOfRows=100&pageNo=1&_type=json";
    searchdata(category, requestUrl);
}

function data(requestUrl) {
    console.log(requestUrl)
    $.ajax({
        type: "get",
        url: requestUrl,
        datatype: 'json',
        success: function(msg){
            var items = msg.response.body.items.item;
            $(".article-element").html('');
            for(var i=0; i < items.length; i++) {
                if(items[i].firstimage == undefined) {
                    continue;
                }
                var url = "details.html?contentid=" + items[i].contentid;
                var list = '';
                list += '<li>';
                list += '<a href=' + url + '>';
                list += '<img src=' + items[i].firstimage + ' class="article-element-thumb">';
                list += '<div class="article-element-info">';
                list += '<h4><strong>' + items[i].title + '</strong></h4>';
                list += '<p>' + items[i].addr1 + '</p>';
                list += '</div></a></li>'
                $(".article-element").append(list);
            }
        }
    })
}

function maindata(requestUrl) {
    $.ajax({
        type: "get",
        url: requestUrl,
        datatype: 'json',
        success: function(msg){
            var items = msg.response.body.items.item;
            

            for(var i=0; i < 8; i++) {
                if(items[i].firstimage == undefined) {
                    continue;
                }
                $("#slide"+i).html('');
                var url = "views/details.html?contentid=" + items[i].contentid;
                var list = '';
                list += '<a href=' + url + '>';
                list += '<img src=' + items[i].firstimage + ' height="300px">';
                list += '</a>';     
                $("#slide"+i).append(list);
            }
        }
    })
}

function searchdata(category, requestUrl) {
    $.ajax({
        type: "get",
        url: requestUrl,
        datatype: 'json',
        success: function(msg){
            var items = msg.response.body.items.item;
            $(".article-element").html('');
            for(var i=0; i < items.length; i++) {
                if(items[i].firstimage == undefined) {
                    continue;
                }
                var url = "details.html?contentid=" + items[i].contentid;
                if((items[i].cat2 == 'A0207' || items[i].cat == 'A0208') && category == 'events') {
                    var list = '';
                    list += '<li>';
                    list += '<a href=' + url + '>';
                    list += '<img src=' + items[i].firstimage + ' class="article-element-thumb">';
                    list += '<div class="article-element-info">';
                    list += '<h4><strong>' + items[i].title + '</strong></h4>';
                    list += '<p>' + items[i].addr1 + '</p>';
                    list += '</div></a></li>'
                    $(".article-element").append(list);
                }
                if((((items[i].cat2 == 'A0207')==false) && ((items[i].cat == 'A0208')==false)) && category == 'attraction') {
                    var list = '';
                    list += '<li>';
                    list += '<a href=' + url + '>';
                    list += '<img src=' + items[i].firstimage + ' class="article-element-thumb">';
                    list += '<div class="article-element-info">';
                    list += '<h4><strong>' + items[i].title + '</strong></h4>';
                    list += '<p>' + items[i].addr1 + '</p>';
                    list += '</div></a></li>'
                    $(".article-element").append(list);
                }
            }
        }
    })
}