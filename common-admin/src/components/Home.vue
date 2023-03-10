<template>
  <div class="hello">
    <h1>hello</h1>
    <el-button>hello</el-button>
    <el-button type="primary">hello</el-button>
    <el-button type="success">hello</el-button>
    <el-button type="info">hello</el-button>
    <el-button type="warning">hello</el-button>
    <el-button type="danger">hello</el-button>
    <el-tag>tag</el-tag>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang= "less">
.hello {
  background: yellow;
  .el-button {
    color: red;
  }
}
</style>
