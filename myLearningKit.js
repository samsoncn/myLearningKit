function p01Func() {
	
    // add a getElementById here to get the "problem" div and set its innerHTML
    document.getElementById("problem").innerHTML="<p>I'm looking for a type of pancake originating from the Indian subcontinent, made from a fermented batter. It is somewhat similar to a crepe in appearance.</p>";
    
    // add a getElementById here to get "flowchart" img and set its attribue src
    document.getElementById("flowchart").setAttribute("src", "images/dosa/dosaDesign.jpg");
    
    // add a getElementById here to get "flowchart" img and set the display property of its style to none
    document.getElementById("flowchart").style.display = "none";
    
    
    // repeat the above two steps for "js" img here for the image that is shown for "js"
   document.getElementById("js").setAttribute("src", "images/dosa/dosa1.jpg");
   document.getElementById("js").style.display="none";

    document.getElementById("another").setAttribute("src", "images/dosa/dosa2.jpg");
    document.getElementById("another").style.display="none";

   
    // gets the checkboxes that their ID is check1 and check2, and unchecks them
    document.getElementById("check1").checked=false;
    document.getElementById("check2").checked=false;
    document.getElementById("check3").checked=false;

  
  }
  
  
  
    function checkUncheck1(){
        if (document.getElementById("check1").checked==true) {
            // add a getElementById here to get "flowchart" img and 
            // set the display property of its style to "inline"	 
            document.getElementById("flowchart").style.display="inline";
            
        }
        else {
            // add a getElementById here to get "flowchart" img and 
            // set the display property of its style to "none"	 
            document.getElementById("flowchart").style.display="none";
            
        }
    }

    function checkUncheck2(){
        if (document.getElementById("check2").checked==true) {
            // add a getElementById here to get "js" img and 
            // set the display property of its style to "inline"	 
            document.getElementById("js").style.display="inline";
            
        }
        else {
            // add a getElementById here to get "js" img and 
            // set the display property of its style to "none"	 
            document.getElementById("js").style.display="none";        
        }
    }


  
    // create function checkUncheck3, which is similar to checkUncheck 1 and 2
    function checkUncheck3(){
        if (document.getElementById("check3").checked==true) {
        // add a getElementById here to get "js" img and 
        // set the display property of its style to "inline"	 
            document.getElementById("another").style.display="inline";
        
        }
        else {
        // add a getElementById here to get "js" img and 
        // set the display property of its style to "none"	 
            document.getElementById("another").style.display="none";        
        }
    }
  
  
    // create function p02Func similar to p01Func 
    function p02Func(){
        document.getElementById("problem").innerHTML="<p>I'm looking for an Iranian dish that consists of grilled chunks of chicken which are sometimes with bone and other times without bone. It's one of the most popular dishes of Iran. It is common to marinate the chunks in minced onion, lemon juice and sometimes saffron.</p>";
    
        document.getElementById("flowchart").setAttribute("src", "images/jujeh/jujehDesign.jpg");
        document.getElementById("flowchart").style.display="none";

        document.getElementById("js").setAttribute("src", "images/jujeh/jujeh1.jpg");
        document.getElementById("js").style.display="none";

        document.getElementById("another").setAttribute("src", "images/jujeh/jujeh2.jpg");
        document.getElementById("another").style.display="none";

        document.getElementById("check1").checked=false;
        document.getElementById("check2").checked=false;
        document.getElementById("check3").checked=false;

    }
    // Double click to zoom in and out of the image of the id "flowchart"
    function zoomIn(){
        document.getElementById("flowchart").style.width="200%";
    }

    function zoomOut(){
        document.getElementById("flowchart").style.width="100%";
    }

    