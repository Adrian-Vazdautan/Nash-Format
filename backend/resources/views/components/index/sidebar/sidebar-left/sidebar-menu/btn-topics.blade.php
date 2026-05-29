<div class="btn_topics_js APPEARANCE_DARK_btn_TOPICS_js">
	<div class="btn_topics_TITLE_js APPEARANCE_DARK_btn_topics_TITLE_js">
		Темы
	</div>
</div>

<!--START : var categoryes = [...];-->
	<!--?php require($_SERVER['DOCUMENT_ROOT'] . "/src/path/dt/ss/index/nav/nav-menu/src/menu-left.php");?-->
	@include('components.index.nav.nav-menu.src.menu-left')
<!--END-->
<!--START : CATEGORYES-->
	<div class="APPEARANCE_topics_js ccbwnr1 p l f14 mobile_hide_scroll_Y_css">
		<div class="innerHTML_sorted_bottoms_js ccbwnr2_css p l f14">
			<!--innerHTML_sorted_bottoms_NR:1_js-->
		</div>
		<div class="innerHTML_sorted_bottoms_js ccbwnr2_css p l f14">
			<!--innerHTML_sorted_bottoms_NR:2_js-->
		</div>
		<div class="innerHTML_sorted_bottoms_js ccbwnr2_css p l f14">
			<!--innerHTML_sorted_bottoms_NR:3_js-->
		</div>
	</div>
	<!--START : Show more-->
		<div class="topics_show_more_js">
			<div class="topics_show_more_TITLE_js APPEARANCE_DARK_topics_show_more_js" onclick="btn_topics_see_more()">
				Покажи еще
			</div>
		</div>
	<!--END-->
<!--END-->
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



	
		localStorage.setItem("menu", "1");
	//START : APPEARANCE
		var menu_image_address;
		menu_image_address = "url(../images/icon/menu/light/";
				
	//END
	localStorage.setItem("filter__menu", 'all_topics');
	//Sorting category by letter from alphabet array
	  for(let it = 0; it < alphabet.length; it++){
	    for(let it2 = 0; it2 < category_all_topics.length; it2++){
	      if(category_all_topics[it2][0][0] == alphabet[it]){
			/*START WRITE->*/document.getElementsByClassName("innerHTML_sorted_bottoms_js")[0].innerHTML = `
	            <!--START Button-->
	              <div class="ccbwnr2 p l">
	                <div class="ccbwnr3 p l u">
	                  <div class="ccbwnr4 p l fw ml20 for_removing_dublicates_js">` + alphabet[it] + `</div>
	                  <div class="mobile_ccbwnr">
		                  <div class="ccbwnr5js ccbwnr5hovjs ffcbjs p l c royalbluejs cwjs br4" onclick="fFCB(`+ 0 +`); categoryes_code('` + category_all_topics[1] + `')">
		                    <div class="p l hi ccbww1">
		                    	<div class='menu_category_topics_icon_js' style='background-image: ` + menu_image_address + category_all_topics[1] + `.png); width: 20px; background-position: center 9px;'></div>
		                    	<div class='menu_category_topics_text_js'>` + category_all_topics[0] + `</div>
		                    </div>
		                  </div>
	                  </div>
	                </div>
	              </div>
	            <!--END-->
	          `;
	        /*<-END WRITE*/
	      }
	    }
	  }
	//Defined var
	var itplus = 1;
	//Sorting category by letter from alphabet array
	  for(let it = 0; it < alphabet.length; it++){
	    for(let it2 = 0; it2 < categoryes.length; it2++){
	      if(categoryes[it2][0][0] == alphabet[it]){
	        //START
	          //Count buttons in innerHTML_sorted_bottoms_js
	            //Max 15 buttons for one box
	              if(itplus <= 14){
	                CBIIHSBN = 0;
	              } else if(itplus <= 20){
	                CBIIHSBN = 1;
	              } else if(itplus > 29){
	                CBIIHSBN = 2;
	              }
	          	/*START WRITE->*/document.getElementsByClassName("innerHTML_sorted_bottoms_js")[CBIIHSBN].innerHTML += `
		            <!--START Button-->
		              <div class="ccbwnr2 p l">
		                <div class="ccbwnr3 p l u">
		                  <div class="ccbwnr4 p l fw ml20 for_removing_dublicates_js">` + alphabet[it] + `</div>
		                  <div class="mobile_ccbwnr">
			                  <div class="ccbwnr5js ccbwnr5hovjs ffcbjs p l c royalbluejs cwjs br4" onclick="fFCB(`+ itplus++ +`); categoryes_code('` + categoryes[it2][1] + `')">
			                    <div class="p l hi ccbww1">
			                    	<div class='menu_category_topics_icon_js' style='background-image: ` + menu_image_address + categoryes[it2][1] + `.png); width: 20px; background-position: center 9px;'></div>
			                    	<div class='menu_category_topics_text_js'>` + categoryes[it2][0] + `</div>
			                    </div>
			                  </div>
		                  </div>
		                </div>
		              </div>
		            <!--END-->
		          `;
		        /*<-END WRITE*/
	        //END
	      }
	    }
	  }
	  cishsllaparifsie();
	  function cishsllaparifsie(){
	    let FRDJ  = document.getElementsByClassName("for_removing_dublicates_js").length,
	        FRDJA = [];
	    for(let it = 0; it < FRDJ; it++){
	      FRDJA[it] = document.getElementsByClassName("for_removing_dublicates_js")[it].innerHTML;
	    }
	    //Create another array which dont have letters thats repeated
	      let result = [];
	      for(let i = 0; i < FRDJA.length; i++){
	        if(i === 0 || FRDJA[i] !== FRDJA[i - 1]){
	          result.push(FRDJA[i]);
	        } else{
	          result.push("");
	        }
	      }
	    //Rewrite first letters in buttons
	      for(let it = 0; it < FRDJ; it++){
	        FRDJA[it] = document.getElementsByClassName("for_removing_dublicates_js")[it].innerHTML = result[it];
	      }
	    
	  }
	  function btn_topics_see_more(){
		var see_less = "See less";
		/* overflow-y scroll */document.getElementsByClassName("APPEARANCE_topics_js")[0].classList.remove("height450px");
		/* overflow-y scroll */document.getElementsByClassName("APPEARANCE_topics_js")[0].classList.add("height1480px");
		/* see less */document.getElementsByClassName("topics_show_more_TITLE_js")[0].innerHTML = see_less;
		/* change function */document.getElementsByClassName("topics_show_more_TITLE_js")[0].setAttribute("onclick", "btn_topics_see_less()");

	}

	function btn_topics_see_less(){
		var see_more = "See more";
		/* overflow-y scroll */document.getElementsByClassName("APPEARANCE_topics_js")[0].classList.remove("height1480px");
		/* overflow-y scroll */document.getElementsByClassName("APPEARANCE_topics_js")[0].classList.add("height450px");
		/* see more */document.getElementsByClassName("topics_show_more_TITLE_js")[0].innerHTML = see_more;
		/* change function */document.getElementsByClassName("topics_show_more_TITLE_js")[0].setAttribute("onclick", "btn_topics_see_more()");

	}
</script>