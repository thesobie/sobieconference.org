import {sobieDates} from './sobie-data.js';

$(function() {

  $('#sobieYear').text(sobieDates.sobieYear);  
  $('#sobieStart').text(sobieDates.getSobieStart());  
  $('#sobieEnd').text(sobieDates.getSobieEnd());  

  console.log(sobieDates.getSobieStart());

  const thisSobieYear = sobieDates.sobieYear; 
  
  console.log(thisSobieYear); 

  for (let j=0; j<thisSobieYear.length; j++){
  
    // condition ? exprIfTrue : exprIfFalse
      
    j == thisSobieYear.length-1 ?   $('#sobieHeaderYear').append(`${thisSobieYear[j]}`) : $('#sobieHeaderYear').append(`${thisSobieYear[j]}·`)

  }

  // console.log( sobieDates.sobieRate); 
  //sobie rate check
  sobieDates.sobieRate.ready ? $('#sobieRateReady').append(`RATE:  ${sobieDates.sobieRate.actual}`) : $('#sobieRateReady').append(` <span class="fw-bold"> around ${sobieDates.sobieRate.estimate}<i class="bi bi-hourglass-split"></i></span>`) 

}); //end doc ready 


let studentMode; 
     
$(document).ready(() => {

    console.log("ready"); 

    // "declarations" hide & build
     let studentMode = false; 
     $('#sobieStudentSection').hide();
     $('#sobieFacultySection').hide(); 
     $('input.researchIntent').prop('disabled', true);
     $("#studentOtherText").hide();
     $("#studentPaperPreference").hide(); 
     $("#submissionAuthorshipGroup").hide(); 
     $("#submissionSection").hide(); 
     $("#notSubmitYetSection").hide();
     $("#notSubmitSection").hide();
     $("#timeSlotGroup").hide();
    buildResearchAreasButtons(); 
    // buildResearchAreasDropdown();
     $("#researchAreaOtherText").hide(); 

    function buildResearchAreasDropdown() {

        let $researchArea;

        $.each(researchAreasData, (i)=> {

            // console.log(i, researchAreasData[i])

            // if(i===0){ $('#researchAreasList').append(`<li class="list-group-item border-0">`)}

            $researchArea = `<li><a class="dropdown-item" id="researchArea${ i }" value="${researchAreasData[i]}" href="#">${researchAreasData[i]}</a>
                 </li>`;
        
            $('#researchAreasList').append($researchArea); 

            // if( (i+1) % 3 === 0 ) {
            //     $('#researchAreasList').append(`</li><li class="list-group-item border-0">`); 
            // }

            if( i === researchAreasData.length-1)
            {
                 $('#researchAreasList').append(`
                 
                 <li><a class="dropdown-item" id="researchAreaOther" value="other" href="#">${researchAreasData[i]}</a>
                 </li>
                 <input id="researchAreaOtherText" type="text" class="form-control" disabled placeholder="Please Specify..."></li>`); 

            }

        })

      

    }
 function buildResearchAreasButtons() {

        let $researchArea;

        $.each(researchAreasData, (i)=> {

            // console.log(i, researchAreasData[i])

            if(i===0){ $('#researchAreasList').append(`<li class="list-group-item border-0">`)}

            $researchArea = `<input type="radio" class="btn-check researchAreas" name="researchAreas" id="researchArea${ i }" autocomplete="off" value="${researchAreasData[i]}"><label class="btn btn-outline-primary me-2" for="researchArea${ i }">${researchAreasData[i]}</label>`;

            $('#researchAreasList').append($researchArea); 

            if( (i+1) % 3 === 0 ) {
                $('#researchAreasList').append(`</li><li class="list-group-item border-0">`); 
            }

            if( i === researchAreasData.length-1)
            {
                 $('#researchAreasList').append(`</li><li class="list-group-item border-0">
                 <input type="radio" class="btn-check researchAreas" name="researchAreas" id="researchAreaOther" autocomplete="off" value="other"><label class="btn btn-outline-primary me-2" for="researchAreaOther">Other</label><input id="researchAreaOtherText" type="text" class="form-control" disabled placeholder="Please Specify..."></li>`); 

            }

        })

       

    }

    $('.sobieFirst').change((e) => {
       
        e.preventDefault(); 
        $yesNo = $('#' + e.target.getAttribute("id")); 
       

        if ($yesNo.val()==='yes') {
          $('#firstSobieMessage').text("Great! We look forward to meeting you!");
        }
        else if($yesNo.val()==='no')
        {
          $('#firstSobieMessage').text("Great! Welcome back.")
        }
    }); 

    $('.sobieStudent').change((e) => {
        //e.preventDefault(); 
        $yesNoStudent = $('#' + e.target.getAttribute("id")); 
      
        if ($yesNoStudent.val() === 'yes') {
         $('#sobieFacultySection').hide(); 
          $('#sobieStudentSection').show();
          studentMode = true; 
          $('#studentPaperGroup').hide();
          $('#studentPaperPreference').hide();
          
          
       
        }
        else if ($yesNoStudent.val() === 'no') {
         $('#sobieStudentSection').hide();
         $('#sobieFacultySection').show(); 
         studentMode = false; 
         $('#studentPaperGroup').show()
        //  $('#studentPaperPreference').show();
          
      }
    });

    $('.studentClass').change((e) => {
        e.preventDefault(); 
        $studentOther = $('#' + e.target.getAttribute("id")); 

        if ($studentOther.val() === 'other') {
         $("#studentOtherText").prop('disabled', false).show(); 
       
        }
        else {
         $("#studentOtherText").prop('disabled', true).hide(); 
         $('#studentOtherText').val(''); 
       
      }
    });

    $('#hotelAgree').change((e) => {
     
      $('input[name="hotelAgree"]').is(':checked') ? $('input.researchIntent').prop('disabled', false) : $('input.researchIntent').prop('disabled', true)
          
    }); 

     $('.researchIntent').change((e) => {
        e.preventDefault(); 
        $researchIntent = $('#' + e.target.getAttribute("id")); 

        if ($researchIntent.val() === 'yesNow') {
         $("#submissionSection").show(); 
         $("#notSubmitYetSection").hide();
         $("#notSubmitSection").hide(); 
        }
       else if ($researchIntent.val() === 'yesLater')
        {
         $("#submissionSection").hide(); 
          $("#notSubmitYetSection").show();
          $("#notSubmitSection").hide(); 
        }
        else if($researchIntent.val() === 'noAttend')
        {
           $("#submissionSection").hide(); 
          $("#notSubmitYetSection").hide();
          $("#notSubmitSection").show()
        }
    });

     $('.studentPaper').change((e) => {
        e.preventDefault(); 
        $studentPaper = $('#' + e.target.getAttribute("id")); 

        if ($studentPaper.val() === 'yes') {
         $("#studentPaperPreference").show(); 
        }
       else if ($studentPaper.val() === 'no') {
         $("#studentPaperPreference").hide(); 
         //
       

      }
    });

     $('.researchAreas').change((e) => {
        e.preventDefault(); 
        $researchAreasOther = $('#' + e.target.getAttribute("id")); 

        if ($researchAreasOther.val() === 'other') {
         $("#researchAreaOtherText").prop('disabled', false).show(); 
        }
        else {
         $("#researchAreaOtherText").val('').prop('disabled', true).hide(); 
       

      }
    });

     $('.submissionAuthors').change((e) => {
        e.preventDefault(); 
        $submissionAuthors = $('#' + e.target.getAttribute("id")); 

        if ($submissionAuthors.val() === 'yes') {
          if(studentMode) {
            $('#studentPaperGroup').hide();
            $('#studentPaperPreference').hide();
          }
          else if(!studentMode) {
            $('#studentPaperGroup').show();
            $('#studentPaperPreference').show();
          } 
        
         $("#submissionAuthorshipGroup").show(); 
        }
        else if ($submissionAuthors.val() === 'no') { 
         $('#studentPaperGroup').hide();
         $('#studentPaperPreference').hide();
         $("#submissionAuthorshipGroup").hide(); 
      }
    });
    
    $('.timeSlot').change((e) => {
        e.preventDefault(); 
        $timeSlot = $('#' + e.target.getAttribute("id")); 

        let numberNotChecked = $('input.timeSlot:checkbox:not(":checked")').length;
       
        if (numberNotChecked === 0) {
         console.log('plz select not all');

        }
        // else if ($timeSlot.val() === 'no') {
        //    $("#submissionAuthorshipGroup").hide(); 
       //      }
    });



//$('#reviewModal').on('show.bs.modal', function(){
  
$('#reviewRegistration').on('click', function(){

  $('#registrationReviewList').empty(); 

  grabFormData(); 

  let htmlBody = "";
  let emailBody = "SOBIE '24 Registration Information%0D%0A%0D%0A%0D%0A"; 
  htmlBody += `<li class="list-group-item"><strong> Name:</strong> ${formData[0].registrantName} </li>`;
  emailBody += `Name: ${formData[0].registrantName}%0D%0A`;  

  htmlBody += `<li class="list-group-item"><strong>Email:</strong> ${formData[0].email} </li>`; 
  emailBody += `Email: ${formData[0].email}%0D%0A`; 

  htmlBody += `<li class="list-group-item"><strong>First Time Attending SOBIE:</strong> ${formData[0].firstSobie} </li>`; 
  emailBody += `First Time Attending SOBIE: ${formData[0].firstSobie}%0D%0A`; 


  console.log('student mode', studentMode);
  if(formData[0].studentStatus === 'yes') {
      htmlBody += 
      `<li class="list-group-item"><strong>Student Affiliation:</strong> ${formData[0].student[0].affiliation}, ${formData[0].student[0].program}, ${formData[0].student[0].class} </li>`;
      emailBody += `Student Affiliation: ${formData[0].student[0].affiliation}, ${formData[0].student[0].program}, ${formData[0].student[0].class}%0D%0A`;
    }
  else if(formData[0].studentStatus === 'no') {
       htmlBody += 
         `<li class="list-group-item"><strong>Affiliation:</strong> ${formData[0].faculty[0].affiliation}, ${formData[0].faculty[0].rank} </li>`;
         emailBody += `Affiliation: ${formData[0].faculty[0].affiliation}, ${formData[0].faculty[0].rank}%0D%0A`;
    }

    htmlBody += `<li class="list-group-item"><strong>Hotel Acknowledgement:</strong> ${formData[0].hotel}`; 
    emailBody += `Hotel Acknowledgement: ${formData[0].hotel}`;

//
    //yesNow yesLater noAttend 
    if(formData[0].researchStatus === "yesNow")
   {
    htmlBody += `<li class="list-group-item"><strong>Research Submission:</strong> ${formData[0].title} (${formData[0].submissionType})</li>`;
    emailBody += `Research Submission: ${formData[0].title}, ${formData[0].submissionType}%0D%0A`;

    
    //if coauthors and in student mode (no collaboration & session preference)
    if(formData[0].coauthors === 'yes' && formData[0].studentStatus === 'yes'){
      htmlBody += `<li class="list-group-item"><strong>Student co-authors:</strong></li> ${formData[0].coauthors} </li>`; 
      emailBody += `Student co-authors: ${formData[0].coauthors}%0D%0A`;

    }
    //if coauthors & NOT student mode =  student collaboration & pref.
    else if(formData[0].coauthors === 'yes' && formData[0].studentStatus === 'no' && formData[0].studentCollaboration === 'yes'){
       htmlBody += `<li class="list-group-item"><strong>Student Reserach Collaboration Session Preference:</strong></li>${formData[0].collaborationPreference} </li>`; 
        emailBody += `Student Reserach Collaboration Session Preference: ${formData[0].collaborationPreference}%0D%0A`;

    }
    // yes coathors and NOT student mode but no student collab, so no PREF. 
    else if(formData[0].coauthors === 'yes' && formData[0].studentStatus === 'no' && formData[0].studentCollaboration === 'no')
    {
       htmlBody += `<li class="list-group-item"><strong>Co-authors:</strong></li> ${formData[0].coauthors} </li>`;; 
        emailBody += `Co-authors: ${formData[0].coauthors}%0D%0A`;
    }
    
    htmlBody += `<li class="list-group-item"><strong>Submission Abstract:</strong> ${formData[0].abstract} </li>`; 
    emailBody += `Submission Abstract: ${formData[0].abstract}%0D%0A`;

    htmlBody += `<li class="list-group-item"><strong>Research Area:</strong> ${formData[0].area} </li>`; 
    emailBody += `Research Area: ${formData[0].area}%0D%0A`;

    htmlBody += `<li class="list-group-item"><strong>Include in Proceedings:</strong> ${formData[0].proceedings} </li>`;   
    emailBody += `Include in Proceedings: ${formData[0].proceedings}%0D%0A`;

   } 
   else{
    htmlBody += `<li class="list-group-item"><strong>Research Submission Status:</strong> No or not at this time. <br><i>You may submit your research directly to the SOBIE conference chair (kdmalone@una.edu).</i></li>`;
   }

    if(formData[0].details.length > 1){
      htmlBody += `<li class="list-group-item"><strong>Additional Registration Information:</strong> ${formData[0].details} </li>`
      emailBody += `Additional Registration Information:  ${formData[0].details}%0D%0A`;
    }
    

  console.log(htmlBody);
  $('#registrationReviewList').append(htmlBody);
  
  emailBody += `%0D%0A%0D%0A%0D%0APlease attach your research submission to this email%0D%0A%0D%0A%0D%0AThank you,%0D%0AThe SOBIE Team`;
 
  //append hotel code info 
  emailBody += `%0D%0A%0D%0A%0D%0ASOBIE Group Code: https%3A%2F%2Fwww.sandestin.com%2Fbook-now%3Fgroup%3D24Q3L3%26checkin%3D04%2F09%2F2024%26checkout%3D04%2F13%2F2024%26rooms%3D1%26adults%3D1%23%2Froom`;
  emailBody += `%0D%0A%0D%0A800-320-8115, use code: 24Q3L3`;

  emailBody = emailBody.replace(',' ,'%2C'); 
  emailBody = emailBody.replace(',' ,'%2C'); 
  
  console.log(emailBody); 
  
  $('#mailLink').append(`<a class="btn btn-success" href="mailto:kdmalone@una.edu?cc=bcumbie@una.edu&subject=SOBIE24 Registration:${formData[0].registrantName}&body=${emailBody}">click here</a>`); 

   //<a href="mailto:email@example.com">Send Email</a>

  //  $.each(formData[0], function(k,v){
   
  //     $('#registrationReviewList').append(`<li class="list-group-item"><strong>${k}:</strong> ${v} </li>`);  
    
  // });

  
});    


// Example starter JavaScript for disabling form submissions if there are invalid fields
// (function () {
//   'use strict'

//   // Fetch all the forms we want to apply custom Bootstrap validation styles to
//   var forms = document.querySelectorAll('.needs-validation')

//   // Loop over them and prevent submission
//   Array.prototype.slice.call(forms)
//     .forEach(function (form) {
//       form.addEventListener('submit', function (event) {
//         if (!form.checkValidity()) {
//           event.preventDefault()
//           event.stopPropagation()
//         }

//         form.classList.add('was-validated')
//       }, false)
//     })
// })()

 }); //end doc ready 


function grabFormData() {

    $("input:checked").each(function() {
      if(this.checked == true)
      {
        //this.type
        console.log(this.name, this.value); 
        if(this.name == "sobieFirst") {formData[0].firstSobie = this.value} //: formData[0].firstSobie = "no first sobie response";
        if(this.name == "sobieStudent") { formData[0].studentStatus = this.value} //: formData[0].studentStatus = "not student response"; 
        if(this.name == "hotelAgree") { formData[0].hotel = this.value} //: formData[0].hotel = "no hotel response"; 
        if(this.name == "researchIntent") { formData[0].researchStatus = this.value}//: formData[0].researchStatus = "no research status response"; 
        if(this.name == "submissionType") { formData[0].submissionType = this.value } //: formData[0].submissionType = "no research type response"; 
        if(this.name == "submissionAuthors") { formData[0].coauthors = this.text }
        if(this.name == "studentPaper") { formData[0].studentcollaboration = this.text }//: formData[0].studentcollaboration = "no research type response";        
        if(this.name == "sessionPreference") { formData[0].collaborationPreference = this.text }//: formData[0].collaborationPreference = "no research type response";        
        if(this.name == "includeProdceedings") { formData[0].proceedings = this.value} //: formData[0].proceedings = "no proceedings response"; 
   
      }
    });
    formData[0].registrantName = $('#lastName').val() + ', ' + $('#firstName').val(); 
    formData[0].email = $('#email').val(); 
    
    if(formData[0].studentStatus === 'yes') {
        formData[0].student[0].affiliation = $('#studentAffiliation').val(); 
        formData[0].student[0].program = $('#studentProgram').val();
        
        if($('input[name="studentClass"]:checked').val() === 'other'){
          formData[0].student[0].class = $('#studentOtherText').val();
        }
        else{
            formData[0].student[0].class = $('input[name="studentClass"]:checked').val()
        }
    }
    else if(formData[0].studentStatus === 'no')
    {
      console.log($('#facultyAffiliation').val()); 
           formData[0].faculty[0].affiliation = $('#facultyAffiliation').val(); 
           formData[0].faculty[0].rank = $('#facultyRank').val(); 
    }

    formData[0].title = $('#submissionTitle').val(); 
    formData[0].abstract = $('#submissionAbstract').val(); 
    formData[0].coauthors = $('#submissionAuthorship').val(); 
    formData[0].area = $('#researchArea').val(); 
    formData[0].details = $('#anyOtherDetails').val(); 
    
    //console.log(formData[0]);

}




const formData = [
	{
        registrantName: '', 
        email: '', 
        firstSobie: '', 
        studentStatus: '', 
        student: [
            { 
                affiliation: '',
                program: '', 
                class: ''
            }],
        faculty: [
            {
                affiliation: '',
                rank: ''
            }],
        hotel: '',
        researchStatus: '', 
        submissionType: '', 
        title: '',
        coauthors: '', 
        studentCollaboration: '', 
        collaborationPreference: '', 
        abstract: '', 
        area: '', 
        proceedings: '', 
        details: ''
    }
]; 
 

const researchAreasData = 
[
    "Advertising & Promotion", "Business Administration", "Business Communication", "Business Education", "Business Ethics", "Business Information Systems (CIS or MIS)", "Business Law", "Case Studies", "E-Commerce", "Economics", "Entrepreneurship", "Family & Small Business Enterprises", "Finance", "Governmental Accounting", "Health Care Administration", "History of Economic Thought", "Human Resource Management", "Interdisciplinary Research", "International Business", "Leadership", "Management", "Marketing", "Medical Economics", "Non-Profit Organizations", "Operations Management", "Organizational Behavior & Theory", "Organizational Development", "Pedagogy", "Public Administration", "Public Policy Analysis", "Sales Management", "Sports Economics", "Statistics", "Strategic Management Policy", "Tax Policy", "Trade"
]; 


