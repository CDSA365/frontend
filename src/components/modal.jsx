import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import LeadCaptureForm from "./lear-capture-form";

const Modal = ({ isOpen, setIsOpen }) => {
    return (
        <Transition
            show={isOpen}
            as={Fragment}
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
        >
            <Dialog
                open={isOpen}
                onClose={() => setIsOpen(false)}
                className="fixed z-10 inset-0 overflow-y-auto"
            >
                <div className="flex items-center justify-center min-h-screen">
                    <Dialog.Overlay className="fixed inset-0 bg-black opacity-50" />
                    <LeadCaptureForm setIsOpen={setIsOpen} />
                </div>
            </Dialog>
        </Transition>
    );
};

export default Modal;
