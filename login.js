$(document).ready(function () {
    $('.tab a').on('click', function (e) {
        e.preventDefault();
        $('.tab').removeClass('active');
        $(this).parent().addClass('active');
        $('.tab-content > div').hide();
        $($(this).attr('href')).fadeIn();
    });

    $('#signup-form').on('submit', function (e) {
        e.preventDefault();
        var email = $('#signup-email').val();
        var password = $('#signup-password').val();
        if (localStorage.getItem(email)) {
            $('#signup-message').text("Email đã tồn tại!").css("color", "red");
        } else {
            localStorage.setItem(email, password);
            $('#signup-message').text("Tạo tài khoản thành công!").css("color", "green");
        }
    });

    $('#login-form').on('submit', function (e) {
        e.preventDefault();
        var email = $('#login-email').val();
        var password = $('#login-password').val();
        if (localStorage.getItem(email) === password) {
            $('#login-message').text("Đăng nhập thành công!").css("color", "green");
            setTimeout(function () {
                window.location.href = "PRODUCTS.html";
            }, 1000);
        } else {
            $('#login-message').text("Sai email hoặc mật khẩu!").css("color", "red");
        }
    });

    $('#forgot-password').on('click', function (e) {
        e.preventDefault();
        $('#login').hide();
        $('#forgot-password-form').fadeIn();
    });

    $('#reset-password-form').on('submit', function (e) {
        e.preventDefault();
        var email = $('#reset-email').val();
        if (localStorage.getItem(email)) {
            $('#reset-message').text("Liên kết đặt lại mật khẩu đã được gửi!").css("color", "green");
        } else {
            $('#reset-message').text("Email không tồn tại!").css("color", "red");
        }
    });
});
