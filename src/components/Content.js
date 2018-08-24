import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './Content.css';
import TimeTracker from './TimeTracker';
import Reports from './Reports';

const Content = props => {
    return (
        <div className={'content'}>
            <Switch>
                <Route exact path={'/'} component={TimeTracker}/>
                <Route path={'/reports'} component={Reports}/>
            </Switch>
        </div>
    );
}

export default Content;