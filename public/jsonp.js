;(function () {
  var cache = {}
  var win = window
  var doc = document
  var expose = function (name, value) {
    var kmrObject = window.__kmr__ || {}
    kmrObject[name] = value
    win.__kmr__ = kmrObject
  };
  var wait = function (name) {
    function loop (r) {
      if (cache[name]) {
        r(cache[name]);
      } else {
        if (!window.__kmr__) {
          setTimeout(() => {
            return loop(r);
          }, 45)
        } else {
          cache[name] = win.__kmr__[name];
          return r(cache[name]);
        }
      }
    }
    return new Promise(loop);
  };
  var methods = {
    resize (w, h) {
      w = w ? w : 0;
      h = h ? h : 0;
      doc.documentElement.style.width = w + 'px';
      doc.documentElement.style.height = h + 'px';
    },
    send_data (data) {
      Object.keys(data).forEach((key) => {
        var val = data[key];
        if (Object.prototype.toString.call(val) === '[object Object]') {
          win.sessionStorage[key] = JSON.stringify(val);
        } else {
          win.sessionStorage[key] = val;
        }
      })
    },
    update_step (step) {
      wait('store').then((_store) => {
        _store.dispatch('ACTION_SET_RECORD_STEP', step);
      })
    },
    modal_route (route_name) {
      wait('router').then((_router) => {
        _router.push({ path: route_name })
      })
    }
  };
  expose('methods', methods)
})();
