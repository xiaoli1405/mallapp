<template>
  <div class="recommend">
    <div class="recommend-item">
      <a href="#">
        <img src="~assets/img/home/touxiang1.jpg" alt="">
        <span class="span-center">lina</span>
      </a>
      <a href="#">
        <img src="~assets/img/home/touxiang1.jpg" alt="">
        <span class="span-center">zhao</span>
      </a>
      <a href="#">
        <img src="~assets/img/home/touxiang1.jpg" alt="">
        <span class="span-center">wang</span>
      </a>
      <a href="#">
        <img src="~assets/img/home/touxiang1.jpg" alt="">
        <span class="span-center">mali</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {

}

</script>
<style scoped>
  .recommend {
    display: flex;
    margin-top: 10px;
    font-size: 14px;
    padding-bottom: 30px;
    border-bottom: 10px solid #eee;
  }

  .recommend-item {
    flex: 1;
    text-align: center;
  }

  .recommend img {
    width: 50px;
    height: 50px;
    margin-bottom: 10px;
  }

  .span-center {
    text-align: center;
  }

</style>