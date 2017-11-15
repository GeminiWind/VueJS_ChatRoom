export default class Hanlder {
  constructor(error) {
    this.error = error;
  }

  showNotifiyError() {
    window.swal({
      title: 'Whoops!',
      text: this.error,
      type: 'error',
      confirmButtonText: 'OK',
    });
  }
}
