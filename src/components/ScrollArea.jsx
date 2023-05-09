"use client"

import React from 'react';
import * as ScrollArea from '@radix-ui/react-scroll-area';



const ScrollAreaWrapper = ({ children, height, orientation }) => {
    return <ScrollArea.Root className="ScrollAreaRoot">
        <ScrollArea.Viewport style={{
        }} className="ScrollAreaViewport">
            {children}
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar orientation={orientation || "vertical"} className="ScrollAreaScrollbar">
            <ScrollArea.Thumb className="ScrollAreaThumb" />
        </ScrollArea.Scrollbar>
        <ScrollArea.Scrollbar className="ScrollAreaScrollbar" orientation="horizontal">
            <ScrollArea.Thumb className="ScrollAreaThumb" />
        </ScrollArea.Scrollbar>
        <ScrollArea.Corner className="ScrollAreaCorner" />
    </ScrollArea.Root>
}

export default ScrollAreaWrapper