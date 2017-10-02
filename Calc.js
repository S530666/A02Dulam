function sum() {
    var txtFirstNumberValue = $('#Hrent').val();
    var txtSecondNumberValue = $('#groc').val();
    var txtThirdNumberValue = $('#internet').val();
    var txtFourthNumberValue = $('#TV').val();
    var txtFifthNumberValue =$('#power').val();
    var txtSixthNumberValue = $('#misc').val();

    let total=calcTotal(txtFirstNumberValue,txtSecondNumberValue,txtThirdNumberValue,txtFourthNumberValue,txtFifthNumberValue,txtSixthNumberValue);
    $("#result").val(total);
}
    function calcTotal(txtFirstNumberValue,txtSecondNumberValue,txtThirdNumberValue,txtFourthNumberValue,txtFifthNumberValue,txtSixthNumberValue)
    {
            if(isNaN(txtFirstNumberValue)||isNaN(txtSecondNumberValue)||isNaN(txtThirdNumberValue)||isNaN(txtFourthNumberValue)||isNaN(txtFifthNumberValue)||isNaN(txtSixthNumberValue))
        {
            alert("please enter any number");
            throw Error('The given argument is not a number');
        }
        if((txtFirstNumberValue<0)||(txtSecondNumberValue<0)||(txtThirdNumberValue<0)||(txtFourthNumberValue<0)||(txtFifthNumberValue<0)||(txtSixthNumberValue<0))
            {
                alert("please enter positive number");
                throw Error('The given argument is not a positive number');
                
            }
            var result = parseInt(txtFirstNumberValue) + parseInt(txtSecondNumberValue) +parseInt(txtThirdNumberValue) + parseInt(txtFourthNumberValue)+ parseInt(txtFifthNumberValue)+ parseInt(txtSixthNumberValue) ;
            if (!isNaN(result)) {
             return result;
        }
        else
        {
            alert("please enter any number");
            throw Error('The given argument is null');
        }
}

function reset(){
    $('#Hrent').val("");
    $('#groc').val("");
    $('#internet').val("");
    $('#TV').val("");
    $('#power').val("");
    $('#misc').val("");
}