import classNames from 'classnames'
import React from 'react'
import { Slider, MaybeElement } from '@blueprintjs/core'

import { msg } from 'common/i18n/i18n'

import { minGridRowHeight, maxGridRowHeight } from 'ui/UiConstants'
import Toolbar from 'ui/components/widget/Toolbar'

import './LibraryBottomBar.less'


interface Props {
    className?: any
    leftItem?: MaybeElement
    highlightedCount: number
    photosCount: number
    gridRowHeight: number
    clearHighlight: () => void
    setGridRowHeight: (gridRowHeight: number) => void
}

export default class LibraryBottomBar extends React.Component<Props> {
    render() {
        const props = this.props
        return (
            <Toolbar className={classNames(props.className, 'LibraryBottomBar')} isTopBar={false}>
                {props.leftItem}
                <div className="LibraryBottomBar-selection">
                    <span>{msg('LibraryBottomBar_selected', props.highlightedCount)}</span>
                    {props.highlightedCount > 0 &&
                        <button
                            className="LibraryBottomBar-deselectAll"
                            onClick={props.clearHighlight}
                        >
                            {msg('LibraryBottomBar_deselect')}
                        </button>
                    }
                </div>
                <div className="LibraryBottomBar-center">
                    {props.photosCount === 1 ? msg('LibraryBottomBar_photoCount_one') : msg('LibraryBottomBar_photoCount_more', props.photosCount)}
                </div>
                <div className="LibraryBottomBar-right">
                    <Slider
                        value={props.gridRowHeight}
                        min={minGridRowHeight}
                        max={maxGridRowHeight}
                        labelRenderer={false}
                        showTrackFill={false}
                        onChange={props.setGridRowHeight}
                    />
                </div>
            </Toolbar>
        )
    }
}
