import React, {useState} from 'react'

import News_1 from './News_Inhalt/News_1';
import News_2 from './News_Inhalt/News_2';
import News_3 from './News_Inhalt/News_3';

import ArrowLeft from '@mui/icons-material/ArrowBackIosNew';
import ArrowRight from '@mui/icons-material/ArrowForwardIos';

var rotation_number = 0;


export default function News_slide(state:any) {
    
    const[loadNews1, setloadNews1] = useState(false);
    const[loadNews2, setloadNews2] = useState(false);
    const[loadNews3, setloadNews3] = useState(false);
    

    state = {
        categes: [
        { cat_id: '0', cat_name: "News1", cat_function: () => setloadNews1(!loadNews1)},
        { cat_id: '1', cat_name: "News2", cat_function: () => setloadNews2(!loadNews2)},
        { cat_id: '2', cat_name: "News3", cat_function: () => setloadNews3(!loadNews3)},
        ],
        change: false,
    };
    

    function NewsRotation(RotationDirection:string){
        if(RotationDirection === "Left"){
            //alert("Left")
            if(rotation_number > 0){
                rotation_number -= 1;
            }else{
                rotation_number = 2;
            }
        }
        if(RotationDirection === "Right"){
            //alert("Right")
            if(rotation_number < 2){
                rotation_number += 1;
            }else{
                rotation_number = 0;
            }
        }
        return rotation_number;
    }

    return (
        <>    
            <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 flex flex-row items-center">
                    <button onClick={() => NewsRotation("Left")} className="bg-[#f5f4df] w-max p-2 rounded-lg opacity-40">
                        <ArrowLeft/>
                    </button>
                </div>
                <div className="absolute right-4 top-0 bottom-0 flex flex-row items-center">
                    <button onClick={() => NewsRotation("Right")} className="bg-[#f5f4df] w-max p-2 rounded-lg opacity-40">
                        <ArrowRight/>
                    </button>
                </div>
                {state.categes.map((item:any) => (
                    <News_1 key={item.cat_id}/>
                ))}

            </div>
        </>
    )
}
