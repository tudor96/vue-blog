<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Post v-bind:post="post" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Post from '@/components/Post.vue'; // @ is an alias to /src
import { PostInterface } from '../interfaces/post.interface';

@Component({
  components: {
    Post,
  },
})
export default class Home extends Vue {
  post: PostInterface = {
    id: 'post_1',
    title: 'Welcome to the first post',
    description: 'first description',
  };
}
</script>
