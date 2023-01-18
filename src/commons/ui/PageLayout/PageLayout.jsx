import React, { useContext } from 'react'

import { DeviceTypeContext } from '~/app-context'

import './PageLayout.css'

function PageLayoutWeb({ left, center, right, content, showNav }) {
    return (
        <div className="page-layout">
            <div className="page-layout-header">
                <div className="page-layout-header-left">{left}</div>
                <div className="page-layout-header-center">{center}</div>
                <div className="page-layout-header-right">{right}</div>
            </div>
            <div className="page-layout-content">{content}</div>
        </div>
    )
}

function PageLayoutMobile({ left, center, right, content, showNav }) {
    return (
        <div className="page-layout-mobile">
            <div className={`${showNav ? `page-layout-mobile-content` : `page-layout-mobile-content__without-nav`}`}>
                {content}
            </div>
            {showNav && <div className="page-layout-mobile-menu">{right}</div>}
        </div>
    )
}

function PageLayout(props) {
    const isMobile = useContext(DeviceTypeContext)

    return isMobile ? <PageLayoutMobile {...props} /> : <PageLayoutWeb {...props} />
}

export default PageLayout
