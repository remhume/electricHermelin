if (typeof ui == 'undefined') var ui = {};
ui.Template = {

  reg_vaild_preceding_chars: '(?:[^-\\/"\':!=a-zA-Z0-9_]|^)',

  reg_url_path_chars_1: '[a-zA-Z0-9!\\*\';:=\\+\\$/%#\\[\\]\\?\\-_,~\\(\\)&\\.`@]',
  reg_url_path_chars_2: '[a-zA-Z0-9!\':=\\+\\$/%#~\\(\\)&`@]',

  reg_url_proto_chars: '([a-zA-Z]+:\\/\\/|www\\.)',

  reg_user_name_chars: '[@＠]([a-zA-Z0-9_]{1,20})',

  reg_list_name_template: '[@＠]([a-zA-Z0-9_]{1,20}/[a-zA-Z][a-zA-Z0-9_\\-\u0080-\u00ff]{0,24})',

  // from https://si0.twimg.com/c/phoenix/en/bundle/t1-hogan-core.f760c184d1eaaf1cf27535473a7306ef.js
  reg_hash_tag_latin_chars: '\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u024f\u0253-\u0254\u0256-\u0257\u0259\u025b\u0263\u0268\u026f\u0272\u0289\u028b\u02bb\u1e00-\u1eff',
  reg_hash_tag_nonlatin_chars: '\u0400-\u04ff\u0500-\u0527\u2de0-\u2dff\ua640-\ua69f\u0591-\u05bd\u05bf\u05c1-\u05c2\u05c4-\u05c5\u05c7\u05d0-\u05ea\u05f0-\u05f2\ufb12-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufb4f\u0610-\u061a\u0620-\u065f\u066e-\u06d3\u06d5-\u06dc\u06de-\u06e8\u06ea-\u06ef\u06fa-\u06fc\u06ff\u0750-\u077f\u08a0\u08a2-\u08ac\u08e4-\u08fe\ufb50-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\u200c\u0e01-\u0e3a\u0e40-\u0e4e\u1100-\u11ff\u3130-\u3185\ua960-\ua97f\uac00-\ud7af\ud7b0-\ud7ff\uffa1-\uffdc\u30a1-\u30fa\u30fc-\u30fe\uff66-\uff9f\uff70\uff10-\uff19\uff21-\uff3a\uff41-\uff5a\u3041-\u3096\u3099-\u309e\u3400-\u4dbf\u4e00-\u9fff\ua700-\ub73f\ub740-\ub81f\uf800-\ufa1f\u3003\u3005\u303b',
  reg_hash_tag_template: '(^|\\s)([#＃$]|&#36;)([a-z0-9_{%LATIN_CHARS%}{%NONLATIN_CHARS%}]+)',

  reg_hash_tag: null,

  reg_is_rtl: new RegExp('[\u0600-\u06ff]|[\ufe70-\ufeff]|[\ufb50-\ufdff]|[\u0590-\u05ff]'),

  tweet_t: '<li id="{%ID%}" tweet_id="{%TWEET_ID%}" class="card {%SCHEME%} {%FAV_CLASS%} {%RT_CLASS%}" type="tweet"  retweet_id="{%RETWEET_ID%}" reply_id="{%REPLY_ID%}" in_thread="{%IN_THREAD%}" reply_name="{%REPLY_NAME%}" screen_name="{%SCREEN_NAME%}" retweetable="{%RETWEETABLE%}" deletable="{%DELETABLE%}" link="{%LINK%}" style="font-family: {%TWEET_FONT%};">\
    <div class="tweet_color_label" style="background-color:{%COLOR_LABEL%}"></div>\
    <div class="tweet_selected_indicator"></div>\
    <div class="tweet_fav_indicator"></div>\
    <div class="deleted_mark"></div>\
    <div class="tweet_retweet_indicator"></div>\
    <div class="profile_img_wrapper" title="{%USER_NAME%}\n\n{%DESCRIPTION%}" style="background-image: url({%PROFILE_IMG%})">\
    </div>\
    <ul class="tweet_bar">\
        <li>\
        <a class="tweet_bar_btn tweet_reply_btn" title="Reply this tweet" href="#reply" data-i18n-title="reply"></a>\
        </li><li>\
        <a class="tweet_bar_btn tweet_fav_btn" title="Fav/Un-fav this tweet" href="#fav" data-i18n-title="fav_or_unfav"></a>\
        </li><li>\
        <a class="tweet_bar_btn tweet_retweet_btn" title="Official retweet/un-retweet this tweet" href="#retweet" data-i18n-title="retweet"></a>\
        </li><li>\
        <a class="tweet_bar_btn tweet_more_menu_trigger" href="#more"></a>\
        </li>\
    </ul>\
    <div class="card_body">\
        <div class="who {%RETWEET_MARK%}">\
        <a class="who_href" href="#{%SCREEN_NAME%}" title="{%USER_NAME%}\n\n{%DESCRIPTION%}">\
            {%FIRST_NAME%} \
            <span class="who_additional">{%ADDITIONAL_NAME%}</span>\
        </a>\
        </div>\
        <div class="text" alt="{%ALT%}" style="font-size:{%TWEET_FONT_SIZE%}pt;line-height:{%TWEET_LINE_HEIGHT%}">{%TEXT%}</div>\
        <div class="tweet_meta">\
            <div class="tweet_thread_info" style="display:{%IN_REPLY%}">\
                <a class="btn_tweet_thread" href="#"></a>\
                {%REPLY_TEXT%}\
            </div>\
            <div class="tweet_source"> \
                {%RETWEET_TEXT%} \
                <span class="tweet_timestamp">\
                <a class="tweet_link tweet_update_timestamp" target="_blank" href="{%TWEET_BASE_URL%}/{%TWEET_ID%}" title="{%TIMESTAMP%}">{%SHORT_TIMESTAMP%}</a>\
                </span>\
                {%TRANS_via%}: {%SOURCE%}</div>\
            <div class="status_bar">{%STATUS_INDICATOR%}</div>\
        </div>\
    </div>\
    <span class="shape"></span>\
    <span class="shape_mask"></span>\
    <div class="tweet_thread_wrapper">\
        <div class="tweet_thread_hint">{%TRANS_Loading%}</div>\
        <ul class="tweet_thread"></ul>\
        <a class="btn_tweet_thread_more">{%TRANS_View_more_conversation%}</a>\
    </div>\
</li>',

  trending_topic_t: '<li id="{%ID%}" class="card" type="trending_topic">\
    <div class="profile_img_wrapper trend_topic_number">#{%ID%}</div>\
    <div class="card_body keep_height">\
        <a class="hash_href trending_topic" href="{%NAME%}">{%NAME%}</a>\
    </div>\
    <span class="shape"></span>\
    <span class="shape_mask"></span>\
</li>',

  retweeted_by_t: '<li id="{%ID%}" tweet_id="{%TWEET_ID%}" class="card {%SCHEME%} {%FAV_CLASS%} {%RT_CLASS%}" type="tweet"  retweet_id="{%RETWEET_ID%}" reply_id="{%REPLY_ID%}" reply_name="{%REPLY_NAME%}" screen_name="{%SCREEN_NAME%}" retweetable="{%RETWEETABLE%}" deletable="{%DELETABLE%}" style="font-family: {%TWEET_FONT%};">\
    <div class="tweet_active_indicator"></div>\
    <div class="tweet_selected_indicator"></div>\
    <div class="deleted_mark"></div>\
    <div class="tweet_fav_indicator"></div>\
    <div class="tweet_retweet_indicator"></div>\
    <div class="profile_img_wrapper" title="{%USER_NAME%}" style="background-image: url({%PROFILE_IMG%})">\
    </div>\
    <ul class="tweet_bar">\
        <li>\
        <a class="tweet_bar_btn tweet_reply_btn" title="Reply this tweet" href="#reply" data-i18n-title="reply"></a>\
        </li><li>\
        <a class="tweet_bar_btn tweet_fav_btn" title="Fav/Un-fav this tweet" href="#fav" data-i18n-title="fav_or_unfav"></a>\
        </li><li>\
        <a class="tweet_bar_btn tweet_retweet_btn" title="Official retweet/un-retweet this tweet" href="#retweet" data-i18n-title="retweet"></a>\
        </li><li>\
        <a class="tweet_bar_btn tweet_more_menu_trigger" href="#more"></a>\
        </li>\
    </ul>\
    <div class="card_body">\
        <div class="who {%RETWEET_MARK%}">\
        <a class="who_href" href="#{%SCREEN_NAME%}" title="{%USER_NAME%}">\
            {%FIRST_NAME%} \
            <span class="who_additional">{%ADDITIONAL_NAME%}</span>\
        </a>\
        </div>\
        <div class="text" alt="{%ALT%}" style="font-size:{%TWEET_FONT_SIZE%}pt;line-height:{%TWEET_LINE_HEIGHT%}">{%TEXT%}</div>\
        <div class="tweet_meta">\
            {%TRANS_Retweeted_by%}: <a class="show" href="#" title="{%TRANS_Click_to_show_retweeters%}"  tweet_id="{%TWEET_ID%}">{%TRANS_Show_retweeters%}</a><br>\
            <div class="tweet_retweeters" tweet_id="{%TWEET_ID%}"></div>\
            <div class="tweet_thread_info" style="display:{%IN_REPLY%}">\
                <a class="btn_tweet_thread" href="#"></a>\
                {%REPLY_TEXT%}\
            </div>\
            <div class="tweet_source"> \
                {%RETWEET_TEXT%} \
                <span class="tweet_timestamp">\
                <a class="tweet_link tweet_update_timestamp" target="_blank" href="{%TWEET_BASE_URL%}/{%TWEET_ID%}" title="{%TIMESTAMP%}">{%SHORT_TIMESTAMP%}</a>\
                </span>\
                {%TRANS_via%}: {%SOURCE%}\
            </div>\
            <div class="status_bar">{%STATUS_INDICATOR%}</div>\
        </div>\
    </div>\
    <span class="shape"></span>\
    <span class="shape_mask"></span>\
    <div class="tweet_thread_wrapper">\
        <div class="tweet_thread_hint">{%TRANS_Loading%}</div>\
        <ul class="tweet_thread"></ul>\
        <a class="btn_tweet_thread_more">{%TRANS_View_more_conversation%}</a>\
    </div>\
</li>',

  message_t: '<li id="{%ID%}" tweet_id="{%TWEET_ID%}" class="card {%SCHEME%}" type="message" sender_screen_name="{%SCREEN_NAME%}" style="font-family: {%TWEET_FONT%};">\
    <div class="tweet_active_indicator"></div>\
    <div class="tweet_selected_indicator"></div>\
    <div class="profile_img_wrapper" title="{%USER_NAME%}\n\n{%DESCRIPTION%}" style="background-image: url({%PROFILE_IMG%})">\
    </div>\
    <ul class="tweet_bar">\
        <li>\
        <a class="tweet_bar_btn tweet_dm_reply_btn" title="Reply them" href="#reply_dm" data-i18n-title="reply"></a>\
        </li><li>\
        <a class="tweet_bar_btn tweet_more_menu_trigger" href="#more"></a>\
        </li>\
    </ul>\
    <div class="card_body">\
        <div class="who">\
        <a class="who_href" href="#{%SCREEN_NAME%}" title="{%USER_NAME%}\n\n{%DESCRIPTION%}">\
            {%FIRST_NAME%} \
            <span class="who_additional">{%ADDITIONAL_NAME%}</span>\
        </a>\
        </div>\
        <div class="text" style="font-size:{%TWEET_FONT_SIZE%}pt;line-height:{%TWEET_LINE_HEIGHT%}">@<a class="who_href" href="#{%RECIPIENT_SCREEN_NAME%}">{%RECIPIENT_SCREEN_NAME%}</a> {%TEXT%}</div>\
        <div class="tweet_meta">\
            <div class="tweet_source"> \
                <span class="tweet_timestamp tweet_update_timestamp" title="{%TIMESTAMP%}">{%SHORT_TIMESTAMP%}</span>\
            </div>\
        </div>\
    </div>\
    <span class="shape"></span>\
    <span class="shape_mask"></span>\
</li>',

  search_t: '<li id="{%ID%}" tweet_id="{%TWEET_ID%}" class="card {%SCHEME%}" type="search" screen_name="{%SCREEN_NAME%}" link="{%LINK%}" style="font-family: {%TWEET_FONT%};">\
    <div class="tweet_active_indicator"></div>\
    <div class="tweet_selected_indicator"></div>\
    <div class="deleted_mark"></div>\
    <div class="profile_img_wrapper" title="{%USER_NAME%}" style="background-image: url({%PROFILE_IMG%})">\
    </div>\
    <ul class="tweet_bar">\
        <li>\
        <a class="tweet_bar_btn tweet_reply_btn" title="Reply this tweet" href="#reply" data-i18n-title="reply"></a>\
        </li><li>\
        <a class="tweet_bar_btn tweet_fav_btn" title="Fav/Un-fav this tweet" href="#fav" data-i18n-title="fav_or_unfav"></a>\
        </li><li>\
        <a class="tweet_bar_btn tweet_retweet_btn" title="Official retweet/un-retweet this tweet" href="#retweet" data-i18n-title="retweet"></a>\
        </li><li>\
        <a class="tweet_bar_btn tweet_more_menu_trigger" href="#more"></a>\
        </li>\
    </ul>\
    <div class="card_body">\
        <div class="who">\
        <a class="who_href" href="#{%SCREEN_NAME%}" title="{%USER_NAME%}">\
            {%FIRST_NAME%} \
            <span class="who_additional">{%ADDITIONAL_NAME%}</span>\
        </a>\
        </div>\
        <div class="text" style="font-size:{%TWEET_FONT_SIZE%}pt;line-height:{%TWEET_LINE_HEIGHT%}">{%TEXT%}</div>\
        <div class="tweet_meta">\
            <div class="tweet_source"> \
                <span class="tweet_timestamp">\
                <a class="tweet_link tweet_update_timestamp" target="_blank" href="{%TWEET_BASE_URL%}/{%TWEET_ID%}" title="{%TIMESTAMP%}">{%SHORT_TIMESTAMP%}</a>\
                </span>\
                {%TRANS_via%}: {%SOURCE%}</div>\
        </div>\
    </div>\
    <span class="shape"></span>\
    <span class="shape_mask"></span>\
</li>',

  people_t: '<li id="{%USER_ID%}" class="people_card card normal" type="people" following={%FOLLOWING%} screen_name={%SCREEN_NAME%} style="font-family: {%TWEET_FONT%};">\
    <div class="tweet_active_indicator"></div>\
    <div class="tweet_selected_indicator"></div>\
    <div class="profile_img_wrapper" title="{%USER_NAME%}" style="background-image: url({%PROFILE_IMG%})">\
    </div>\
    <ul class="tweet_bar">\
        <li style="display:none;">\
        <a class="tweet_bar_btn add_to_list_btn" title="Add to list" href="#follow" data-i18n-title="add_to_list"></a>\
        </li><li>\
        <a class="tweet_bar_btn follow_btn" title="Follow them" href="#follow" data-i18n-title="follow"></a>\
        </li><li>\
        <a class="tweet_bar_btn unfollow_btn" title="Unfollow them" href="#unfollow" data-i18n-title="unfollow"></a>\
        </li>\
    </ul>\
    <div class="card_body">\
        <div id="{%USER_ID%}" class="who">\
        <a class="who_href" href="#{%SCREEN_NAME%}" title="{%USER_NAME%}">\
            {%FIRST_NAME%} \
            <span class="who_additional">{%ADDITIONAL_NAME%}</span>\
        </a>\
        </div>\
        <div class="text" style="font-style:italic font-size:{%TWEET_FONT_SIZE%}pt;line-height:{%TWEET_LINE_HEIGHT%}">{%DESCRIPTION%}</div>\
    </div>\
    <span class="shape"></span>\
    <span class="shape_mask"></span>\
</li>',

  people_vcard_t_orig: '<div class="header_frame">\
  <div class="people_vcard vcard">\
    <div class="vcard_header">\
        <a class="vcard_profile_img"></a>\
        <div class="vcard_header_right">\
            <div class="vcard_name"></div>\
            <a class="vcard_screen_name" target="_blank" href="#"></a>\
            <div class="vcard_location_and_url">\
                <div class="vcard_location"></div>\
                <a class="vcard_url" target="_blank" href="#"></a>\
            </div>\
            <div class="vcard_relation"></div>\
        </div>\
    </div>\
    <div class="vcard_body">\
        <div class="vcard_showstats"></div>\
        <div class="vcard_info">\
          <div class="vcard_stats away">\
            <div class="vcard_stats_left"></div>\
            <div class="vcard_stats_right"></div>\
          </div>\
          <div class="vcard_bio"></div>\
        </div>\
    </div> <!-- vcard body --> \
    <div class="vcard_footer">\
        <div class="vcard_ctrl"> \
            <ul class="vcard_action_btns"> \
            <li><a class="vcard_follow mochi_button blue" \
                    href="#" >{%TRANS_follow%}</a> \
            </li><li> \
                    <a class="vcard_edit mochi_button" \
                    href="#" style="display:none;">{%TRANS_edit%}</a>\
            </li><li class="people_action_more_trigger"> \
                <a class="vcard_more mochi_button" \
                    href="#">{%TRANS_more_actions%} &#x25BE;</a> \
                <ul class="people_action_more_menu hermelin_menu">\
                    <li><a class="mention_menu_item" \
                        title="Mention them"\
                            href="#">{%TRANS_mention_them%}</a>\
                    </li><li><a class="message_menu_item" \
                        title="Send Message to them"\
                        href="#">{%TRANS_message_them%}</a>\
                    </li><li><a class="add_to_list_menu_item" \
                        title="Add them to a list"\
                        href="#">{%TRANS_add_to_list%}</a>\
                    </li><li class="separator"><span></span>\
                    </li><li><a class="block_menu_item" \
                        title="Block"\
                        href="#">{%TRANS_block%}</a>\
                    </li><li><a class="unblock_menu_item"\
                        href="#" \
                        title="Unblock">{%TRANS_unblock%}</a>\
                    </li><li><a class="report_spam_menu_item" \
                        href="#" \
                        title="Report Spam">{%TRANS_report_spam%}</a>\
                    </li>\
                </ul>\
            </li> \
            </ul> \
        </div><!-- #people_vcard_ctrl --> \
    </div>\
</div> <!-- vcard --> \
<div class="expand_wrapper"><a href="#" class="expand"></a></div>\
<div class="people_view_toggle"> \
    <ol class="people_view_toggle_btns mochi_button_group"> \
        <li><a class="people_view_tweet_btn mochi_button_group_item selected" href="#tweet">{%TRANS_tweets%}</a> \
        </li><li> \
        <a class="people_view_fav_btn mochi_button_group_item" href="#fav">{%TRANS_favs%}</a> \
        </li><li class="people_view_people_trigger"> \
        <a class="people_view_people_btn mochi_button_group_item" href="#people">{%TRANS_fellowship%} &#x25BE;</a> \
        <ul class="people_menu hermelin_menu">\
            <li><a class="followers_menu_item" \
                title="People who follow them."\
                href="#">{%TRANS_followers%}</a>\
            </li><li><a class="friends_menu_item"\
                href="People them is following" \
                title="All Lists following Them">{%TRANS_friends%}</a>\
            </li>\
        </ul>\
        </li><li class="people_view_list_trigger"> \
        <a class="people_view_list_btn mochi_button_group_item" href="#list">{%TRANS_lists%} &#x25BE;\
        </a> \
        <ul class="lists_menu hermelin_menu">\
            <li><a class="user_lists_menu_item" \
                title="Lists of Them"\
                href="#">{%TRANS_lists_of_them%}</a>\
            </li><li><a class="listed_lists_menu_item"\
                href="#" \
                title="All Lists following Them">{%TRANS_lists_following_them%}</a>\
            </li><li><a class="create_list_menu_item" \
                href="#" \
                title="Create A List">{%TRANS_create_a_list%}</a>\
            </li>\
        </ul>\
        </li> \
    </ol> \
</div> \
<div class="people_request_hint"> \
    <h1 data-i18n-text="he_she_has_protexted_his_her_tweets">He/She has protected his/her tweets.</span></h1> \
    <p data-i18n-text="you_need_to_go_to_twitter_com_to_send_a_request_before_you_can_start_following_this_persion">You need to go to twitter.com to send a request before you can start following this person...</p> \
    <div style="text-align:center;"> \
    <a class="people_request_btn mochi_button" href="#" target="_blank" data-i18n-text="send_request">Send Request</a> \
    </div> \
</div></div>',

  list_t: '<li id="{%LIST_ID%}" class="list_card card normal" type="list" following={%FOLLOWING%} screen_name={%SCREEN_NAME%} slug={%SLUG%} style="font-family: {%TWEET_FONT%};">\
    <div class="tweet_active_indicator"></div>\
    <div class="tweet_selected_indicator"></div>\
    <div class="profile_img_wrapper" title="@{%USER_NAME%}/{%SLUG%}" style="background-image: url({%PROFILE_IMG%})">\
    </div>\
    <ul class="tweet_bar">\
        <li>\
        <a class="tweet_bar_btn follow_btn" title="Follow them" href="#follow" data-i18n-title="follow"></a>\
        </li><li>\
        <a class="tweet_bar_btn unfollow_btn" title="Unfollow them" href="#unfollow" data-i18n-title="unfollow"></a>\
        </li>\
    </ul>\
    <div class="card_body">\
        <div id="{%USER_ID%}" class="who">\
        <a class="list_href" href="#{%SCREEN_NAME%}/{%SLUG%}" title="{%USER_NAME%}/{%SLUG%}">\
            @{%SCREEN_NAME%}/{%SLUG%}\
        </a>\
        </div>\
        <div class="text" style="font-style:italic font-size:{%TWEET_FONT_SIZE%}pt;line-height:{%TWEET_LINE_HEIGHT%}">{%DESCRIPTION%}</div>\
    </div>\
    <span class="shape"></span>\
    <span class="shape_mask"></span>\
</li>',

  list_vcard_t: '<div class="header_frame"><div class="list_vcard vcard">\
    <div class="vcard_header">\
        <a class="vcard_profile_img"></a>\
        <div class="vcard_header_right">\
            <a class="vcard_list_name" target="_blank" href="#"></a>\
            <a class="vcard_owner_name" target="_blank" href="#"></a>\
        </div>\
    </div>\
    <div class="vcard_body">\
        <div class="vcard_info">\
          <div class="vcard_bio"></div>\
        </div>\
    </div> <!-- vcard body --> \
    <div class="vcard_footer">\
        <div class="vcard_ctrl"> \
            <ul class="vcard_action_btns"> \
            <li><a class="vcard_follow mochi_button blue" \
                    href="#" data-i18n-text="follow">Follow</a> \
            </li><li> \
                <a class="vcard_delete mochi_button red" \
                    href="#" data-i18n-text="delete">Delete</a> \
            </li><li> \
                <a class="vcard_edit mochi_button" \
                    href="#" style="display:none;" data-i18n-text="edit">Edit</a>\
            </li> \
            </ul> \
        </div><!-- #list_vcard_ctrl --> \
    </div>\
</div><!-- vcard --> \
<div class="expand_wrapper"><a href="#" class="expand"></a></div>\
<div class="list_view_toggle"> \
    <ol class="list_view_toggle_btns mochi_button_group"> \
        <li><a class="list_view_tweet_btn mochi_button_group_item selected" href="#tweet" data-i18n-text="tweets">Tweets</a> \
        </li><li> \
        <a class="list_view_follower_btn mochi_button_group_item" href="#follower" data-i18n-text="followers">Followers</a> \
        </li><li> \
        <a class="list_view_following_btn mochi_button_group_item" href="#following" data-i18n-text="following">Following</a> \
        </li> \
    </ol> \
</div> \
<div class="list_lock_hint"> \
    <h1 data-i18n-text="he_she_has_protected_his_her_list">He/She has protected his/her list.</span></h1> \
    <p data-i18n-text="only_the_owner_can_access_this_list">Only the owner can access this list.</p> \
</div></div>',


  search_header_t: '<div class="header_frame"> \
    <div class="search_box"> \
    <input class="search_entry mochi_entry" type="text" placeholder="Type and press enter to search." data-i18n-placeholder="type_and_press_enter_to_search"/> \
    <a href="#" class="search_entry_clear_btn"></a>\
    <div class="search_people_result"> \
        <span data-i18n-text="one_user_matched">One user matched: </span> <span class="search_people_inner"></span>\
    </div>\
    <div class="saved_searches">\
        <a id="create_saved_search_btn" class="mochi_button" \
            href="#" title="Detach" data-i18n-title="detach"> +\
        </a>\
        <div id="saved_searches_more_trigger" style="display:none;">\
            <a id="saved_searches_btn" class="vcard_more mochi_button" \
                href="#"> &#x25BE;</a> \
            <ul id="saved_searches_more_menu" class="hermelin_menu">\
                <li><a class="" \
                    title="Clear ALL"\
                    href="#" data-i18n-title="clear_all" data-i18n-text="clear_all">Clear All</a>\
                </li><li class="separator"><span></span>\
                </li><li>\
                    <a class="saved_search_item" href="#">a</a>\
                </li>\
            </ul>\
        </div>\
    </div>\
    <div class="search_view_toggle">\
        <ol class="search_view_toggle_btns mochi_button_group">\
            <li><a class="search_tweet mochi_button_group_item selected" \
                href="#tweet" data-i18n-text="tweets">Tweet</a>\
            </li><li> \
                <a class="search_people mochi_button_group_item"\
                href="#people" data-i18n-text="people">People</a>\
            </li> \
        </ol> \
    </div> \
    <div class="search_no_result_hint"> \
        <p><span data-i18n-text="your_search">Your search</span> - <label class="keywords"></label> - <span data-i18n-text="did_not_match_any_result">did not match any result.</span></p> \
        <p><span data-i18n-text="suggestions">Suggestions</span>: <br/> \
         - <span data-i18n-text="make_sure_all_words_are_spelled_correctly">Make sure all words are spelled correctly.</span><br/> \
         - <span data-i18n-text="try_different_keywords">Try different keywords.</span><br/> \
         - <span data-i18n-text="try_more_general_keywords">Try more general keywords.</span><br/></p> \
    </div> \
    </div> \
</div>',

  common_column_header_t: '<div class="column_settings"> \
    <ul class="mochi_list dark">\
    <li class="mochi_list_item dark"> \
    <input type="checkbox" href="#use_auto_update" class="mochi_toggle dark widget"/>\
    <label class="label" data-i18n-text="auto_update">Auto Update</label>\
    </li>\
    <li class="mochi_list_item dark"> \
    <input type="checkbox" href="#use_notify" class="mochi_toggle dark widget"/>\
    <label class="label" data-i18n-text="notify">Notify</label>\
    </li>\
    <li class="mochi_list_item dark"> \
    <input type="checkbox" href="#use_notify_sound" class="mochi_toggle dark widget"/>\
    <label class="label" data-i18n-text="sound">Sound</label>\
    </li>\
    </ul>\
</div>\
',

  view_t: '<div id="{%ID%}" \
    name="{%NAME%}" class="listview scrollbar_container {%CLASS%} {%ROLE%}"> \
    <div class="scrollbar_track">\
        <div class="scrollbar_slot">\
            <div class="scrollbar_handle"></div>\
        </div>\
    </div>\
    <div class="scrollbar_content listview_content">\
        <div class="listview_header"><div class="header_content">{%HEADER%}</div></div> \
        <ul class="listview_body"></ul> \
        <div class="listview_footer"> \
            <div class="load_more_info"><img src="image/ani_loading_bar.gif"/></div> \
        </div> \
    </div> \
</div>',

  indicator_t: '<div id="{%ID%}" class="{%STICK%} {%ROLE%}" name="{%TARGET%}" draggable="true"><a class="indicator_btn" href="#{%TARGET%}" title="{%TITLE%}"><img class="icon" src="{%ICON%}"/><div class="icon_alt" style="background-image: url({%ICON%})"></div></a></div>',

  kismet_rule_t: '<li><a class="kismet_rule" name="{%NAME%}" type="{%TYPE%}" method="{%METHOD%}"\
    disabled="{%DISABLED%}" field="{%FIELD%}" pattern="{%PATTERN%}"     \
    actions="{%ACTIONS%}" {%ADDITION%} href="#">{%NAME%}</a></li>',

  status_draft_t: '<li mode="{%MODE%}" reply_to_id="{%REPLY_TO_ID%}" reply_text="{%REPLY_TEXT%}" recipient="{%RECIPIENT%}"><a class="text">{%TEXT%}</a><a class="btn_draft_clear" href="#"></a></li>',

  preview_link_reg: {
    'img.ly': {
      reg: new RegExp('http:\\/\\/img\\.ly\\/([a-zA-Z0-9_\\-]+)', 'i'),
      base: 'http://img.ly/show/thumb/',
      direct_base: 'http://img.ly/show/full/'
    },
    'twitpic.com': {
      reg: new RegExp('http:\\/\\/twitpic\\.com\\/([a-zA-Z0-9_\\-]+)', 'i'),
      base: 'http://twitpic.com/show/thumb/',
      direct_base: 'http://twitpic.com/show/full/'
    },
    'twitgoo.com': {
      reg: new RegExp('http:\\/\\/twitgoo\\.com\\/([a-zA-Z0-9_\\-]+)', 'i'),
      base: 'http://twitgoo.com/show/thumb/',
      direct_base: 'http://twitgoo.com/show/img/'
    },
    'yfrog.com': {
      reg: new RegExp('http:\\/\\/yfrog\\.com\\/([a-zA-Z0-9_\\-]+)', 'i'),
      tail: '.th.jpg'
    },
    'moby.to': {
      reg: new RegExp('http:\\/\\/moby\\.to\\/([a-zA-Z0-9_\\-]+)', 'i'),
      tail: ':thumbnail'
    },
    'instagr.am': {
      reg: new RegExp('http:\\/\\/instagr\\.am\\/p\\/([a-zA-Z0-9_\\-]+)', 'i'),
      tail: '/media?size=m',
      direct_tail: 'media?size=l'
    },
    'instagram.com': {
      reg: new RegExp('http:\\/\\/(?:i\\.)?instagram\\.com\\/p\\/([a-zA-Z0-9_\\-]+)', 'i'),
      tail: '/media?size=m',
      direct_tail: '/embed/'
    },
    'plixi.com': {
      reg: new RegExp('http:\\/\\/plixi.com\\/p\\/([a-zA-Z0-9_\\-]+)', 'i'),
      base: 'http://api.plixi.com/api/tpapi.svc/imagefromurl?size=thumbnail&url='
    },
    'picplz.com': {
      reg: new RegExp('http:\\/\\/picplz\\.com\\/([a-zA-Z0-9_\\-]+)', 'i'),
      tail: '/thumb/'
    },
    'youtube.com': {
      reg: new RegExp('https?:\\/\\/(www\\.)?(?:youtube\\.com\\/watch(?:\\?v\\=|\\?.*\\&v\\=|\\/v\\/)|youtu\\.be\\/)([A-Za-z0-9_\\-]+).*?(?:(?:\\&|\\?)t=(([0-9]+(?:m|s))([0-9]+(?:m|s))?|(?:[0-9]+)))?.*', 'i'),
      base: 'http://img.youtube.com/vi/',
      tail: '/0.jpg',
      direct_base: 'http://www.youtube.com/embed/',
      direct_tail: '?rel=0&autoplay=1&autohide=1&color=white&showinfo=1&theme=light&start='
    },
    'vine.co': {
      reg: new RegExp('(https?:\\/\\/vine\\.co\\/v\\/([a-zA-Z0-9_\\-]+))', 'i'),
      direct_tail: '/embed/simple?audio=1'
    },
    'z0r.de': {
      reg: new RegExp('http:\\/\\/z0r\\.de\\/([0-9]+)', 'i')
    },
    'raw': {
      reg: new RegExp('[a-zA-Z]+:\\/\\/.+\\/.+\\.(jpg|jpeg|jpe|png|gif)', 'i')
    }

  },

  init: function init() {
    ui.Template.reg_url = '' //ui.Template.reg_vaild_preceding_chars
    + '(' + ui.Template.reg_url_proto_chars + ui.Template.reg_url_path_chars_1 + '*' + ui.Template.reg_url_path_chars_2 + '+)';

    ui.Template.reg_user = new RegExp('(^|[^a-zA-Z0-9_!#$%&*@＠])' + ui.Template.reg_user_name_chars, 'g');

    ui.Template.reg_list = new RegExp('(^|[^a-zA-Z0-9_!#$%&*@＠])' + ui.Template.reg_list_name_template, 'ig');

    ui.Template.reg_link = new RegExp(ui.Template.reg_url);

    ui.Template.reg_link_g = new RegExp(ui.Template.reg_url, 'g');

    ui.Template.reg_hash_tag = new RegExp(ui.Template.reg_hash_tag_template
      .replace(new RegExp('{%LATIN_CHARS%}', 'g'), ui.Template.reg_hash_tag_latin_chars)
      .replace(new RegExp('{%NONLATIN_CHARS%}', 'g'), ui.Template.reg_hash_tag_nonlatin_chars), 'ig');

    ui.Template.tweet_m = {
      ID: '',
      TWEET_ID: '',
      RETWEET_ID: '',
      REPLY_ID: '',
      SCREEN_NAME: '',
      REPLY_NAME: '',
      USER_NAME: '',
      FIRST_NAME: '',
      ADDITIONAL_NAME: '',
      PROFILE_IMG: '',
      TEXT: '',
      SOURCE: '',
      SCHEME: '',
      IN_REPLY: '',
      RETWEETABLE: '',
      REPLY_TEXT: '',
      RETWEET_TEXT: '',
      RETWEET_MARK: '',
      SHORT_TIMESTAMP: '',
      TIMESTAMP: '',
      FAV_CLASS: '',
      RT_CLASS: '',
      DELETABLE: '',
      TWEET_FONT_SIZE: '',
      TWEET_FONT: '',
      TWEET_LINE_HEIGHT: '',
      STATUS_INDICATOR: '',
      TRANS_Delete: '',
      TRANS_Official_retweet_this_tweet: '',
      TRANS_Reply_All: '',
      TRANS_Reply_this_tweet: '',
      TRANS_RT_this_tweet: '',
      TRANS_Send_Message: '',
      TRANS_Send_Message_to_them: '',
      TRANS_via: '',
      TRANS_View_more_conversation: '',
      TWEET_BASE_URL: '',
      IN_THREAD: '',
      COLOR_LABEL: ''
    };

    ui.Template.trending_topic_m = {
      ID: '',
      NAME: ''
    };

    ui.Template.retweeted_by_m = {
      ID: '',
      TWEET_ID: '',
      RETWEET_ID: '',
      REPLY_ID: '',
      SCREEN_NAME: '',
      REPLY_NAME: '',
      USER_NAME: '',
      FIRST_NAME: '',
      ADDITIONAL_NAME: '',
      PROFILE_IMG: '',
      TEXT: '',
      SOURCE: '',
      SCHEME: '',
      IN_REPLY: '',
      RETWEETABLE: '',
      REPLY_TEXT: '',
      RETWEET_TEXT: '',
      RETWEET_MARK: '',
      SHORT_TIMESTAMP: '',
      TIMESTAMP: '',
      FAV_CLASS: '',
      RT_CLASS: '',
      DELETABLE: '',
      TWEET_FONT_SIZE: '',
      TWEET_FONT: '',
      TWEET_LINE_HEIGHT: '',
      STATUS_INDICATOR: '',
      TRANS_Delete: '',
      TRANS_Official_retweet_this_tweet: '',
      TRANS_Reply_All: '',
      TRANS_Reply_this_tweet: '',
      TRANS_RT_this_tweet: '',
      TRANS_Send_Message: '',
      TRANS_Send_Message_to_them: '',
      TRANS_via: '',
      TRANS_View_more_conversation: '',
      TRANS_retweeted_by: '',
      TRANS_Show_retweeters: '',
      TRANS_Click_to_show_retweeters: '',
      TWEET_BASE_URL: ''
    };

    ui.Template.message_m = {
      ID: '',
      TWEET_ID: '',
      SCREEN_NAME: '',
      RECIPIENT_SCREEN_NAME: '',
      USER_NAME: '',
      PROFILE_IMG: '',
      TEXT: '',
      FIRST_NAME: '',
      ADDITIONAL_NAME: '',
      SCHEME: '',
      TIMESTAMP: '',
      TWEET_FONT_SIZE: '',
      TWEET_FONT: '',
      TWEET_LINE_HEIGHT: '',
      TRANS_Reply_Them: ''
    };

    ui.Template.search_m = {
      ID: '',
      TWEET_ID: '',
      SCREEN_NAME: '',
      USER_NAME: '',
      PROFILE_IMG: '',
      TEXT: '',
      SOURCE: '',
      FIRST_NAME: '',
      ADDITIONAL_NAME: '',
      SCHEME: '',
      SHORT_TIMESTAMP: '',
      TIMESTAMP: '',
      TWEET_FONT_SIZE: '',
      TWEET_FONT: '',
      TWEET_LINE_HEIGHT: '',
      TRANS_via: '',
      TWEET_BASE_URL: ''
    };

    ui.Template.people_m = {
      USER_ID: '',
      SCREEN_NAME: '',
      USER_NAME: '',
      DESCRIPTION: '',
      FIRST_NAME: '',
      ADDITIONAL_NAME: '',
      PROFILE_IMG: '',
      FOLLOWING: '',
      TWEET_FONT_SIZE: '',
      TWEET_FONT: '',
      TWEET_LINE_HEIGHT: ''
    };

    ui.Template.list_m = {
      LIST_ID: '',
      SCREEN_NAME: '',
      SLUG: '',
      NAME: '',
      MODE: '',
      DESCRIPTION: '',
      PROFILE_IMG: '',
      FOLLOWING: '',
      TWEET_FONT_SIZE: '',
      TWEET_FONT: '',
      TWEET_LINE_HEIGHT: ''
    };

    ui.Template.view_m = {
      ID: '',
      CLASS: 'tweetview',
      NAME: '',
      CAN_CLOSE: '',
      ROLE: ''
    };

    ui.Template.indicator_m = {
      TARGET: '',
      TITLE: '',
      ICON: '',
      ROLE: ''
    };

    ui.Template.kismet_rule_m = {
      TYPE: '',
      DISABLED: '',
      FIELD: '',
      PATTERN: '',
      METHOD: '',
      ACTIONS: '',
      ADDITION: '',
      NAME: ''
    };

    ui.Template.status_draft_m = {
      MODE: '',
      TEXT: '',
      REPLY_TO_ID: '',
      REPLY_TEXT: '',
      RECIPIENT: ''
    };

    ui.Template.update_trans();
  },

  update_trans: function update_trans() {
    ui.Template.people_vcard_m = {
      TRANS_info: _('info'),
      TRANS_stat: _('stat'),
      TRANS_name: _('name'),
      TRANS_bio: _('bio'),
      TRANS_web: _('web'),
      TRANS_location: _('location'),
      TRANS_join: _('join'),
      TRANS_tweet_cnt: _('tweet_cnt'),
      TRANS_tweet_cnt: _('tweet_cnt'),
      TRANS_follower_cnt: _('follower_cnt'),
      TRANS_friend_cnt: _('friend_cnt'),
      TRANS_listed_cnt: _('listed_cnt'),
      TRANS_relation: _('relation'),
      TRANS_edit: _('edit'),
      TRANS_follow: _('follow'),
      TRANS_more_actions: _('more_actions'),
      TRANS_mention_them: _('mention_them'),
      TRANS_message_them: _('send_message_to_them'),
      TRANS_add_to_list: _('add_to_list'),
      TRANS_block: _('block'),
      TRANS_unblock: _('unblock'),
      TRANS_report_spam: _('report_spam'),
      TRANS_tweets: _('tweets'),
      TRANS_favs: _('favs'),
      TRANS_followers: _('followers'),
      TRANS_friends: _('friends'),
      TRANS_fellowship: _('fellowship'),
      TRANS_lists: _('lists'),
      TRANS_lists_of_them: _('lists_of_them'),
      TRANS_lists_following_them: _('lists_following_them'),
      TRANS_create_a_list: _('create_a_list')
    }
    ui.Template.people_vcard_t = ui.Template.render(ui.Template.people_vcard_t_orig, ui.Template.people_vcard_m);
  },

  form_dm: function form_dm(dm_obj, pagename) {
    var timestamp = Date.parse(dm_obj.created_at);
    var created_at = new Date();
    created_at.setTime(timestamp);
    var created_at_str = ui.Template.to_long_time_string(created_at);
    var created_at_short_str = ui.Template.to_short_time_string(created_at);
    var text = ui.Template.form_text(dm_obj);
    var nametype = conf.get_current_profile().preferences.name;

    var m = ui.Template.message_m;
    m.ID = pagename + '-' + dm_obj.id_str;
    m.TWEET_ID = dm_obj.id_str;
    m.SCREEN_NAME = dm_obj.sender.screen_name;
    m.RECIPIENT_SCREEN_NAME = dm_obj.recipient.screen_name;
    m.USER_NAME = dm_obj.sender.name;
    switch (nametype) {
    case 'auto':
      m.FIRST_NAME = m.USER_NAME;
      m.ADDITIONAL_NAME = '@' + m.SCREEN_NAME;
      break;
    case 'reverse':
      m.FIRST_NAME = '@' + m.SCREEN_NAME;
      m.ADDITIONAL_NAME = m.USER_NAME;
      break;
    case 'username':
      m.FIRST_NAME = m.USER_NAME;
      break;
    case 'screenname':
      m.FIRST_NAME = m.SCREEN_NAME;
      break;
    }
    m.DESCRIPTION = dm_obj.sender.description;
    m.PROFILE_IMG = dm_obj.sender.profile_image_url;
    m.TEXT = text;
    m.SCHEME = 'message';
    m.TIMESTAMP = created_at_str;
    m.SHORT_TIMESTAMP = created_at_short_str;
    m.TWEET_FONT_SIZE = globals.tweet_font_size;
    m.TWEET_LINE_HEIGHT = globals.tweet_line_height;
    m.TWEET_FONT = globals.tweet_font;
    m.TRANS_Reply_Them = "Reply Them";
    return ui.Template.render(ui.Template.message_t, m);
  },

  // This function returns the html for the given tweet_obj.
  form_tweet: function form_tweet(tweet_obj, pagename, in_thread) {
    var retweet_name = '';
    var retweet_str = '';
    var retweet_id = '';
    var id = tweet_obj.id_str;
    if (tweet_obj.hasOwnProperty('retweeted_status')) {
      retweet_name = tweet_obj['user']['screen_name'];
      tweet_obj['retweeted_status'].favorited = tweet_obj.favorited; // The favorite status of the embedded tweet is not reliable, use outer one.
      tweet_obj = tweet_obj['retweeted_status'];
      retweet_id = tweet_obj.id_str;
    }
    var reply_name = tweet_obj.in_reply_to_screen_name;
    var reply_id = tweet_obj.hasOwnProperty('in_reply_to_status_id_str') ? tweet_obj.in_reply_to_status_id_str : tweet_obj.in_reply_to_status_id;
    var reply_str = (reply_id != null) ?
      _('reply_to') + ' <a class="who_href" href="#' + reply_name + '">' + reply_name + '</a>' : '';
    var in_thread = in_thread == true ? true : false;
    var timestamp = Date.parse(tweet_obj.created_at);
    var created_at = new Date();
    created_at.setTime(timestamp);
    var created_at_str = ui.Template.to_long_time_string(created_at);
    var created_at_short_str = ui.Template.to_short_time_string(created_at);


    // choose color scheme
    var scheme = 'normal';
    if (tweet_obj.entities && tweet_obj.entities.user_mentions) {
      for (var i = 0, l = tweet_obj.entities.user_mentions.length; i < l; i += 1) {
        if (tweet_obj.entities.user_mentions[i].screen_name == globals.myself.screen_name) {
          scheme = 'mention';
        }
      }
    }
    if (tweet_obj.user.screen_name == globals.myself.screen_name) {
      scheme = 'me';
    }
    if (retweet_name != '') {
      retweet_str = _('retweeted_by') + ' <a class="who_href" href="#' + retweet_name + '">' + retweet_name + '</a>, ';
    }

    var alt_text = tweet_obj.text;
    var link = '';
    if (tweet_obj.entities && tweet_obj.entities.urls) {
      var urls = null;
      if (tweet_obj.entities.media) {
        urls = tweet_obj.entities.urls.concat(tweet_obj.entities.media);
      } else {
        urls = tweet_obj.entities.urls;
      }
      for (var i = 0, l = urls.length; i < l; i += 1) {
        var url = urls[i];
        if (url.url && url.expanded_url) {
          tweet_obj.text = tweet_obj.text.replace(url.url, url.expanded_url);
        }
      }
      if (tweet_obj.entities.urls.length > 0) {
        link = tweet_obj.entities.urls[0].expanded_url;
      }
    }

    var text = ui.Template.form_text(tweet_obj);
    var nametype = conf.get_current_profile().preferences.name;

    var m = ui.Template.tweet_m;
    m.ID = pagename + '-' + id;
    m.TWEET_ID = id;
    m.RETWEET_ID = retweet_id;
    m.REPLY_ID = reply_id != null ? reply_id : '';
    m.IN_THREAD = in_thread;
    m.SCREEN_NAME = tweet_obj.user.screen_name;
    m.REPLY_NAME = reply_id != null ? reply_name : '';
    m.USER_NAME = tweet_obj.user.name;
    switch (nametype) {
    case 'auto':
      m.FIRST_NAME = m.USER_NAME;
      m.ADDITIONAL_NAME = '@' + m.SCREEN_NAME;
      break;
    case 'reverse':
      m.FIRST_NAME = '@' + m.SCREEN_NAME;
      m.ADDITIONAL_NAME = m.USER_NAME;
      break;
    case 'username':
      m.FIRST_NAME = m.USER_NAME;
      break;
    case 'screenname':
      m.FIRST_NAME = m.SCREEN_NAME;
      break;
    }
    m.DESCRIPTION = tweet_obj.user.description;
    m.PROFILE_IMG = tweet_obj.user.profile_image_url;
    m.TEXT = text;
    m.ALT = ui.Template.convert_chars(alt_text);
    m.SOURCE = tweet_obj.source.replace('href', 'target="_blank" href');
    m.SCHEME = scheme;
    m.IN_REPLY = (reply_id != null && !in_thread) ? 'block' : 'none';
    m.RETWEETABLE = (tweet_obj.user.protected || scheme == 'me') ? 'false' : 'true';

    m.COLOR_LABEL = kismet.get_user_color(tweet_obj.user.screen_name);

    m.REPLY_TEXT = reply_str;
    m.RETWEET_TEXT = retweet_str;
    m.RETWEET_MARK = retweet_name != '' ? 'retweet_mark' : '';
    m.SHORT_TIMESTAMP = created_at_short_str;
    m.TIMESTAMP = created_at_str;
    m.FAV_CLASS = tweet_obj.favorited ? 'faved' : '';
    m.RT_CLASS = tweet_obj.retweeted ? 'retweeted' : '';
    m.DELETABLE = scheme == 'me' ? 'true' : 'false';
    m.TWEET_FONT_SIZE = globals.tweet_font_size;
    m.TWEET_FONT = globals.tweet_font;
    m.TWEET_LINE_HEIGHT = globals.tweet_line_height;
    m.STATUS_INDICATOR = ui.Template.form_status_indicators(tweet_obj);
    m.TRANS_Delete = _('delete');
    m.TRANS_Delete_this_tweet = _('delete_this_tweet');
    m.TRANS_Loading = _('loading_dots');
    m.TRANS_Official_retweet_this_tweet = _('official_retweet_this_tweet');
    m.TRANS_Reply_All = _('reply_all');
    m.TRANS_Reply_this_tweet = _('reply_this_tweet');
    m.TRANS_RT_this_tweet = _('rt_this_tweet');
    m.TRANS_Send_Message = _('send_message');
    m.TRANS_Send_Message_to_them = _('send_message_to_them');
    m.TRANS_via = _('via');
    m.TRANS_View_more_conversation = _('view_more_conversation');
    m.TWEET_BASE_URL = conf.current_name.split('@')[1] == 'twitter' ? 'https://twitter.com/' + tweet_obj.user.screen_name + '/status' : 'https://identi.ca/notice';
    m.LINK = link;

    return ui.Template.render(ui.Template.tweet_t, m);
  },

  form_retweeted_by: function form_retweeted_by(tweet_obj, pagename) {
    var retweet_name = '';
    var retweet_str = '';
    var retweet_id = '';
    var id = tweet_obj.id_str;
    if (tweet_obj.hasOwnProperty('retweeted_status')) {
      retweet_name = tweet_obj['user']['screen_name'];
      tweet_obj['retweeted_status'].favorited = tweet_obj.favorited; // The favorite status of the embedded tweet is not reliable, use outer one.
      tweet_obj = tweet_obj['retweeted_status'];
      retweet_id = tweet_obj.id_str;
    }
    var reply_name = tweet_obj.in_reply_to_screen_name;
    var reply_id = tweet_obj.hasOwnProperty('in_reply_to_status_id_str') ? tweet_obj.in_reply_to_status_id_str : tweet_obj.in_reply_to_status_id;
    var reply_str = (reply_id != null) ?
      _('Reply to @') + ' <a class="who_href" href="#' + reply_name + '">' + reply_name + '</a>: ' : '';

    var timestamp = Date.parse(tweet_obj.created_at);
    var created_at = new Date();
    created_at.setTime(timestamp);
    var created_at_str = ui.Template.to_long_time_string(created_at);
    var created_at_short_str = ui.Template.to_short_time_string(created_at);

    // choose color scheme
    var scheme = 'normal';
    if (tweet_obj.entities && tweet_obj.entities.user_mentions) {
      for (var i = 0, l = tweet_obj.entities.user_mentions.length; i < l; i += 1) {
        if (tweet_obj.entities.user_mentions[i].screen_name == globals.myself.screen_name) {
          scheme = 'mention';
        }
      }
    }
    if (tweet_obj.user.screen_name == globals.myself.screen_name) {
      scheme = 'me';
    }
    if (retweet_name != '') {
      retweet_str = _('retweeted_by') + ' <a class="who_href" href="#' + retweet_name + '">' + retweet_name + '</a>, ';
    }
    var nametype = conf.get_current_profile().preferences.name;

    var m = ui.Template.retweeted_by_m;
    m.ID = pagename + '-' + id;
    m.TWEET_ID = id;
    m.RETWEET_ID = retweet_id;
    m.REPLY_ID = reply_id != null ? reply_id : '';
    m.SCREEN_NAME = tweet_obj.user.screen_name;
    m.REPLY_NAME = reply_id != null ? reply_name : '';
    m.USER_NAME = tweet_obj.user.name;
    switch (nametype) {
    case 'auto':
      m.FIRST_NAME = m.USER_NAME;
      m.ADDITIONAL_NAME = '@' + m.SCREEN_NAME;
      break;
    case 'reverse':
      m.FIRST_NAME = '@' + m.SCREEN_NAME;
      m.ADDITIONAL_NAME = m.USER_NAME;
      break;
    case 'username':
      m.FIRST_NAME = m.USER_NAME;
      break;
    case 'screenname':
      m.FIRST_NAME = m.SCREEN_NAME;
      break;
    }
    m.PROFILE_IMG = tweet_obj.user.profile_image_url;
    m.TEXT = ui.Template.form_text(tweet_obj);
    m.SOURCE = tweet_obj.source.replace('href', 'target="_blank" href');
    m.SCHEME = scheme;

    m.IN_REPLY = (reply_id != null && pagename.split('-').length < 2) ? 'block' : 'none';
    m.RETWEETABLE = (tweet_obj.user.protected || scheme == 'me') ? 'false' : 'true';

    m.REPLY_TEXT = reply_str;
    m.RETWEET_TEXT = retweet_str;
    m.RETWEET_MARK = retweet_name != '' ? 'retweet_mark' : '';
    m.SHORT_TIMESTAMP = created_at_short_str;
    m.TIMESTAMP = created_at_str;
    m.FAV_CLASS = tweet_obj.favorited ? 'faved' : '';
    m.RT_CLASS = tweet_obj.retweeted ? 'retweeted' : '';
    m.DELETABLE = scheme == 'me' ? 'true' : 'false';
    m.TWEET_FONT_SIZE = globals.tweet_font_size;
    m.TWEET_FONT = globals.tweet_font;
    m.TWEET_LINE_HEIGHT = globals.tweet_line_height;
    m.STATUS_INDICATOR = ui.Template.form_status_indicators(tweet_obj);
    m.TRANS_Delete = _('delete');
    m.TRANS_Delete_this_tweet = _('delete_this_tweet');
    m.TRANS_Loading = _('loading_dots');
    m.TRANS_Official_retweet_this_tweet = _('official_retweet_this_tweet');
    m.TRANS_Reply_All = _('reply_All');
    m.TRANS_Reply_this_tweet = _('reply_this_tweet');
    m.TRANS_RT_this_tweet = _('rt_this_tweet');
    m.TRANS_Send_Message = _('send_message');
    m.TRANS_Send_Message_to_them = _('send_message_to_them');
    m.TRANS_via = _('via');
    m.TRANS_View_more_conversation = _('view_more_conversation');
    m.TRANS_Retweeted_by = _('retweeted_by');
    m.TRANS_Show_retweeters = _('click_to_show');
    m.TRANS_Click_to_show_retweeters = _('click_to_show_retweeters');
    m.TWEET_BASE_URL = conf.current_name.split('@')[1] == 'twitter' ? 'https://twitter.com/' + tweet_obj.user.screen_name + '/status' : 'https://identi.ca/notice';

    return ui.Template.render(ui.Template.retweeted_by_t, m);
  },

  form_search: function form_search(tweet_obj, pagename) {
    if (tweet_obj.user != undefined) {
      // use phoenix_search ... well, in fact, the original parser is totally useless.
      return ui.Template.form_tweet(tweet_obj, pagename);
    }
    var id = tweet_obj.id_str;
    var source = tweet_obj.source.replace(/&gt;/g, '>').replace(/&lt;/g, '<').replace(/&quot;/g, '');
    var timestamp = Date.parse(tweet_obj.created_at);
    var created_at = new Date();
    created_at.setTime(timestamp);
    var created_at_str = ui.Template.to_long_time_string(created_at);
    var created_at_short_str = ui.Template.to_short_time_string(created_at);
    var text = ui.Template.form_text(tweet_obj);
    // choose color scheme
    var scheme = 'normal';
    if (text.indexOf(globals.myself.screen_name) != -1) {
      scheme = 'mention';
    }
    if (tweet_obj.from_user == globals.myself.screen_name) {
      scheme = 'me';
    }
    var link = '';
    if (tweet_obj.entities.urls.length > 0) {
      link = tweet_obj.entities.urls[0].expanded_url;
    }
    var nametype = conf.get_current_profile().preferences.name;

    var m = ui.Template.search_m;
    m.ID = pagename + '-' + id;
    m.TWEET_ID = id;
    m.SCREEN_NAME = tweet_obj.from_user;
    m.USER_NAME = tweet_obj.from_user_name;
    switch (nametype) {
    case 'auto':
      m.FIRST_NAME = m.USER_NAME;
      m.ADDITIONAL_NAME = '@' + m.SCREEN_NAME;
      break;
    case 'reverse':
      m.FIRST_NAME = '@' + m.SCREEN_NAME;
      m.ADDITIONAL_NAME = m.USER_NAME;
      break;
    case 'username':
      m.FIRST_NAME = m.USER_NAME;
      break;
    case 'screenname':
      m.FIRST_NAME = m.SCREEN_NAME;
      break;
    }
    m.PROFILE_IMG = tweet_obj.profile_image_url;
    m.TEXT = text;
    m.SOURCE = source.replace('href', 'target="_blank" href');
    m.SCHEME = scheme;
    m.SHORT_TIMESTAMP = created_at_short_str;
    m.TIMESTAMP = created_at_str;
    m.TWEET_FONT_SIZE = globals.tweet_font_size;
    m.TWEET_FONT = globals.tweet_font;
    m.TWEET_LINE_HEIGHT = globals.tweet_line_height;
    m.TRANS_via = _('via');
    m.TWEET_BASE_URL = conf.current_name.split('@')[1] == 'twitter' ? 'https://twitter.com/' + tweet_obj.from_user + '/status' : 'https://identi.ca/notice';
    m.LINK = link;
    return ui.Template.render(ui.Template.search_t, m);
  },

  form_people: function form_people(user_obj, pagename) {
    var nametype = conf.get_current_profile().preferences.name;

    var m = ui.Template.people_m;
    m.USER_ID = pagename + '-' + user_obj.id_str;
    m.SCREEN_NAME = user_obj.screen_name;
    m.USER_NAME = user_obj.name;
    switch (nametype) {
    case 'auto':
      m.FIRST_NAME = m.USER_NAME;
      m.ADDITIONAL_NAME = '@' + m.SCREEN_NAME;
      break;
    case 'reverse':
      m.FIRST_NAME = '@' + m.SCREEN_NAME;
      m.ADDITIONAL_NAME = m.USER_NAME;
      break;
    case 'username':
      m.FIRST_NAME = m.USER_NAME;
      break;
    case 'screenname':
      m.FIRST_NAME = m.SCREEN_NAME;
      break;
    }
    m.DESCRIPTION = user_obj.description;
    m.PROFILE_IMG = user_obj.profile_image_url;
    m.FOLLOWING = user_obj.following;
    m.TWEET_FONT_SIZE = globals.tweet_font_size;
    m.TWEET_FONT = globals.tweet_font;
    m.TWEET_LINE_HEIGHT = globals.tweet_line_height;

    return ui.Template.render(ui.Template.people_t, m);
  },

  form_list: function form_people(list_obj, pagename) {
    var m = ui.Template.list_m;
    m.LIST_ID = pagename + '-' + list_obj.id_str;
    m.SCREEN_NAME = list_obj.user.screen_name;
    m.SLUG = list_obj.slug;
    m.NAME = list_obj.name;
    m.MODE = list_obj.mode;
    m.DESCRIPTION = list_obj.description;
    m.PROFILE_IMG = list_obj.user.profile_image_url;
    m.FOLLOWING = list_obj.following;
    m.TWEET_FONT_SIZE = globals.tweet_font_size;
    m.TWEET_FONT = globals.tweet_font;
    m.TWEET_LINE_HEIGHT = globals.tweet_line_height;
    return ui.Template.render(ui.Template.list_t, m);
  },

  form_view: function form_view(name, title, cls) {
    var m = ui.Template.view_m;
    m.ID = name + '_tweetview';
    m.NAME = name;
    m.CLASS = cls;
    if (name == 'home') {
      m.CAN_CLOSE = 'none';
    } else {
      m.CAN_CLOSE = 'block';
    }
    if (ui.Slider.system_views.hasOwnProperty(name)) {
      m.ROLE = 'system_view';
    } else {
      m.ROLE = 'custom_view';
    }
    return ui.Template.render(ui.Template.view_t, m);
  },

  form_indicator: function form_indicator(target, title, icon) {
    var m = ui.Template.indicator_m;
    m.TARGET = target
    m.TITLE = title;
    m.ICON = icon;
    if (ui.Slider.system_views.hasOwnProperty(target)) {
      m.ROLE = 'system_view';
    } else {
      m.ROLE = 'custom_view';
    }
    return ui.Template.render(ui.Template.indicator_t, m);
  },

  form_kismet_rule: function form_kismet_rule(rule) {
    var m = ui.Template.kismet_rule_m;
    m.NAME = rule.name;
    m.TYPE = rule.type;
    m.METHOD = rule.method;
    m.PATTERN = rule.pattern;
    m.ACTIONS = rule.actions.join(':');
    m.ADDITION = rule.actions.indexOf(3) != -1 ? 'archive_name="' + rule.archive_name + '"' : 'archive_name=""';
    m.FIELD = rule.field;
    m.DISABLED = rule.disabled;
    return ui.Template.render(ui.Template.kismet_rule_t, m);
  },

  form_status_draft: function form_status_draft(draft) {
    var m = ui.Template.status_draft_m;
    m.MODE = draft.mode;
    m.TEXT = draft.text.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    if (m.MODE == ui.StatusBox.MODE_REPLY) {
      m.REPLY_TO_ID = draft.reply_to_id;
      m.REPLY_TEXT = draft.reply_text
    } else if (m.MODE == ui.StatusBox.MODE_DM) {
      m.RECIPIENT = draft.recipient;
    } else if (m.MODE == ui.StatusBox.MODE_IMG) {

    }
    return ui.Template.render(ui.Template.status_draft_t, m);
  },

  fill_people_vcard: function fill_people_vcard(user_obj, vcard_container) {
    var created_at = new Date(Date.parse(user_obj.created_at));
    var now = new Date();
    var differ = Math.floor((now - created_at) / (1000 * 60 * 60 * 24));

    var created_at_str = ui.Template.to_long_time_string(created_at);

    //get elements
    var vcard = vcard_container.getElementsByClassName('vcard')[0],
      profile_img = vcard.getElementsByClassName('vcard_profile_img')[0],
      screen_name = vcard.getElementsByClassName('vcard_screen_name')[0],
      name = vcard.getElementsByClassName('vcard_name')[0],
      bio = vcard.getElementsByClassName('vcard_bio')[0],
      stats = vcard.getElementsByClassName('vcard_stats')[0],
      location = vcard.getElementsByClassName('vcard_location')[0],
      url = vcard.getElementsByClassName('vcard_url')[0],
      controls = vcard_container.getElementsByClassName('people_view_toggle')[0],
      tweet_control = controls.getElementsByClassName('people_view_tweet_btn')[0].parentNode,
      fav_control = controls.getElementsByClassName('people_view_fav_btn')[0].parentNode,
      people_control = controls.getElementsByClassName('people_view_people_btn')[0].parentNode,
      list_control = controls.getElementsByClassName('people_view_list_btn')[0].parentNode,
      control_options = controls.getElementsByClassName('mochi_button_group_item');

    //fill in content
    for (var i = 0; i < control_options.length; i++) {
      control_options[i].setAttribute('name', 'people_' + user_obj.screen_name + '_vcard');
    }

    var thisstats = {
      'joined': created_at_str,
      'tpd': (Math.round(user_obj.statuses_count / differ * 100) / 100) + ' Tweets per day',
      'tweets': user_obj.statuses_count + ' Tweets',
      'favs': user_obj.favourites_count + ' Favs',
      'followers': user_obj.followers_count + ' ' + _('followers'),
      'friends': user_obj.friends_count + ' ' + _('friends'),
      'listed': user_obj.listed_count + ' ' + _('lists_following_them')
    }
    tweet_control.setAttribute('title', thisstats.tweets + '\n' + thisstats.tpd);
    fav_control.setAttribute('title', thisstats.favs);
    people_control.setAttribute('title', thisstats.followers + '\n' + thisstats.friends);
    list_control.setAttribute('title', stats.listed);

    stats.getElementsByClassName('vcard_stats_left')[0].innerHTML = thisstats.tpd + '<br>' + thisstats.tweets + '<br>' + thisstats.favs;
    stats.getElementsByClassName('vcard_stats_right')[0].innerHTML = thisstats.followers + '<br>' + thisstats.friends + '<br>' + thisstats.listed;


    if (!user_obj.profile_banner_url) {
      user_obj.profile_banner_url = 'https://abs.twimg.com/a/1396545424/img/t1/grey_header_web.jpg';
      vcard.setAttribute('style', 'background-image: url(' + user_obj.profile_banner_url + ');');
    } else {
      vcard.setAttribute('style', 'background-image: url(' + user_obj.profile_banner_url + '/mobile_retina/' + ');');
    }
    profile_img.setAttribute('href', user_obj.profile_image_url.replace('_normal', ''));
    profile_img.setAttribute('style', 'background-image: url(' + user_obj.profile_image_url.replace('_normal', '_bigger') + ');');
    screen_name.setAttribute('href', conf.get_current_profile().preferences.base_url + user_obj.screen_name);
    screen_name.textContent = '@' + user_obj.screen_name;
    name.textContent = user_obj.name;

    bio.textContent = user_obj.description;
    var biotext = bio.textContent;
    //replace t.co links with full url links
    for (var i = 0; i < user_obj.entities.description.urls.length; i++) {
      biotext = biotext.replace(user_obj.entities.description.urls[i].url, '\
      <a class="vcard_bio_url" target="_blank" href="' + user_obj.entities.description.urls[i].expanded_url + '">\
          ' + user_obj.entities.description.urls[i].display_url + '\
      </a>\
      ')
    }
    //users, lists and hashtags
    biotext = biotext.replace(ui.Template.reg_list, '$1<a class="list_href" href="#$2">@$2</a>');
    biotext = biotext.replace(ui.Template.reg_user, '$1<a class="who_href" href="#$2">@$2</a>');
    biotext = biotext.replace(ui.Template.reg_hash_tag, '$1<a class="hash_href" href="$2$3">$2$3</a>');
    bio.innerHTML = biotext;
    var lists = bio.getElementsByClassName('list_href');
    var users = bio.getElementsByClassName('who_href');
    var hashtags = bio.getElementsByClassName('hash_href');
    for (var i = 0; i < lists.length; i++) {
      lists[i].onclick = function (event) {
        var target = this.getAttribute('href').substring(1).split('/');
        open_list(target[0], target[1]);
        return false;
      }
    }
    for (var i = 0; i < users.length; i++) {
      users[i].onclick = function (event) {
        if (event.button === 0) {
          open_people(this.getAttribute('href').substring(1));
        } else if (event.button === 1) {
          open_people(this.getAttribute('href').substring(1), {}, true);
        }
        return false;
      };
    }
    for (var i = 0; i < hashtags.length; i++) {
      hashtags[i].onclick = function (event) {
        ui.Slider.addDefaultView('search', {}) || ui.Slider.add('search');
        ui.Slider.slide_to('search');
        ui.Main.views.search.__header.getElementsByClassName('search_entry')[0].value = this.getAttribute('href');
        ui.Main.views.search.__header.getElementsByClassName('search_tweet')[0].click();
        return false;
      };
    }

    if (user_obj.location) {
      location.textContent = user_obj.location + (user_obj.url ? ' ·' : '');
    }
    if (user_obj.url) {
      url.textContent = user_obj.entities.url.urls[0].display_url;
      url.setAttribute('href', user_obj.entities.url.urls[0].expanded_url);
    }
  },

  fill_list_vcard: function fill_list_vcard(view, list_obj) {
    var vcard_container = view.__header;
    var vcard = vcard_container.getElementsByClassName('vcard')[0];
    var profile_img = vcard.getElementsByClassName('vcard_profile_img')[0];
    var owner_name = vcard.getElementsByClassName('vcard_owner_name')[0];
    var list_name = vcard.getElementsByClassName('vcard_list_name')[0];
    var bio = vcard.getElementsByClassName('vcard_bio')[0];

    if (!list_obj.user.profile_banner_url) {
      list_obj.user.profile_banner_url = 'https://abs.twimg.com/a/1396545424/img/t1/grey_header_web.jpg';
      vcard.setAttribute('style', 'background-image: url(' + list_obj.user.profile_banner_url + ');');
    } else {
      vcard.setAttribute('style', 'background-image: url(' + list_obj.user.profile_banner_url + '/mobile_retina/' + ');');
    }
    profile_img.setAttribute('href', list_obj.user.profile_image_url.replace('_normal', ''));
    profile_img.setAttribute('style', 'background-image: url(' + list_obj.user.profile_image_url.replace('_normal', '_bigger') + ');');
    owner_name.setAttribute('href', '#' + list_obj.user.screen_name);
    owner_name.setAttribute('title', '@' + list_obj.user.screen_name);
    owner_name.textContent = 'by ' + list_obj.user.name;
    owner_name.onclick = function (event) {
      if (event.button === 0) {
        open_people(list_obj.user.screen_name);
      } else if (event.button === 1) {
        open_people(list_obj.user.screen_name, {}, true);
      }
      return false;
    };
    list_name.setAttribute('href', conf.get_current_profile().preferences.base_url + list_obj.user.screen_name + '/' + list_obj.slug);
    list_name.textContent = list_obj.full_name;
    if (list_obj.description) {
      bio.parentNode.style.display = 'block';
      bio.textContent = list_obj.description;
      //users, lists and hashtags
      var biotext = bio.textContent;
      biotext = biotext.replace(ui.Template.reg_list, '$1<a class="list_href" href="#$2">@$2</a>');
      biotext = biotext.replace(ui.Template.reg_user, '$1<a class="who_href" href="#$2">@$2</a>');
      biotext = biotext.replace(ui.Template.reg_hash_tag, '$1<a class="hash_href" href="$2$3">$2$3</a>');
      bio.innerHTML = biotext;
      var lists = bio.getElementsByClassName('list_href');
      var users = bio.getElementsByClassName('who_href');
      var hashtags = bio.getElementsByClassName('hash_href');
      for (var i = 0; i < lists.length; i++) {
        lists[i].onclick = function (event) {
          var target = this.getAttribute('href').substring(1).split('/');
          open_list(target[0], target[1]);
          return false;
        }
      }
      for (var i = 0; i < users.length; i++) {
        users[i].onclick = function (event) {
          if (event.button === 0) {
            open_people(this.getAttribute('href').substring(1));
          } else if (event.button === 1) {
            open_people(this.getAttribute('href').substring(1), {}, true);
          }
          return false;
        };
      }
      for (var i = 0; i < hashtags.length; i++) {
        hashtags[i].onclick = function (event) {
          ui.Slider.addDefaultView('search', {}) || ui.Slider.add('search');
          ui.Slider.slide_to('search');
          ui.Main.views.search.__header.getElementsByClassName('search_entry')[0].value = this.getAttribute('href');
          ui.Main.views.search.__header.getElementsByClassName('search_tweet')[0].click();
          return false;
        };
      }
    } else {
      bio.parentNode.style.display = 'none';
    }
  },

  convert_chars: function convert_chars(text) {
    text = text.replace(/"/g, '&#34;');
    text = text.replace(/'/g, '&#39;');
    text = text.replace(/\$/g, '&#36;');
    return text;
  },

  form_entities: function form_entities(obj) {
    var html = obj.text;
    var entities = [];
    var dm;

    if (obj.recipient) {
      dm = true;
    }

    var ignore = {
      media: [],
      urls: []
    };

    if (dm && obj.entities && obj.entities.media) {
      //filter out entities that exist twice
      //dms have an url as well as an media entity for an image
      obj.entities.media.forEach(function (media) {
        ignore.urls.push(media.expanded_url);
      });
    }

    if (obj.extended_entities) {
      for (var prop in obj.extended_entities) {
        if (obj.extended_entities.hasOwnProperty(prop)) {
          obj.extended_entities[prop].forEach(function (entity, i) {
            entity.entityType = prop;
            if (i === 0) {
              //first entity in array
              //make sure the normal media tag won't get shown
              ignore.media.push(entity.expanded_url);
              if (dm) {
                ignore.urls.push(entity.expanded_url);
              }
            } else {
              entity.extended = true;
              //don't handle the first entity in an array of extended
              //entities as an extended entity so the link gets shown once in the tweet
            }
            entities.push(entity);
          });
        }
      }
    }

    //collect all the normal entities
    if (obj.entities) {
      for (var prop in obj.entities) {
        if (obj.entities.hasOwnProperty(prop)) {
          obj.entities[prop].forEach(function (entity) {

            var ignored = false;

            if (ignore[prop] && ignore[prop].length > 0) {
              ignore[prop].forEach(function (ignored_url) {
                if (entity.expanded_url === ignored_url) {
                  ignored = true;
                }
              });
            }

            if (!ignored) {
              entity.entityType = prop;
              entities.push(entity);
            }

          });
        }
      }
    }

    //sort them after their firct indices
    entities.sort(function (a, b) {
      return a.indices[0] - b.indices[0];
    });

    var textBlocks = [];
    var previewEntities = [];
    var last = 0;
    var diff = 0;
    var ustrHtml = util.UnicodeString(html);
    //handling the string as a "unicode string", so twitter indices don't mess up
    //the js strings (which have no actual support for UTF-32, used for emojis etc.)
    entities.forEach(function (entity) {
      var text_between = ustrHtml.slice(last, diff + entity.indices[0]);
      textBlocks.push(twemoji.parse(ui.Template.convert_chars(text_between.toString())));

      last += text_between.length;

      switch (entity.entityType) {
      case 'hashtags':
        textBlocks.push('<a class="hash_href" href="#' +
          entity.text + '">#' +
          entity.text + '</a>');
        last += entity.text.length + 1;
        break;
      case 'symbols':
        textBlocks.push('<a class="hash_href" href="$' +
          entity.text + '">$' +
          entity.text + '</a>');
        last += entity.text.length + 1;
        break;
      case 'urls':
        textBlocks.push('<a href="' +
          entity.expanded_url + '" target="_blank">' +
          entity.display_url + '</a>');
        previewEntities.push(entity);
        var url = dm ? entity.url : entity.expanded_url;
        last += url.length;
        break;
      case 'user_mentions':
        textBlocks.push('<a class="who_href" href="#' +
          entity.screen_name + '" title="' +
          entity.name + '">@' +
          entity.screen_name + '</a>');
        last += entity.screen_name.length + 1;
        break;
      case 'media':
        if (!entity.extended) {
          textBlocks.push('<a href="' +
            entity.expanded_url + '" target="_blank">' +
            entity.display_url + '</a>');
          var url = dm ? entity.url : entity.expanded_url;
          last += url.length;
        }
        previewEntities.push(entity);
        break;
      default:
        console.error('Invalid entity type: ' + entity.entityType);
      }
      diff = last - entity.indices[1];
    });

    textBlocks.push(twemoji.parse(ui.Template.convert_chars(ustrHtml.slice(last, html.length).toString())));
    html = textBlocks.join('');

    var previewHtml = ui.Template.form_preview(previewEntities);
    if (conf.get_current_profile().preferences.filter_nsfw_media && obj.text.match(/nsfw/ig)) {
      previewHtml = ['<i>NSFW image hidden</i>'];
    }
    return {
      'html': html,
      'previewHtml': previewHtml
    };
  },
  // This function applies some basic replacements to tweet.text, and returns
  // the resulting string.
  // This is not the final text that will appear in the UI, form_tweet will also do
  // some modifications. from_tweet will search for the a-tags added in this
  // function, to do the modifications.
  form_text: function form_text(tweet) {
    //hermelin_log('form_text in', tweet.text);
    var withEntity = ui.Template.form_entities(tweet.retweet_status || tweet);
    var text = withEntity.html;
    //text = text.replace(ui.Template.reg_list, '$1@<a class="list_href" href="#$2">$2</a>');
    /*text = text.replace(ui.Template.reg_link_g, function replace_url(url) {
      if (url.length > 51) url_short = url.substring(0, 48) + '...';
      else url_short = url;
      return ' <a href="' + url + '" target="_blank">' + url_short + '</a>';
    });
    text = text.replace(/href="www/g, 'href="http://www');*/
    text = text.replace(/href="(http:\/\/hotot.in\/(\d+))"/g, 'full_text_id="$2" href="$1"');
    //text = text.replace(/[\r\n]\s+[\r\n]/g, '\n\n');
    text = text.replace(/\n/g, '<br/>');
    if (ui.Template.reg_is_rtl.test(text)) {
      text = '<div class="text_inner" align="right" dir="rtl">' + text + '</div>';
    } else {
      text = '<div class="text_inner">' + text + '</div>';
    }
    if (conf.get_current_profile().preferences.use_media_preview) {
      text += '<div class="preview">' + withEntity.previewHtml + '</div>';
    }
    //hermelin_log('form_text out', text);
    return text;
  },

  form_text_raw: function form_text_raw(raw_text) {
    var text = raw_text;
    text = text.replace(/</g, "&lt;");
    text = text.replace(/>/g, "&gt;");
    text = text.replace(ui.Template.reg_link_g, ' <a href="$1" target="_blank">$1</a>');
    text = text.replace(/href="www/g, 'href="http://www');
    //text = text.replace(ui.Template.reg_list, '$1@<a class="list_href" href="#$2">$2</a>');
    text = text.replace(ui.Template.reg_user, '$1@<a class="who_href" href="#$2">$2</a>');
    text = text.replace(ui.Template.reg_hash_tag, '$1$2<a class="hash_href" href="$2$3">$3</a>');
    text = text.replace(/href="(http:\/\/hotot.in\/(\d+))"/g, 'full_text_id="$2" href="$1"');
    text = text.replace(/[\r\n]\s+[\r\n]/g, '\n\n');
    text = text.replace(/\n/g, '<br/>');
    return text;
  },


  form_media: function form_media(href, src, direct_url, video) {
    if (direct_url != undefined) {
      return '<a video="' + !!video + '" direct_url="' + direct_url + '" href="' + href + '" class="previewImg" style="background-image: url(\'' + src + '\');"></a>';
    } else {
      return '<a video="' + !!video + '" href="' + href + '" target="_blank" class="previewImg" style="background-image: url(\'' + src + '\');"></a>';
    }
  },

  form_preview: function form_preview(entities) {
    var html_arr = [];
    var link_reg = ui.Template.preview_link_reg;
    for (var i = 0; i < entities.length; i++) {
      if (entities[i].entityType === 'urls') {
        for (var pvd_name in link_reg) {
          var match = link_reg[pvd_name].reg.exec(entities[i].expanded_url);
          if (match != null) {
            switch (pvd_name) {
            case 'img.ly':
            case 'twitgoo.com':
            case 'twitpic.com':
              html_arr.push(
                ui.Template.form_media(
                  match[0], link_reg[pvd_name].base + match[1],
                  link_reg[pvd_name].direct_base + match[1]));
              break;
            case 'instagr.am':
              html_arr.push(
                ui.Template.form_media(
                  match[0], match[0] + link_reg[pvd_name].tail,
                  match[0] + link_reg[pvd_name].direct_tail));
              break;
            case 'yfrog.com':
            case 'moby.to':
            case 'picplz.com':
              html_arr.push(
                ui.Template.form_media(
                  match[0], match[0] + link_reg[pvd_name].tail));
              break;
            case 'plixi.com':
              html_arr.push(
                ui.Template.form_media(
                  match[0], link_reg[pvd_name].base + match[0]));
              break;
            case 'raw':
              html_arr.push(
                ui.Template.form_media(
                  match[0], match[0], match[0]));
              break;
            case 'instagram.com':
              html_arr.push(
                ui.Template.form_media(
                  match[0],
                  match[0] + link_reg[pvd_name].tail,
                  match[0] + link_reg[pvd_name].direct_tail,
                  true)
              );
              break;
            case 'vine.co':
              html_arr.push(
                ui.Template.form_media(
                  match[0],
                  '',
                  match[0] + link_reg[pvd_name].direct_tail,
                  true)
              );
              break;
            case 'z0r.de':
              html_arr.push(
                ui.Template.form_media(
                  match[0],
                  '',
                  match[0],
                  true)
              );
              break;
            case 'youtube.com':
              var seconds = 0;
              var time = match[3];
              if (match[3]) {
                if (match[4]) {
                  seconds += parseInt(match[4]) * ((match[4].slice(-1) === 'm') ? 60 : 1);
                  if (match[5]) {
                    seconds += parseInt(match[5]) * ((match[5].slice(-1) === 'm') ? 60 : 1);
                  }
                } else {
                  seconds = parseInt(match[3]);
                }
              }
              html_arr.push(
                ui.Template.form_media(
                  match[0],
                  link_reg[pvd_name].base + match[2] + link_reg[pvd_name].tail,
                  link_reg[pvd_name].direct_base + match[2] + link_reg[pvd_name].direct_tail + seconds,
                  true)
              );
              break;
            }
          }
        }
      } else {
        // twitter official picture service
        html_arr.push(
          ui.Template.form_media(
            entities[i].expanded_url,
            entities[i].media_url_https + ':thumb',
            entities[i].media_url_https + ':large'));
      }
    }
    /*if (conf.get_current_profile().preferences.filter_nsfw_media && tweet.text.match(/nsfw/ig))
      html_arr = ['<i>NSFW image hidden</i>'];
      */
    if (html_arr.length != 0) {
      return '<p class="media_preview">' + html_arr.join('') + '</p>';
    }
    return '';
  },


  form_status_indicators: function form_status_indicators(tweet) {

  },

  render: function render(tpl, map) {
    var text = tpl
    for (var k in map) {
      text = text.replace(new RegExp('{%' + k + '%}', 'g'), map[k]);
    }
    return text;
  },

  to_long_time_string: function (datetime) {
    return moment(datetime).toLocaleString();
  },

  to_short_time_string: function (dataObj) {
    var is_human = conf.get_current_profile().preferences.show_relative_timestamp,
      now = moment(),
      mobj = moment(dataObj),
      time_str;

    if (is_human) {
      try {
        mobj.lang(i18n.current);
        mobj.lang();
      } catch (e) {
        mobj.lang(false);
      }

      if (now.diff(mobj, 'hours', true) > 6) {
        time_str = mobj.calendar();
      } else {
        time_str = mobj.fromNow();
      }
    } else {
      if (now.diff(mobj, 'days', true) > 1) {
        time_str = mobj.format('MM-DD-YYYY HH:mm:ss');
      } else {
        time_str = mobj.format('HH:mm:ss');
      }
    }

    return time_str;
  }

}