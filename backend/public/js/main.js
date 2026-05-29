$(window).on('load', function() {
    setTimeout(function() {
        $('.lojs').addClass('none');
    }, 240);
});

{
    let alterntiveText = true;
        function showPopUpConect(){
            document.getElementsByClassName("pUWCjs")[0].classList.toggle("none");
            let thnkcnct = document.getElementsByClassName("thcjs")[0];

            if(alterntiveText == true){
                document.getElementsByClassName("tcjs")[0].innerHTML = tslf_Cancel;
                alterntiveText   = false;
            } else if(alterntiveText == false){
                document.getElementsByClassName("tcjs")[0].innerHTML   = tslf_SignIn;
                alterntiveText   = true;
            }

            document.getElementsByClassName("pUWCjs")[0].classList.toggle("none");
            document.getElementsByClassName("pUWCjs")[0].classList.toggle("none");
            document.addEventListener('click', function(event){
                let popUpWindowCnct = event.target.closest(".pUWCjs"),
                    thnkcnct        = event.target.closest(".thcjs");
                    rIS_2           = event.target.closest(".rISjs");
                    fPIS            = event.target.closest(".fPISjs");

                if(popUpWindowCnct || thnkcnct || rIS_2 || fPIS){
                    return;
                }
                    
                let text = document.getElementsByClassName("thcjs")[0];
                text.innerHTML        = tslf_SignIn;
                alterntiveText        = true;       
                document.querySelector('.pUWCjs').classList.add("none");
            });
        }

        function registrationWindow(){
            document.getElementsByClassName("rISjs")[0].dataset.status = "open";
            document.getElementsByClassName("rISjs")[0].classList.remove("none");
            cuunr1();
            document.getElementsByClassName("overflowjs")[0].style.overflowY = "hidden";
            document.getElementsByClassName("sjs")[0].style.opacity          = "1";
            if(document.getElementsByClassName("centerCenter_history_js")[0].classList.contains("true") == true){
                document.getElementsByClassName("centerCenter_history_js")[0].classList.add("none");
                //document.getElementsByClassName("bHjs")[0].style.backgroundColor = "";
            }
        }

        function rcrw(){
            document.getElementsByClassName("rISjs")[0].classList.add("none");
            document.getElementsByClassName("overflowjs")[0].style.overflowY = "scroll";
            document.getElementsByClassName("sjs")[0].style.opacity          = "0";
            document.getElementsByClassName("rISjs")[0].dataset.status       = "hidden";    
        }

        {
            document.addEventListener('click', function(event){
                if(document.getElementsByClassName("rISjs")[0].dataset.status == "open"){
                    let wSRIS                      = event.target.closest(".wSRIS");
                        wSRIS2                     = event.target.closest(".prjs");
                        mobile_signup_button_EL_js = event.target.closest(".mobile_signup_button_EL_js");

                    if(wSRIS || wSRIS2 || mobile_signup_button_EL_js){
                        return;
                    }

                    rcrw();
                }
            });
        }
}

{
    function tljsb(){
        document.getElementsByClassName("tlpojs")[0].classList.toggle("none");
        document.addEventListener('click', function(event){
            let button = event.target.closest(".tljs"), list = event.target.closest(".tlpojs");
            if(button || list){return;}
            document.getElementsByClassName("tlpojs")[0].classList.add("none");
        });
    }
}

{
        let otherFiltersBtn      = document.getElementsByClassName("oFBjs")[0],
            otherFiltersPopUp    = document.getElementsByClassName("oFPUjs")[0],
            otherFiltersSwitcher = 1;
        function otherFiltersBtnF(){
            if(otherFiltersSwitcher == 1){
               
                        /*Add light mode*/document.getElementsByClassName("id_btn_filter_by_nr_8_from_8_js")[0].classList.add("btn8_light_mode_js");
                  
                //Hide
                    otherFiltersPopUp.classList.remove("none");
                //UPDATE
                    otherFiltersSwitcher = 0;   
            } else if(otherFiltersSwitcher == 0){
               /*Remove light mode*/document.getElementsByClassName("id_btn_filter_by_nr_8_from_8_js")[0].classList.remove("btn8_light_mode_js");
                  
                //Hide
                    otherFiltersPopUp.classList.add("none");
                //UPDATE
                    otherFiltersSwitcher = 1;
            }

            document.addEventListener('click', function(event){
                let otherFiltersPopUpWindow = event.target.closest(".oFPUjs"),
                    otherFiltersBtnWindow   = event.target.closest(".oFBjs"),
                    cadn1                   = event.target.closest(".cadn1js"),
                    deofnr1                 = event.target.closest(".deofn1js");

                if(otherFiltersPopUpWindow || otherFiltersBtnWindow || cadn1 || deofnr1){
                    return;
                }

                document.querySelector('.oFPUjs').classList.add("none");
                /*Remove Light_Mode->*/ document.getElementsByClassName("id_btn_filter_by_nr_8_from_8_js")[0].classList.remove("btn8_light_mode_js");
                /*Remove Dark_Mode->*/ document.getElementsByClassName("id_btn_filter_by_nr_8_from_8_js")[0].classList.remove("btn8_dark_mode_js");
                otherFiltersSwitcher = 1;
            }); 
        }


    }



function chooseAdate(){
        //Enabled version
            //mobile
                if(localStorage.getItem("enabled_version") == "mobile"){
                    /*Disable : <Body> scroll->*/document.getElementsByClassName("overflowjs")[0].classList.add("ovysi_4");
                }
            //desktop
                else if(localStorage.getItem("enabled_version") == "desktop"){
                    /*Enable : <Body> scroll->*/document.getElementsByClassName("overflowjs")[0].classList.remove("ovysi_4");
                }
        document.getElementsByClassName("cadn1js")[0].dataset.status     = "open";
        document.getElementsByClassName("cadn1js")[0].classList.remove("none");
        document.getElementsByClassName("overflowjs")[0].style.overflowY = "hidden";
    }

    function cadclose(){
        document.getElementsByClassName("cadn1js")[0].classList.add("none");
        document.getElementsByClassName("overflowjs")[0].style.overflowY = "scroll";
        document.getElementsByClassName("cadn1js")[0].dataset.status     = "hidden";
        /*Enable : <Body> scroll->*/document.getElementsByClassName("overflowjs")[0].classList.remove("ovysi_4");
    }

    {
        document.addEventListener('click', function(event){
            if(document.getElementsByClassName("cadn1js")[0].dataset.status == "open"){
                let articleInformation = event.target.closest(".aIjs"),
                    cadn2              = event.target.closest(".cadn2js"),
                    wfss0              = event.target.closest(".wfss0");
                if(articleInformation || cadn2 || wfss0){
                    return;
                }
                cadclose();
            }
        });
    }


{// Choose a date
    function daceljsELC(){
        //Onchage event listener in selected input
            sdfi();
    }
   
                /*Add Light Mode*/  document.getElementsByClassName("daceljs")[1].classList.add("checkedBluejs");
                /*Remove Dark Mode*/document.getElementsByClassName("daceljs")[1].classList.remove("checked_dark_mode_js");
           
    /*END*/
    function sifcad(id){
        //Who is checked
            (()=>{
                //Hide all checkedBluejs after onclick
                    for(let it = 0; it <= 1; it++){
                        document.getElementsByClassName("daceljs")[it].classList.remove("checkedBluejs");
                        document.getElementsByClassName("daceljs")[it].classList.remove("checked_dark_mode_js");
                    }
                document.getElementsByClassName("daceljs")[id].classList.add("checkedBluejs");
                        
                    sdfi();
            })();
    }
    function whoIsChecked(){
        //Which input is checked
            if(document.getElementsByClassName("daceljs")[0].classList.contains("checkedBluejs") || document.getElementsByClassName("daceljs")[0].classList.contains("checked_dark_mode_js")){
                return 0;
            } else if(document.getElementsByClassName("daceljs")[1].classList.contains("checkedBluejs") || document.getElementsByClassName("daceljs")[1].classList.contains("checked_dark_mode_js")){
                return 1;
            }
    }
    //Get value from checked
        function gvfc(){
            return document.getElementsByClassName("daceljs")[whoIsChecked()].value;
        }
    //Show calendar dates
        function sdfi(){
            const datei = gvfc(); //Date from input-1. FROM
            const calda = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];//Count of dates of months of calendar
            const ca10e = [6, 0, 1, 2, 3, 4, 5];                           //Data for space before 1 day. Function isbd
            const datym = datei.substr(0, 7);                              //Get Year and Month
            caldn(Number(datym.substr(5, 7))-1, datym.substr(0, 4));

            function gcnd(){
                //Get day knowing month and year. Date only 1
                    var gcnd = new Date(datym);
                    return gcnd.getDay();
            }

            (function isbd(){
                //Insert space before 1 day
                    //Hide all 7 ca10js 
                        for(let el = 0; el <= 6; el++){document.getElementsByClassName("ca10js")[el].classList.add("none");}
                    for(let el = 1; el <= ca10e[gcnd()]; el++){
                        document.getElementsByClassName("ca10js")[el].classList.remove("none");
                    }
                //Hide all 35 ca9js
                    for(let el = 0; el < 35; el++){document.getElementsByClassName("ca9js")[el].classList.add("none");}
                //Insert days after space
                    for(let el = 0; el < calda[Number(datei.substr(5, 2))-1]; el++){
                        document.getElementsByClassName("ca9js")[el].classList.remove("none");
                        document.getElementsByClassName("ca9js")[el].innerHTML = el+1;
                    }
                fwcd(Number(datei.substr(8, 2))-1);//Show blue focus on date which is in input
            })();
        }
    sdfi();
    //Blue focus throught
    
            /*Add Light Mode*/  document.getElementsByClassName("btn_filter_id_apply_js")[0].classList.add("cadn101");
                    /*Remove Dark Mode*/document.getElementsByClassName("btn_filter_id_apply_js")[0].classList.remove("cadn101_dark_mode");
               
        /*END*/
        function fwcd(day){
            //Remove style for all buttons/dates
                for(let it = 0; it <= 34; it++){
                   document.getElementsByClassName("ca9js")[it].style.background = "white";
                            document.getElementsByClassName("ca9js")[it].style.color      = "#696A6C";
                            document.getElementsByClassName("ca9js")[it].classList.add("ca9hjs");
                       
                }
            //Set style for one button/date
                
            //Update date from selected input
                (()=>{
                    let itm   = document.getElementsByClassName("daceljs")[whoIsChecked()].value,
                        year  = itm.substr(0, 4),
                        month = itm.substr(5, 2),
                        dayp  = day + 1;
                    if(dayp <= 9 && dayp > 0){dayp = "0" + dayp}
                    document.getElementsByClassName("daceljs")[whoIsChecked()].value = year + "-" + month + "-" + dayp;
                })();
        }
    //Show date from array which stay in script in index/feed file
        function caldn(month, year){
            document.getElementsByClassName("cadn72a")[0].innerHTML = caldd[month] + '\xa0' + year;
        }
    //Calendar switch back or next
        function swcalda(nr){
            //Blue select on input. Right input is selected by default
                let dateL = document.getElementsByClassName("daceljs")[whoIsChecked()].value,
                    year  = Number(dateL.substr(0, 4)),
                    month = Number(dateL.substr(5, 2)),
                    day   = dateL.substr(8, 2);

            if(nr == 0){
                //Back
                    month -=1;
                    if(month == 0){month = 12;year = year -1;} else if(month > 0 && month <= 9){month = "0" + month;}
                    document.getElementsByClassName("daceljs")[whoIsChecked()].value = year + "-" + month + "-" + day;
                    sdfi();
            } else if(nr == 1){
                //Next
                    month = Number(month)+1;
                    if(month == 13){month = "01";year = year +1;} else if(month > 0 && month <= 9){month = "0" + month;}
                    document.getElementsByClassName("daceljs")[whoIsChecked()].value = year + "-" + month + "-" + day;
                    sdfi();
            }
        }
    //Send selected dates to server. CALENDAR
        function ssdts(){
            let from                 = document.getElementsByClassName("daceljs")[0].value,
                upto                 = document.getElementsByClassName("daceljs")[1].value,
                filter__menu         = localStorage.getItem("filter__menu"),
                filter__new_the_best = localStorage.getItem("filter__new_the_best"),
                request              = new XMLHttpRequest();
            request.onreadystatechange = function(){
                if(request.readyState == 4 && request.status == 200){
                    //Show loading
                    /*
                    //Upload articles
                        document.getElementsByClassName("feed-wrapp-articles-0")[0].innerHTML = request.responseText;
                    //Show articles
                        document.getElementsByClassName("feed-wrapp-articles-0")[0].classList.remove("none");
                    //Hide : articles not found
                        document.getElementsByClassName("srnw0js")[0].classList.add("none");
                    */
                    //Upload articles
                    //Article NOT found
                        if(request.responseText.length < 5000){
                            /*Show : articles not found->*/document.getElementsByClassName("srnw0js")[0].classList.remove("none");
                            /*Hide : articles->*/document.getElementsByClassName("feed-wrapp-articles-0")[0].classList.add("none");
                        }
                    //Article existed
                        if(request.responseText.length > 5000){
                            document.getElementsByClassName("feed-wrapp-articles-0")[0].innerHTML = request.responseText;
                            /*Show : articles->*/document.getElementsByClassName("feed-wrapp-articles-0")[0].classList.remove("none");
                            /*Hide : articles not found->*/document.getElementsByClassName("srnw0js")[0].classList.add("none");
                        }
                    //Close : Calendar
                        cadclose();
                    //Deactivate button : more_filters
                        otherFiltersBtnF();
                    //Deactivation of buttons day/week/month/year
                        for(let nob = 3; nob <= 7; nob++){
                            document.getElementsByClassName("id_btn_filter_by_nr_" + nob + "_from_8_js")[0].dataset.status = 0;
                        }
                        for(let nrOfbtns = 3; nrOfbtns <= 7; nrOfbtns++){
                           /*Hide background*/document.getElementsByClassName("id_btn_filter_by_nr_" + nrOfbtns + "_from_8_js")[0].classList.remove("btn3_light_mode_js");
                              
                        }
                }
            }
            request.open("POST", "src/path/dt/ss/index/sidebar/sidebar-left/sidebar-home/sidebar-home-articles/home.php");
            request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            request.send('filter__menu=' + filter__menu + "&" + "filter__new_the_best=" + filter__new_the_best + "&" + "from=" + from + "&" + "upto=" + upto);
        }
}

{// forgot-password.js
    if(localStorage.getItem("session") == "false"){
        function forgotPasswordWindow(){
            document.getElementsByClassName("fPISjs")[0].classList.remove("none");
            document.getElementsByClassName("overflowjs")[0].style.overflowY = "hidden";
            document.getElementsByClassName("sjs")[0].style.opacity          = "1";
            document.getElementsByClassName("fPISjs")[0].dataset.status      = "open";
            cuunr1();
        }

        function closeforgotPasswordWindow(){
            document.getElementsByClassName("fPISjs")[0].classList.add("none");
            document.getElementsByClassName("overflowjs")[0].style.overflowY = "scroll";
            document.getElementsByClassName("sjs")[0].style.opacity          = "0";
            document.getElementsByClassName("fPISjs")[0].dataset.status      = "hidden";
        }

        {
            document.addEventListener('click', function(event){
                if(document.getElementsByClassName("fPISjs")[0].dataset.status == "open"){
                    let wNFPIS = event.target.closest(".wNfPISjs");
                        wpfp   = event.target.closest(".pfpjs");
                    if(wNFPIS || wpfp){
                        return;
                    }
                    document.getElementsByClassName("fPISjs")[0].dataset.status      = "hidden";
                    document.getElementsByClassName("fPISjs")[0].classList.add("none");
                    document.getElementsByClassName("overflowjs")[0].style.overflowY = "scroll";
                }
            });
        }
    }
}

{// likes.js
    /*status : likes->*/localStorage.setItem("likes_status", "closed");
    function showPopUpInrerfaceLikes(){
        //START : Enabled version
            //mobile
                if(localStorage.getItem("enabled_version") == "mobile"){
                    /*Disable : <Body> scroll->*/document.getElementsByClassName("overflowjs")[0].classList.add("ovysi");
                }
            //desktop
                else if(localStorage.getItem("enabled_version") == "desktop"){
                    /*Enable : <Body> scroll->*/document.getElementsByClassName("overflowjs")[0].classList.remove("ovysi");
                }
        //END
        //START : Check
            if(localStorage.getItem("likes_status") == "closed"){
                /*status : likes->*/localStorage.setItem("likes_status", "open");
            } else if(localStorage.getItem("likes_status") == "open"){
                /*status : likes->*/localStorage.setItem("likes_status", "closed");
            }
        //END
            document.getElementsByClassName("centerCenter_likes_js")[0].classList.toggle("none");
            document.getElementsByClassName("sjs")[0].style.opacity = "1";
            if(document.getElementsByClassName("centerCenter_likes_js")[0].classList.contains("none")){
                /*Enable : <Body> scroll->*/document.getElementsByClassName("overflowjs")[0].classList.remove("ovysi");
            }
        //START : Click outside
            document.addEventListener('click', function(event){
                let window_my_likes_js = event.target.closest(".window_my_likes_js"),
                    btn_likes_js       = event.target.closest(".btn_likes_js");
                if(window_my_likes_js || btn_likes_js){
                    return;
                }
                document.querySelector('.centerCenter_likes_js').classList.add("none");
                /*status : chat->*/localStorage.setItem("likes_status", "closed");
            });
        //END
        //START : session : true
            if(localStorage.getItem("session") == "true"){
                show_article_which_was_liked();
            }
        //END
    }

    function show_article_which_was_liked(){
        /*Hide: Title->*/document.getElementsByClassName("likes_title_js")[0].classList.add("none");
        /*Show: loading->*/document.getElementsByClassName("loading_for_liked_articlesjs")[0].classList.remove("none");
        //Send ajax request
            let request = new XMLHttpRequest();
            request.onreadystatechange = function(){
                if(request.readyState == 4 && request.status == 200){
                        var response = request.responseText;
                    //Nothing not was found
                        if(response.length <= 2000){
                            document.getElementsByClassName("puwsulikaujs")[0].classList.remove("pat37");
                            /*Hide: Title->*/document.getElementsByClassName("likes_title_js")[0].classList.add("none");
                            /*Hide: loading->*/document.getElementsByClassName("loading_for_liked_articlesjs")[0].classList.add("none");
                            /*Show: when nothing not found->*/document.getElementsByClassName("puwsulikjs")[0].classList.remove("none");
                        } 
                    //Exists
                        else {
                            document.getElementsByClassName("puwsulikaujs")[0].classList.add("pat37");
                            /*Remove: loading->*/document.getElementsByClassName("loading_for_liked_articlesjs")[0].classList.add("none");
                            /*Hide  : when nothing not found->*/document.getElementsByClassName("puwsulikjs")[0].classList.add("none");
                            /*Show  : Title->*/document.getElementsByClassName("likes_title_js")[0].classList.remove("none");
                            /*innerHTML->*/document.getElementsByClassName("puwsulikaujs")[0].innerHTML = response;
                        }
                }
            }
            request.open('POST', '../src/path/dt/ss/index/sidebar/sidebar-left/sidebar-likes/src/likes.php');
            request.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
            request.send('load=' + "1");
    }
}

{// showPopUpInterfaceHistory.js
    /*status : history->*/localStorage.setItem("history_status", "closed");
    function showPopUpInrerfaceHistory(){
        //START : Enabled version
            //mobile
                if(localStorage.getItem("enabled_version") == "mobile"){
                    /*Disable : <Body> scroll->*/document.getElementsByClassName("overflowjs")[0].classList.add("ovysi");
                }
            //desktop
                else if(localStorage.getItem("enabled_version") == "desktop"){
                    /*Enable : <Body> scroll->*/document.getElementsByClassName("overflowjs")[0].classList.remove("ovysi");
                }
        //END
        //START : Check
            if(localStorage.getItem("history_status") == "closed"){
                /*status : history->*/localStorage.setItem("history_status", "open");
            } else if(localStorage.getItem("history_status") == "open"){
                /*status : history->*/localStorage.setItem("history_status", "closed");
            }
        //END
            document.getElementsByClassName("centerCenter_history_js")[0].classList.toggle("none");
            document.getElementsByClassName("sjs")[0].style.opacity = "1";
            if(document.getElementsByClassName("centerCenter_history_js")[0].classList.contains("none")){
                /*Enable : <Body> scroll->*/document.getElementsByClassName("overflowjs")[0].classList.remove("ovysi");
            }
        //START : Click outside
            document.addEventListener('click', function(event){
                var window_my_history_js = event.target.closest(".window_my_history_js"),
                    btn_history_js       = event.target.closest(".btn_history_js");
                if(window_my_history_js || btn_history_js){
                    return;
                }
                document.querySelector('.centerCenter_history_js').classList.add("none");
                /*status : history->*/localStorage.setItem("history_status", "closed");
            });
        //END
        //START : session : true
            if(localStorage.getItem("session") == "true"){
                show_history_of_watched_articles();
            }
        //END
    }

    function show_history_of_watched_articles(){
        /*Hide: Title->*/document.getElementsByClassName("history_title_js")[0].classList.add("none");
        /*Show: loading->*/document.getElementsByClassName("loading_for_history_articlesjs")[0].classList.remove("none");
        //Send ajax request
            let request = new XMLHttpRequest();
            request.onreadystatechange = function(){
                if(request.readyState == 4 && request.status == 200){
                        var response = request.responseText;
                    //Nothing not was found
                        if(response.length <= 2000){
                            document.getElementsByClassName("puwsu_history_saujs")[0].classList.remove("pat37");
                            /*Hide: Title->*/document.getElementsByClassName("history_title_js")[0].classList.add("none");
                            /*Hide: loading->*/document.getElementsByClassName("loading_for_history_articlesjs")[0].classList.add("none");
                            //*Show: when nothing not found->*/document.getElementsByClassName("puwsulik_history_js")[0].classList.remove("none");
                        } 
                    //Exists
                        else {
                            document.getElementsByClassName("puwsu_history_saujs")[0].classList.add("pat37");
                            /*Remove: loading->*/document.getElementsByClassName("loading_for_history_articlesjs")[0].classList.add("none");
                            //*Hide  : when nothing not found->*/document.getElementsByClassName("puwsulik_history_js")[0].classList.add("none");
                            /*Show  : Title->*/document.getElementsByClassName("history_title_js")[0].classList.remove("none");
                            /*innerHTML->*/document.getElementsByClassName("puwsu_history_saujs")[0].innerHTML = response;
                        }
                }
            }
            request.open('POST', '../src/path/dt/ss/index/sidebar/sidebar-left/sidebar-history/src/history.php');
            request.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
            request.send('load=' + "1");
    }
}

{// chat.js
        /*status : chat->*/localStorage.setItem("chat_status", "closed");
        var show_in_interval; //Объявляем переменную здесь, чтобы она была видна в обоих случаях
    function showPopUpInrerfaceChat(){
        //Enabled version
            //mobile
                if(localStorage.getItem("enabled_version") == "mobile"){
                    document.getElementsByClassName("overflowjs")[0].classList.add("ovysi");
                    /*menu*/document.getElementsByClassName("pvhlzhdj_mobile")[0].classList.add("none");
                    //*pointer-events : menu*/document.getElementsByClassName("naveljs")[0].classList.add("pointer_events_none");
                    document.getElementsByClassName("mtclmojs")[0].classList.remove("none");
                }
            //desktop
                else if(localStorage.getItem("enabled_version") == "desktop"){
                    document.getElementsByClassName("overflowjs")[0].classList.remove("ovysi");
                    /*menu*/document.getElementsByClassName("pvhlzhdj_mobile")[0].classList.remove("none");
                    //*pointer-events : menu*/document.getElementsByClassName("naveljs")[0].classList.remove("pointer_events_none");
                    document.getElementsByClassName("mtclmojs")[0].classList.add("none");
                }
        //Check
            if(localStorage.getItem("chat_status") == "closed"){
                /*status : chat->*/localStorage.setItem("chat_status", "open");
            } else if(localStorage.getItem("chat_status") == "open"){
                /*status : chat->*/localStorage.setItem("chat_status", "closed");
            }
        //Handle chat window
            var lEcht = document.getElementsByClassName("chtjs").length;
                document.getElementsByClassName("poUWCjs")[0].classList.toggle("none");
                //document.getElementsByClassName("bCjs")[0].style.backgroundColor = "#F5F6F7";
                //document.getElementsByClassName("bCjs")[0].style.borderTop       = "1px solid #DDDFE2";
                //document.getElementsByClassName("bCjs")[0].style.borderBottom    = "1px solid #DDDFE2";
                //document.getElementsByClassName("bCjs")[0].style.marginTop       = "-1px";
                //document.getElementsByClassName("bCjs")[0].style.cursor          = "pointer";
                document.getElementsByClassName("bCjs")[0].classList.remove("btnHistorHover");
                document.getElementsByClassName("sjs")[0].style.opacity = "1";
            switch(document.getElementsByClassName("poUWCjs")[0].classList.contains("none")){
                case true:
                //document.getElementsByClassName("bCjs")[0].style.backgroundColor     = "";
                //document.getElementsByClassName("bCjs")[0].style.borderTop           = "";
                //document.getElementsByClassName("bCjs")[0].style.borderBottom        = "";
                //document.getElementsByClassName("bCjs")[0].style.marginTop           = "";
                //document.getElementsByClassName("bCjs")[0].style.cursor              = "";
                document.getElementsByClassName("bCjs")[0].classList.add("btnHistorHover");
            }
            document.addEventListener('click', function(event){
                var APPEARANCE_chat_js = event.target.closest(".APPEARANCE_chat_js"),
                    btnHistr           = event.target.closest(".bCjs"),
                    uunr1js            = event.target.closest(".uunr1js"),
                    fpis0              = event.target.closest(".fpis0"),
                    rISjs              = event.target.closest(".rISjs");
                    //naveljs            = event.target.closest(".naveljs");
                if(APPEARANCE_chat_js || btnHistr || uunr1js || rISjs || fpis0){
                    return;
                }
                if(localStorage.getItem("enabled_version") == "mobile"){
                    //if(naveljs){
                    //  return;
                    //}
                }
                document.getElementsByClassName("bCjs")[0].style.backgroundColor     = "";
                document.getElementsByClassName("bCjs")[0].style.borderTop           = "";
                document.getElementsByClassName("bCjs")[0].style.borderBottom        = "";
                document.getElementsByClassName("bCjs")[0].style.marginTop           = "";
                document.getElementsByClassName("bCjs")[0].style.cursor              = "";
                document.getElementsByClassName("bCjs")[0].classList.add("btnHistorHover");
                document.querySelector('.poUWCjs').classList.add("none");
                /*Clear : интервала для проверки новых сообщений каждые 3 секунды*/clearInterval(show_in_interval);
                //Check status
                    if(localStorage.getItem("chat_status") == "open"){
                        //Enabled version
                            //mobile
                                if(localStorage.getItem("enabled_version") == "mobile"){
                                    //document.getElementsByClassName("naveljs")[0].classList.add("none");
                                    document.getElementsByClassName("mainNAVjs")[0].classList.add("none");
                                    //Remove style for-> Enabled version: mobile
                                        document.getElementsByClassName("overflowjs")[0].classList.remove("ovysi");
                                        document.getElementsByClassName("pvhlzhdj_mobile")[0].classList.remove("none");
                                }
                            //desktop
                                else if(localStorage.getItem("enabled_version") == "desktop"){

                                }
                    }
                /*status : chat->*/localStorage.setItem("chat_status", "closed");
            });
        //Check status
            if(localStorage.getItem("chat_status") == "open"){
                //Enabled version
                    //mobile
                        if(localStorage.getItem("enabled_version") == "mobile"){
                            /*Установка интервала для проверки новых сообщений каждые 3 секунды->*/show_in_interval = setInterval(request_show_messages_from_server, 3000);
                            //document.getElementsByClassName("naveljs")[0].classList.add("none");
                            document.getElementsByClassName("mainNAVjs")[0].classList.add("none");
                        }
                    //desktop
                        else if(localStorage.getItem("enabled_version") == "desktop"){

                        }
            } else if(localStorage.getItem("chat_status") == "closed"){
                /*Clear : интервала для проверки новых сообщений каждые 3 секунды*/clearInterval(show_in_interval);
                //document.getElementsByClassName("naveljs")[0].classList.remove("none");
            }
        //*Auto scroll down->*/document.getElementsByClassName("insertMessageChatjs")[0].scrollTop = document.getElementsByClassName("insertMessageChatjs")[0].scrollHeight;
            request_show_messages_from_server();
    }
    
    //START : Chat : Send
        function send_chat_message(){
            if(localStorage.getItem("session") == "true"){
                /*GET : Message->*/var get_message = document.getElementsByClassName("get_message_js")[0].value;
                /*START : Check message*/
                    //If is empty
                        if(get_message == ""){
                            document.getElementsByClassName("get_message_js")[0].classList.add("crp");
                            document.getElementsByClassName("get_message_js")[0].classList.add("redisbs");
                            document.getElementsByClassName("get_message_js")[0].placeholder = "You can not send empty message";
                        }
                    //If is NOT empty
                        else if(get_message != ""){
                            //START
                                function getCurrentTime() {
                                        const now         = new Date();
                                        let hours         = now.getHours();
                                        let minutes       = now.getMinutes();
                                    //Добавляем ведущий ноль, если минуты меньше 10
                                        minutes           = minutes < 10 ? '0' + minutes : minutes;
                                    //Добавляем ведущий ноль, если часы меньше 10
                                        hours             = hours < 10 ? '0' + hours : hours;
                                        const currentTime = hours + ':' + minutes;
                                        return currentTime;
                                }
                            //END
                            //START
                                // Получаем все элементы с классом "ajs"
                                    var elements = document.querySelectorAll('.ajs');

                                    // Проходим по каждому элементу
                                    elements.forEach(function(element) {
                                      // Получаем все дочерние теги внутри элемента
                                      var childTags = element.getElementsByTagName('*');

                                      // Выводим дочерние теги
                                      for (var i = 0; i < childTags.length; i++) {
                                        // Создаем копию тега
                                        var clonedTag = childTags[i].cloneNode(true);

                                        // Добавляем класс к скопированному тегу
                                        clonedTag.classList.add('chat_message_right_avatar_css');

                                        // Теперь можно использовать clonedTag в вашем коде
                                        chat_message_right_avatar = clonedTag.outerHTML;
                                      }
                                    });
                            //END
                            var IDofUserWhichSignIn = localStorage.getItem("IDofUserWhichSignIn"), chat_message_right_avatar, nickname = localStorage.getItem("userWhichSignIn"), dateofpublication = getCurrentTime();
                            /*INSERT : Message->*/document.getElementsByClassName("insertMessageChatjs")[0].innerHTML += `
                            <!--START : RIGHT-->
                            <div class='wwctML w100 p l mb10'>
                                <div class='wwctMR1_nr_2 p r br12'>
                                    <div class='w100 p l'><div class='p r'>` + chat_message_right_avatar + `<div class='chat_right_nickname_css p l ml10 tdu c' onclick='wshowUserProfile(` + IDofUserWhichSignIn + `,"` + nickname + `")'>` + nickname + `</div></div></div><div class='w100 chat_right_message_css'>` + get_message + `</div><div class='chat_right_date_css p l'>` + dateofpublication + `</div>
                                </div>
                            </div>
                            <!--END-->`;
                            /*CLEAR : Message->*/document.getElementsByClassName("get_message_js")[0].value = "";
                            /*Auto scroll down->*/document.getElementsByClassName("insertMessageChatjs")[0].scrollTop = document.getElementsByClassName("insertMessageChatjs")[0].scrollHeight;
                            /*SEND : Message to server->*/request_to_server(get_message);
                        }
                /*END*/
            } else if(localStorage.getItem("session") == "false"){
                unauthorized();
            }
        }
    //END
    //START
        //Send message to server
            function request_to_server(get_message){
                let request = new XMLHttpRequest();
                request.onreadystatechange = function(){
                    if(request.readyState == 4 && request.status == 200){
                        /*Auto scroll down->*/document.getElementsByClassName("insertMessageChatjs")[0].scrollTop = document.getElementsByClassName("insertMessageChatjs")[0].scrollHeight;
                    }
                }
                request.open('POST', '../src/path/dt/ss/index/sidebar/sidebar-left/sidebar-chat/src/send_chat.php');
                request.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
                request.send("get_message=" + get_message);
            }
    //END
    //START
        function chathandleKeyPress(event){
            if(event.keyCode === 13){ //Проверяем код клавиши, если это Enter (код 13)
                if(localStorage.getItem("session") == "true"){
                    /*SEND->*/send_chat_message();
                } else if(localStorage.getItem("session") == "false"){
                    unauthorized();
                }
            }
        }
    //END
    /*START : Remove error from chat-input*/
        function removeErrorChatInput(id){
            document.getElementsByClassName("get_message_js")[0].classList.remove("crp");
            document.getElementsByClassName("get_message_js")[0].classList.remove("redisbs");
            document.getElementsByClassName("get_message_js")[0].placeholder = "Write anything...";
        }
    /*END*/
    //START
        //Show messages from server
            var number_of_request = 0;
            function request_show_messages_from_server(){
                number_of_request++;
                let request = new XMLHttpRequest();
                request.onreadystatechange = function(){
                    if(request.readyState == 4 && request.status == 200){
                        //Нет сообщении
                            if(!request.responseText){
                                /*Remove : Loading->*/document.getElementsByClassName("loading_for_chat_js")[0].classList.add("none");
                            } 
                        //Есть сообщения
                            else {
                                /*Remove : Loading->*/document.getElementsByClassName("loading_for_chat_js")[0].classList.add("none");
                                /*Show   : Title->*/document.getElementsByClassName("chat_title_js")[0].classList.remove("none");
                                /*INSERT : Message->*/document.getElementsByClassName("insertMessageChatjs")[0].insertAdjacentHTML('beforeend', request.responseText);
                                //Scroll down when after loading
                                    /*Auto scroll down->*/document.getElementsByClassName("insertMessageChatjs")[0].scrollTop = document.getElementsByClassName("insertMessageChatjs")[0].scrollHeight;
                            }
                    }
                }
                request.open('POST', '../src/path/dt/ss/index/sidebar/sidebar-left/sidebar-chat/src/show_chat.php');
                request.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
                request.send("number_of_request=" + number_of_request);
            }
    //END
    //START : Close chat for mobile version
        function close_mobile_chat(){
            /*close : chat->*/document.getElementsByClassName("poUWCjs")[0].classList.add("none");
            /*show : menu*/document.getElementsByClassName("mainNAVjs")[0].classList.remove("none");
            /*show : menu*/document.getElementsByClassName("pvhlzhdj_mobile")[0].classList.remove("none");
            //*pointer-events : menu*/document.getElementsByClassName("naveljs")[0].classList.remove("pointer_events_none");
            /*status : chat->*/localStorage.setItem("chat_status", "closed");
                            //document.getElementsByClassName("naveljs")[0].classList.remove("none");
        }
    //END
}

{
    function share_this(){
        //Show Form
            document.getElementsByClassName("sharejs")[0].classList.remove("none");
            document.getElementsByClassName("overflowjs")[0].classList.add("ovys");
        //Create URL
            /*UPDATE URL->*/document.getElementsByClassName("share_input_js")[0].innerHTML = domain_name + "article.php?id=" + 1;
    }

    function closeShare(){
        document.getElementsByClassName("sharejs")[0].classList.add("none");
        document.getElementsByClassName("overflowjs")[0].classList.remove("ovys");
    }

    function copy_shared_link(){
        //Находим элемент div по классу
            var divElement = document.querySelector('.share_input_js');
        //Создаем объект Range
            var range = document.createRange();
            range.selectNode(divElement);
        //Выбираем текст внутри div
            window.getSelection().removeAllRanges();
            window.getSelection().addRange(range);
        //Копируем текст в буфер обмена
            document.execCommand('copy');
        //Снимаем выделение
            window.getSelection().removeAllRanges();
        //Ваш код для обработки копирования
            //alert('Ссылка скопирована: ' + divElement.innerText);
        //START Show alert that URL is copied
            warning_alert('Copied');
        //END
        //Close share
            closeShare();
    }
    
    document.addEventListener('click', function(event){
        let button  = event.target.closest(".tfccb1"),
            wrapper = event.target.closest(".shuunr21");

        if(button || wrapper){
            return;
        }

        document.getElementsByClassName("sharejs")[0].classList.add("none");
        document.getElementsByClassName("overflowjs")[0].classList.remove("ovys");
    });
    
}

function authorizeUser(id){
        //Define var
            let c_l_usernamejs = document.getElementsByClassName("c_l_usernamejs")[id].value,
                c_k_passwordjs = document.getElementsByClassName("c_k_passwordjs")[id].value;
        //Check if username is NOT writted
            if(c_l_usernamejs == ""){
                //ERROR NR.1
                    document.getElementsByClassName("err_c_usernamejs")[id].innerHTML = "field_is_required";
                    document.getElementsByClassName("err_c_usernamejs")[id].classList.remove("none");
                    document.getElementsByClassName("c_l_usernamejs")[id].classList.add("redisbs");
                    document.getElementsByClassName("c_l_usernamejs")[id].classList.remove("greenisbs");
                    cpcp(id);
            }
        //If username is writted
            else if(c_l_usernamejs != ""){
                cpcp(id);
            }
        //Check password
            function cpcp(id){
                //Check if password is NOT writted
                    if(c_k_passwordjs == ""){
                        //ERROR NR.2
                            document.getElementsByClassName("err_c_passwordjs")[id].innerHTML = "field_is_required";
                            document.getElementsByClassName("err_c_passwordjs")[id].classList.remove("none");
                            document.getElementsByClassName("c_k_passwordjs")[id].classList.add("redisbs");
                            document.getElementsByClassName("c_k_passwordjs")[id].classList.remove("greenisbs");
                    }
                //If password is writted and if is writted username
                    else if(c_k_passwordjs != "" && c_l_usernamejs != ""){
                        stslap(id);
                    }
            }
        //Send to server login and password
            function stslap(id){
                request = new XMLHttpRequest();
                request.onreadystatechange = function(){
                    if(request.readyState == 4 && request.status == 200){
                        //Define var
                            var response = request.responseText;
                        //1 : Username or email is NOT writted
                            if(response == "1"){
                                //ERROR NR.1
                                    document.getElementsByClassName("err_c_usernamejs")[id].innerHTML = "field_is_required";
                                    document.getElementsByClassName("err_c_usernamejs")[id].classList.remove("none");
                                    document.getElementsByClassName("c_l_usernamejs")[id].classList.add("redisbs");
                                    document.getElementsByClassName("c_l_usernamejs")[id].classList.remove("greenisbs");
                            }
                        //2 : Password is NOT writted
                            else if(response == "2"){
                                //ERROR NR.2
                                    document.getElementsByClassName("err_c_passwordjs")[id].innerHTML = "field_is_required";
                                    document.getElementsByClassName("err_c_passwordjs")[id].classList.remove("none");
                                    document.getElementsByClassName("c_k_passwordjs")[id].classList.add("redisbs");
                                    document.getElementsByClassName("c_k_passwordjs")[id].classList.remove("greenisbs");
                            }
                        //3 : Username is NOT registered
                            else if(response == "3"){
                                //ERROR NR.3
                                    document.getElementsByClassName("err_c_usernamejs")[id].innerHTML = "Couldn't find you account";
                                    document.getElementsByClassName("err_c_usernamejs")[id].classList.remove("none");
                                    document.getElementsByClassName("c_l_usernamejs")[id].classList.add("redisbs");
                                    document.getElementsByClassName("c_l_usernamejs")[id].classList.remove("greenisbs");
                            }
                        //4 : Email is NOT registered
                            else if(response == "4"){
                                //ERROR NR.4
                                    document.getElementsByClassName("err_c_usernamejs")[id].innerHTML = "Couldn't find you account";
                                    document.getElementsByClassName("err_c_usernamejs")[id].classList.remove("none");
                                    document.getElementsByClassName("c_l_usernamejs")[id].classList.add("redisbs");
                                    document.getElementsByClassName("c_l_usernamejs")[id].classList.remove("greenisbs");
                            }
                        //5 : Successfull authorization
                            else if(response == "5"){
                                //Redirect to
                                    window.location.replace("feed.php");
                            }
                        //6 : Invalid password
                            else if(response == "6"){
                                //ERROR NR.2
                                    document.getElementsByClassName("err_c_passwordjs")[id].innerHTML = "Invalid password";
                                    document.getElementsByClassName("err_c_passwordjs")[id].classList.remove("none");
                                    document.getElementsByClassName("c_k_passwordjs")[id].classList.add("redisbs");
                                    document.getElementsByClassName("c_k_passwordjs")[id].classList.remove("greenisbs");
                            }
                        //7 : Successfull authorization for Locked users.
                            else if(response == "7"){
                                window.location.replace("../../signin.php");
                            }
                    }
                }
                request.open('POST', '../../src/path/dt/ss/index/nav/nav-sign_in/auth.php');
                request.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
                request.send("inputUsername=" + c_l_usernamejs + "&" + "inputPassword=" + c_k_passwordjs);
            }
    }
    //Remove Error (username or email)
        function redisbs_c_username(id){
            document.getElementsByClassName("c_l_usernamejs")[id].classList.remove("redisbs");
            document.getElementsByClassName("c_l_usernamejs")[id].classList.remove("greenisbs");
            document.getElementsByClassName("err_c_usernamejs")[id].innerHTML = "";
            document.getElementsByClassName("err_c_usernamejs")[id].classList.remove("none");
        }
    //Remove Error (password)
        function redisbs_c_password(id){
            document.getElementsByClassName("c_k_passwordjs")[id].classList.remove("redisbs");
            document.getElementsByClassName("c_k_passwordjs")[id].classList.remove("greenisbs");
            document.getElementsByClassName("err_c_passwordjs")[id].innerHTML = "";
            document.getElementsByClassName("err_c_passwordjs")[id].classList.remove("none");
        }





















