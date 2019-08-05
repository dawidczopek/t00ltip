(function(){

    var mainTooltip = null;
    function assignEvents(elements, type, event){

        for(var i = 0; i < elements.length; i++){
            elements[i].addEventListener(type, event, false);
        }

    }
    function createTooltip(txt, option){
        var toolDiv = document.createElement("div");
        toolDiv.className = "tooltips ";
        toolDiv.appendChild(document.createTextNode(txt));
        document.body.appendChild(toolDiv);
        toolDiv.style.top = option.y - toolDiv.offsetHeight + "px";
        toolDiv.style.left = (option.x + option.width/2) - (toolDiv.offsetWidth/2) + "px";


        mainTooltip = toolDiv;
    }
    function showTooltip(e){
        var option = {
            x: e.target.offsetLeft ,
            y: e.target.offsetTop,
            width: e.target.offsetWidth
        };
        var txt = e.target.getAttribute("title");
        createTooltip(txt, option);
    }
    function removeTooltip(e){
        mainTooltip.parentNode.removeChild(mainTooltip);
    }
    function initialize(elements){
        assignEvents(elements, "mouseenter", showTooltip);
        assignEvents(elements, "mouseleave", removeTooltip);
    }

    window.t00ltip = initialize;
})();