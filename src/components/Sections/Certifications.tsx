import classNames from 'classnames';
import { FC, memo, useEffect, useMemo, useState } from 'react';

import { isApple, isMobile } from '../../config';
import { SectionId, certification } from '../../data/data';
import { Certification } from '../../data/dataDef';
import Section from '../Layout/Section';

const Certifications: FC = memo(() => {
  // const [activeIndex, setActiveIndex] = useState<number>(0);
  // const [scrollValue, setScrollValue] = useState(0);
  const [parallaxEnabled, setParallaxEnabled] = useState(false);

  // const itemWidth = useRef(0);
  // const scrollContainer = useRef<HTMLDivElement>(null);

  // const { width } = useWindow();

  const { imageSrc, certifications } = certification;

  const resolveSrc = useMemo(() => {
    if (!imageSrc) return undefined;
    return typeof imageSrc === 'string' ? imageSrc : imageSrc.src;
  }, [imageSrc]);

  // Mobile iOS doesn't allow background-fixed elements
  useEffect(() => {
    setParallaxEnabled(!(isMobile && isApple));
  }, []);

  // useEffect(() => {
  //   itemWidth.current = scrollContainer.current ? scrollContainer.current.offsetWidth : 0;
  // }, [width]);

  // useEffect(() => {
  //   if (scrollContainer.current) {
  //     const newIndex = Math.round(scrollContainer.current.scrollLeft / itemWidth.current);
  //     setActiveIndex(newIndex);
  //   }
  // }, [itemWidth, scrollValue]);

  // const setCertification = useCallback(
  //   (index: number) => () => {
  //     if (scrollContainer !== null && scrollContainer.current !== null) {
  //       scrollContainer.current.scrollLeft = itemWidth.current * index;
  //     }
  //   },
  //   [],
  // );
  // const next = useCallback(() => {
  //   if (activeIndex + 1 === certifications.length) {
  //     setCertification(0)();
  //   } else {
  //     setCertification(activeIndex + 1)();
  //   }
  // }, [activeIndex, setCertification, certifications.length]);

  // const handleScroll = useCallback<UIEventHandler<HTMLDivElement>>(event => {
  //   setScrollValue(event.currentTarget.scrollLeft);
  // }, []);

  // useInterval(next, 10000);

  // If no certifications, don't render the section
  if (!certifications.length) {
    return null;
  }

  return (
    <Section noPadding sectionId={SectionId.Certifications}>

      <div
        className={classNames(
          'flex flex-col w-full items-center justify-center bg-cover bg-center gap-y-6 px-4 py-16 md:py-24 lg:px-8',
          parallaxEnabled && 'bg-fixed',
          { 'bg-neutral-700': !imageSrc },
        )}
        style={imageSrc ? { backgroundImage: `url(${resolveSrc}` } : undefined}>

        <div className="z-10 px-4 lg:px-0">

          <div className="relative h-max">
            <h2 className="self-center text-xl font-bold text-white uppercase">Certifications</h2>
            <span className="absolute inset-x-0 -bottom-1 border-b-2 border-orange-400"></span>
          </div>


          {/* <div className="flex flex-col items-left gap-y-6 rounded-xl bg-gray-800/60 p-6 shadow-lg"> */}
          <div className="grid grid-cols-1 lg:grid-cols-2 items-left gap-y-6 rounded-xl bg-gray-800/60 p-6 shadow-lg">

            {certifications.map((certification) => {
              return (
                <div>
                  <Certification key={`${certification.name}`} certification={certification} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
});

function resolveSrcBadge(image: string | import("next/image").StaticImageData | undefined) {
  if (!image) return undefined;
  return typeof image === 'string' ? image : image.src;
}

const Certification: FC<{ certification: Certification }> = memo(
  ({ certification: { image, url, provider, name } }) => (
    <div
      className={classNames(
        'flex shrink-0 snap-start snap-always items-start gap-y-4 p-2 transition-opacity duration-1000'
      )}>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <div className="flex flex-row items-center gap-x-4">
          <img className="h-32 w-32 rounded-full" src={`${resolveSrcBadge(image)}`} />
          <div className="flex flex-col align-items-centre">
            <p className="no-wrap-text prose prose-sm font-medium text-white sm:prose-base">{provider}</p>
            <p className="no-wrap-text text-xl font-bold text-white sm:text-sm md:text-base lg:text-lg">{name}</p>
          </div>
        </div>
      </a>
    </div>
  ),
);

export default Certifications;
