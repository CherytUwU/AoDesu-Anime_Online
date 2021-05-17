// Dependencies
import React from 'react'
import { Switch } from 'react-router-dom'
import AppRoute from './AppRoute'

// Pages
import Home from '../containers/public/Home'
import Anime from '../containers/Anime/Home'
import DashboardHome from '../containers/dashboard/Home'

// Layouts
import Emision from '../layouts/Emision'
import MainLayout from '../layouts/Main'
import AnimeLayout from '../layouts/Anime'

const Router = () =>
  <Switch>
    <AppRoute path='/en_emision' exact component={DashboardHome} layout={Emision}/>
    <AppRoute path='/' exact component={Home} layout={MainLayout}/>
    <AppRoute path="/anime" exact component={Anime} layout={AnimeLayout} />
  </Switch>

export default Router
