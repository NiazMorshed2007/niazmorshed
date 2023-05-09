import React from 'react';
import * as ScrollArea from '@radix-ui/react-scroll-area';



const ScrollAreaWrapper = ({ children, orientation }) => {
    return <ScrollArea.Root className="ScrollAreaRoot">
        <ScrollArea.Viewport style={{
            height: height
        }} className="ScrollAreaViewport">
            {children}
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar orientation={orientation || "horizontal"} className="ScrollAreaScrollbar">
            <ScrollArea.Thumb className="ScrollAreaThumb" />
        </ScrollArea.Scrollbar>
        <ScrollArea.Scrollbar className="ScrollAreaScrollbar" orientation="horizontal">
            <ScrollArea.Thumb className="ScrollAreaThumb" />
        </ScrollArea.Scrollbar>
        <ScrollArea.Corner className="ScrollAreaCorner" />
    </ScrollArea.Root>
}

export default ScrollAreaWrapper