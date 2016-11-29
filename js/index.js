var gridster;

    $(function () {

        var log = document.getElementById('log');


        gridster = $(".gridster ul").gridster({
            widget_base_dimensions: [100, 55],
            widget_margins: [5, 5],
            resize: {
                enabled: true,
                start: function (e, ui, $widget) {
                    log.innerHTML = 'START position: ' + ui.position.top + ' ' + ui.position.left + "<br >" + log.innerHTML;
                },

                resize: function (e, ui, $widget) {
                    log.innerHTML = 'RESIZE offset: ' + ui.pointer.diff_top + ' ' + ui.pointer.diff_left + "<br >" + log.innerHTML;
                },

                stop: function (e, ui, $widget) {
                    log.innerHTML = 'STOP position: ' + ui.position.top + ' ' + ui.position.left + "<br >" + log.innerHTML;
                }
            }
        }).data('gridster');


    });