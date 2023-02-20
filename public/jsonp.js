;(function () {
  const cache = {}
  const win = window
  const doc = document
  const expose = function (name, data) {
    const kmrObject = window.__kmr__ || {}
    kmrObject[name] = data
    win.__kmr__ = kmrObject
  }
  const wait = function (name) {
    function loop (r) {
      if (cache[name]) {
        r(cache[name])
      } else {
        if (!window.__kmr__) {
          setTimeout(() => {
            return loop(r)
          }, 45)
        } else {
          cache[name] = win.__kmr__[name]
          return r(cache[name])
        }
      }
    }
    return new Promise(loop)
  }
  const methods = {
    default_client_size (w, h) {
      methods.resize(w, h)
      wait('store').then((_store) => {
        _store.dispatch('ACTION_SET_CLIENT_RECT', { w, h })
      })
    },
    default_modal_size (w, h) {
      methods.resize(w, h)
      wait('store').then((_store) => {
        _store.dispatch('ACTION_SET_MODAL_RECT', { w, h })
      })
    },
    resize (w, h) {
      w = w || 0
      h = h || 0
      console.log('resize', w, h)
      doc.documentElement.style.width = w + 'px'
      doc.documentElement.style.height = h + 'px'
    },
    send_data (data) {
      Object.keys(data).forEach((key) => {
        const val = data[key]
        if (Object.prototype.toString.call(val) === '[object Object]') {
          win.sessionStorage[key] = JSON.stringify(val)
        } else {
          win.sessionStorage[key] = val
        }
      })
    },
    update_step (step) {
      wait('store').then((_store) => {
        _store.dispatch('ACTION_SET_RECORD_STEP', step)
      })
    },
    update_state (flag) {
      wait('store').then((_store) => {
        _store.dispatch('ACTION_SET_CLIENT_FREEZING', flag)
      })
    },
    modal_route (route_name) {
      wait('router').then((_router) => {
        _router.push({ path: route_name })
      })
    }
  }
  expose('methods', methods)
})()
