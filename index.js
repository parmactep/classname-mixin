"use strict";

var classNames = require('classnames');

module.exports = {
	className: function () {
		return classNames(
			this.props.className,
			Array.prototype.slice.call(arguments)
		);
	}
};