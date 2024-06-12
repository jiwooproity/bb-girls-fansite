import Image from 'next/image';
import style from './arrow-guide.module.css';

interface Props {
  text: string;
}

type ArrowGuideType = ({ text }: Props) => JSX.Element;

const ArrowGuide: ArrowGuideType = ({ text }: Props) => {
  return (
    <div className={style.arrowGuideWrapper}>
      <span className={style.arrowGuideText}>{text}</span>
      <Image
        className={style.arrowGuideSVG}
        src="/svgs/down-arrow.svg"
        width={24}
        height={24}
        alt="guide-arrow"
      />
    </div>
  );
};

export default ArrowGuide;
