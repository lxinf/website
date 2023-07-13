/**
 * --------------------------------------------------------------------------
 * Bootstrap index.umd.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

import Alert from './src/alert.js'
import Button from './src/button.js'
import Carousel from './src/carousel.js'
import Collapse from './src/collapse.js'
import Dropdown from './src/dropdown.js'
import Modal from './src/modal.js'
import Offcanvas from './src/offcanvas.js'
import Popover from './src/popover.js'
import ScrollSpy from './src/scrollspy.js'
import Tab from './src/tab.js'
import Toast from './src/toast.js'
import Tooltip from './src/tooltip.js'

export default {
  Alert,
  Button,
  Carousel,
  Collapse,
  Dropdown,
  Modal,
  Offcanvas,
  Popover,
  ScrollSpy,
  Tab,
  Toast,
  Tooltip
}
.nav-link {
  display: block;
  padding: var(--#{$prefix}nav-link-padding-y) var(--#{$prefix}nav-link-padding-x);
  @include font-size(var(--#{$prefix}nav-link-font-size));
  font-weight: var(--#{$prefix}nav-link-font-weight);
  color: var(--#{$prefix}nav-link-color);
  text-decoration: if($link-decoration == none, null, none);
  background: none;
  border: 0;
  @include transition($nav-link-transition);