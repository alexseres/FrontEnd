import React from 'react';
import OneInfo from "./OneInfo";
import {HomeContextProvider} from "./HomeContext";


const BottomContainer = (props) => {

    return props.infos.datas.map((oneInfo) => (
        <HomeContextProvider>
        <div className="oneDiv">
            <OneInfo info={oneInfo}>{props.children}</OneInfo>
        </div>
        </HomeContextProvider>
    ))
}

export default BottomContainer;