import React, {useState} from 'react'

import News_1 from './News_Inhalt/News_1';
import News_2 from './News_Inhalt/News_2';
import News_3 from './News_Inhalt/News_3';

import ArrowLeft from '@mui/icons-material/ArrowBackIosNew';
import ArrowRight from '@mui/icons-material/ArrowForwardIos';

const components = {
    'News1': News_1,
    'News2': News_2,
    'News3': News_3,
}

export default function News_slide() {
    const[loadNews1, setloadNews1] = useState(false);
    const[loadNews2, setloadNews2] = useState(false);
    const[loadNews3, setloadNews3] = useState(false);

    function NewsRight(){
        if(loadNews1 === true){
            setloadNews1(!loadNews1);
            setloadNews2(loadNews2);
        }
        else if(loadNews2 === true){
            setloadNews2(!loadNews2);
            setloadNews3(loadNews3);
        }
        else if(loadNews3 === true){
            setloadNews3(!loadNews3);
            setloadNews1(loadNews1);
        }
    }

    function NewsLeft(){
        if(loadNews1 === true ){
            setloadNews1(!loadNews1);
            setloadNews3(loadNews3);
        }
        else if(loadNews2 === true){
            setloadNews2(!loadNews2);
            setloadNews1(loadNews1);
        }
        else if(loadNews3 === true){
            setloadNews3(!loadNews3);
            setloadNews2(loadNews2);
        }
    }

    return (
        <>    
            <div className="relative">

                <div className="absolute left-4 top-0 bottom-0 flex flex-row items-center">
                    <button onClick={() => NewsLeft()} className="bg-[#f5f4df] w-max p-2 rounded-lg opacity-40">
                        <ArrowLeft/>
                    </button>
                </div>
                <div className="absolute right-4 top-0 bottom-0 flex flex-row items-center">
                    <button onClick={() => NewsRight()} className="bg-[#f5f4df] w-max p-2 rounded-lg opacity-40">
                        <ArrowRight/>
                    </button>
                </div>
                {!loadNews1 && <News_1/>}
                {loadNews2 && <News_2/>}
                {loadNews3 && <News_3/>}
            </div>
        </>
    )
}
