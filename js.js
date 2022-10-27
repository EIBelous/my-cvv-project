let ButtonText=document. getElementById('Text')



$(document).ready(function(){
$('#basicSkills').on('show.bs.collapse', function(){
    ButtonText.innerHTML="Hide list &#8593;"
    console.log('ssss')
})

$('#basicSkills').on('hide.bs.collapse', function(){
    ButtonText.innerHTML="Show list &#8595; "
})
})