import Top100 from './Top100.js';
// import Filter from './Filter.js';

import mainStyles from './Main.module.css'

function Main(){
    return (
        <div className={mainStyles.mainPage}>
            <Top100 />
            <Filer />
        </div>
    );
}
export default Main;
