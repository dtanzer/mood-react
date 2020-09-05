import React from 'react'

export function JsComponent(props) {
	const icon = React.createElement('img', { src: props.icon })
	const iconDiv = React.createElement('div', null, icon)
	const textDiv = React.createElement('div', null, props.text)
	console.log(React.createElement('div', null, iconDiv, textDiv))
	return React.createElement('div', null, iconDiv, textDiv)
}

export function JsxComponent(props) {
	return <div>
		<div><img src={props.icon} /></div>
		<div>{props.text}</div>
	</div>
}
