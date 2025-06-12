<script setup>
import { version } from "../package.json";
</script>

# Installation

## Install via CDN
Place the script below in the \<head>
```html
<script src="https://cdn.jsdelivr.net/npm/hotelier-widgets@1/dist/hotelier-widgets.js"></script>">
```

## Usage Example
```html{5,8}
<!DOCTYPE html>
<html>
<head>
  <title>Example</title>
  <script src="https://cdn.jsdelivr.net/npm/hotelier-widgets@1/dist/hotelier-widgets.js" type="module"></script>
</head>
<body>
  <div hotelier-widget="horizontal-compact" data-url="https://yourdomain.com"></div>
</body>
</html>
```