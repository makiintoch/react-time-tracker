import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Auth from '../auth'
import Tasks from '../Tasks'
import Reports from '../Reports'
import './Content.css'

const Content = props => {
    return (
        <div className={'content'}>
            <Switch>
                <Route exact path={'/tasks'} component={Tasks} />
                <Route exact path={'/reports'} component={Reports} />
                <Auth />
            </Switch>

        </div>
    )
}

export default Content