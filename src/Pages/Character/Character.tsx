import './Character.scss'
import NameCard from './NameCard/NameCard';

const characterData = [
    {
        info: '繪師麻麻：貓柳吟葉',
        link: 'https://x.com/bacon_rotg',
        img: 'https://unavatar.io/twitter/bacon_rotg',
    },
    {
        info: 'Live2D：AKA',
        link: 'https://x.com/akafireinlive2d',
        img: 'https://unavatar.io/twitter/akafireinlive2d',
    },
    {
        info: '3D：娜米老公',
        link: 'https://x.com/NamiHusband_1',
        img: 'https://unavatar.io/twitter/NamiHusband_1',
    }
];

function Character() {
    return(
        <>
            <div className="character-container">
            {characterData.map((c, idx) => {
            return (
                <NameCard
                key={`c-${idx}`}
                info={c.info}
                img={c.img}
                link={c.link}
                />
            )
            })}
            </div>
        </>
    );
}

export { Character };
