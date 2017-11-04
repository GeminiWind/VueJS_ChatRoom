import swal from 'sweetalert2'

export default {
  install: function (Vue) {
    swal.success = (title, text, confirmButtonText = 'OK') => {
      swal({
        title: title,
        text: text,
        type: 'success',
        confirmButtonText: confirmButtonText
      })
    }
    swal.error = (title, text, confirmButtonText = 'OK') => {
      swal({
        title: title,
        text: text,
        type: 'error',
        confirmButtonText: confirmButtonText
      })
    }
    window.swal = swal
    Object.defineProperty(Vue.prototype, '$swal', { value: swal })
  }
}
