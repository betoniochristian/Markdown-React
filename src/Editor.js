import React from 'react';
import './App.css';
import { marked } from 'marked';


class Editor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            textAreaValues: `# Welcome to my React Markdown Previewer!
***
## This is a sub-heading...
*** 
### And here's some other cool stuff:

Here's some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\\\`\`\`' && lastLine == '\\\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------|--------------|----------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
    - With different indentation levels.
      - That look like this.

1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
  `,
            isEditorOpen: true,
            isPreviewOpen: true,
            isTextAreaExpanded: false,
           
        };
        this.handleChange = this.handleChange.bind(this);
        this.toggleView = this.toggleView.bind(this);
    }
    toggleView(view){
            this.setState((prevState) => {
                if(view === 'editor'){
                    return {
                        isEditorOpen: !prevState.isEditorOpen,
                        isTextAreaExpanded: false,
                    };
                }else if(view === 'preview'){
                    return {
                        isPreviewOpen: !prevState.isPreviewOpen,
                        isTextAreaExpanded: true
                    }
                }
            })
    }
    handleChange(event) {
        this.setState({
            textAreaValues: event.target.value
        });
    }

    render() { 
        const { textAreaValues, isEditorOpen, isPreviewOpen, isTextAreaExpanded} = this.state;

        const markdownToHtml = marked(textAreaValues, {breaks: true });


        return (
            <div className="main-container">
                <div className={`editor-view ${isEditorOpen ? 'open' : 'closed'}`}>
                    <div className="header-editor">
                        <h1 className="header-design">Editor</h1>
                        <a onClick={() => this.toggleView('preview')}>
                            <i className={`fa ${isPreviewOpen ? 'fa-angle-right' : 'fa-angle-left'}`}>
                            </i>
                        </a>
                    </div>
                    <textarea
                        className={`editor-view-textarea ${isTextAreaExpanded ? 'expanded' : 'collapsed'}`}
                        id="editor"
                        value={textAreaValues}
                        onChange={this.handleChange}>   
                    </textarea>
                </div>

                <div className={`preview-view ${isPreviewOpen ? 'open' : 'closed'}`}>
                    <div className="header-editor">
                        <h1 className="header-design">Preview</h1>
                        <a onClick={() => this.toggleView('editor')}>
                            <i className={`fa ${isEditorOpen ? 'fa-angle-right' : 'fa-angle-left'}`}>   
                            </i>
                        </a>
                    </div>
                    <div className="preview-marked">
                    <div
                        className="preview-html"
                        id="preview"
                        dangerouslySetInnerHTML={{ __html: markdownToHtml }}
                    />
                    </div>
                </div>
                <div className="sperator"></div>
            </div>
        );
    }
}

export default Editor;
