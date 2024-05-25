import React, {FC} from 'react';
import {observer} from "mobx-react-lite";
import {Map, Placemark, YMaps} from "@pbe/react-yandex-maps";

interface YMapsComponentProps {
    className?: string;
}

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
                    <Placemark
                        geometry={[55.684758, 37.738521]}
                        options={{
                            iconImageSize: [30, 30],
                            draggable: false,
                            preset: "islands#greenIcon",
                            hideIconOnBalloonOpen: false,
                            openEmptyHint: true
                        }}
                        properties={{
                            iconContent: "+",
                            hintContent: "-"
                        }}
                    />
                </Map>
            </YMaps>
        </div>
    );
};

export default observer(YMapsComponent);