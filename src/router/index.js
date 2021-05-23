// Dependencies
import React from 'react'
import { 
  BrowserRouter as Router,
  Route,
  Switch
 } from 'react-router-dom'
import AppRoute from './AppRoute'

// Pages
import Home from '../containers/public/Home'
import Anime from '../containers/Anime/Home'
import DashboardHome from '../containers/dashboard/Home'
import NotFound from '../containers/NotFound'

// Pages Vista Anime
import MahouShoujoSite from '../containers/CapsAnime/MahouShoujoSite'
import BunnyGirlSenpai from '../containers/CapsAnime/BunnyGirlSenpai'

import BunnyGirlSenpaiCap1 from '../containers/CapsAnime/BunnyGirlSenpai/Cap1'
import BunnyGirlSenpaiCap2 from '../containers/CapsAnime/BunnyGirlSenpai/Cap2'
import BunnyGirlSenpaiCap3 from '../containers/CapsAnime/BunnyGirlSenpai/Cap3'
import BunnyGirlSenpaiCap4 from '../containers/CapsAnime/BunnyGirlSenpai/Cap4'
import BunnyGirlSenpaiCap5 from '../containers/CapsAnime/BunnyGirlSenpai/Cap5'
import BunnyGirlSenpaiCap6 from '../containers/CapsAnime/BunnyGirlSenpai/Cap6'
import BunnyGirlSenpaiCap7 from '../containers/CapsAnime/BunnyGirlSenpai/Cap7'
import BunnyGirlSenpaiCap8 from '../containers/CapsAnime/BunnyGirlSenpai/Cap8'
import BunnyGirlSenpaiCap9 from '../containers/CapsAnime/BunnyGirlSenpai/Cap9'
import BunnyGirlSenpaiCap10 from '../containers/CapsAnime/BunnyGirlSenpai/Cap10'
import BunnyGirlSenpaiCap11 from '../containers/CapsAnime/BunnyGirlSenpai/Cap11'
import BunnyGirlSenpaiCap12 from '../containers/CapsAnime/BunnyGirlSenpai/Cap12'
import BunnyGirlSenpaiCap13 from '../containers/CapsAnime/BunnyGirlSenpai/Cap13'


// Layouts
import Emision from '../layouts/Emision'
import MainLayout from '../layouts/Main'
import AnimeLayout from '../layouts/Anime'

// Layouts Caps
import CapsAnimeLayout from '../layouts/CapsAnime'

// Layouts Ver
import VerAnimeLayout from '../layouts/VerAnime'

const AoDesuApp = () =>
<Router>
  <Switch>
    <AppRoute path='/' exact component={Home} layout={MainLayout}/>
    <AppRoute path='/en_emision' exact component={DashboardHome} layout={Emision}/> 
    <AppRoute path="/anime" exact component={Anime} layout={AnimeLayout} />

    <AppRoute path="/anime/mahou_shoujo_site" exact component={MahouShoujoSite} layout={CapsAnimeLayout} />
    <AppRoute path="/anime/seishun_buta_yarou_wa_bunny_girl_senpai_no_yume_wo_minai" component={BunnyGirlSenpai} layout={CapsAnimeLayout} />

    <AppRoute path="/ver/seishun_buta_yarou_wa_bunny_girl_senpai_no_yume_wo_minai/cap1" exact component={BunnyGirlSenpaiCap1} layout={VerAnimeLayout}></AppRoute>
    <AppRoute path="/ver/seishun_buta_yarou_wa_bunny_girl_senpai_no_yume_wo_minai/cap2" exact component={BunnyGirlSenpaiCap2} layout={VerAnimeLayout}></AppRoute>
    <AppRoute path="/ver/seishun_buta_yarou_wa_bunny_girl_senpai_no_yume_wo_minai/cap3" exact component={BunnyGirlSenpaiCap3} layout={VerAnimeLayout}></AppRoute>
    <AppRoute path="/ver/seishun_buta_yarou_wa_bunny_girl_senpai_no_yume_wo_minai/cap4" exact component={BunnyGirlSenpaiCap4} layout={VerAnimeLayout}></AppRoute>
    <AppRoute path="/ver/seishun_buta_yarou_wa_bunny_girl_senpai_no_yume_wo_minai/cap5" exact component={BunnyGirlSenpaiCap5} layout={VerAnimeLayout}></AppRoute>
    <AppRoute path="/ver/seishun_buta_yarou_wa_bunny_girl_senpai_no_yume_wo_minai/cap6" exact component={BunnyGirlSenpaiCap6} layout={VerAnimeLayout}></AppRoute>
    <AppRoute path="/ver/seishun_buta_yarou_wa_bunny_girl_senpai_no_yume_wo_minai/cap7" exact component={BunnyGirlSenpaiCap7} layout={VerAnimeLayout}></AppRoute>
    <AppRoute path="/ver/seishun_buta_yarou_wa_bunny_girl_senpai_no_yume_wo_minai/cap8" exact component={BunnyGirlSenpaiCap8} layout={VerAnimeLayout}></AppRoute>
    <AppRoute path="/ver/seishun_buta_yarou_wa_bunny_girl_senpai_no_yume_wo_minai/cap9" exact component={BunnyGirlSenpaiCap9} layout={VerAnimeLayout}></AppRoute>
    <AppRoute path="/ver/seishun_buta_yarou_wa_bunny_girl_senpai_no_yume_wo_minai/cap10" exact component={BunnyGirlSenpaiCap10} layout={VerAnimeLayout}></AppRoute>
    <AppRoute path="/ver/seishun_buta_yarou_wa_bunny_girl_senpai_no_yume_wo_minai/cap11" exact component={BunnyGirlSenpaiCap11} layout={VerAnimeLayout}></AppRoute>
    <AppRoute path="/ver/seishun_buta_yarou_wa_bunny_girl_senpai_no_yume_wo_minai/cap12" exact component={BunnyGirlSenpaiCap12} layout={VerAnimeLayout}></AppRoute>
    <AppRoute path="/ver/seishun_buta_yarou_wa_bunny_girl_senpai_no_yume_wo_minai/cap13" exact component={BunnyGirlSenpaiCap13} layout={VerAnimeLayout}></AppRoute>

    <Route component={NotFound} layout={MainLayout} />
  </Switch>
  </Router>

export default AoDesuApp
