        // const paragraph = ducument.getElementByTagname('p');
        // doucument.getElementById('yaba').innerHTML = paragraph[1].innerHTML
        // const gomyCode = document.getElementById("gmc");
        // document.getElementById('yaba').innerHTML = gomyCode.innerHTML
        // document.getElementById('picture').src='light.jpeg';
        // document.getElementById('picture').style.width ='50px'
        // document.getElementById('para').innerHTML ='A twon-Hall'


        function validateForms(){
            let x = document.forms["form"]['username'].value;
            if(x == ""){
                alert("Name must be filled out");
                return false;
            }let y = document.forms["form"]['password'].value;
            if(y == ""){
                alert("password must be filled out");
                return false;
            }let z = document.forms["form"]['email'].value;
            if(z == ""){
                alert("email must be filled out");
                return false;
            }let s = document.forms["form"]['telephone'].value;
            if(s == ""){
                alert("phone must be filled out");
                return false;
            }
        }

        function changeText(i){
            i.innerHTML = 'Hello word';
        }


       

        function displayDate(){
            document.getElementById('date').innerHTML = Date();
        }

        document.getElementById("btn").onclick = displayDate;