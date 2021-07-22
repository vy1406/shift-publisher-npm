import React from "react"
import'./GenericModal.css';

function GenericModal({ 
        isOpen, 
        headerText, 
        bodyText, 
        primaryButtonText,
        secondaryButtonText,
        primaryButtonClick,
        secondaryButtonClick
    }) {

    const handleOnPrimaryButtnClick = () => {
        primaryButtonClick()
        secondaryButtonClick()
    }   

    if ( isOpen === false ) return <></>;

    return (
        <div className="modal-background">
            <div className="modal">
                <div className="modal-header">
                    <div className="header-text">{headerText}</div>
                    <div className="x-modal" onClick={secondaryButtonClick}>&times;</div>
                </div>
                <div className="modal-content">
                    {bodyText}
                </div>
                <div className="modal-footer">
                    <div className="secondary-button buttonGeneral" onClick={handleOnPrimaryButtnClick}>
                        {primaryButtonText}
                    </div>
                    <div className="primary-button buttonGeneral" onClick={secondaryButtonClick}>
                        {secondaryButtonText}
                    </div>
                </div>
            </div>
        </div> 
        
    )
}

export default GenericModal