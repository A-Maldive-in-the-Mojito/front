import styles from './Storage.module.css' // ../은 상위폴더
import Card from './Card.js'
import { useEffect } from "react";

import { useSelector } from 'react-redux';

//contect
import { useContext } from 'react';
import { APIContext } from '../context/APIContext';


function Storage() {

    //context 모든 칵테일 API
    const API = useContext(APIContext);
    //db에서 가져와 persist로 저장되어 있는 유저의 좋아요 칵테일 리스트 가져오기
    const reduxState = useSelector(state => state);
    const storeCocktail = reduxState.store

    //api 정제
    const fav = API.filter((val) => (
        storeCocktail.includes(val.name)
    ))

    return (
        <div className={styles.wrapper}>
            <div className={styles.cardContainer}>
                {
                fav.map((cocktail) =>
                        (
                        <Card
                            key={cocktail._id.$oid}
                            id={cocktail._id.$oid}
                            img={cocktail.S3_img}
                            name={cocktail.name}
                        />
                    )
                )}
                
            </div>
        </div>                  
    )
};
export default Storage;