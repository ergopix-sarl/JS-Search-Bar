/**
 * SearchBar jQuery plugin
 */
+function ($) {
    'use strict';

    var toggler = '[data-toggle="SearchBar"]',
        $SearchBarElement = $($(toggler).data('target')),
        $SearchBarInput = $SearchBarElement.find('input[type="text"]'),
        isOpen = false;

    /**
     * Constructor
     */
    var SearchBar = function (el) {

    }

    /**
     * Show or hide the search bar
     */
    SearchBar.prototype.toggle = function (e) {
        e.preventDefault();

        if (isOpen) {
            SearchBar.prototype.hide();
        } else {
            SearchBar.prototype.show();
        }
    }

    /**
     * Hide on escape key up
     */
    SearchBar.prototype.escape = function (e) {
        if (isOpen && e.which == 27) {
            e.preventDefault();
            SearchBar.prototype.hide();
        }
    }

    /**
     * Show the search bar
     */
    SearchBar.prototype.show = function (e) {
        $SearchBarElement.addClass('searchbar--visible');
        $SearchBarInput.focus();
        isOpen = true;
    }

    /**
     * Hide the search bar
     */
    SearchBar.prototype.hide = function (e) {
        $SearchBarElement.removeClass('searchbar--visible');
        $SearchBarInput.val(''); //Empty the value
        isOpen = false;
    }

    /**
     * Register events
     */
    $(document).on('click.ergopix.searchbar', toggler, SearchBar.prototype.toggle);
    $(document).on('keyup.ergopix.searchbar', SearchBar.prototype.escape);

}(jQuery);
