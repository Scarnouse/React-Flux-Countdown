import { EventEmitter } from 'events'

class CoundownStore extends EventEmitter {
  constructor(count=5, dispatcher) {
    super()
    this._count = count
    this.dispatch = dispatcher.register(this.dispatch.bind(this))
  }

  get count() {
    return this._count
  }

  dispatch(payload) {
    const { type, count } = payload.action
    switch(type) {
      case "TICK":
        this._count = this._count - 1
        this.emit("TICK", this._count)
        return true

      case "RESET":
        this._count = count
        this.emit("RESET", this._count)
        return true
    }
  }
}

export default CoundownStore