import React, { FC, HTMLAttributes } from 'react';
import { Wrapper, Inner, Svg } from './styles';

type IconT = {
   viewBox: string;
   id: string;
};

export type PropsT = HTMLAttributes<HTMLElement> & {
   icon: IconT;
};

const Icon: FC<PropsT> = (props) => {
   const { icon, ...restProps } = props;

   if (!icon || !icon.viewBox || !icon.id) {
      return null;
   }

   try {
      const [p1, p2, p3, p4] = icon.viewBox.split(' ');
      const ratio = (Number(p4) - Number(p2)) / (Number(p3) - Number(p1));

      return (
         <Wrapper {...restProps}>
            <Inner style={{ paddingBottom: `${100 * ratio}%` }}>
               <Svg viewBox={icon.viewBox}>
                  <use xlinkHref={`#${icon.id}`} />
               </Svg>
            </Inner>
         </Wrapper>
      );
   } catch {
      return null;
   }
};

export default Icon;
