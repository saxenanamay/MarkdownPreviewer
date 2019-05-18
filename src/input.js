import React from 'react';

class InputField extends React.Component{
    constructor(props){
        super(props);
        this.state={
            markup:''
        }
        this.handleChange= this.handleChange.bind(this);
    };

    handleChange=(e)=>{
        const text= e.target.value;
        this.setState({
            markup: text
        });
        this.props.onMarkupChange(text);
    }
    render(){
        return(
            <textarea id="editor" className="field inputField" onChange={this.handleChange} value={this.props.content}/>
        );
    }
}

export default InputField;