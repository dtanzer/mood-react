import React, { useState } from 'react'

type ToolbarButtonProps = {
    text: string
}

export function ToolbarButton(props: ToolbarButtonProps) {
    const [count, setCount] = useState(0);
    return <button onClick={e => { setCount(count+1) }}>
        {props.text} - {count}
    </button>
}

export class ToolbarButtonClass extends React.Component<ToolbarButtonProps, { count: number }> {
    constructor(props: ToolbarButtonProps) {
        super(props)
        this.state = { count: 0 }
    }

    render() {
        return <button onClick={e => { this.setState({ count: this.state.count + 1 })}}>
            {this.props.text} - {this.state.count}
        </button>
    }
}

type ToolbarProps = {
    showLabels: boolean,
    children: React.ReactNode,
}

export function Toolbar(props: ToolbarProps) {
    let labels = props.showLabels?
        <div>Toolbar</div> :
        undefined
    
    return <>
        {labels}
        <div>{ props.children }</div>
    </>
}
