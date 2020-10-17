import React, {useContext} from 'react';
import Modal from "./Modal";
import {HomeContext} from "./HomeContext";

const OneInfo = (props) => {

    const [toggleTheme, getTheme] = useContext(HomeContext);

    const handleClick = (event) => {
        toggleTheme();
    }

    return (
        <div>
            <h2 onClick={handleClick}>{props.info.name}</h2>
            <Modal info={props.info.data}></Modal>
        </div>
    )
}
 export default OneInfo;