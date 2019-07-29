// xmltimerequest function from a url request
function xmltimerequest(){
  var httpsrequest = new XMLHttpRequest();
  var urlreverselookup = "https://cors-anywhere.herokuapp.com/";
  httpsrequest.open('GET', urlreverselookup + "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]");
  httpsrequest.onload = function(){
    // fetch request includes the option specified above to send in the URL
    // This request using XMLHttpRequest format.
    // The JSON data that is hosting this information allows a reuqest for a random quote
    var JSONdata = httpsrequest.responseText;
    let JSONObject = JSON.parse(JSONdata);
    let authorofquote = JSONObject[0].title;
    let contentofquote = JSONObject[0].content;
    // obtaining id from apirequestrandomquote to direct the infromation on to the home page
    document.getElementsByClassName('apirequestrandomquote')[0].innerHTML =   contentofquote + "<br>" + authorofquote;
  }
  httpsrequest.send();
}
xmltimerequest();
