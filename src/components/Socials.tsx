import { Dialog, Transition } from '@headlessui/react'
import { FC, Fragment, memo, useCallback, useState } from 'react';

import { socialLinks } from '../data/data';

const Socials: FC = memo(() => {
  const [copied, setCopied] = useState(false);
  const [text, setText] = useState("");
  const [pos, setPos] = useState(0);

  const copyToClipboard = (text: string, clientY: number) => {
    navigator.clipboard.writeText(text).then(
      () => {
        setCopied(true);
        setText(text);
        setPos(clientY);

        // changing back to default state after 2 seconds.
        setTimeout(() => {
          setCopied(false);
        }, 2000);
      },
      (err) => {
        console.log("failed to copy", err.message);
      }
    );
  };

  const closeModal = useCallback(
    async () => {
      setCopied(false);
    },
    [],
  );

  return (
    <>
      {socialLinks.map(({ label, Icon, action, ref }) => (
        <a
          aria-label={label}
          className="-m-1.5 rounded-md p-1.5 transition-all duration-300 hover:cursor-pointer hover:text-yellow focus:outline-none focus:ring-2 focus:ring-yellow  sm:-m-3 sm:p-3"
          href={ref.startsWith("http") ? ref : undefined}
          id={ref}
          onClick={action == "copy" ? e => copyToClipboard(e.currentTarget.id, e.clientY) : () => { }}
          target={ref.startsWith("http") ? "_blank" : ""}
          key={label}>
          <Icon className="h-5 w-5 align-baseline sm:h-6 sm:w-6" />
        </a>
      ))}

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
                      Email copied to clipboard
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        {text}
                      </p>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
});

Socials.displayName = 'Socials';
export default Socials;
