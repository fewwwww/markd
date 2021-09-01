import React from 'react'
import { unified } from 'unified'
import remarkParse from 'remark-parse/lib'
import remarkGfm from 'remark-gfm'
import remarkReact from 'remark-react/lib'
import RemarkCode from './remark-code'
import { defaultSchema } from 'hast-util-sanitize'
import 'github-markdown-css'

const schema = {
    ...defaultSchema,
    attributes: {
      ...defaultSchema.attributes,
      code: [...(defaultSchema.attributes?.code || []), 'className']
    }
  }

const Preview = (props) => {
    const markdown = unified()
        .use(remarkParse)
        .use(remarkGfm)
        .use(remarkReact, {
            createElement: React.createElement,
            sanitize: schema,
            remarkReactComponents: {
              code: RemarkCode
            }
          })
        .processSync(props.doc).result

    return (
        <div
            style={{
                flex: '0 0 50%',
                padding: '12px',
                boxSizing: 'border-box',
                overflow: 'auto',
                backgroundColor: '#272D3B',
                color: '#C9CAC3',
                height: 'auto',
                minHeight: '100vh'
            }}
        >
            {markdown}
        </div>
    )
}

export default Preview