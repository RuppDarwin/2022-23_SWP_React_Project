import React from 'react';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';

import News_1 from './News_Inhalt/News_1';
import News_2 from './News_Inhalt/News_2';
import News_3 from './News_Inhalt/News_3';

import ArrowLeft from '@mui/icons-material/ArrowBackIosNew';
import ArrowRight from '@mui/icons-material/ArrowForwardIos';

const elemPrefix = "test";
const getId = (index: number) => `${elemPrefix}${index}`;

const getItems = () =>
  Array(20)
    .fill(0)
    .map((_, ind) => ({ id: getId(ind) }));

export default function News_slide() {
    
    const [items] = React.useState(getItems);

    return (

        <>    
            <div> 
                <ScrollMenu
                    LeftArrow={
                        <div className="absolute left-4 top-0 bottom-0 flex flex-row items-center">
                            <button className="bg-[#f5f4df] w-max p-2 rounded-lg opacity-40">
                                <ArrowLeft/>
                            </button>
                        </div>
                    }
                    RightArrow={
                        <div className="absolute right-4 top-0 bottom-0 flex flex-row items-center">
                            <button className="bg-[#f5f4df] w-max p-2 rounded-lg opacity-40">
                                <ArrowRight/>
                            </button>
                        </div>
                    }
                >
                {items.map(({ id }) => (
                    <Card
                    title={id}
                    itemId={id} // NOTE: itemId is required for track items
                    key={id}
                    />
            ))}
          </ScrollMenu>
            </div>
        </>
    )
}
