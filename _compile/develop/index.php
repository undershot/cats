<!DOCTYPE html> 
<?php $lang = lang(); ?>
<html lang="<?php echo $lang;?>">
  <head>
    <meta charset="utf-8">
    <meta name="description" content="">
    <meta name="Keywords" content="">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <link rel="shortcut icon" href="img/favicon/favicon.ico" type="image/x-icon">
    <link rel="apple-touch-icon" href="img/favicon/apple-touch-icon.png">
    <link rel="apple-touch-icon" sizes="72x72" href="img/favicon/apple-touch-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="114x114" href="img/favicon/apple-touch-icon-114x114.png">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="libs/fancybox/source/jquery.fancybox.css">
  </head>
  <body>
    <!--
    div.main
      h3="Внимание"
      p="Оставьте ваши контактные данные и наш консультант<br/>свяжется с вами в течении 30 секунд"
      form#application(action="mail.php" method="POST" name="application")
        input#applicationName(name="name" maxlength="20" placeholder="Введите ваше имя" required)
        input#applicationEmail(name="email" type="email" maxlength="20" placeholder="Ваш E-mail" required)
        input#applicationTelephone(name="telephone" type="Tel" maxlength="20" placeholder="Ваш телефон")
        input(type="submit")
        div#app="Отправить"
    -->
    <div id="mail" class="not_visible_mail"></div>
    <script src="libs/jquery/dist/jquery.min.js"></script>
    <script src="libs/fancybox/source/jquery.fancybox.pack.js"></script>
    <script src="common.js"></script>
  </body>
</html>