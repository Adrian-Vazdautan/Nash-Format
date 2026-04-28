<!--?php
	require_once "src/alphabet.php";
	require_once "src/languages_menu_left.php";
?-->
<script>
	var	
	alphabet = {!! __('russian.alphabet') !!},
	categoryes = [
		['{!! __('russian.animals_and_nature') !!}','animals_and_nature'],
		['{!! __('russian.art') !!}','art'],
		['{!! __('russian.books_and_literature') !!}','books_and_literature'],
		['{!! __('russian.cinema_and_music') !!}','cinema_and_music'],
		['{!! __('russian.current_news_and_events') !!}','current_news_and_events'],
		['{!! __('russian.design') !!}','design'],
		['{!! __('russian.dreams') !!}','dreams'],
		['{!! __('russian.education') !!}','education'],
		['{!! __('russian.ethics') !!}','ethics'],
		['{!! __('russian.family_and_friends') !!}','family_and_friends'],
		['{!! __('russian.fashion_style') !!}','fashion_style'],
		['{!! __('russian.food_and_drink') !!}','food_and_drink'],
		['{!! __('russian.games') !!}','games'],
		['{!! __('russian.health_and_beauty') !!}','health_and_beauty'],
		['{!! __('russian.hobbies') !!}','hobbies'],
		['{!! __('russian.humanitarian_sciences') !!}','humanitarian_sciences'],
		['{!! __('russian.history') !!}','history'],
		['{!! __('russian.innovations') !!}','innovations'],
		['{!! __('russian.leadership') !!}','leadership'],
		['{!! __('russian.love_and_relationships') !!}','love_and_relationships'],
		['{!! __('russian.mental_health') !!}','mental_health'],
		['{!! __('russian.marketing') !!}','marketing'],
		['{!! __('russian.mathematics') !!}','mathematics'],
		['{!! __('russian.natural_sciences') !!}','natural_sciences'],
		['{!! __('russian.other') !!}','other'],
		['{!! __('russian.personal_stories') !!}','personal_stories'],
		['{!! __('russian.programming') !!}','programming'],
		['{!! __('russian.religion_and_spirituality') !!}','religion_and_spirituality'],
		['{!! __('russian.science_technology') !!}','science_technology'],
		['{!! __('russian.sports_and_fitness') !!}','sports_and_fitness'],
		['{!! __('russian.security') !!}','security'],
		['{!! __('russian.time_management') !!}','time_management'],
		['{!! __('russian.travel_and_culture') !!}','travel_and_culture'],
		['{!! __('russian.trends') !!}','trends'],
		['{!! __('russian.weather_and_climate') !!}','weather_and_climate'],
		['{!! __('russian.work') !!}','work']
	],
	category_all_topics = ['{!! __('russian.all_topics') !!}','all_topics'];
</script>