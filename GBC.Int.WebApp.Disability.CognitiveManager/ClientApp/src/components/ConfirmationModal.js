import React, { Component,useState, useRef } from 'react';
import { useEffect } from 'react';

const ConfirmationModal = (props) => {
    const { header, footer, setCloseModal, Mode } = props
    const cssClass = (Mode === "remove" ? "danger" : "success")

    const handleEvent = (e) => {
        const modal = e.target.closest(`[id=modelContent]`);
        if (!modal) {
            props.setCloseModal();
        }
    }
    useEffect(() => {
        document.addEventListener('click', handleEvent);
        return () => {
            document.removeEventListener('click', handleEvent);
        }
    }, [])

    const operation = () => {
        props.Operation();
    }
    return (
        <div className="modal fade show modal-backdrop" id="modal" tabIndex="-1" role="dialog" aria-labelledby="modal"
            aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content" id="modelContent">
                    <div className="modal-header text-center">
                        <h4 className={"modal-title w-100 font-weight-bold ml-5 text-" + cssClass}>{header}</h4>
                        <button type="button" onClick={setCloseModal} className="close text-danger" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body mx-3 p-5">
                        {props.children}
                    </div>
                    <div className="modal-footer d-flex justify-content-center p-3">
                        <button type="button" className={"btn btn-" + cssClass + " col-sm-2"} id="btnYes" data-dismiss="modal" onClick={operation}>{footer.button1}</button>
                        <button type="button" className="btn btn-primary col-sm-2" id="btnNo" data-dismiss="modal" onClick={setCloseModal}>{footer.button2}</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ConfirmationModal;

