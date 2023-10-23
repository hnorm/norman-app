import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/outline';
import classNames from 'classnames';
import { FC, memo, useCallback, useReducer, useState } from 'react';

import { contact, heroData, SectionId } from '../../../data/data';
import { ActionType, ContactType, ContactValue } from '../../../data/dataDef';
import CopyToClipboard, { CopyToClipboardProps } from '../../CopyToClipboard';
import FacebookIcon from '../../Icon/FacebookIcon';
import GithubIcon from '../../Icon/GithubIcon';
import InstagramIcon from '../../Icon/InstagramIcon';
import LinkedInIcon from '../../Icon/LinkedInIcon';
import TwitterIcon from '../../Icon/TwitterIcon';
import Section from '../../Layout/Section';
import ContactForm from './ContactForm';

const ContactValueMap: Record<ContactType, ContactValue> = {
  [ContactType.Email]: { Icon: EnvelopeIcon, srLabel: 'Email' },
  [ContactType.Phone]: { Icon: PhoneIcon, srLabel: 'Phone' },
  [ContactType.Location]: { Icon: MapPinIcon, srLabel: 'Location' },
  [ContactType.Github]: { Icon: GithubIcon, srLabel: 'Github' },
  [ContactType.LinkedIn]: { Icon: LinkedInIcon, srLabel: 'LinkedIn' },
  [ContactType.Facebook]: { Icon: FacebookIcon, srLabel: 'Facebook' },
  [ContactType.Twitter]: { Icon: TwitterIcon, srLabel: 'Twitter' },
  [ContactType.Instagram]: { Icon: InstagramIcon, srLabel: 'Instagram' },
};

const Contact: FC = memo(() => {
  const { headerText, description, items } = contact;
  const { href, target, text, primary, Icon } = heroData.actions[0]

  const [title, setTitle] = useState("");
  const [textToCopy, serTextToCopy] = useState("");
  const [pos, setPos] = useState(0);
  const [key, forceUpdate] = useReducer(x => x + 1, 0);
  
  const onCopy = useCallback((props: CopyToClipboardProps) => {
    console.log(props);
    setTitle(props.title);
    serTextToCopy(props.textToCopy);
    setPos(props.pos);
    forceUpdate();
  }, []);
  
  return (
    <Section className="bg-neutral-800" sectionId={SectionId.Contact}>
      <CopyToClipboard title={title} textToCopy={textToCopy} pos={pos} key={key}/>
      <div className="flex flex-col gap-y-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-center">
          <EnvelopeIcon className="hidden h-16 w-16 text-white md:block" />
          <h2 className="text-2xl font-bold text-white">{headerText}</h2>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="order-2 col-span-1 md:order-1 ">
            <ContactForm />
          </div>
          <div className="order-1 col-span-1 flex flex-col gap-y-4 md:order-2">
            <p className="prose leading-6 text-neutral-300">{description}</p>
            <dl className="flex flex-col space-y-4 text-base text-neutral-500 sm:space-y-2">
              {items.map(({ type, text, action, ref }) => {
                const { Icon, srLabel } = ContactValueMap[type];
                return (
                  <div key={srLabel}>
                    <dt className="sr-only">{srLabel}</dt>
                    <dd className="flex items-center">
                      <a
                        className={classNames(
                          '-m-2 flex rounded-md p-2 text-neutral-300 hover:text-yellow focus:outline-none focus:ring-2 focus:ring-yellow',
                          { 'hover:text-white': href },
                        )}
                        href={action == ActionType.Link ? ref : undefined}
                        target={action == ActionType.Link ? "_blank" : ""}
                        id={ref}
                        onClick={action == ActionType.CopyToClipboard? e => onCopy({ title: `${type} copied`, textToCopy: ref ?? "", pos: e.clientY }) : () => { }}
                      >
                        <Icon aria-hidden="true" className="h-4 w-4 flex-shrink-0 text-neutral-100 sm:h-5 sm:w-5" />
                        <span className="ml-3 text-sm sm:text-base">{text}</span>
                      </a>
                    </dd>
                  </div>
                );
              })}
            </dl>

            <div className="flex items-center">
              <a
                className={classNames(
                  'flex flex-none gap-x-2 rounded-full border-2 bg-none px-4 py-2 text-sm font-medium text-white ring-offset-gray-700/80 hover:bg-gray-700/80 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:text-base',
                  primary ? 'border-yellow ring-yellow' : 'border-white ring-white',
                )}
                href={href}
                target={target}
                key={text}>
                {text}
                {Icon && <Icon className="h-5 w-5 text-white sm:h-6 sm:w-6" />}
              </a>
            </div>

          </div>
        </div>
      </div>
    </Section>
  );
});

Contact.displayName = 'About';
export default Contact;
