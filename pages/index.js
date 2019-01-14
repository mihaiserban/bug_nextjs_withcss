/* Without CSS Modules, maybe with PostCSS */

import '../style.css';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

export default () => (
    <div className="wrapper">
        <Tabs>
            <TabList>
                <Tab>Title 1</Tab>
                <Tab>Title 2</Tab>
            </TabList>

            <TabPanel>
                <h2>Any content 1</h2>
                <div className="example">O Hai world!</div>
            </TabPanel>
            <TabPanel>
                <h2>Any content 2</h2>
            </TabPanel>
        </Tabs>
        <style jsx>
            {`
                .wrapper {
                    height: 100%;
                    background: red;
                }
            `}
        </style>
    </div>
);

/* With CSS Modules */
/*
import css from "../style.css"

export default () => <div className={css.example}>Hello World, I am being styled using CSS Modules!</div>
*/
