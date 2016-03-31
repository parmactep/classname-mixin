# classname-mixin

React mixin to build and apply classnames including props classNames

##Install

`npm install classname-mixin`

##Usage

```javascript
import React from 'react';
import classNameMixin from 'classname-mixin';

var SomeComponent = React.createClass({
	mixins: [classNameMixin],
	getInitialState: function() {
		return {
			someState: true
		}
	},
	render: function () {
		return <div className={this.className('component_class', {'stateful_class': this.state.someState})}>
			Some
		</div>
	}
});

ReactDOM.render(<ExampleXomponent className="outer_class"/>, document.getElementById('app'));
```
result:
```html
<div class="some_outer_class component_class stateful_class">Some</div>
```