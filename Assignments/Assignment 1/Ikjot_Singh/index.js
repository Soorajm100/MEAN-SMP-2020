
              var new_user=0;
              function signup(){
                  document.getElementById('login').setAttribute("placeholder","Sign Up");
                  document.getElementById('password').setAttribute("placeholder","Create password");
                  document.getElementById('sign_up').innerHTML='<input type="text" id="cpassword" class="fadeIn first" name="login" placeholder="Confirm Password"></input><input type="text" id="phone" class="fadeIn first" name="login" placeholder="Phone Number"><input type="text" id="pincode" class="fadeIn first" name="login" placeholder="Pin Code"><input type="text" id="age" class="fadeIn first" name="login" placeholder="Age"><input type="text" id="gender" class="fadeIn first" name="login" placeholder="Gender">'
                  document.getElementById('login').setAttribute("placeholder","Sign Up");  
                  new_user=1;
                }
              function signin(){
                document.getElementById('login').setAttribute("placeholder","Sign In");
                document.getElementById('password').setAttribute("placeholder","Enter password");
                document.getElementById('sign_up').innerHTML='';
                new_user=0;
              }
              var counter=0;
              function newuser(){
                    var sign_in=document.getElementById('login').value;
                    var password=document.getElementById('password').value;
                    localStorage.setItem(counter, sign_in);
                    localStorage.setItem("password",password);
                    alert('Hello '+sign_in+' Welcome');
                    counter++;
              }
              function submit_info(){
                var sign_in=document.getElementById('login').value;
                var password=document.getElementById('password').value;  
              
                  if(new_user==0){
                    
                    if(sign_in=='user'&&password=='root'){
                      window.location.replace("index.html");
                      }
                      else{
                        alert('Incorrect username/password. Please try again later.');
                      }
                  }
                  else{
                    var cpassword=document.getElementById('cpassword').value;
                var phone=document.getElementById('phone').value;
                var pincode=document.getElementById('phone').value;
                var age=document.getElementById('age').value;
                var gender=document.getElementById('gender').value;
                    if(sign_in.length<6){
                      alert('The length of the username must be greater than 6 letters :)');
                    }
                    else if(password.length<8){
                      alert('Please make sure that the password length is greater than 8');
                    }
                    else if(cpassword!=password){
                      alert("The passwords don't match");
                    }
                    else if(phone.length<8){
                      alert("Phone numbers usually have more than 8 digits :)");
                    }
                    else if(age>100){
                      alert('Are you really more than 100 years of age?');
                    }
                    else{
                      alert('Welcome '+sign_in+'. We hope you have a pleasant experience at our website:) ');
                      window.location.replace('index.html');
                    }
                  }
                  
                  
                  document.getElementById('greetings').innerHTML="Welcome "+sign_in;
              }
              setTimeout(fade_out, 5000);

              function fade_out() {
                $("#fdiscsection").fadeOut().empty();
              }
              var discountper=0;
              function discount(){
                discountper=document.getElementById('randomnum').value%12;
                discountper*=2;
                document.getElementById('discsection').innerHTML+='<div class="alert alert-success" role="alert">You have successfully availed a discount of '+discountper+'%'+'</div>';
                
              }
              function free(){
                
                var email=document.getElementById('emailid').value;
                if(email.indexOf('@')<0||email.indexOf('.com')<0){
                  alert('Please enter a valid email id.');
                }
                else{
                  document.getElementById('success').innerHTML='<div class="alert alert-success" role="alert"><h4 class="alert-heading">Congratulations!</h4><p>Confirm your purchase by clicking the button below.</p><hr><p class="mb-0">Your choice : Free<br><button class="btn btn-success" type="button" onclick="redirect()">Confirm</button></p></div>';
                }
              }
              function monthly(){
                var email=document.getElementById('emailid').value;
                if(email.indexOf('@')<0||email.indexOf('.com')<0){
                  alert('Please enter a valid email id.');
                }
                else{
                  document.getElementById('success').innerHTML='<div class="alert alert-success" role="alert"><h4 class="alert-heading">Congratulations!</h4><p>Confirm your purchase by clicking the button below.</p><hr><p class="mb-0">Your choice : Monthly<br>Cost : $12/month  Discount: '+discountper+'%'+'<br>Total Cost : '+'$'+12*(100-discountper)/100+'/month'+'<br><button class="btn btn-success" type="button" onclick="redirect()">Confirm</button></p></div>';
                }
              }
              function yearly(){
                var email=document.getElementById('emailid').value;
                if(email.indexOf('@')<0||email.indexOf('.com')<0){
                  alert('Please enter a valid email id.');
                }
                else{
                  document.getElementById('success').innerHTML='<div class="alert alert-success" role="alert"><h4 class="alert-heading">Congratulations!</h4><p>Confirm your purchase by clicking the button below.</p><hr><p class="mb-0">Your choice : Yearly<br>Cost : $50/year  Discount: '+discountper+'%'+'<br>Total Cost : '+'$'+50*(100-discountper)/100+'/year'+'<br><button class="btn btn-success" type="button" onclick="redirect()">Confirm</button></p></div>';
                }
              }
              function redirect(){
                window.location.replace("index.html");
              }
              