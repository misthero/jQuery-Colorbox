var COLORBOX_INTERNAL_LINK_PATTERN=/^#.*/;var COLORBOX_SUFFIX_PATTERN=/\.(?:jpe?g|gif|png|bmp)/i;var COLORBOX_MANUAL="colorbox-manual";var COLORBOX_OFF_CLASS=".colorbox-off";var COLORBOX_LINK_CLASS=".colorbox-link";var COLORBOX_OFF="colorbox-off";var COLORBOX_CLASS_MATCH="colorbox-[0-9]+";jQuery(document).ready(function(){colorboxSelector()});(function(a){colorboxSelector=function(){Colorbox.colorboxMaxWidth=Colorbox.colorboxImageMaxWidth;Colorbox.colorboxMaxHeight=Colorbox.colorboxImageMaxHeight;Colorbox.colorboxHeight=Colorbox.colorboxImageHeight;Colorbox.colorboxWidth=Colorbox.colorboxImageWidth;a("a:has(img):not(.colorbox-off)").each(function(b,c){if(a(c).attr("href").match(COLORBOX_SUFFIX_PATTERN)){colorboxImage(b,c)}else{colorboxLink(b,c)}});a(COLORBOX_LINK_CLASS).each(function(b,c){colorboxLink(b,c)})}})(jQuery);(function(a){colorboxImage=function(b,f){var c=a(f).find("img:first");var d=a(f).attr("class");Colorbox.colorboxGroupId=d.match(COLORBOX_CLASS_MATCH)||d.match(COLORBOX_MANUAL);if(!Colorbox.colorboxGroupId){var e=c.attr("class");if(!e.match(COLORBOX_OFF)){Colorbox.colorboxGroupId=e.match(COLORBOX_CLASS_MATCH)||e.match(COLORBOX_MANUAL)}if(Colorbox.colorboxGroupId){Colorbox.colorboxGroupId=Colorbox.colorboxGroupId.toString().split("-")[1];if(Colorbox.colorboxGroupId==="manual"){Colorbox.colorboxGroupId="nofollow"}Colorbox.colorboxTitle=c.attr("title");colorboxWrapper(f)}}}})(jQuery);(function(a){colorboxLink=function(b,c){Colorbox.colorboxTitle=a(c).attr("title");if(a(c).attr("href").match(COLORBOX_INTERNAL_LINK_PATTERN)){Colorbox.colorboxInline=true}else{Colorbox.colorboxIframe=true}Colorbox.colorboxGroupId="nofollow";Colorbox.colorboxMaxWidth=false;Colorbox.colorboxMaxHeight=false;Colorbox.colorboxHeight=Colorbox.colorboxLinkHeight;Colorbox.colorboxWidth=Colorbox.colorboxLinkWidth;if(a(c).attr("href").match(COLORBOX_SUFFIX_PATTERN)){Colorbox.colorboxIframe=false;Colorbox.colorboxMaxWidth=Colorbox.colorboxImageMaxWidth;Colorbox.colorboxMaxHeight=Colorbox.colorboxImageMaxHeight;Colorbox.colorboxHeight=Colorbox.colorboxImageHeight;Colorbox.colorboxWidth=Colorbox.colorboxImageWidth}colorboxWrapper(c)}})(jQuery);(function(a){colorboxWrapper=function(b){a.each(Colorbox,function(c,d){if(d==="false"){Colorbox[c]=false}else{if(d==="true"){Colorbox[c]=true}}});a(b).colorbox({rel:Colorbox.colorboxGroupId,title:Colorbox.colorboxTitle,maxHeight:Colorbox.colorboxMaxHeight,maxWidth:Colorbox.colorboxMaxWidth,initialHeight:Colorbox.colorboxInitialHeight,initialWidth:Colorbox.colorboxInitialWidth,height:Colorbox.colorboxHeight,width:Colorbox.colorboxWidth,slideshow:Colorbox.colorboxSlideshow,slideshowAuto:Colorbox.colorboxSlideshowAuto,scalePhotos:Colorbox.colorboxScalePhotos,preloading:Colorbox.colorboxPreloading,overlayClose:Colorbox.colorboxOverlayClose,loop:Colorbox.colorboxLoop,escKey:Colorbox.colorboxEscKey,arrowKey:Colorbox.colorboxArrowKey,scrolling:Colorbox.colorboxScrolling,opacity:Colorbox.colorboxOpacity,transition:Colorbox.colorboxTransition,speed:parseInt(Colorbox.colorboxSpeed),slideshowSpeed:parseInt(Colorbox.colorboxSlideshowSpeed),close:Colorbox.colorboxClose,next:Colorbox.colorboxNext,previous:Colorbox.colorboxPrevious,slideshowStart:Colorbox.colorboxSlideshowStart,slideshowStop:Colorbox.colorboxSlideshowStop,current:Colorbox.colorboxCurrent,inline:Colorbox.colorboxInline,iframe:Colorbox.colorboxIframe})}})(jQuery);