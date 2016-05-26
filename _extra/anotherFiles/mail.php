
<?php
$sendto   = "smanastas93@mail.ru"; // почта, на которую будет приходить письмо
$username = $_POST['name'];   // сохраняем в переменную данные полученные из поля c именем
$usertel = $_POST['telephone']; // сохраняем в переменную данные полученные из поля c телефонным номером
$usermail = $_POST['email']; // сохраняем в переменную данные полученные из поля c адресом электронной почты

// Формирование заголовка письма
$subject  = "Новое сообщение";
$headers  = "From: " . strip_tags($sendto) . "\r\n";
$headers .= "Reply-To: ". strip_tags($usermail) . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html;charset=utf-8 \r\n";

// Формирование тела письма
$msg  = "<html><body style='font-family:Arial,sans-serif;'>";
$msg .= "<h2 style='font-weight:bold;border-bottom:1px dotted #ccc;'>Cообщение с сайта</h2>\r\n";
$msg .= "<p><strong>От кого:</strong> ".$username."</p>\r\n";
$msg .= "<p><strong>Почта:</strong> ".$usermail."</p>\r\n";
$msg .= "<p><strong>Телефон:</strong> ".$usertel."</p>\r\n";
$msg .= "</body></html>";


// отправка сообщения
if(@mail($sendto, $subject, $msg, $headers)) {
	echo '<div class="message">
			<img src="img/ok.png" alt="">
			<div class="message_text">
				<h3>Спасибо за заявку'.$_POST['name'].'</h3>
				<p>Мы свяжемся с вами в ближайшее время</p>
			</div>
		</div>';
} else {
	echo '<div class="message">
			<img src="img/ok.png" alt="">
			<div class="message_text">
				<h3>Ошибка отправления</h3>
				<p>Сообщение не было доставлено</p>
			</div>
		</div>';
}
?>