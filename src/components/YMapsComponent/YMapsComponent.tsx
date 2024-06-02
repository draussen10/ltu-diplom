import React, {FC} from 'react';
import {observer} from "mobx-react-lite";
import {Map, Placemark, YMaps} from "@pbe/react-yandex-maps";

interface YMapsComponentProps {
    className?: string;
    selected: string | undefined
}

const pointsSalix: number[][] = [
    [59.99585015836563,30.333922131997074],
    [59.99430237180858,30.34902833316895],
    [59.99496176134154,30.333332870844362]
]

const pointsPopulus = [
    [59.99164919188529,30.340391105005544]
]

const YMapsComponent: FC<YMapsComponentProps> = ({className}) => {
    return (
        <div className={className}>
            <YMaps
                query={{
                    apikey: '40d691ee-3b47-4184-943d-4cd50bbb27c9',
                    lang: 'ru_RU'
                }}
            >
                <Map
                    state={{
                        center: [59.993642804991666,30.342004643843823],
                        zoom: 16,
                        // behaviors: ['scroll'],
                    }}
                    width={'100%'}
                    height={'100%'}
                    options={{
                        restrictMapArea: true,
                        yandexMapDisablePoiInteractivity: true,
                    }}
                >
                    {
                        pointsSalix.map(point => {
                            return (
                                <Placemark
                                    geometry={point}
                                    options={{
                                        draggable: false,
                                        preset: "islands#blackIcon",
                                        hideIconOnBalloonOpen: false,
                                        openEmptyHint: true,

                                    }}
                                />
                            )
                        })
                    }
                </Map>
            </YMaps>
        </div>
    );
};

export default observer(YMapsComponent);