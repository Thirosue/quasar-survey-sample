/**
 * エラーハンドリング用クラス
 */
export default class ErrorHandler {
  static apiHandleErr (vm, error) {
    if (error.response === undefined || error.responseData === undefined) {
      vm.$router.push('/error/500')
    } else if ([401, 403, 500].includes(error.response.status)) {
      vm.$router.push(`/error/${error.response.status}`)
    } else {
      vm.$router.push('/error/500')
    }
  }
}
