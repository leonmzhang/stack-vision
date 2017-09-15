var active_sidebar = $("#li01").get(0);
active_sidebar.setAttribute("class", "active");

$("#ulItem li").each(function(){
    $(this).bind("click",function(e){
        var target = e.target;
        var parent = target.parentElement;
        active_sidebar.removeAttribute("class");
        parent.setAttribute("class", "active");
        active_sidebar = parent;
    });
});