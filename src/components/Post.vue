<template>
  <h2>{{ post.title }}</h2>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { PostInterface } from '../interfaces/post.interface';

@Component
export default class Post extends Vue {
  @Prop() private post!: PostInterface;

  mounted() {
    console.log(this.post);
  }
}
</script>

<style scoped lang="scss"></style>
