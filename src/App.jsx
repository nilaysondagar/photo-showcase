import React, { useEffect, useState } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import * as R from 'ramda'
import classnames from 'classnames'
import Home from './pages/home/Home';
import About from './pages/about/About';
import Storybook from './pages/storybook/Storybook';
import { ROUTES } from './utils/routes';
import { useTheme } from './utils/hooks';
import NavBar from './common/NavBar';

import './styles/App.scss';
import './styles/themes/lightTheme.scss'
import './styles/themes/darkTheme.scss'

const App = () => {
  const [siteConfig, setSiteConfig] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [theme, setTheme] = useTheme()

  useEffect(() => {
    let isMounted = true

    const getConfigJson = async () => {
      const response = await fetch('config.json')
      const config = await response.json()
      if (isMounted) {
        setSiteConfig(config)
        setIsLoading(false)
      }
    }

    getConfigJson()

    return () => { isMounted = false }
  }, [])

  const toggleTheme = () => R.ifElse(
    R.equals('light-theme'),
    () => setTheme('dark-theme'),
    () => setTheme('light-theme'),
  )(theme)

  return (
    <div className={classnames('app', theme)}>
      <NavBar theme={theme} toggleTheme={toggleTheme} />
      <Switch>
        <Route
          exact
          path={ROUTES.HOME.path}
          render={() => <Home isLoading={isLoading} siteConfig={siteConfig} />}
        />
        {/* <Route path={ROUTES.ALBUM.path} component={AlbumView} /> */}
        {/* <Route exact path={ROUTES.ALBUMS.path} component={Albums} /> */}
        <Route
          exact
          path={ROUTES.ABOUT.path}
          render={() => <About isLoading={isLoading} siteConfig={siteConfig} />}
        />
        <Route exact path="/storybook" component={Storybook} />
        <Redirect to={ROUTES.HOME} />
      </Switch>
    </div>
  )
}

export default App
