import { Dialog, Transition } from '@headlessui/react'
import { FC, Fragment, memo, useCallback, useEffect, useState } from 'react';

export type CopyToClipboardProps = {
    title: string;
    textToCopy: string;
    pos: number;
};

const CopyToClipboard: FC<CopyToClipboardProps> = memo((props) => {
    const { title, textToCopy, pos } = props;

    const [copied, setCopied] = useState(false);

    const copyToClipboard = useCallback(() => {
        if (textToCopy == "") return;
        navigator.clipboard.writeText(textToCopy).then(
            () => {
                setCopied(true);

                // changing back to default state after 2 seconds.
                setTimeout(() => {
                    setCopied(false);
                }, 2000);
            },
            (err) => {
                console.log("failed to copy", err.message);
            })
    }, [textToCopy]);

    const closeModal = useCallback(
        async () => {
            setCopied(false);
        },
        [],
    );

    useEffect(() => {
        copyToClipboard();
    }, [copyToClipboard]);

    return (
        <Transition appear show={copied} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={closeModal}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-0" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="absolute w-full" style={{ top: Math.max(pos - 150, 100) }}>
                        <div className="flex items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                        {title}
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <p className="text-sm text-gray-500">
                                            {textToCopy}
                                        </p>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
});

CopyToClipboard.displayName = 'CopyToClipboard';
export default CopyToClipboard;
