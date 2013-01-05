jQuery Key-Value Json Input Plugin
==================================

A light-weight jQuery plugin that makes input json data to a single form field more friendly.

Usage
-----
Include script after the jQuery library
```html
<script src="/path/to/jquery.kv-json-input.js"></script>
```

Enable key-value json input
```js
$('input[name="configData"]').kvJsonInput();
```

###Demo###
http://www.lovelucy.info/demo/jquery-kv-json-input/

Config
------

<table>
  <thead>
    <tr>
      <th>parameter</th>
      <th>default</th>
      <th>description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>addRowTriggerClass</code></td>
      <td><code>'add-row-trigger'</code></td>
      <td>CSS class for button to add key-value input row.</td>
    </tr>
    <tr>
      <td><code>delRowTriggerClass</code></td>
      <td><code>'del-row-trigger'</code></td>
      <td>CSS class for button to delete current row.</td>
    </tr>
    <tr>
      <td><code>tableClass</code></td>
      <td><code>'table table-striped table-bordered table-hover'</code></td>
      <td>CSS class for genarated table for display key-value.</td>
    </tr>
    <tr>
      <td><code>templateClass</code></td>
      <td><code>'template'</code></td>
      <td>CSS class for key-value input template.</td>
    </tr>
    <tr>
      <td><code>keyInputClass</code></td>
      <td><code>'config-key'</code></td>
      <td>CSS class for key input field.</td>
    </tr>
    <tr>
      <td><code>valueInputClass</code></td>
      <td><code>'config-value'</code></td>
      <td>CSS class for value input field.</td>
    </tr>
    <tr>
      <td><code>initData</code></td>
      <td><code>{}</code></td>
      <td>Initialized json data.</td>
    </tr>
  </tbody>
</table>

###Example###
```js
$('input[name="configData"]').kvJsonInput({
    tableClass: 'myTable',
    initData:   {&quot;initKey1&quot;:&quot;initValue1&quot;}
  });
```

Support
-------
###jQuery###
* Version 1.8.3

Other version should works too but not tested.

###Browser###
* Chrome (webkit)
* Firefox 3.5+
* IE 8+
* Opera 10.5+

Older browsers may need additional [json2.js](https://github.com/douglascrockford/JSON-js) to make it work.
