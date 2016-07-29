/**
 * searchbar - Display a Search Bar as a popup.
 * @version v1.0.0
 * @link https://github.com/ergopix-sarl/JS-Search-Bar
 */
/**
 * SearchBar jQuery plugin
 */
+function ($) {
    'use strict';

    var toggler = '[data-toggle="SearchBar"]',
        $SearchBarElement = $($(toggler).data('target')),
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
        isOpen = true;
    }

    /**
     * Hide the search bar
     */
    SearchBar.prototype.hide = function (e) {
        $SearchBarElement.removeClass('searchbar--visible');
        isOpen = false;
    }

    /**
     * Register events
     */
    $(document).on('click.ergopix.searchbar', toggler, SearchBar.prototype.toggle);
    $(document).on('keyup.ergopix.searchbar', SearchBar.prototype.escape);

}(jQuery);