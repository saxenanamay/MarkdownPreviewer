import React from 'react';
import ReactDOM from 'react-dom';
import InputField from './input';
import marked from 'marked';
import './index.css';

marked.setOptions({
    breaks: true,
});
  
  // INSERTS target="_blank" INTO HREF TAGS (required for codepen links)
const renderer = new marked.Renderer();
renderer.link = function (href, title, text) {
    return `<a target="_blank" href="${href}">${text}` + '</a>';
}
  
const placeholder= `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`;
class App extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            markup: placeholder
        }
    }
    handleMarkupChange =(input) =>{
        this.setState({
            markup: input
        });
    };
    render(){
        return(
            <div className="outerWrapper">
                <div className="wrapper" id="editorWrapper">
                    <div className="top top-input">
                        <h1>Editor</h1>
                        <div className="fullToggle inputToggle"  onClick={inPreview}></div>
                    </div>
                    <InputField onMarkupChange={this.handleMarkupChange} content={this.state.markup}></InputField>              
                </div>
                <div className="wrapper" id="previewWrapper">
                    <div className="top top-preview">
                        <h1>Preview</h1>
                        <div className="fullToggle previewToggle" onClick={fsPreview}></div>
                    </div>
                    <div id='preview' className="field outputField "dangerouslySetInnerHTML={{__html: marked(this.state.markup, { renderer: renderer })}}/>
                </div>
            </div>
        );
    }
}
const fsPreview=()=>{
    const preview= document.getElementById('previewWrapper');
    const input= document.getElementById('editorWrapper');
    input.classList.toggle('noWidth');
    preview.classList.toggle('fullWidth');
};
const inPreview=()=>{
    const preview= document.getElementById('previewWrapper');
    const input= document.getElementById('editorWrapper');
    preview.classList.toggle('noWidth');
    input.classList.toggle('fullWidth');
};
ReactDOM.render(<App />, document.getElementById('root'));

