'use strict';
    $(document).ready(function () {
        'use strict';
        //Аякс отправка форм
        $("#application").submit(function () {
            var data = {
                name : document.querySelector('input[name="name"]').value,
                email : document.querySelector('input[name="email"]').value,
                telephone : document.querySelector('input[name="telephone"]').value
            };
            $.ajax({
                type: "POST",
                url: "mail.php",
                data: data
            }).done(function (value) {
                $('#mail')[0].innerHTML = value;
                $('#mail').removeClass('not_visible_mail');
                setTimeout(function () {
                    $("#form").trigger("reset");
                }, 1000);
            });
            return false;
        });

        $("img, a").on("dragstart", function (event) { event.preventDefault(); });
    });
import test from './comp.js'

