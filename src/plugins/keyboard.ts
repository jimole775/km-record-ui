/**
 * @ Author: Rongxis
 * @ Create Time: 2023-02-14 23:21:23
 * @ Modified by: Rongxis
 * @ Modified time: 2023-02-16 00:30:01
 * @ Description:
 */
type KeyboardEventListener = (kvt: KeyboardEvent) => any

interface MonitorAPI {
  event: KeyboardEvent
  handlerMap: { [key: string]: KeyboardEventListener }
  isMounted: boolean
  mount: Function
  unmount: Function
  forceMount: Function
  getEvent: () => KeyboardEvent
}

let stateCache: KeyboardEvent = {} as KeyboardEvent

const handlerSymbol: unknown = Symbol('keydownHandler')

const defaultEventListener: KeyboardEventListener = (event: KeyboardEvent) => {
  return (stateCache = event)
}

class Monitor implements MonitorAPI {
  event = {} as KeyboardEvent
  handlerMap = {} as { [key: string]: KeyboardEventListener }
  isMounted = false

  mount (callback = defaultEventListener) {
    if (this.isMounted === true) return false
    this.handlerMap[handlerSymbol as string] = callback
    window.addEventListener('keydown', this.handlerMap[handlerSymbol as string])
    this.isMounted = true
  }

  forceMount (callback = defaultEventListener) {
    this.unmount()
    this.mount(callback)
  }

  unmount () {
    window.removeEventListener('keydown', this.handlerMap[handlerSymbol as string])
    this.isMounted = false
  }

  getEvent () {
    return this.event
  }
}

const monitor = new Monitor()

// 让 event 属性编程响应式
Object.defineProperty(monitor, 'event', {
  set (v: any) {
    stateCache = v
  },
  get (): any {
    return stateCache
  }
})

export function loader (app: any) {
  app.use({
    install (app: any) {
      app.config.globalProperties.$kbMonitor = monitor
    }
  })
}

export default monitor
