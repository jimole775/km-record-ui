/**
 * @ Author: Rongxis
 * @ Create Time: 2023-02-14 22:47:04
 * @ Modified by: Rongxis
 * @ Modified time: 2023-02-15 23:09:13
 * @ Description:
 */

import webview from './webview'
export type DragbarInterface = {
  target: HTMLElement
  mount: (selector: string) => any
  unmount: () => any
  dragstart: (event: MouseEvent) => any
  dragend: (event: MouseEvent) => any
}

class Dragbar implements DragbarInterface {
  target = {} as HTMLElement
  mount (selector: string): any {
    this.target = document.querySelector(selector) as HTMLElement
    if (this.target === null) {
      return setTimeout(() => this.mount(selector), 150)
    }
    this.target.draggable = true
    this.target.addEventListener('dragstart', this.dragstart.bind(this))
    this.target.addEventListener('dragend', this.dragend.bind(this))
    return null
  }
  unmount () {
    this.target.removeEventListener('dragstart', this.dragstart)
    this.target.removeEventListener('dragend', this.dragend)
  }

  dragstart (event: MouseEvent) {
    webview.call('move_start', [event.x, event.y])
  }

  dragend (event: MouseEvent) {
    console.log('end', event)
    // webview.call('move_start', [event.x, event.y])
  }
}

export function loader () {
  setTimeout(() => {
    const dragbar = new Dragbar()
    dragbar.mount('.navbar')
  })
}
