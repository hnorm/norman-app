import { FC, memo, useCallback, useReducer, useState } from 'react';

import { socialLinks } from '../data/data';
import { ActionType } from '../data/dataDef';
import CopyToClipboard, { CopyToClipboardProps } from './CopyToClipboard';

const Socials: FC = memo(() => {
  const [title, setTitle] = useState("");
  const [textToCopy, serTextToCopy] = useState("");
  const [pos, setPos] = useState(0);
  const [key, forceUpdate] = useReducer(x => x + 1, 0);
  
  const onCopy = useCallback((props: CopyToClipboardProps) => {
    setTitle(props.title);
    serTextToCopy(props.textToCopy);
    setPos(props.pos);
    forceUpdate();
  }, []);

  return (
    <>
      <CopyToClipboard title={title} textToCopy={textToCopy} pos={pos} key={key}/>
      {socialLinks.map(({ label, Icon, action, ref }) => (
        <a
          aria-label={label}
          className="-m-1.5 rounded-md p-1.5 transition-all duration-300 hover:cursor-pointer hover:text-yellow focus:outline-none focus:ring-2 focus:ring-yellow  sm:-m-3 sm:p-3"
          href={action == ActionType.Link ? ref : undefined}
          id={ref}
          onClick={action == ActionType.CopyToClipboard ? (e) => onCopy({ title: `${label} copied`, textToCopy: ref, pos: e.clientY }) : () => { }}
          target={action == ActionType.Link ? "_blank" : ""}
          key={label}>
          <Icon className="h-5 w-5 align-baseline sm:h-6 sm:w-6" />
        </a>
      ))}
    </>
  );
});

Socials.displayName = 'Socials';
export default Socials;
