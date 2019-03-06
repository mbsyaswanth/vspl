var page="";

function viewSection(pageIdentifier,sectionIdentifier) {
    //find whether the page is already loaded
    pageLoad(pageIdentifier,sectionIdentifier);
    //if page is already loaded then scroll to particular section in that page
    //if page is not loaded then do ajax request and scroll to that section
    // scrollToSec(sectionIdentifier);
}

function pageLoad(pageIdentify,sectionIdentifier){
    // finds if requested page is already loaded, if not it loads the page.
    var allPages=["vspl_company.html","terminal_details.html","berth_position.html","our_policy.html","careers.html","contact_us.html","tenders.html","homepage.html"];
    if(page!=pageIdentify){
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            document.getElementById("demo").innerHTML = this.responseText;
             scrollToSec(sectionIdentifier);
             iFrameResize();
          }
        };
        xhttp.open("GET","pages/"+allPages[pageIdentify] , true);
        xhttp.send();
    }
    else
    scrollToSec(sectionIdentifier);
  
}
function scrollToSec(sectionIdentify){
    //scrolls the page to required section
    var elmnt = document.getElementById(sectionIdentify);
        elmnt.scrollIntoView();
}



