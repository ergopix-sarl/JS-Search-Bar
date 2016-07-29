# Search Bar

Display a Search Bar as a popup.

## Dependencies

 - jQuery
 - fontAwesome

## Usage

### Include assets

> CSS should be placed in <head>, JS should be placed at the end of your document, before </body>

```
<link href="path/to/css/SearchBar.min.css" rel="stylesheet">
<script src="path/to/js/SearchBar.min.js"></script>
```

There is no need to initiate the plugin. It will look for a toggle button, see below.

### HTML

Include the following HTML at the end of your document.

> Make sure that form's action and input name suits your needs

```
<div id="mySearchBar" class="searchbar">
    <form role="search" method="get" class="searchbar__form" action="#">
    	<input class="searchbar__field" type="text" value="" name="cs" />
    	<button class="searchbar__button" type="submit"><i class="fa fa-search" aria-hidden="true"></i></button>
        <button class="searchbar__button searchbar__button--last" type="button" data-toggle="SearchBar"><i class="fa fa-times" aria-hidden="true"></i></button>
	</form>
</div>
```

Add a toggle to show the form.

```
<a href="javascript:void(0)" data-target="#mySearchBar" data-toggle="SearchBar">Search now !</a>
```
