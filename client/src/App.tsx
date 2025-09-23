import React from 'react'
import Counter from './components/counter.tsx'
// import StudenManager from './components/studentManager.tsx'
import Random from './components/random.tsx'
import BackgroudChange from './components/BackgroudChange.tsx'
import View from './components/View.tsx'
import Menu from './components/Menu.tsx'
import LanguageApp from './components/Language.tsx'
import UserList from './components/User.tsx'

export default function App() {
  return (
    <div>
      <Counter></Counter>
      {/* <StudenManager></StudenManager> */}
      <br />
      <hr />
      <Random></Random>
      <BackgroudChange></BackgroudChange>
      <View></View>
      <Menu></Menu>
      <LanguageApp></LanguageApp>
      <UserList></UserList>
    </div>
  )
}
