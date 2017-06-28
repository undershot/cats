
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
    <section id="custom_head">
      <header>
        <h1><?php the_title();?></h1>
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
           $thumbnail = types_render_field( "thumbnail", array('output' => 'raw') ); ?><a href="<?php the_permalink(); ?>">
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
    <script src="<?php echo get_template_directory_uri();?>/libs/jquery/dist/jquery.min.js"></script>
    <script src="<?php echo get_template_directory_uri();?>/libs/fancybox/source/jquery.fancybox.pack.js"></script>
    <script src="//cdn.jsdelivr.net/jquery.slick/1.6.0/slick.min.js"></script>
    <script src="https://api-maps.yandex.ru/2.1/?lang=ru-RU"></script>
    <script src="https://vk.com/js/api/openapi.js?146"></script>
    <script src="<?php echo get_template_directory_uri();?>/bundle.js"></script>
  </body>
</html>