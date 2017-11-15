import swal from 'sweetalert2';

export default {
  install(Vue) {
    swal.success = (title, text, confirmButtonText = 'OK') => {
      swal({
        title,
        text,
        type: 'success',
        confirmButtonText,
      });
    };
    swal.error = (title, text, confirmButtonText = 'OK') => {
      swal({
        title,
        text,
        type: 'error',
        confirmButtonText,
      });
    };
    window.swal = swal;
    Object.defineProperty(Vue.prototype, '$swal', { value: swal });
  },
};
