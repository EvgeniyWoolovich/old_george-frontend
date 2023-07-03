import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import "./map.css";

export const YandexMap = () => {
    return (
        <div className="map-container" id="myMap">
            <h2 className="map-title">
                Теперь ты знаешь где нас найти
            </h2>
            <YMaps>
                <Map
                    defaultState={{
                        center: [56.641792, 47.866877],
                        zoom: 17,
                    }}
                    width={1100}
                    height={500}
                >
                    <Placemark geometry={[56.641792, 47.866877]} />
                </Map>
            </YMaps>
        </div>
    )
}