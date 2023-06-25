import { ReactNode } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { SwiperOptions, Pagination, Navigation, Scrollbar, A11y,Autoplay  } from 'swiper';

import './MySlider.scss'
SwiperCore.use([Pagination, Navigation, Scrollbar, A11y, Autoplay ])
interface IMySlider<T> {
    settings?: SwiperOptions;
    items: T[];
    renderItem: (item: T, index: number) => ReactNode;
    className?: string;
    slideClass?: string;
    addArrows?: boolean;
    addDots?: boolean;
    addScrollBar?: boolean;
}

export default function MySlider<T>(props: IMySlider<T>) {
    const {
        settings,
        items,
        renderItem,
        className,
        slideClass,
    } = props
    let navigationPadding = 0;
    if (settings?.pagination) navigationPadding = 18
    if (settings?.scrollbar) navigationPadding = 7
    if (!items.length) return null
    return (
        <Swiper
            {...settings}
            className={className}
            style={{ paddingBottom: `${navigationPadding}px` }}
        >
            {
                items.length ? items.map((item, index) =>
                    <SwiperSlide
                        key={index}
                        className={slideClass}
                    >
                        {renderItem(item, index)}
                    </SwiperSlide>
                )
                : null
            }
        </Swiper>
    );
}