// Dependencies
import React from 'react'
import { Switch } from 'react-router-dom'
import AppRoute from './AppRoute'

// Pages
import Home from '../containers/public/Home'
import Anime from '../containers/Anime/Home'
import DashboardHome from '../containers/dashboard/Home'

// Pages Vista Anime
import MahouShoujoSite from '../containers/CapsAnime/MahouShoujoSite'
import BunnyGirlSenpai from '../containers/CapsAnime/BunnyGirlSenpai'

import BunnyGirlSenpaiCap1 from '../containers/CapsAnime/BunnyGirlSenpai/Cap1'

// Layouts
import Emision from '../layouts/Emision'
import MainLayout from '../layouts/Main'
import AnimeLayout from '../layouts/Anime'

// Layouts Caps
import CapsAnimeLayout from '../layouts/CapsAnime'

// Layouts Ver
import VerAnimeLayout from '../layouts/VerAnime'

const Router = () =>
  <Switch>
    <AppRoute path='/en_emision' exact component={DashboardHome} layout={Emision}/>
    <AppRoute path='/' exact component={Home} layout={MainLayout}/>
    <AppRoute path="/anime" exact component={Anime} layout={AnimeLayout} />

    <AppRoute path="/anime/mahou_shoujo_site" exact component={MahouShoujoSite} layout={CapsAnimeLayout} />
    <AppRoute path="/anime/seishun_buta_yarou_wa_bunny_girl_senpai_no_yume_wo_minai" component={BunnyGirlSenpai} layout={CapsAnimeLayout} />

    <AppRoute path="/ver/seishun_buta_yarou_wa_bunny_girl_senpai_no_yume_wo_minai/cap1" exact component={BunnyGirlSenpaiCap1} layout={VerAnimeLayout}></AppRoute>
  </Switch>

export default Router
