# gatsby-wp

This site is showing you how to use gatsby to pull data in from a headless CMS (Wordpress).

#Steps for setting this up
------
1) Created a wordpress.org site
2) Set up gatsby site get the gatsby-source-wordpress plugin

#Steps for setting up web server
1) Install LAMP/LEMP stack
https://linuxconfig.org/how-to-setup-lemp-stack-on-debian-9-stretch-linux
https://www.digitalocean.com/community/tutorials/how-to-install-linux-apache-mariadb-php-lamp-stack-debian9
https://linuxhostsupport.com/blog/how-to-install-wordpress-with-php-7-1-and-nginx-on-a-debian-9-vps/
2)Get an SSL
https://medium.com/@kwa29/how-to-secure-nginx-with-lets-encrypt-on-debian-strech-6ff2e1008c55
3)Set up phpmyadmin
https://www.rosehosting.com/blog/how-to-install-phpmyadmin-on-debian/

#Use this 
--------
//Webhook
add_action( 'save_post', 'fireFunctionOnSave' );
function fireFunctionOnSave($post_id)
{
  if(wp_is_post_revision( $post_id) || wp_is_post_autosave( $post_id )) {
    return;
  }
  exec("mkdir /Applications/MAMP/htdocs/data");
  /*  $curl = curl_init( 'https://webhook.site/c9bf29b1-5001-4dbc-8c4e-0b9300c088b1' );
    curl_setopt( $curl, CURLOPT_POST, true );
    curl_setopt( $curl, CURLOPT_RETURNTRANSFER, true );
    $response = curl_exec( $curl );
	curl_close( $curl );
  */
}

#To Do
-------
1) Redirect all /wp* to wordpress rest to gatsby