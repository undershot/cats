
<?php 
/*
 Template Name: List page
*/?><!DOCTYPE html>
<html lang="RU-ru">
  <head>
    <title><?php the_title();?></title>
    <meta charset="utf-8">
    <meta name="description" content="">
    <meta name="Keywords" content="">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <link rel="shortcut icon" href="img/favicon/favicon.ico" type="image/x-icon">
    <link rel="apple-touch-icon" href="img/favicon/apple-touch-icon.png">
    <link rel="apple-touch-icon" sizes="72x72" href="img/favicon/apple-touch-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="114x114" href="img/favicon/apple-touch-icon-114x114.png">
    <link rel="stylesheet" href="<?php echo get_template_directory_uri();?>/style.css">
    <link rel="stylesheet" href="//cdn.jsdelivr.net/jquery.slick/1.6.0/slick.css">
    <link rel="stylesheet" href="<?php echo get_template_directory_uri();?>/libs/fancybox/source/jquery.fancybox.css">
  </head>
  <body> 
    <div id="menu">
      <div class="content">
        <nav>
          <div class="subMenu"><a href="#">
              <div class="menuItems"><span>О нас</span><span class="icon"></span></div></a>
            <div class="list"><a href="#">
                <div class="list_elem">Правила посещений</div></a><a href="#">
                <div class="list_elem">Наши мероприятия</div></a><a href="#">
                <div class="list_elem">Наши новости</div></a><a href="#">
                <div class="list_elem">Полезные статьи</div></a><a href="#">
                <div class="list_elem">Акции</div></a></div>
          </div><a href="#">Котики и енотики</a><a href="#">Цены</a>
        </nav><a href="#"><img src="<?php echo get_template_directory_uri();?>/images/logo.png" class="logo"></a>
        <nav><a href="#">Сувениры</a><a href="#">Партнеры</a><a href="#">Контакты</a></nav>
        <button id="menu_opener">Меню</button>
      </div>
    </div>
    <section id="custom_head">
      <header style="background-image: url(<?php echo types_render_field( 'thumbnail', array('output' => 'raw') ); ?>); background-size: cover;">
        <h1><?php the_title(); ?></h1>
      </header>
    </section>
    <?php 
     $args = array(
       'post_type' => 'news', 
       'posts_per_page' => -1
     );
    ?>
    <section id="list_content">
      <ul class="list">
        <?php
        $lastBlog = new WP_Query($args);
        if( $lastBlog->have_posts() ):
         while($lastBlog->have_posts() ): $lastBlog->the_post();
           $thumbnail = types_render_field( "thumbnail", array('output' => 'raw') ); ?><a href="<?php the_permalink(); ?>" class="link">
          <li style="background-image: url(<?php echo $thumbnail; ?>); background-size: cover;">
            <div class="darker">
              <h3><?php the_title(); ?></h3>
            </div>
          </li></a><?php
         endwhile;
        endif; ?>
      </ul>
    </section>
    <section id="footer">
      <div class="container"><a href="tel:+79163775227"><img src="<?php echo get_template_directory_uri();?>/images/phone_footer.png"></a>
        <h3>8 (916) 377-5227</h3>
        <h4>ежедневно с 10:00 до 22:00</h4>
        <div class="social"><a href="https://vk.com/kotiki__enotiki" target="_blank"><img src="<?php echo get_template_directory_uri();?>/images/vk_footer.png"></a><a href="https://www.facebook.com/kotikienotiki.cafe.msk/" target="_blank"><img src="<?php echo get_template_directory_uri();?>/images/facebook_footer.png"></a><a href="https://www.instagram.com/kotiki_enotiki_cafe/" target="_blank"><img src="<?php echo get_template_directory_uri();?>/images/inst_footer.png"></a></div><img src="<?php echo get_template_directory_uri();?>/images/footer_animals.png" class="animals">
      </div>
    </section>
    <section id="mobile_menu"><img src="<?php echo get_template_directory_uri();?>/images/closer.png" class="closer">
      <nav>
        <div class="list_elem"> 
          <header>О нас</header>
          <footer><a href="#">Правила посещения</a><a href="#">Наши мероприятия</a><a href="#">Наши новости</a><a href="#">Полезные статьи</a><a href="#">Акции</a></footer>
        </div><a href="#">Котики и енотики</a><a href="#">Цены</a><a href="#">Сувениры</a><a href="#">Партнеры</a><a href="#">Контакты</a>
      </nav>
    </section>
    <script src="<?php echo get_template_directory_uri();?>/libs/jquery/dist/jquery.min.js"></script>
    <script src="<?php echo get_template_directory_uri();?>/libs/fancybox/source/jquery.fancybox.pack.js"></script>
    <script src="//cdn.jsdelivr.net/jquery.slick/1.6.0/slick.min.js"></script>
    <script src="https://api-maps.yandex.ru/2.1/?lang=ru-RU" type="text/javascript"></script>
    <script src="<?php echo get_template_directory_uri();?>/bundle.js"></script>
  </body>
</html>