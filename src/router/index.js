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
import devNotes from '../containers/DevNotes'
import NotFound from '../containers/NotFound'

// Pages Vista Anime
import MahouShoujoSite from '../containers/CapsAnime/MahouShoujoSite'
import BunnyGirlSenpai from '../containers/CapsAnime/BunnyGirlSenpai'
import BokuNoHeroOne from '../containers/CapsAnime/BokuNoHeroSeasonOne'
import JibakuShounenHanakoKun from '../containers/CapsAnime/JibakuShounenHanako-kun'

// Bunny Girl Senpai
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

// Boku no Hero Season 1
import BokuNoHeroSeasonOneCap1 from '../containers/CapsAnime/BokuNoHeroSeasonOne/Cap1'
import BokuNoHeroSeasonOneCap2 from '../containers/CapsAnime/BokuNoHeroSeasonOne/Cap2'
import BokuNoHeroSeasonOneCap3 from '../containers/CapsAnime/BokuNoHeroSeasonOne/Cap3'
import BokuNoHeroSeasonOneCap4 from '../containers/CapsAnime/BokuNoHeroSeasonOne/Cap4'
import BokuNoHeroSeasonOneCap5 from '../containers/CapsAnime/BokuNoHeroSeasonOne/Cap5'
import BokuNoHeroSeasonOneCap6 from '../containers/CapsAnime/BokuNoHeroSeasonOne/Cap6'
import BokuNoHeroSeasonOneCap7 from '../containers/CapsAnime/BokuNoHeroSeasonOne/Cap7'
import BokuNoHeroSeasonOneCap8 from '../containers/CapsAnime/BokuNoHeroSeasonOne/Cap8'
import BokuNoHeroSeasonOneCap9 from '../containers/CapsAnime/BokuNoHeroSeasonOne/Cap9'
import BokuNoHeroSeasonOneCap10 from '../containers/CapsAnime/BokuNoHeroSeasonOne/Cap10'
import BokuNoHeroSeasonOneCap11 from '../containers/CapsAnime/BokuNoHeroSeasonOne/Cap11'
import BokuNoHeroSeasonOneCap12 from '../containers/CapsAnime/BokuNoHeroSeasonOne/Cap12'
import BokuNoHeroSeasonOneCap13 from '../containers/CapsAnime/BokuNoHeroSeasonOne/Cap13'

// Jibaku Shounen Hanako-kun
import JibakuShounenCap1 from '../containers/CapsAnime/JibakuShounenHanako-kun/Cap1'
import JibakuShounenCap2 from '../containers/CapsAnime/JibakuShounenHanako-kun/Cap2'
import JibakuShounenCap3 from '../containers/CapsAnime/JibakuShounenHanako-kun/Cap3'
import JibakuShounenCap4 from '../containers/CapsAnime/JibakuShounenHanako-kun/Cap4'
import JibakuShounenCap5 from '../containers/CapsAnime/JibakuShounenHanako-kun/Cap5'
import JibakuShounenCap6 from '../containers/CapsAnime/JibakuShounenHanako-kun/Cap6'
import JibakuShounenCap7 from '../containers/CapsAnime/JibakuShounenHanako-kun/Cap7'
import JibakuShounenCap8 from '../containers/CapsAnime/JibakuShounenHanako-kun/Cap8'
import JibakuShounenCap9 from '../containers/CapsAnime/JibakuShounenHanako-kun/Cap9'
import JibakuShounenCap10 from '../containers/CapsAnime/JibakuShounenHanako-kun/Cap10'
import JibakuShounenCap11 from '../containers/CapsAnime/JibakuShounenHanako-kun/Cap11'
import JibakuShounenCap12 from '../containers/CapsAnime/JibakuShounenHanako-kun/Cap12'


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
    <AppRoute path="/notas-version" exact component={devNotes} layout={Emision} />

    <AppRoute path="/anime/mahou_shoujo_site" exact component={MahouShoujoSite} layout={CapsAnimeLayout} />
    <AppRoute path="/anime/seishun_buta_yarou_wa_bunny_girl_senpai_no_yume_wo_minai" component={BunnyGirlSenpai} layout={CapsAnimeLayout} />
    <AppRoute path="/anime/boku_no_hero_academia_season_one" component={BokuNoHeroOne} layout={CapsAnimeLayout} />
    <AppRoute path="/anime/jibaku_shounen_hanako-kun" component={JibakuShounenHanakoKun} layout={CapsAnimeLayout} />

    <AppRoute path="/ver/seishun_buta_yarou_wa_bunny_girl_senpai_no_yume_wo_minai/cap1" exact component={BunnyGirlSenpaiCap1} layout={VerAnimeLayout} />
    <AppRoute path="/ver/seishun_buta_yarou_wa_bunny_girl_senpai_no_yume_wo_minai/cap2" exact component={BunnyGirlSenpaiCap2} layout={VerAnimeLayout} />
    <AppRoute path="/ver/seishun_buta_yarou_wa_bunny_girl_senpai_no_yume_wo_minai/cap3" exact component={BunnyGirlSenpaiCap3} layout={VerAnimeLayout} />
    <AppRoute path="/ver/seishun_buta_yarou_wa_bunny_girl_senpai_no_yume_wo_minai/cap4" exact component={BunnyGirlSenpaiCap4} layout={VerAnimeLayout} />
    <AppRoute path="/ver/seishun_buta_yarou_wa_bunny_girl_senpai_no_yume_wo_minai/cap5" exact component={BunnyGirlSenpaiCap5} layout={VerAnimeLayout} />
    <AppRoute path="/ver/seishun_buta_yarou_wa_bunny_girl_senpai_no_yume_wo_minai/cap6" exact component={BunnyGirlSenpaiCap6} layout={VerAnimeLayout} />
    <AppRoute path="/ver/seishun_buta_yarou_wa_bunny_girl_senpai_no_yume_wo_minai/cap7" exact component={BunnyGirlSenpaiCap7} layout={VerAnimeLayout} />
    <AppRoute path="/ver/seishun_buta_yarou_wa_bunny_girl_senpai_no_yume_wo_minai/cap8" exact component={BunnyGirlSenpaiCap8} layout={VerAnimeLayout} />
    <AppRoute path="/ver/seishun_buta_yarou_wa_bunny_girl_senpai_no_yume_wo_minai/cap9" exact component={BunnyGirlSenpaiCap9} layout={VerAnimeLayout} />
    <AppRoute path="/ver/seishun_buta_yarou_wa_bunny_girl_senpai_no_yume_wo_minai/cap10" exact component={BunnyGirlSenpaiCap10} layout={VerAnimeLayout} />
    <AppRoute path="/ver/seishun_buta_yarou_wa_bunny_girl_senpai_no_yume_wo_minai/cap11" exact component={BunnyGirlSenpaiCap11} layout={VerAnimeLayout} />
    <AppRoute path="/ver/seishun_buta_yarou_wa_bunny_girl_senpai_no_yume_wo_minai/cap12" exact component={BunnyGirlSenpaiCap12} layout={VerAnimeLayout} />
    <AppRoute path="/ver/seishun_buta_yarou_wa_bunny_girl_senpai_no_yume_wo_minai/cap13" exact component={BunnyGirlSenpaiCap13} layout={VerAnimeLayout} />

    <AppRoute path="/ver/boku_no_hero_academia_seson_one/cap1" exact component={BokuNoHeroSeasonOneCap1} layout={VerAnimeLayout} />
    <AppRoute path="/ver/boku_no_hero_academia_seson_one/cap2" exact component={BokuNoHeroSeasonOneCap2} layout={VerAnimeLayout} />
    <AppRoute path="/ver/boku_no_hero_academia_seson_one/cap3" exact component={BokuNoHeroSeasonOneCap3} layout={VerAnimeLayout} />
    <AppRoute path="/ver/boku_no_hero_academia_seson_one/cap4" exact component={BokuNoHeroSeasonOneCap4} layout={VerAnimeLayout} />
    <AppRoute path="/ver/boku_no_hero_academia_seson_one/cap5" exact component={BokuNoHeroSeasonOneCap5} layout={VerAnimeLayout} />
    <AppRoute path="/ver/boku_no_hero_academia_seson_one/cap6" exact component={BokuNoHeroSeasonOneCap6} layout={VerAnimeLayout} />
    <AppRoute path="/ver/boku_no_hero_academia_seson_one/cap7" exact component={BokuNoHeroSeasonOneCap7} layout={VerAnimeLayout} />
    <AppRoute path="/ver/boku_no_hero_academia_seson_one/cap8" exact component={BokuNoHeroSeasonOneCap8} layout={VerAnimeLayout} />
    <AppRoute path="/ver/boku_no_hero_academia_seson_one/cap9" exact component={BokuNoHeroSeasonOneCap9} layout={VerAnimeLayout} />
    <AppRoute path="/ver/boku_no_hero_academia_seson_one/cap10" exact component={BokuNoHeroSeasonOneCap10} layout={VerAnimeLayout} />
    <AppRoute path="/ver/boku_no_hero_academia_seson_one/cap11" exact component={BokuNoHeroSeasonOneCap11} layout={VerAnimeLayout} />
    <AppRoute path="/ver/boku_no_hero_academia_seson_one/cap12" exact component={BokuNoHeroSeasonOneCap12} layout={VerAnimeLayout} />
    <AppRoute path="/ver/boku_no_hero_academia_seson_one/cap13" exact component={BokuNoHeroSeasonOneCap13} layout={VerAnimeLayout} />

    <AppRoute path="/ver/jibaku_shounen_hanako-kun/cap1" exact component={JibakuShounenCap1} layout={VerAnimeLayout} />
    <AppRoute path="/ver/jibaku_shounen_hanako-kun/cap2" exact component={JibakuShounenCap2} layout={VerAnimeLayout} />
    <AppRoute path="/ver/jibaku_shounen_hanako-kun/cap3" exact component={JibakuShounenCap3} layout={VerAnimeLayout} />
    <AppRoute path="/ver/jibaku_shounen_hanako-kun/cap4" exact component={JibakuShounenCap4} layout={VerAnimeLayout} />
    <AppRoute path="/ver/jibaku_shounen_hanako-kun/cap5" exact component={JibakuShounenCap5} layout={VerAnimeLayout} />
    <AppRoute path="/ver/jibaku_shounen_hanako-kun/cap6" exact component={JibakuShounenCap6} layout={VerAnimeLayout} />
    <AppRoute path="/ver/jibaku_shounen_hanako-kun/cap7" exact component={JibakuShounenCap7} layout={VerAnimeLayout} />
    <AppRoute path="/ver/jibaku_shounen_hanako-kun/cap8" exact component={JibakuShounenCap8} layout={VerAnimeLayout} />
    <AppRoute path="/ver/jibaku_shounen_hanako-kun/cap9" exact component={JibakuShounenCap9} layout={VerAnimeLayout} />
    <AppRoute path="/ver/jibaku_shounen_hanako-kun/cap10" exact component={JibakuShounenCap10} layout={VerAnimeLayout} />
    <AppRoute path="/ver/jibaku_shounen_hanako-kun/cap11" exact component={JibakuShounenCap11} layout={VerAnimeLayout} />
    <AppRoute path="/ver/jibaku_shounen_hanako-kun/cap12" exact component={JibakuShounenCap12} layout={VerAnimeLayout} />


    <Route component={NotFound} layout={MainLayout} />
  </Switch>
  </Router>

export default AoDesuApp