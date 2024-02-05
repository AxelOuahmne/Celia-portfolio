composer install
cp .env.example .env => ila makynach .env
php artisan key:generate
php artisan migrate
php artisan serve



