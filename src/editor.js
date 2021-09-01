import React, { useCallback, useEffect } from 'react'
import useCodeMirror from './use-codemirror'

const Editor = ({ onChange, initialDoc }) => {
    const handleChange = useCallback(
        state => onChange(state.doc.toString())
    ,[onChange])

    const [refContainer, editorView] = useCodeMirror({
        initialDoc: initialDoc,
        onChange: handleChange
    })

    useEffect(() => {
        if (editorView) {

        }
    }, [editorView])

    return (
        <div
            style={{height: '100%', flex: '0 0 50%'}}
            ref={refContainer}
        >
        </div>
    )
}

export default Editor