
    import React, { Component } from 'react'
    import { Route } from 'react-router-dom'

    // Template Imports
    import src_pages_Home from '../src/pages/Home'
import src_pages_Tutorials from '../src/pages/Tutorials'
import src_pages_About from '../src/pages/About'
import src_pages_Post from '../src/pages/Post'
import src_pages_Blog from '../src/pages/Blog'
import src_pages_404 from '../src/pages/404'

    // Template Map
    const templateMap = {
      t_0: src_pages_Home,
t_1: src_pages_Tutorials,
t_2: src_pages_About,
t_3: src_pages_Post,
t_4: src_pages_Blog,
t_5: src_pages_404
    }

    // Template Tree
    const templateTree = {c:{"404":{t:"t_5"},"/":{t:"t_0"},"tutorials":{t:"t_1"},"about":{t:"t_2"},"blog":{c:{"post":{c:{1:{t:"t_3"},2:{t:"t_3"},3:{t:"t_3"},4:{t:"t_3"},5:{t:"t_3"},6:{t:"t_3"},7:{t:"t_3"},8:{t:"t_3"},9:{t:"t_3"},"10":{t:"t_3"},"11":{t:"t_3"},"12":{t:"t_3"},"13":{t:"t_3"},"14":{t:"t_3"},"15":{t:"t_3"},"16":{t:"t_3"},"17":{t:"t_3"},"18":{t:"t_3"},"19":{t:"t_3"},"20":{t:"t_3"},"21":{t:"t_3"},"22":{t:"t_3"},"23":{t:"t_3"},"24":{t:"t_3"},"25":{t:"t_3"},"26":{t:"t_3"},"27":{t:"t_3"},"28":{t:"t_3"},"29":{t:"t_3"},"30":{t:"t_3"},"31":{t:"t_3"},"32":{t:"t_3"},"33":{t:"t_3"},"34":{t:"t_3"},"35":{t:"t_3"},"36":{t:"t_3"},"37":{t:"t_3"},"38":{t:"t_3"},"39":{t:"t_3"},"40":{t:"t_3"},"41":{t:"t_3"},"42":{t:"t_3"},"43":{t:"t_3"},"44":{t:"t_3"},"45":{t:"t_3"},"46":{t:"t_3"},"47":{t:"t_3"},"48":{t:"t_3"},"49":{t:"t_3"},"50":{t:"t_3"},"51":{t:"t_3"},"52":{t:"t_3"},"53":{t:"t_3"},"54":{t:"t_3"},"55":{t:"t_3"},"56":{t:"t_3"},"57":{t:"t_3"},"58":{t:"t_3"},"59":{t:"t_3"},"60":{t:"t_3"},"61":{t:"t_3"},"62":{t:"t_3"},"63":{t:"t_3"},"64":{t:"t_3"},"65":{t:"t_3"},"66":{t:"t_3"},"67":{t:"t_3"},"68":{t:"t_3"},"69":{t:"t_3"},"70":{t:"t_3"},"71":{t:"t_3"},"72":{t:"t_3"},"73":{t:"t_3"},"74":{t:"t_3"},"75":{t:"t_3"},"76":{t:"t_3"},"77":{t:"t_3"},"78":{t:"t_3"},"79":{t:"t_3"},"80":{t:"t_3"},"81":{t:"t_3"},"82":{t:"t_3"},"83":{t:"t_3"},"84":{t:"t_3"},"85":{t:"t_3"},"86":{t:"t_3"},"87":{t:"t_3"},"88":{t:"t_3"},"89":{t:"t_3"},"90":{t:"t_3"},"91":{t:"t_3"},"92":{t:"t_3"},"93":{t:"t_3"},"94":{t:"t_3"},"95":{t:"t_3"},"96":{t:"t_3"},"97":{t:"t_3"},"98":{t:"t_3"},"99":{t:"t_3"},"100":{t:"t_3"}}}},t:"t_4"}}}

    // Get template for given path
    const getComponentForPath = path => {
      const parts = path === '/' ? ['/'] : path.split('/').filter(d => d)
      let cursor = templateTree
      try {
        parts.forEach(part => {
          cursor = cursor.c[part]
        })
        return templateMap[cursor.t]
      } catch (e) {
        return false
      }
    }

    export default class Routes extends Component {
      render () {
        const { component: Comp, render, children } = this.props
        const renderProps = {
          templateMap,
          templateTree,
          getComponentForPath
        }
        if (Comp) {
          return (
            <Comp
              {...renderProps}
            />
          )
        }
        if (render || children) {
          return (render || children)(renderProps)
        }

        // This is the default auto-routing renderer
        return (
          <Route path='*' render={props => {
            let Comp = getComponentForPath(props.location.pathname)
            if (!Comp) {
              Comp = getComponentForPath('404')
            }
            return Comp && <Comp {...props} />
          }} />
        )
      }
    }
  