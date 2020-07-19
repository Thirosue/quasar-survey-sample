<template>
  <div class="fixed-center text-center">
    <p>
      <img src="~assets/sad.svg" style="width:30vw;max-width:150px;" />
    </p>
    <p class="text-faded">
      サーバーエラーが発生しました。お手数ですが、しばらくして再度お試しください。<strong
        >(500)</strong
      >
    </p>
    <q-btn color="secondary" style="width:200px;" label="戻る" to="/" />
  </div>
</template>

<script>
export default {
  name: 'Error500'
}
</script>
