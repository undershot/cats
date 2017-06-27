<!DOCTYPE html>
<html lang="RU-ru">
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
    <link rel="stylesheet" href="<?php echo get_template_directory_uri();?>/style.css">
    <link rel="stylesheet" href="//cdn.jsdelivr.net/jquery.slick/1.6.0/slick.css">
    <link rel="stylesheet" href="<?php echo get_template_directory_uri();?>/libs/fancybox/source/jquery.fancybox.css">
    <title><?php echo is_home() ? 'Котики-Енотики - антикафе' : the_title();?></title>
  </head>
  <body>
    <div id="menu">
      <div class="content">
        <?php wp_nav_menu( array(
           	'theme_location'  => '',
           	'menu'            => 'Левое меню', 
           	'container'       => false, 
           	'container_class' => '', 
           	'container_id'    => '',
           	'menu_class'      => 'menu', 
           	'menu_id'         => '',
           	'echo'            => true,
           	'fallback_cb'     => 'wp_page_menu',
           	'before'          => '',
           	'after'           => '',
           	'link_before'     => '',
           	'link_after'      => '',
           	'items_wrap'      => '<ul id="%1$s" class="%2$s">%3$s</ul>',
           	'depth'           => 0,
           	'walker'          => '',
           ) );
        ?><a href="/"><img src="<?php echo get_template_directory_uri();?>/images/logo.png" class="logo"></a><?php wp_nav_menu( array(
           	'theme_location'  => '',
           	'menu'            => 'Правое меню', 
           	'container'       => false, 
           	'container_class' => '', 
           	'container_id'    => '',
           	'menu_class'      => 'menu', 
           	'menu_id'         => '',
           	'echo'            => true,
           	'fallback_cb'     => 'wp_page_menu',
           	'before'          => '',
           	'after'           => '',
           	'link_before'     => '',
           	'link_after'      => '',
           	'items_wrap'      => '<ul id="%1$s" class="%2$s">%3$s</ul>',
           	'depth'           => 0,
           	'walker'          => '',
           ) );
        ?>
        <button id="menu_opener">Меню</button>
      </div>
    </div>
    <section id="main">
      <div class="container">
        <h1>Делимся пушистым счастьем!</h1>
        <p>В нашем антикафе вы можете пообщаться с котиками и <br> очаровательным енотиком Плутошей! :)</p>
        <p>Здесь вы можете поиграть и помурчать вместе с нашими <br> замечательными зверушками!</p>
        <p>В любой момент вы можете угоститься вкусным чаем, ароматным <br> зерновым кофе, печеньками и конфетами!</p>
        <h3>Ежедневно с 10:00 до 22:00</h3>
        <div class="adress">
          <div class="adress_elem"><img src="<?php echo get_template_directory_uri();?>/images/geo.png">
            <h5>г. Москва, ул.Викторенко, д.3</h5>
          </div>
          <div class="adress_elem"><img src="<?php echo get_template_directory_uri();?>/images/phone.png">
            <h5>8 (916) 377-5227</h5>
          </div>
        </div>
      </div><img src="<?php echo get_template_directory_uri();?>/images/racoon_main.png" class="racoon"><img src="<?php echo get_template_directory_uri();?>/images/cat_main.png" class="cat">
    </section>
    <?php
    $args = array(
     'post_type' => 'animals', //Тип поста
     'posts_per_page' => -1,//Постов на одной странице
    );
     $lastBlog = new WP_Query($args);
    ?>
    <div id="cats"></div>
    <section id="slider_animals">
      <h4>Наши</h4>
      <h3><span data-filter="cats" class="anim">котики </span><span>и </span><span data-filter="racoons" class="anim">енотики</span></h3>
      <ul class="slider">
        <?php
         $lastBlog = new WP_Query($args); //Запрос ко всем постам подходящим под массив #args
         if( $lastBlog->have_posts() ):
           while($lastBlog->have_posts() ): $lastBlog->the_post(); ?>
           <?php $name = types_render_field( "name_animal", array('raw' => true) );?>
           <?php $age = types_render_field( "age_animal_date", array('raw' => true) );?>
           <?php $photo = types_render_field( "photo_animal", array('raw' => true) );?>
           <?php $type = types_render_field( "type_animal", array('raw' => true) );?>
        <li style="background-image: url(<?php echo $photo;?>); background-size: cover;" data-type="<?php echo $type; ?>">
          <div class="dark">
            <h5><?php echo $name; ?></h5>
            <h6 data-age="<?php echo $age; ?>" class="data_age"></h6>
          </div>
        </li><?php endwhile;
         endif; ?>
      </ul>
    </section>
    <?php
    $args = array(
     'post_type' => 'interior', //Тип поста
     'posts_per_page' => -1,//Постов на одной странице
    );?>
    <section id="interior">
      <h3>Наш</h3>
      <h2>Интерьер</h2>
      <div class="wrap_slider">
        <ul class="slider">
          <?php
           $lastBlog = new WP_Query($args); //Запрос ко всем постам подходящим под массив #args
           if( $lastBlog->have_posts() ):
             while($lastBlog->have_posts() ): $lastBlog->the_post(); ?>
             <?php $interior = types_render_field( "interior_photo", array('raw' => true) );?>
          <li><img src="<?php echo $interior;?>"></li><?php endwhile;
           endif; ?>
        </ul><img src="<?php echo get_template_directory_uri();?>/images/gradient_left.png" class="left_grad"><img src="<?php echo get_template_directory_uri();?>/images/gradient_right.png" class="right_grad"><img src="<?php echo get_template_directory_uri();?>/images/left_arrow.png" class="left_arrow"><img src="<?php echo get_template_directory_uri();?>/images/right_arrow.png" class="right_arrow">
      </div>
    </section>
    <section id="price">
      <h3>Наши</h3>
      <h2>Цены</h2>
      <div class="container">
        <div class="price_elem">
          <div class="morning">
            <h3>10:00 - 22:00</h3>
            <h4>будние дни</h4>
            <div class="time_wrap">
              <div class="time">
                <h5>7р</h5>
                <h4>минута</h4>
              </div>
              <div class="time">
                <h5>420р</h5>
                <h4>час</h4>
              </div>
            </div>
          </div>
          <div class="evening">
            <h4>выходные праздники</h4>
            <div class="time_wrap">
              <div class="time">
                <h5>7р</h5>
                <h4>минута</h4>
              </div>
              <div class="time">
                <h5>420р</h5>
                <h4>час</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="wrap_price">
          <div class="block_price">
            <h3>стоп-чек</h3>
            <h4>1000р</h4>
          </div>
          <div class="block_price">
            <h3>скидки игровым компаниям</h3>
            <h4>спрашивать у администратора</h4>
          </div>
        </div>
      </div>
    </section>
    <section id="map">
      <h3>Как нас</h3>
      <h2>Найти</h2>
      <div class="wrap_map">
        <div class="balloon">
          <h5>«Котики-Енотики»</h5>
          <h4>г. Москва, ул.Викторенко, д.3</h4>
        </div>
        <div id="map_body"></div>
      </div>
    </section>
    <section id="footer">
      <div class="container"><a href="tel:+79163775227"><img src="<?php echo get_template_directory_uri();?>/images/phone_footer.png"></a>
        <h3>8 (916) 377-5227</h3>
        <h4>ежедневно с 10:00 до 22:00</h4>
        <div class="social"><a href="https://vk.com/kotiki__enotiki" target="_blank"><img src="<?php echo get_template_directory_uri();?>/images/vk_footer.png"></a><a href="https://www.facebook.com/kotikienotiki.cafe.msk/" target="_blank"><img src="<?php echo get_template_directory_uri();?>/images/facebook_footer.png"></a><a href="https://www.instagram.com/kotiki_enotiki_cafe/" target="_blank"><img src="<?php echo get_template_directory_uri();?>/images/inst_footer.png"></a></div><img src="<?php echo get_template_directory_uri();?>/images/footer_animals.png" class="animals">
      </div>
    </section>
    <section id="mobile_menu"><img src="<?php echo get_template_directory_uri();?>/images/closer.png" class="closer">
      <div class="wrap">
        <?php wp_nav_menu( array(
           	'theme_location'  => '',
           	'menu'            => 'Левое меню', 
           	'container'       => false, 
           	'container_class' => '', 
           	'container_id'    => '',
           	'menu_class'      => 'menu', 
           	'menu_id'         => '',
           	'echo'            => true,
           	'fallback_cb'     => 'wp_page_menu',
           	'before'          => '',
           	'after'           => '',
           	'link_before'     => '',
           	'link_after'      => '',
           	'items_wrap'      => '<ul id="%1$s" class="%2$s">%3$s</ul>',
           	'depth'           => 0,
           	'walker'          => '',
           ) );
        ?>
        <?php wp_nav_menu( array(
           	'theme_location'  => '',
           	'menu'            => 'Правое меню', 
           	'container'       => false, 
           	'container_class' => '', 
           	'container_id'    => '',
           	'menu_class'      => 'menu', 
           	'menu_id'         => '',
           	'echo'            => true,
           	'fallback_cb'     => 'wp_page_menu',
           	'before'          => '',
           	'after'           => '',
           	'link_before'     => '',
           	'link_after'      => '',
           	'items_wrap'      => '<ul id="%1$s" class="%2$s">%3$s</ul>',
           	'depth'           => 0,
           	'walker'          => '',
           ) );
        ?>
      </div>
    </section>
    <script>window.main = true</script>
    <script src="<?php echo get_template_directory_uri();?>/libs/jquery/dist/jquery.min.js"></script>
    <script src="<?php echo get_template_directory_uri();?>/libs/fancybox/source/jquery.fancybox.pack.js"></script>
    <script src="//cdn.jsdelivr.net/jquery.slick/1.6.0/slick.min.js"></script>
    <script src="https://api-maps.yandex.ru/2.1/?lang=ru-RU" type="text/javascript"></script>
    <script src="//vk.com/js/api/openapi.js" defer></script>
    <script src="<?php echo get_template_directory_uri();?>/bundle.js"></script>
  </body>
</html>