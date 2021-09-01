import React from 'react'
import { unified } from 'unified'
import remarkParse from 'remark-parse/lib'
import remarkGfm from 'remark-gfm'
import remarkReact from 'remark-react/lib'
import 'github-markdown-css'

const Preview = (props) => {
    const markdown = unified()
        .use(remarkParse)
        .use(remarkGfm)
        .use(remarkReact, React)
        .processSync(props.doc).result

    return (
        <div
            style={{
                flex: '0 0 50%',
                padding: '12px',
                boxSizing: 'border-box',
                overflow: 'auto',
                backgroundColor: '#FBFBF3',
                color: '#7FA4C6',
                height: '100vh'
            }}
        >
            {markdown}
        </div>
    )
}

export default Preview