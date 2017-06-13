<?php
/**
 * Основные параметры WordPress.
 *
 * Скрипт для создания wp-config.php использует этот файл в процессе
 * установки. Необязательно использовать веб-интерфейс, можно
 * скопировать файл в "wp-config.php" и заполнить значения вручную.
 *
 * Этот файл содержит следующие параметры:
 *
 * * Настройки MySQL
 * * Секретные ключи
 * * Префикс таблиц базы данных
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** Параметры MySQL: Эту информацию можно получить у вашего хостинг-провайдера ** //
/** Имя базы данных для WordPress */
define('DB_NAME', 'cl177787_animals');

/** Имя пользователя MySQL */
define('DB_USER', 'cl177787_admin');

/** Пароль к базе данных MySQL */
define('DB_PASSWORD', 'PikVJRgN');

/** Имя сервера MySQL */
define('DB_HOST', 'localhost');

/** Кодировка базы данных для создания таблиц. */
define('DB_CHARSET', 'utf8');

/** Схема сопоставления. Не меняйте, если не уверены. */
define('DB_COLLATE', '');

/**#@+
 * Уникальные ключи и соли для аутентификации.
 *
 * Смените значение каждой константы на уникальную фразу.
 * Можно сгенерировать их с помощью {@link https://api.wordpress.org/secret-key/1.1/salt/ сервиса ключей на WordPress.org}
 * Можно изменить их, чтобы сделать существующие файлы cookies недействительными. Пользователям потребуется авторизоваться снова.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'jpl|Y@d>5n1zL>^?ukuO9J`k#ncc:]q]ddlwhZWIzNisATYd4dN)HQe_2${=3vKU');
define('SECURE_AUTH_KEY',  'pB n!@p~YQGLXhp+>e NID(|#PUz@]`Z/D[/P[LY8Z0E7/.TeM4<{{Fh}h& /C?x');
define('LOGGED_IN_KEY',    's-~*8cG<Aa%,h/]r#@=AE$4q8 Pb=KSQ_u5*lmS.}vL+tLRV>}Abp]_tv3bBT=oJ');
define('NONCE_KEY',        'HTz0Siz6 |+LfI?n.Gl&g3S+:e|}`qo.%u<n,M}*twe6V$@uEa<Pq`KLwysQ#.-)');
define('AUTH_SALT',        '7a1U7i?jk3.YBd+-IYdJI!`m+!:MUiuu;kU%W{QB6R{)3PHUW=g^m@^,q%sKo[M}');
define('SECURE_AUTH_SALT', '$!e%mnA)fU3[{Vy%0=hfq9hR~@?7|Et@s*f;Jb5061y3Ibk%:X.;4;OsYefd#X3v');
define('LOGGED_IN_SALT',   'PjhRAVYSh-^INl2Z/OC131e<7R}IGb.xpz9$:Dg7SwmzxHOTmtlt}pok7 mzr.xV');
define('NONCE_SALT',       '~r{;utNp8K2kcWF$)Uak)>X,56FJGt8y)5dJQZFcRVfRY^!O})2&U#RcXXD_]C]C');

/**#@-*/

/**
 * Префикс таблиц в базе данных WordPress.
 *
 * Можно установить несколько сайтов в одну базу данных, если использовать
 * разные префиксы. Пожалуйста, указывайте только цифры, буквы и знак подчеркивания.
 */
$table_prefix  = 'wp_';

/**
 * Для разработчиков: Режим отладки WordPress.
 *
 * Измените это значение на true, чтобы включить отображение уведомлений при разработке.
 * Разработчикам плагинов и тем настоятельно рекомендуется использовать WP_DEBUG
 * в своём рабочем окружении.
 *
 * Информацию о других отладочных константах можно найти в Кодексе.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', true);

/* Это всё, дальше не редактируем. Успехов! */

/** Абсолютный путь к директории WordPress. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Инициализирует переменные WordPress и подключает файлы. */
require_once(ABSPATH . 'wp-settings.php');
