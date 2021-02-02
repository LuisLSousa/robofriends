import React, { useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css'

import { useDispatch, useSelector } from 'react-redux';
import { setSearchField, requestRobots } from '../actions';


const App = () => {

    const dispatch = useDispatch()
    const { searchField } = useSelector((state) => state.searchRobots)
    const { robots, isPending, error } = useSelector((state) => state.requestRobots)

    const onSearchChange = (event) => {
        dispatch(setSearchField(event.target.value))
    }

    const onRequestRobots = () => {
        dispatch(requestRobots())
    }

    useEffect(() => {
        onRequestRobots()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchField.toLowerCase())
    })
    return isPending ?
        <h1> Loading... </h1> :
        (<div className='tc'>
            <h1 className='f1'>RoboFriends</h1>
            <SearchBox searchChange={onSearchChange} />
            <Scroll>
                <ErrorBoundary>
                    <CardList robots={filteredRobots} />
                </ErrorBoundary>
            </Scroll>
        </div>
        )
    // can return something specific in case there is an error with if (error)
}


export default App;
