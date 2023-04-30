$(document).ready(function() {
    $('#login').click(function() {
        let userName = $('#userName').val()
        let password = $('#password').val()
        $ajax({
            url: "login.php",
            type: "POST",
            data: {
                "userName": userName,
                "password": password
            }
        })
    })
})