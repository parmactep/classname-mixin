"use strict";

var classNames = require('classnames');

module.exports = {
	className: function (...classes) {
		return classNames(
			this.props.className,
			classes
		);
	}
};