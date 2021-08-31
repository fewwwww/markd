import { useEffect, useState, useRef } from 'react'
import { EditorState } from '@codemirror/state'
import { EditorView, keymap, highlightActiveLine } from '@codemirror/view'
import { defaultKeymap } from '@codemirror/commands'
import { history, historyKeymap } from '@codemirror/history'
import { indentOnInput } from '@codemirror/language'
import { bracketMatching } from '@codemirror/matchbrackets'
import { lineNumbers, highlightActiveLineGutter } from '@codemirror/gutter'
import { defaultHighlightStyle, highlightTree } from '@codemirror/highlight'
import { javascript } from '@codemirror/lang-javascript'

const useCodeMirror = (props) => {
    const refContainer = useRef(null)
    const [editorView, setEditorView] = useState()
    const { onChange } = props

    useEffect(() => {
        if (!refContainer.current) return
        const startState = EditorState.create({
            doc: props.initialDoc,
            extensions: [
                keymap.of([...defaultKeymap, ...historyKeymap]),
                lineNumbers(),
                highlightActiveLineGutter(),
                history(),
                indentOnInput(),
                bracketMatching(),
                defaultHighlightStyle.fallback,
                highlightActiveLine(),
                javascript(),
                EditorView.lineWrapping,
                EditorView.updateListener.of(update => {
                    if (update.changes) {
                        onChange && onChange(update.state)
                    }
                })
            ]
        })
    const view = new EditorView({
        state: startState,
        parent: refContainer.current
    })
    setEditorView(view)
    }, [refContainer])

    return [refContainer, editorView]
}

export default useCodeMirror