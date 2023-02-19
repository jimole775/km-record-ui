/**
 * @ Author: Rongxis
 * @ Create Time: 2023-02-14 22:47:04
 * @ Modified by: Rongxis
 * @ Modified time: 2023-02-19 03:55:02
 * @ Description:
 */

import webview from './webview'
import { rangeRateEqual } from '@/utils/assert'
export type DragbarInterface = {
  ispressed: boolean
  startx: number
  starty: number
  target: HTMLElement
  mount: (selector: string) => any
  unmount: () => any
  mousemove: EventListener
  mousedown: EventListener
  mouseup: EventListener
  dragstart: (x: number, y: number) => any
}

class Dragbar implements DragbarInterface {
  ispressed = false
  startx = 0
  starty = 0
  target = {} as HTMLElement
  mount (selector: string): any {
    this.target = document.querySelector(selector) as HTMLElement
    if (this.target === null) {
      return setTimeout(() => this.mount(selector), 150)
    }
    this.unmount() // 避免重复加载
    this.target.addEventListener('mousedown', this.mousedown.bind(this))
    this.target.addEventListener('mouseup', this.mouseup.bind(this))
    return null
  }

  mousedown (event: Event) {
    const evt: MouseEvent = event as MouseEvent
    const target: HTMLElement = evt.target as HTMLElement
    if (['use', 'svg', 'a', 'button', 'input'].includes(target.nodeName)) return false
    this.ispressed = true
    this.startx = evt.x
    this.starty = evt.y
    this.target.addEventListener('mousemove', this.mousemove.bind(this))
  }

  mousemove (event: Event) {
    const evt: MouseEvent = event as MouseEvent
    if (this.ispressed === false) return
    const { x, y } = evt
    if (rangeRateEqual(this.startx, x, 5) || rangeRateEqual(this.starty, y, 5)) {
      this.dragstart(x, y)
      this.unmount()
    }
  }

  mouseup () {
    this.ispressed = false
    this.target.removeEventListener('mousemove', this.mousemove.bind(this))
  }

  unmount () {
    this.target.removeEventListener('mousedown', this.mousedown.bind(this))
    this.target.removeEventListener('mouseup', this.mouseup.bind(this))
    this.target.removeEventListener('mousemove', this.mousemove.bind(this))
  }

  dragstart (x: number, y: number) {
    if (this.ispressed === true) {
      this.mouseup()
      webview.call('move_start', [x, y])
    }
  }
}

export function loader () {
  setTimeout(() => {
    const dragbar = new Dragbar()
    dragbar.mount('.navbar')
  })
}
