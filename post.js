function statuspost(){
    $('#statuspost').prop('disabled',true);
    $('#status').keyup(function(){
        $('#statuspost').prop('disabled', this.value == "" ? true : false);     
    })
	statustxt = $('#statuspost');
}
