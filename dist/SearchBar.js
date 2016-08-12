/**
 * searchbar - Display a Search Bar as a popup.
 * @version v1.0.2
 * @link https://github.com/ergopix-sarl/JS-Search-Bar
 */
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
    SearchBar.prototype.overlayClick = function (e) {
        // if the target is the overlay, then close
        if ($(e.target).is($SearchBarElement)) {
            SearchBar.prototype.hide();
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
    $SearchBarElement.on('click.ergopix.searchbar', SearchBar.prototype.overlayClick);
    $(document).on('click.ergopix.searchbar', toggler, SearchBar.prototype.toggle);
    $(document).on('keyup.ergopix.searchbar', SearchBar.prototype.escape);

}(jQuery);
