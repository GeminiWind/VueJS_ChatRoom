export default class Event {
  constructor(data, chanel) {
    this.broadcastOn = chanel;
    this.data = data;
  }
  setData(data) {
    this.data = data;
  }
  getData() {
    return this.data;
  }
  setBroadcastOn(chanel) {
    this.broadcastOn = chanel;
  }
  getBroadcastOn() {
    return this.broadcastOn;
  }
  dispatch() {
    window.socket.emit(this.getBroadcastOn(), this.getData());
  }
}
