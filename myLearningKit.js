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

    // Repeat above steps of creating 30+ functions
    function p03Func(){
        document.getElementById("problem").innerHTML="<p>A flowchart for a computer program to receive two numbers as sides of a rectangle and output the rectangle’s perimeter. </p>";

        document.getElementById("flowchart").setAttribute("src", "images/p03/p03.jpg");
        document.getElementById("flowchart").style.display="none";

        document.getElementById("js").setAttribute("src", "images/p03/p03_j.jpg");
        document.getElementById("js").style.display="none";

        document.getElementById("another").setAttribute("src", "");
        document.getElementById("another").style.display="none";

        document.getElementById("check1").checked=false;
        document.getElementById("check2").checked=false;
        document.getElementById("check3").checked=false;

    }
    function p04Func(){
        document.getElementById("problem").innerHTML="<p>A computer program to receive three numbers and store them in memory spaces called a, b, and c as three semi-axes of an ellipsoid, and calculate and output the volume of this ellipsoid.</p>";

        document.getElementById("flowchart").setAttribute("src", "images/p04/p04.jpg");
        document.getElementById("flowchart").style.display="none";

        document.getElementById("js").setAttribute("src", "images/p04/p04_j.jpg");
        document.getElementById("js").style.display="none";

        document.getElementById("another").setAttribute("src", "");
        document.getElementById("another").style.display="none";

        document.getElementById("check1").checked=false;
        document.getElementById("check2").checked=false;
        document.getElementById("check3").checked=false;

    }
    function p05Func(){
        document.getElementById("problem").innerHTML="<p>A computer program to receive three numerical coefficients of a quadratic equation (store them in memory spaces called a, b, and c) and calculate and output its roots.</p>";
        
        document.getElementById("flowchart").setAttribute("src", "images/p05/p05.jpg");
        document.getElementById("flowchart").style.display="none";

        document.getElementById("js").setAttribute("src", "images/p05/p05_j.jpg");
        document.getElementById("js").style.display="none";

        document.getElementById("another").setAttribute("src", "");
        document.getElementById("another").style.display="none";

        document.getElementById("check1").checked=false;
        document.getElementById("check2").checked=false;
        document.getElementById("check3").checked=false;

    }
    function p06Func(){
        document.getElementById("problem").innerHTML="<p>To receive three numerical coefficients of a quadratic equation and determine if it has two distinct real roots, one root, or no roots in real numbers.</p>";

        document.getElementById("flowchart").setAttribute("src", "images/p06/p06.jpg");
        document.getElementById("flowchart").style.display="none";

        document.getElementById("js").setAttribute("src", "images/p06/p06_j.jpg");
        document.getElementById("js").style.display="none";

        document.getElementById("another").setAttribute("src", "");
        document.getElementById("another").style.display="none";

        document.getElementById("check1").checked=false;
        document.getElementById("check2").checked=false;
        document.getElementById("check3").checked=false;

    }
    function p07Func(){
        document.getElementById("problem").innerHTML="<p>To receive a number and map it to a letter grade based on York standard.</p>";
        
        document.getElementById("flowchart").setAttribute("src", "images/p07/p07.jpg");
        document.getElementById("flowchart").style.display="none";

        document.getElementById("js").setAttribute("src", "images/p07/p07_j.jpg");
        document.getElementById("js").style.display="none";

        document.getElementById("another").setAttribute("src", "");
        document.getElementById("another").style.display="none";

        document.getElementById("check1").checked=false;
        document.getElementById("check2").checked=false;
        document.getElementById("check3").checked=false;

    }
    function p08Func(){
        document.getElementById("problem").innerHTML="<p>Outputs whether the input is positive or negative until a zero is received. When a zero is received, the button is disabled (so the function cannot be called anymore).</p>";

        document.getElementById("flowchart").setAttribute("src", "images/p08/p08.jpg");
        document.getElementById("flowchart").style.display="none";

        document.getElementById("js").setAttribute("src", "images/p08/p08_j.jpg");
        document.getElementById("js").style.display="none";

        document.getElementById("another").setAttribute("src", "");
        document.getElementById("another").style.display="none";

        document.getElementById("check1").checked=false;
        document.getElementById("check2").checked=false;
        document.getElementById("check3").checked=false;

    }
    function p09Func(){
        document.getElementById("problem").innerHTML="<p>To continue receiving numbers and output if they are positive or negative, until a zero is entered. When a zero is entered, the program should output how many positive and how many negative numbers have been entered, and then stop.</p>";

        document.getElementById("flowchart").setAttribute("src", "images/p09/p09.jpg");
        document.getElementById("flowchart").style.display="none";

        document.getElementById("js").setAttribute("src", "images/p09/p09_j.jpg");
        document.getElementById("js").style.display="none";

        document.getElementById("another").setAttribute("src", "");
        document.getElementById("another").style.display="none";

        document.getElementById("check1").checked=false;
        document.getElementById("check2").checked=false;
        document.getElementById("check3").checked=false;

    }
    function p10Func(){
        document.getElementById("problem").innerHTML="<p>To continue receiving numbers and output if they are divisible by 6 or not until a zero is entered. When a zero is entered, the program should output how many of the entered numbers were divisible by 6, then it stops.</p>";

        document.getElementById("flowchart").setAttribute("src", "images/p10/p10.jpg");
        document.getElementById("flowchart").style.display="none";

        document.getElementById("js").setAttribute("src", "images/p10/p10_j.jpg");
        document.getElementById("js").style.display="none";

        document.getElementById("another").setAttribute("src", "");
        document.getElementById("another").style.display="none";

        document.getElementById("check1").checked=false;
        document.getElementById("check2").checked=false;
        document.getElementById("check3").checked=false;

    }

    function p11Func(){
        document.getElementById("problem").innerHTML="<p>Devise a flowchart to receive a positive number and output each digit separately.</p>";

        document.getElementById("flowchart").setAttribute("src", "images/p11/p11.jpg");
        document.getElementById("flowchart").style.display="none";

        document.getElementById("js").setAttribute("src", "images/p11/p11_j.jpg");
        document.getElementById("js").style.display="none";

        document.getElementById("another").setAttribute("src", "");
        document.getElementById("another").style.display="none";

        document.getElementById("check1").checked=false;
        document.getElementById("check2").checked=false;
        document.getElementById("check3").checked=false;

    }
    function p12Func(){
        document.getElementById("problem").innerHTML="<p>Devise a flowchart to receive a positive number and output how many of its digits are equal to 7.</p>";

        document.getElementById("flowchart").setAttribute("src", "images/p12/p12.jpg");
        document.getElementById("flowchart").style.display="none";

        document.getElementById("js").setAttribute("src", "images/p12/p12_j.jpg");
        document.getElementById("js").style.display="none";

        document.getElementById("another").setAttribute("src", "");
        document.getElementById("another").style.display="none";

        document.getElementById("check1").checked=false;
        document.getElementById("check2").checked=false;
        document.getElementById("check3").checked=false;

    }
    function p13Func(){
        document.getElementById("problem").innerHTML="<p>Devise a flowchart to receive a positive number and output sum of its digits.</p>";

        document.getElementById("flowchart").setAttribute("src", "images/p13/p13.jpg");
        document.getElementById("flowchart").style.display="none";

        document.getElementById("js").setAttribute("src", "images/p13/p13_j.jpg");
        document.getElementById("js").style.display="none";

        document.getElementById("another").setAttribute("src", "");
        document.getElementById("another").style.display="none";

        document.getElementById("check1").checked=false;
        document.getElementById("check2").checked=false;
        document.getElementById("check3").checked=false;

    }
    function p14Func(){
        document.getElementById("problem").innerHTML="<p>Devise a flowchart to receive a positive number and output \"yes\" if it's equal to its reverse; otherwise, output \"no\".</p>";

        document.getElementById("flowchart").setAttribute("src", "images/p14/p14.jpg");
        document.getElementById("flowchart").style.display="none";

        document.getElementById("js").setAttribute("src", "images/p14/p14_j.jpg");
        document.getElementById("js").style.display="none";

        document.getElementById("another").setAttribute("src", "");
        document.getElementById("another").style.display="none";

        document.getElementById("check1").checked=false;
        document.getElementById("check2").checked=false;
        document.getElementById("check3").checked=false;

    }
    function p15Func(){
        document.getElementById("problem").innerHTML="<p>Devise an algorithm to receive a positive number, as n, and output n! (n Factorial).</p>";

        document.getElementById("flowchart").setAttribute("src", "images/p15/p15.jpg");
        document.getElementById("flowchart").style.display="none";

        document.getElementById("js").setAttribute("src", "images/p15/p15_j.jpg");
        document.getElementById("js").style.display="none";

        document.getElementById("another").setAttribute("src", "");
        document.getElementById("another").style.display="none";

        document.getElementById("check1").checked=false;
        document.getElementById("check2").checked=false;
        document.getElementById("check3").checked=false;

    }
    function p16Func(){
        document.getElementById("problem").innerHTML="<p>Devise an algorithm to input an integer greater than 1, as n, and output the first n values of the Fibonacci sequence. In Fibonacci sequence, the first two values are 0 and 1 and other values are sum of the two values preceding it.</p>";

        document.getElementById("flowchart").setAttribute("src", "images/p16/p16.jpg");
        document.getElementById("flowchart").style.display="none";

        document.getElementById("js").setAttribute("src", "images/p16/p16_j.jpg");
        document.getElementById("js").style.display="none";

        document.getElementById("another").setAttribute("src", "");
        document.getElementById("another").style.display="none";

        document.getElementById("check1").checked=false;
        document.getElementById("check2").checked=false;
        document.getElementById("check3").checked=false;

    }
    function p17Func(){
        document.getElementById("problem").innerHTML="<p>Devise an algorithm to input a positive integer, n, – and by using XX characters – output the figure below that has n rows and each row k has k pairs of XX.</p>";

        document.getElementById("flowchart").setAttribute("src", "images/p17/p17.jpg");
        document.getElementById("flowchart").style.display="none";

        document.getElementById("js").setAttribute("src", "images/p17/p17_j.jpg");
        document.getElementById("js").style.display="none";

        document.getElementById("another").setAttribute("src", "");
        document.getElementById("another").style.display="none";

        document.getElementById("check1").checked=false;
        document.getElementById("check2").checked=false;
        document.getElementById("check3").checked=false;

    }

    function p18Func(){
        document.getElementById("problem").innerHTML="<p>Trace the following flowchart for when input is 9 and complete the trace table. Also, write pre- post-conditions for this flowchart.</p>";

        document.getElementById("flowchart").setAttribute("src", "images/p18/p18.jpg");
        document.getElementById("flowchart").style.display="none";

        document.getElementById("js").setAttribute("src", "images/p18/p18_j.jpg");
        document.getElementById("js").style.display="none";
        document.getElementById("another").setAttribute("src", "images/p18/p18_a.jpg");
        document.getElementById("another").style.display="none";

        document.getElementById("check1").checked=false;
        document.getElementById("check2").checked=false;
        document.getElementById("check3").checked=false;

    }
    function p19Func(){
        document.getElementById("problem").innerHTML="<p>Trace the following flowchart for when input values are 12, 3, 3, 6, 11, 14, 1, 1, and complete the trace table. Also, write pre- post-conditions for this flowchart.</p>";

        document.getElementById("flowchart").setAttribute("src", "images/p19/p19.jpg");
        document.getElementById("flowchart").style.display="none";

        document.getElementById("js").setAttribute("src", "images/p19/p19_j.jpg");
        document.getElementById("js").style.display="none";
        document.getElementById("another").setAttribute("src", "images/p19/p19_a.jpg");
        document.getElementById("another").style.display="none";

        document.getElementById("check1").checked=false;
        document.getElementById("check2").checked=false;
        document.getElementById("check3").checked=false;

    }
    function p20Func(){
        document.getElementById("problem").innerHTML="<p>Trace the following flowchart for when input values are 12, 3, −3, 6, −11, −14, −1, −1, −3, 2, 0 and complete the trace table. Also, write pre- post-conditions for this flowchart.</p>";

        document.getElementById("flowchart").setAttribute("src", "images/p20/p20.jpg");
        document.getElementById("flowchart").style.display="none";

        document.getElementById("js").setAttribute("src", "images/p20/p20_j.jpg");
        document.getElementById("js").style.display="none";
        document.getElementById("another").setAttribute("src", "images/p20/p20_a.jpg");
        document.getElementById("another").style.display="none";

        document.getElementById("check1").checked=false;
        document.getElementById("check2").checked=false;
        document.getElementById("check3").checked=false;

    }
    function p21Func(){
        document.getElementById("problem").innerHTML="<p>Trace the following flowchart for when input values are 12, 3, −3, 6, 11, 3, −1, −1 and complete the trace table. Also, write pre- post-conditions for this flowchart.</p>";

        document.getElementById("flowchart").setAttribute("src", "images/p21/p21.jpg");
        document.getElementById("flowchart").style.display="none";

        document.getElementById("js").setAttribute("src", "images/p21/p21_j.jpg");
        document.getElementById("js").style.display="none";
        document.getElementById("another").setAttribute("src", "images/p21/p21_a.jpg");
        document.getElementById("another").style.display="none";

        document.getElementById("check1").checked=false;
        document.getElementById("check2").checked=false;
        document.getElementById("check3").checked=false;

    }
    function p22Func(){
        document.getElementById("problem").innerHTML="<p>This exercise uses sub-algorithms. Trace it for when input value is 6 and complete the trace tables. Also note that there are two variables name num, one in the main algorithm and another in the sub-algorithm. Write pre- post-conditions for each of these algorithms.</p>";

        document.getElementById("flowchart").setAttribute("src", "images/p22/p22.jpg");
        document.getElementById("flowchart").style.display="none";

        document.getElementById("js").setAttribute("src", "images/p22/p22_j.jpg");
        document.getElementById("js").style.display="none";
        document.getElementById("another").setAttribute("src", "images/p22/p22_a.jpg");
        document.getElementById("another").style.display="none";

        document.getElementById("check1").checked=false;
        document.getElementById("check2").checked=false;
        document.getElementById("check3").checked=false;

    }
    function p23Func(){
        document.getElementById("problem").innerHTML="<p>Devise an algorithm to receive a positive number, n, and output all prime numbers that are smaller than n and have a digit 7.</p>";

        document.getElementById("flowchart").setAttribute("src", "images/p23/p23.jpg");
        document.getElementById("flowchart").style.display="none";

        document.getElementById("js").setAttribute("src", "images/p23/p23_j.jpg");
        document.getElementById("js").style.display="none";
        document.getElementById("another").setAttribute("src", "images/p23/p23_a.jpg");
        document.getElementById("another").style.display="none";

        document.getElementById("check1").checked=false;
        document.getElementById("check2").checked=false;
        document.getElementById("check3").checked=false;

    }
    function p24Func(){
        document.getElementById("problem").innerHTML="<p>To compute sum of numbers between 10 and 30, inclusively</p>";

        document.getElementById("flowchart").setAttribute("src", "images/p24/p24.jpg");
        document.getElementById("flowchart").style.display="none";

        document.getElementById("another").setAttribute("src", "");
        document.getElementById("js").style.display="none";
        document.getElementById("another").setAttribute("");
        document.getElementById("another").style.display="none";

        document.getElementById("check1").checked=false;
        document.getElementById("check2").checked=false;
        document.getElementById("check3").checked=false;

    }
    function p25Func(){
        document.getElementById("problem").innerHTML="<p>An algorithm that presents the sum of 10 to 30</p>";

        document.getElementById("flowchart").setAttribute("src", "images/p25/p25.jpg");
        document.getElementById("flowchart").style.display="none";

        document.getElementById("js").setAttribute("src", "images/p25/p25_j.jpg");
        document.getElementById("js").style.display="none";
        document.getElementById("another").setAttribute("src", "images/p25/p25_a.jpg");
        document.getElementById("another").style.display="none";

        document.getElementById("check1").checked=false;
        document.getElementById("check2").checked=false;
        document.getElementById("check3").checked=false;

    }
    function p26Func(){
        document.getElementById("problem").innerHTML="<p>A flowchart that counts down from 5 and display \"launch!\".</p>";

        document.getElementById("flowchart").setAttribute("src", "images/p26/p26.jpg");
        document.getElementById("flowchart").style.display="none";

        document.getElementById("js").setAttribute("src", "images/p26/p26_j.jpg");
        document.getElementById("js").style.display="none";
        document.getElementById("another").setAttribute("src", "");
        document.getElementById("another").style.display="none";

        document.getElementById("check1").checked=false;
        document.getElementById("check2").checked=false;
        document.getElementById("check3").checked=false;

    }

    function p27Func(){
        document.getElementById("problem").innerHTML="<p>A flowchart to take two numbers as input and find the maximum of the two numbers.</p>";

        document.getElementById("flowchart").setAttribute("src", "images/p27/p27.jpg");
        document.getElementById("flowchart").style.display="none";

        document.getElementById("js").setAttribute("src", "images/p27/p27_j.jpg");
        document.getElementById("js").style.display="none";
        document.getElementById("another").setAttribute("src", "");
        document.getElementById("another").style.display="none";

        document.getElementById("check1").checked=false;
        document.getElementById("check2").checked=false;
        document.getElementById("check3").checked=false;

    }

    function p28Func(){
        document.getElementById("problem").innerHTML="<p>A program that outputs the maximum of the three numbers.</p>";

        document.getElementById("flowchart").setAttribute("src", "images/p28/p28.jpg");
        document.getElementById("flowchart").style.display="none";

        document.getElementById("js").setAttribute("src", "images/p28/p28_j.jpg");
        document.getElementById("js").style.display="none";
        document.getElementById("another").setAttribute("src", "");
        document.getElementById("another").style.display="none";

        document.getElementById("check1").checked=false;
        document.getElementById("check2").checked=false;
        document.getElementById("check3").checked=false;

    }
    function p29Func(){
        document.getElementById("problem").innerHTML="<p>A flowchart to receive 3 numbers and check whether the 3 numbers can form a triangle or not using triangle inequality theorem.</p>";

        document.getElementById("flowchart").setAttribute("src", "images/p29/p29.jpg");
        document.getElementById("flowchart").style.display="none";

        document.getElementById("js").setAttribute("src", "images/p29/p29_j.jpg");
        document.getElementById("js").style.display="none";
        document.getElementById("another").setAttribute("src", "");
        document.getElementById("another").style.display="none";

        document.getElementById("check1").checked=false;
        document.getElementById("check2").checked=false;
        document.getElementById("check3").checked=false;

    }
    function p30Func(){
        document.getElementById("problem").innerHTML="<p>A flowchart for a program to receive a positive number and output sum of its digits.</p>";

        document.getElementById("flowchart").setAttribute("src", "images/p30/p30.jpg");
        document.getElementById("flowchart").style.display="none";

        document.getElementById("js").setAttribute("src", "images/p30/p30_j.jpg");
        document.getElementById("js").style.display="none";
        document.getElementById("another").setAttribute("src", "");
        document.getElementById("another").style.display="none";

        document.getElementById("check1").checked=false;
        document.getElementById("check2").checked=false;
        document.getElementById("check3").checked=false;

    }

